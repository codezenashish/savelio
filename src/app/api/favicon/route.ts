import { NextRequest, NextResponse } from "next/server";

interface CachedFaviconRecord {
  binaryBuffer: Buffer;
  mimeContentType: string;
}

const faviconMemoryLruCache = new Map<string, CachedFaviconRecord>();
const MAXIMUM_IN_MEMORY_CACHE_ITEMS = 500;

function generateMonogramSvg(domain: string): string {
  const initialCharacter = (domain.charAt(0) || "W").toUpperCase();
  // Generate deterministic hue based on domain name
  let hash = 0;
  for (let i = 0; i < domain.length; i++) {
    hash = domain.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash % 360);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" rx="14" fill="hsl(${hue}, 28%, 20%)" stroke="hsl(${hue}, 30%, 35%)" stroke-width="2"/>
  <text x="50%" y="54%" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="700" fill="hsl(${hue}, 80%, 92%)" text-anchor="middle" dominant-baseline="middle">
    ${initialCharacter}
  </text>
</svg>`;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawDomain = searchParams.get("domain") || "";

  const sanitizedDomainName = rawDomain
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]
    .split("?")[0];

  if (!sanitizedDomainName) {
    return new NextResponse("Domain parameter is required", { status: 400 });
  }

  // 1. Check in-memory LRU cache
  if (faviconMemoryLruCache.has(sanitizedDomainName)) {
    const cachedRecord = faviconMemoryLruCache.get(sanitizedDomainName)!;
    // Move to front of LRU cache
    faviconMemoryLruCache.delete(sanitizedDomainName);
    faviconMemoryLruCache.set(sanitizedDomainName, cachedRecord);

    return new NextResponse(new Uint8Array(cachedRecord.binaryBuffer), {
      status: 200,
      headers: {
        "Content-Type": cachedRecord.mimeContentType,
        "Cache-Control": "public, max-age=604800, immutable",
      },
    });
  }

  // 2. Multi-tier upstream favicon fetching
  // Tier 1: Google Favicon S2 Service
  const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${sanitizedDomainName}&sz=64`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const upstreamResponse = await fetch(googleFaviconUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)",
      },
    });

    clearTimeout(timeoutId);

    if (upstreamResponse.ok) {
      const mimeContentType =
        upstreamResponse.headers.get("content-type") || "image/png";
      const arrayBuffer = await upstreamResponse.arrayBuffer();
      const binaryBuffer = Buffer.from(arrayBuffer);

      // Only cache valid images
      if (binaryBuffer.byteLength > 100) {
        if (faviconMemoryLruCache.size >= MAXIMUM_IN_MEMORY_CACHE_ITEMS) {
          const oldestKey = faviconMemoryLruCache.keys().next().value;
          if (oldestKey) faviconMemoryLruCache.delete(oldestKey);
        }
        faviconMemoryLruCache.set(sanitizedDomainName, {
          binaryBuffer,
          mimeContentType,
        });

        return new NextResponse(new Uint8Array(binaryBuffer), {
          status: 200,
          headers: {
            "Content-Type": mimeContentType,
            "Cache-Control": "public, max-age=604800, immutable",
          },
        });
      }
    }
  } catch {
    // Upstream timeout or network error, proceed to fallback
  }

  // Tier 2: Icon.Horse Universal Favicon Service (Excellent coverage for modern domains)
  const iconHorseUrl = `https://icon.horse/icon/${sanitizedDomainName}`;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const upstreamResponse = await fetch(iconHorseUrl, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (upstreamResponse.ok) {
      const mimeContentType =
        upstreamResponse.headers.get("content-type") || "image/png";
      const arrayBuffer = await upstreamResponse.arrayBuffer();
      const binaryBuffer = Buffer.from(arrayBuffer);

      if (binaryBuffer.byteLength > 100) {
        if (faviconMemoryLruCache.size >= MAXIMUM_IN_MEMORY_CACHE_ITEMS) {
          const oldestKey = faviconMemoryLruCache.keys().next().value;
          if (oldestKey) faviconMemoryLruCache.delete(oldestKey);
        }
        faviconMemoryLruCache.set(sanitizedDomainName, {
          binaryBuffer,
          mimeContentType,
        });

        return new NextResponse(new Uint8Array(binaryBuffer), {
          status: 200,
          headers: {
            "Content-Type": mimeContentType,
            "Cache-Control": "public, max-age=604800, immutable",
          },
        });
      }
    }
  } catch {
    // Proceed to Tier 3
  }

  // Tier 3: DuckDuckGo Favicon Service
  const duckduckgoUrl = `https://icons.duckduckgo.com/ip3/${sanitizedDomainName}.ico`;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const upstreamResponse = await fetch(duckduckgoUrl, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (upstreamResponse.ok) {
      const mimeContentType =
        upstreamResponse.headers.get("content-type") || "image/x-icon";
      const arrayBuffer = await upstreamResponse.arrayBuffer();
      const binaryBuffer = Buffer.from(arrayBuffer);

      if (binaryBuffer.byteLength > 100) {
        if (faviconMemoryLruCache.size >= MAXIMUM_IN_MEMORY_CACHE_ITEMS) {
          const oldestKey = faviconMemoryLruCache.keys().next().value;
          if (oldestKey) faviconMemoryLruCache.delete(oldestKey);
        }
        faviconMemoryLruCache.set(sanitizedDomainName, {
          binaryBuffer,
          mimeContentType,
        });

        return new NextResponse(new Uint8Array(binaryBuffer), {
          status: 200,
          headers: {
            "Content-Type": mimeContentType,
            "Cache-Control": "public, max-age=604800, immutable",
          },
        });
      }
    }
  } catch {
    // Proceed to Tier 3 fallback
  }

  // Tier 3: Guaranteed Monogram SVG (Always succeeds with 200 OK)
  const svgContent = generateMonogramSvg(sanitizedDomainName);
  const svgBuffer = Buffer.from(svgContent, "utf-8");

  if (faviconMemoryLruCache.size >= MAXIMUM_IN_MEMORY_CACHE_ITEMS) {
    const oldestKey = faviconMemoryLruCache.keys().next().value;
    if (oldestKey) faviconMemoryLruCache.delete(oldestKey);
  }
  faviconMemoryLruCache.set(sanitizedDomainName, {
    binaryBuffer: svgBuffer,
    mimeContentType: "image/svg+xml",
  });

  return new NextResponse(svgContent, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}
