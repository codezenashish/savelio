#!/usr/bin/env node

/**
 * Script to fetch OG images from Microlink API for cards that don't have one yet.
 * Run: node scripts/fetch-og-images.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CARDS_FILE = resolve(__dirname, "../src/data/cards.ts");

const raw = readFileSync(CARDS_FILE, "utf-8");

// The array starts at the end of line 17: "export const SHOWCASE_CARDS: CardItem[] = ["
// and ends at "];" on the last data line.
// Find the specific marker
const marker = "SHOWCASE_CARDS: CardItem[] = [";
const markerIdx = raw.indexOf(marker);
if (markerIdx === -1) {
  console.error("Could not find SHOWCASE_CARDS marker");
  process.exit(1);
}

// The "[" is at the end of the marker
const arrayStartIdx = markerIdx + marker.length - 1;

// Find the closing "];" after the array
const closingMarker = "\n];";
const closingIdx = raw.indexOf(closingMarker, arrayStartIdx);
if (closingIdx === -1) {
  console.error("Could not find closing ];");
  process.exit(1);
}

const arrayEndIdx = closingIdx + closingMarker.length - 1; // index of ']'

let jsonStr = raw.slice(arrayStartIdx, arrayEndIdx + 1);

// Remove trailing commas
jsonStr = jsonStr.replace(/,(\s*[}\]])/g, "$1");

let cards;
try {
  cards = JSON.parse(jsonStr);
} catch (e) {
  console.error("JSON parse failed:", e.message);
  console.error("First 300 chars:", jsonStr.slice(0, 300));
  process.exit(1);
}

console.log(`Found ${cards.length} cards. Checking for missing ogImage...\n`);

const DELAY_MS = 600;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let updated = 0;
let failed = 0;
let skipped = 0;

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  if (card.ogImage) {
    skipped++;
    continue;
  }

  const url = card.href || `https://${card.url}`;
  console.log(`[${i + 1}/${cards.length}] Fetching: ${card.title} (${url})`);

  try {
    const res = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(url)}`
    );

    if (!res.ok) {
      console.log(`  ❌ HTTP ${res.status}`);
      failed++;
      await sleep(DELAY_MS);
      continue;
    }

    const json = await res.json();

    if (json.status === "success" && json.data?.image?.url) {
      card.ogImage = json.data.image.url;
      console.log(`  ✅ ${card.ogImage}`);
      updated++;
    } else {
      console.log(`  ⚠️  No OG image found`);
      failed++;
    }
  } catch (err) {
    console.log(`  ❌ Error: ${err.message}`);
    failed++;
  }

  await sleep(DELAY_MS);
}

// Reconstruct the file
const prefix = raw.slice(0, arrayStartIdx);
const suffix = raw.slice(arrayEndIdx + 1);
const newJson = JSON.stringify(cards, null, 2);
const newContent = prefix + newJson + suffix;

writeFileSync(CARDS_FILE, newContent, "utf-8");

console.log(`\n✅ Done! Updated: ${updated}, Skipped: ${skipped}, Failed: ${failed}`);
