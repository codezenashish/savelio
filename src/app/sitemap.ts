import type { MetadataRoute } from "next";
import { CATEGORY_SLUGS } from "@/libs/categories";
import { getSiteUrl } from "@/libs/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];

  return CATEGORY_SLUGS.map((category) => {
    const categoryUrl = new URL("/", siteUrl);
    if (category !== "all") categoryUrl.searchParams.set("category", category);

    return { url: categoryUrl.toString() };
  });
}
