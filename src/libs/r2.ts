import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

// Support both CLOUDFLARE_R2_* and R2_* environment variable formats
const cloudflareR2AccountId =
  process.env.CLOUDFLARE_R2_ACCOUNT_ID || process.env.R2_ACCOUNT_ID || "";
const cloudflareR2EndpointUrl =
  process.env.CLOUDFLARE_R2_ENDPOINT ||
  (cloudflareR2AccountId ? `https://${cloudflareR2AccountId}.r2.cloudflarestorage.com` : "");
const cloudflareR2AccessKeyId =
  process.env.CLOUDFLARE_R2_ACCESS_KEY_ID ||
  process.env.R2_ACCESS_KEY_ID ||
  "";
const cloudflareR2SecretAccessKey =
  process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY ||
  process.env.R2_SECRET_ACCESS_KEY ||
  "";
const cloudflareR2BucketName =
  process.env.CLOUDFLARE_R2_BUCKET_NAME ||
  process.env.R2_BUCKET_NAME ||
  "kura-uploads";
const cloudflareR2PublicDomainUrl =
  process.env.CLOUDFLARE_R2_PUBLIC_URL || process.env.R2_PUBLIC_URL || "";

if (!cloudflareR2EndpointUrl || !cloudflareR2AccessKeyId || !cloudflareR2SecretAccessKey) {
  console.warn(
    "[R2] Warning: Cloudflare R2 credentials or endpoint not fully defined in environment variables."
  );
}

export const s3 = new S3Client({
  region: "auto", // Required by AWS S3 SDK, auto-routed by Cloudflare R2
  endpoint: cloudflareR2EndpointUrl,
  credentials: {
    accessKeyId: cloudflareR2AccessKeyId,
    secretAccessKey: cloudflareR2SecretAccessKey,
  },
});

/**
 * Uploads a buffer directly to Cloudflare R2 bucket
 * @param fileBinaryBuffer - File data as in-memory Buffer
 * @param destinationStorageKey - Destination object path (e.g. items/{itemId}/poster.webp)
 * @param mimeContentType - MIME type (defaults to image/webp)
 * @returns Public URL of the uploaded asset
 */
export async function uploadToR2(
  fileBinaryBuffer: Buffer,
  destinationStorageKey: string,
  mimeContentType: string = "image/webp"
): Promise<string> {
  const s3PutObjectCommand = new PutObjectCommand({
    Bucket: cloudflareR2BucketName,
    Key: destinationStorageKey,
    Body: fileBinaryBuffer,
    ContentType: mimeContentType,
    CacheControl: "public, max-age=31536000, immutable",
  });

  await s3.send(s3PutObjectCommand);

  // Return public CDN URL if configured, otherwise fallback to endpoint path
  if (cloudflareR2PublicDomainUrl) {
    const sanitizedPublicDomainUrl = cloudflareR2PublicDomainUrl.replace(/\/$/, "");
    return `${sanitizedPublicDomainUrl}/${destinationStorageKey}`;
  }

  // Fallback direct URL format
  return `${cloudflareR2EndpointUrl.replace(/\/$/, "")}/${cloudflareR2BucketName}/${destinationStorageKey}`;
}

/**
 * Deletes an object from Cloudflare R2 bucket
 */
export async function deleteFromR2(targetStorageKey: string): Promise<void> {
  const s3DeleteObjectCommand = new DeleteObjectCommand({
    Bucket: cloudflareR2BucketName,
    Key: targetStorageKey,
  });

  await s3.send(s3DeleteObjectCommand);
}
