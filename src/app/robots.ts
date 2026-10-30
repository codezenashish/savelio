import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/libs/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(siteUrl ? { sitemap: new URL("/sitemap.xml", siteUrl).toString() } : {}),
  };
}
