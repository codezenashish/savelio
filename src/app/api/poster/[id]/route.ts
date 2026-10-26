import { NextRequest, NextResponse } from "next/server";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/libs/r2";

const cloudflareR2BucketName =
  process.env.CLOUDFLARE_R2_BUCKET_NAME ||
  process.env.R2_BUCKET_NAME ||
  "kura-uploads";
const cloudflareR2PublicDomainUrl =
  process.env.CLOUDFLARE_R2_PUBLIC_URL || process.env.R2_PUBLIC_URL || "";

// In-Memory Fast LRU Cache for development & serverless instances
// Holds ~200 images in ~6 MB RAM, eliminating repeated remote S3 roundtrips
interface CachedImageRecord {
  binaryBuffer: Buffer;
  mimeContentType: string;
  byteLengthString: string;
}

const posterMemoryLruCache = new Map<string, CachedImageRecord>();
const MAXIMUM_IN_MEMORY_CACHE_ITEMS = 250;

export async function GET(
  _incomingRequest: NextRequest,
  { params: routeContextParams }: { params: Promise<{ id: string }> }
) {
  const { id: resourceIdentifier } = await routeContextParams;

  if (!resourceIdentifier) {
    return new NextResponse("Missing resource identifier", { status: 400 });
  }

  const storageAssetObjectKey = `items/${resourceIdentifier}/poster.webp`;

  // 1. Direct Public CDN Redirect (if custom domain or r2.dev enabled in .env.local)
  if (cloudflareR2PublicDomainUrl) {
    const sanitizedPublicDomainUrl = cloudflareR2PublicDomainUrl.replace(/\/$/, "");
    return NextResponse.redirect(`${sanitizedPublicDomainUrl}/${storageAssetObjectKey}`, {
      status: 302,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  // 2. In-Memory Cache Hit (Instant 1ms response on page refresh)
  const cachedPosterImage = posterMemoryLruCache.get(storageAssetObjectKey);
  if (cachedPosterImage) {
    return new Response(cachedPosterImage.binaryBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": cachedPosterImage.mimeContentType,
        "Content-Length": cachedPosterImage.byteLengthString,
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Cache": "HIT",
      },
    });
  }

  // 3. Remote S3 Fetch & Cache
  try {
    const s3GetObjectCommand = new GetObjectCommand({
      Bucket: cloudflareR2BucketName,
      Key: storageAssetObjectKey,
    });

    const s3ObjectResponse = await s3.send(s3GetObjectCommand);

    if (!s3ObjectResponse.Body) {
      return new NextResponse("Image not found in storage", { status: 404 });
    }

    const imageByteArray = await s3ObjectResponse.Body.transformToByteArray();
    const imageBinaryBuffer = Buffer.from(imageByteArray);
    const mimeContentType = s3ObjectResponse.ContentType || "image/webp";
    const byteLengthString = imageBinaryBuffer.length.toString();

    // Cache item in memory with LRU eviction
    if (posterMemoryLruCache.size >= MAXIMUM_IN_MEMORY_CACHE_ITEMS) {
      const oldestEvictionKey = posterMemoryLruCache.keys().next().value;
      if (oldestEvictionKey) posterMemoryLruCache.delete(oldestEvictionKey);
    }
    posterMemoryLruCache.set(storageAssetObjectKey, {
      binaryBuffer: imageBinaryBuffer,
      mimeContentType,
      byteLengthString,
    });

    return new Response(imageBinaryBuffer as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": mimeContentType,
        "Content-Length": byteLengthString,
        "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable",
        "CDN-Cache-Control": "public, max-age=31536000, immutable",
        "Vercel-CDN-Cache-Control": "public, max-age=31536000, immutable",
        "X-Cache": "MISS",
      },
    });
  } catch (storageRetrievalError: unknown) {
    const errorDetails = storageRetrievalError as { name?: string; message?: string };
    if (errorDetails?.name === "NoSuchKey") {
      return new NextResponse("Image not found", { status: 404 });
    }
    console.error(`[API Poster] Error serving ${storageAssetObjectKey}:`, errorDetails?.message);
    return new NextResponse("Failed to load image from storage", { status: 500 });
  }
}
