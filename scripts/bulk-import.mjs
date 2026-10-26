import fs from "fs";
import dotenv from "dotenv";
import { chromium } from "playwright";
import sharp from "sharp";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import postgres from "postgres";

// 1. Load environment variables
dotenv.config({ path: ".env.local" });

const dbUrl = process.env.DATABASE_URL;
const r2Endpoint = process.env.CLOUDFLARE_R2_ENDPOINT;
const r2AccessKey = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
const r2SecretKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
const r2Bucket = process.env.CLOUDFLARE_R2_BUCKET_NAME || "kura-uploads";
const r2PublicUrl = process.env.CLOUDFLARE_R2_PUBLIC_URL || "";

if (!dbUrl || !r2Endpoint || !r2AccessKey || !r2SecretKey) {
  console.error("❌ Missing required environment variables in .env.local");
  process.exit(1);
}

// 2. Initialize S3 & Database clients
const s3 = new S3Client({
  region: "auto",
  endpoint: r2Endpoint,
  credentials: {
    accessKeyId: r2AccessKey,
    secretAccessKey: r2SecretKey,
  },
});

const sql = postgres(dbUrl, { prepare: false });

async function uploadToR2(buffer, key, contentType = "image/webp") {
  const command = new PutObjectCommand({
    Bucket: r2Bucket,
    Key: key,
    Body: buffer,
    ContentType: contentType,
    CacheControl: "public, max-age=31536000, immutable",
  });
  await s3.send(command);

  if (r2PublicUrl) {
    return `${r2PublicUrl.replace(/\/$/, "")}/${key}`;
  }
  return `${r2Endpoint.replace(/\/$/, "")}/${r2Bucket}/${key}`;
}

async function main() {
  console.log("🚀 Starting Enhanced Retry Pipeline for Pending Links...\n");

  // Step 1: Find links that still need screenshots
  const pendingRows = await sql`SELECT id, url, poster_url, title FROM links WHERE poster_url IS NULL ORDER BY created_at ASC`;

  console.log(`📸 Pending screenshots to capture & upload: ${pendingRows.length}\n`);

  if (pendingRows.length === 0) {
    console.log("🎉 All links already have screenshots uploaded! Nothing to do.");
    await sql.end();
    return;
  }

  // Step 2: Launch Headless Browser
  const chromePath = fs.existsSync("/usr/bin/google-chrome-stable")
    ? "/usr/bin/google-chrome-stable"
    : undefined;

  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  console.log("⚡ Capturing with relaxed 20s timeout and commit wait...\n");

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < pendingRows.length; i++) {
    const item = pendingRows[i];
    const progress = `[${i + 1}/${pendingRows.length}]`;

    try {
      process.stdout.write(`${progress} Retrying: ${item.url} ... `);

      const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 2,
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      });

      const page = await context.newPage();

      // Wait until DOM content is loaded for complete rendering
      await page.goto(item.url, {
        waitUntil: "domcontentloaded",
        timeout: 25000,
      });

      // Wait for fonts, layouts and hero assets to settle
      await page.waitForTimeout(2000);

      let pageTitle = item.title;
      try {
        const titleText = await page.title();
        if (titleText && titleText.trim().length > 0) {
          pageTitle = titleText.trim().slice(0, 150);
        }
      } catch {
        // ignore
      }

      // Capture screenshot
      const rawBuffer = await page.screenshot({
        type: "png",
        fullPage: false,
      });

      await context.close();

      // Sharp compress to high-fidelity 16:10 WebP
      const webpBuffer = await sharp(rawBuffer)
        .resize(1280, 800, {
          fit: "cover",
          position: "top",
        })
        .webp({
          quality: 85,
          effort: 4,
        })
        .toBuffer();

      const sizeKb = Math.round(webpBuffer.byteLength / 1024);

      // Upload to R2
      const key = `items/${item.id}/poster.webp`;
      const posterUrl = await uploadToR2(webpBuffer, key, "image/webp");

      // Update Database
      await sql`
        UPDATE links
        SET poster_url = ${posterUrl}, title = ${pageTitle}
        WHERE id = ${item.id}
      `;

      process.stdout.write(`✅ Done! (${sizeKb} KB WebP uploaded)\n`);
      successCount++;
    } catch (err) {
      process.stdout.write(`⚠️ Skipped (${err.message.slice(0, 45)}...)\n`);
      failCount++;
    }
  }

  await browser.close();
  await sql.end();

  console.log("\n=================================");
  console.log(`🎉 Pipeline Completed!`);
  console.log(`✅ Newly Captured: ${successCount}`);
  console.log(`⚠️ Inaccessible/Dead Domains: ${failCount}`);
  console.log("=================================\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
