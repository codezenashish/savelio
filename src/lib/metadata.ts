export interface WebsiteMetadata {
  title: string | null;
  siteName: string | null;
  description: string | null;
}

function decodeHtml(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number(code)),
    )
    .replace(/&#x([\da-f]+);/gi, (_, code: string) =>
      String.fromCodePoint(parseInt(code, 16)),
    )
    .trim();
}

function getMeta(html: string, key: string): string | null {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`<meta\\s+[^>]*(?:property|name)=["']${escapedKey}["'][^>]*content=["']([^"']*)["'][^>]*>`, "i"),
    new RegExp(`<meta\\s+[^>]*content=["']([^"']*)["'][^>]*(?:property|name)=["']${escapedKey}["'][^>]*>`, "i"),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return decodeHtml(match[1]);
  }
  return null;
}

function parseHtmlMetadata(html: string): WebsiteMetadata {
  const titleMatch = html.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i);
  return {
    title:
      getMeta(html, "og:title") ??
      getMeta(html, "twitter:title") ??
      (titleMatch?.[1] ? decodeHtml(titleMatch[1].replace(/<[^>]+>/g, "")) : null),
    siteName: getMeta(html, "og:site_name"),
    description: getMeta(html, "description") ?? getMeta(html, "og:description"),
  };
}

/**
 * Format domain name cleanly (e.g. "github.com" -> "GitHub", "ui-verse.io" -> "Ui Verse")
 */
export function formatDomainFallback(hostname: string): string {
  const clean = hostname.replace(/^www\./i, "").split(".")[0] || "Website";
  return clean
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Fetch metadata via Microlink API
 */
async function fetchMicrolinkMetadata(url: string): Promise<WebsiteMetadata | null> {
  try {
    const endpoint = new URL("https://api.microlink.io");
    endpoint.searchParams.set("url", url);

    if (process.env.MICROLINK_API_KEY) {
      endpoint.searchParams.set("apiKey", process.env.MICROLINK_API_KEY);
    }

    const response = await fetch(endpoint.toString(), {
      headers: {
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(6000),
      next: { revalidate: 86400 },
    });

    if (!response.ok) return null;

    const json = await response.json();
    if (json.status !== "success" || !json.data) return null;

    const data = json.data;
    const title = data.title ? String(data.title).trim() : null;
    const siteName = (data.publisher || data.author) ? String(data.publisher || data.author).trim() : null;
    const description = data.description ? String(data.description).trim() : null;

    if (!title && !siteName && !description) return null;

    return {
      title,
      siteName,
      description,
    };
  } catch {
    return null;
  }
}

/**
 * Direct HTML scraping fallback if Microlink fails or rate-limits
 */
async function fetchDirectMetadata(target: URL): Promise<WebsiteMetadata | null> {
  try {
    const response = await fetch(target, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 86400 },
    });

    if (!response.ok) return null;

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("text/html")) return null;

    const html = (await response.text()).slice(0, 1_000_000);
    return parseHtmlMetadata(html);
  } catch {
    return null;
  }
}

/**
 * Main metadata resolver:
 * 1. Tries Microlink API (extracts title, publisher/siteName, description)
 * 2. Falls back to direct HTML parse if Microlink fails
 * 3. Falls back to clean domain format if siteName is still missing
 */
export async function getWebsiteMetadata(targetUrl: string): Promise<WebsiteMetadata> {
  const target = new URL(targetUrl);

  // 1. Microlink API
  const microlinkMeta = await fetchMicrolinkMetadata(targetUrl);
  if (microlinkMeta && (microlinkMeta.title || microlinkMeta.siteName)) {
    return {
      title: microlinkMeta.title,
      siteName: microlinkMeta.siteName || formatDomainFallback(target.hostname),
      description: microlinkMeta.description,
    };
  }

  // 2. Direct fetch fallback
  const directMeta = await fetchDirectMetadata(target);
  if (directMeta && (directMeta.title || directMeta.siteName)) {
    return {
      title: directMeta.title,
      siteName: directMeta.siteName || formatDomainFallback(target.hostname),
      description: directMeta.description,
    };
  }

  // 3. Fallback
  return {
    title: directMeta?.title || microlinkMeta?.title || null,
    siteName: directMeta?.siteName || microlinkMeta?.siteName || formatDomainFallback(target.hostname),
    description: directMeta?.description || microlinkMeta?.description || null,
  };
}
