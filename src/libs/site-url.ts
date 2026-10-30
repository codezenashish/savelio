export function getSiteUrl(): URL | undefined {
  const configuredSiteUrl = process.env.SITE_URL?.trim();
  if (!configuredSiteUrl) return undefined;

  try {
    const siteUrl = new URL(
      /^https?:\/\//i.test(configuredSiteUrl)
        ? configuredSiteUrl
        : `https://${configuredSiteUrl}`
    );
    if (siteUrl.protocol !== "https:" && siteUrl.protocol !== "http:") {
      return undefined;
    }
    return siteUrl;
  } catch {
    return undefined;
  }
}
