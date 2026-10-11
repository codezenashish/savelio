#!/usr/bin/env node

/**
 * Script to pre-fetch metadata (title, siteName, description) for all directory links
 * using Microlink API with direct HTML parsing fallback, and save to a static cache file.
 * Run: node scripts/generate-metadata-cache.mjs
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const URL_LIBRARY_FILE = resolve(__dirname, "../src/data/url-library.ts");
const CACHE_FILE = resolve(__dirname, "../src/data/metadata-cache.json");

function decodeHtml(value) {
  if (!value) return "";
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .trim();
}

function getMeta(html, key) {
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

function formatDomainFallback(hostname) {
  const clean = hostname.replace(/^www\./i, "").split(".")[0] || "Website";
  return clean
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function extractUrlsFromLibrary() {
  const content = readFileSync(URL_LIBRARY_FILE, "utf-8");
  const regex = /\{\s*"id":\s*"([^"]+)",\s*"href":\s*"([^"]+)"\s*\}/g;
  const entries = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    entries.push({ id: match[1], href: match[2] });
  }
  return entries;
}

async function fetchFromMicrolink(url) {
  try {
    const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (json.status !== "success" || !json.data) return null;

    const data = json.data;
    const title = data.title ? decodeHtml(String(data.title)) : null;
    const siteName = (data.publisher || data.author) ? decodeHtml(String(data.publisher || data.author)) : null;
    const description = data.description ? decodeHtml(String(data.description)) : null;

    if (!title && !siteName && !description) return null;

    return { title, siteName, description };
  } catch {
    return null;
  }
}

async function fetchDirectly(url) {
  try {
    const target = new URL(url);
    const res = await fetch(target, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("text/html")) return null;

    const html = (await res.text()).slice(0, 1_000_000);
    const titleMatch = html.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i);

    const title =
      getMeta(html, "og:title") ??
      getMeta(html, "twitter:title") ??
      (titleMatch?.[1] ? decodeHtml(titleMatch[1].replace(/<[^>]+>/g, "")) : null);

    const siteName = getMeta(html, "og:site_name") ?? formatDomainFallback(target.hostname);
    const description = getMeta(html, "description") ?? getMeta(html, "og:description");

    return { title, siteName, description };
  } catch {
    return null;
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const entries = extractUrlsFromLibrary();
  console.log(`Found ${entries.length} URLs in url-library.ts.`);

  let cache = {};
  if (existsSync(CACHE_FILE)) {
    try {
      cache = JSON.parse(readFileSync(CACHE_FILE, "utf-8"));
    } catch {
      cache = {};
    }
  }

  let updatedCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < entries.length; i++) {
    const { id, href } = entries[i];
    const target = new URL(href);
    const defaultSiteName = formatDomainFallback(target.hostname);

    if (cache[id]?.title && cache[id]?.siteName) {
      skippedCount++;
      continue;
    }

    process.stdout.write(`[${i + 1}/${entries.length}] Fetching ${id} (${href})... `);

    // 1. Try Microlink
    let meta = await fetchFromMicrolink(href);

    // 2. If Microlink fails, try Direct Fetch
    if (!meta || (!meta.title && !meta.siteName)) {
      meta = await fetchDirectly(href);
    }

    const finalMeta = {
      title: meta?.title || null,
      siteName: meta?.siteName || defaultSiteName,
      description: meta?.description || null,
    };

    cache[id] = finalMeta;
    updatedCount++;
    console.log(`✅ ${finalMeta.siteName || "Done"} | ${finalMeta.title?.slice(0, 40) || "No title"}`);

    // Save incrementally
    writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), "utf-8");
    await sleep(250);
  }

  console.log(`\n🎉 Complete! Updated: ${updatedCount}, Skipped: ${skippedCount}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
