import fs from "fs";
import { chromium } from "playwright";
import sharp from "sharp";
import { uploadToR2 } from "./r2";

export interface ScreenshotResult {
  posterUrl: string;
  width: number;
  height: number;
  fileSizeKb: number;
}

/**
 * Normalizes URL string to ensure valid protocol
 */
function normalizeUrl(rawWebUrl: string): string {
  const trimmedWebUrl = rawWebUrl.trim();
  if (!/^https?:\/\//i.test(trimmedWebUrl)) {
    return `https://${trimmedWebUrl}`;
  }
  return trimmedWebUrl;
}

/**
 * Resolves Chrome executable path across different environments
 */
function getChromeExecutablePath(): string | undefined {
  if (process.env.CHROME_EXECUTABLE_PATH) {
    return process.env.CHROME_EXECUTABLE_PATH;
  }
  const defaultLinuxChromeBinaryPath = "/usr/bin/google-chrome-stable";
  if (fs.existsSync(defaultLinuxChromeBinaryPath)) {
    return defaultLinuxChromeBinaryPath;
  }
  // Let playwright fall back to bundled chromium if system chrome is not present
  return undefined;
}

/**
 * Captures a desktop viewport screenshot of targetPageUrl, compresses it to WebP (~30-35 KB),
 * and uploads it directly to Cloudflare R2 bucket.
 *
 * @param targetPageUrl - The website URL to capture
 * @param resourceIdentifier - Unique ID for folder naming (e.g. items/{itemId}/poster.webp)
 */
export async function captureAndUploadPreview(
  targetPageUrl: string,
  resourceIdentifier: string
): Promise<ScreenshotResult> {
  const normalizedTargetUrl = normalizeUrl(targetPageUrl);
  const chromeExecutableBinaryPath = getChromeExecutablePath();

  // 1. Launch headless Chromium
  const headlessBrowserInstance = await chromium.launch({
    executablePath: chromeExecutableBinaryPath,
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  try {
    const browserExecutionContext = await headlessBrowserInstance.newContext({
      viewport: { width: 1280, height: 720 },
      deviceScaleFactor: 1,
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    });

    const browserPage = await browserExecutionContext.newPage();

    // 2. Navigate to target URL with timeout
    await browserPage.goto(normalizedTargetUrl, {
      waitUntil: "domcontentloaded",
      timeout: 15000,
    });

    // Wait for animations and layout shifts to settle
    await browserPage.waitForTimeout(1200);

    // 3. Capture raw PNG screenshot buffer (viewport 1280x720)
    const uncompressedScreenshotPngBuffer = await browserPage.screenshot({
      type: "png",
      fullPage: false,
    });

    // 4. Sharp compression: 1280x720 WebP with high efficiency (~30-40 KB)
    const compressedScreenshotWebpBuffer = await sharp(uncompressedScreenshotPngBuffer)
      .resize(1280, 720, {
        fit: "cover",
        position: "top",
      })
      .webp({
        quality: 80,
        effort: 4,
      })
      .toBuffer();

    const compressedFileSizeInKilobytes = Math.round(
      compressedScreenshotWebpBuffer.byteLength / 1024
    );

    // 5. Upload directly to Cloudflare R2
    const storageAssetObjectKey = `items/${resourceIdentifier}/poster.webp`;
    const uploadedPosterPublicUrl = await uploadToR2(
      compressedScreenshotWebpBuffer,
      storageAssetObjectKey,
      "image/webp"
    );

    return {
      posterUrl: uploadedPosterPublicUrl,
      width: 1280,
      height: 720,
      fileSizeKb: compressedFileSizeInKilobytes,
    };
  } finally {
    // 6. Ensure browser instance is always closed gracefully
    await headlessBrowserInstance.close();
  }
}

// Alias for backward compatibility
export const captureAndUploadScreenshot = captureAndUploadPreview;
