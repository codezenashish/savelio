"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { HeroSection } from "@/components/hero-section";
import { CATEGORIES } from "@/data/sidebar";
import { URL_ENTRIES, type UrlEntry } from "@/data/url-library";
import { useCategory } from "@/components/category-provider";
import staticMetadataCache from "@/data/metadata-cache.json";
import { Skeleton } from "@/components/ui/skeleton";

interface WebsiteMetadata {
  title: string | null;
  siteName: string | null;
  description: string | null;
}

const metadataCache = new Map<string, Promise<WebsiteMetadata>>();

function loadMetadata(id: string): Promise<WebsiteMetadata> {
  let request = metadataCache.get(id);
  if (!request) {
    request = fetch(`/api/metadata/${encodeURIComponent(id)}`)
      .then((response) => {
        if (!response.ok) throw new Error("Metadata unavailable");
        return response.json() as Promise<WebsiteMetadata>;
      })
      .catch(() => ({ title: null, siteName: null, description: null }));
    metadataCache.set(id, request);
  }
  return request;
}

function getFaviconUrl(hostname: string, attempt: number): string | null {
  switch (attempt) {
    case 0:
      // Google Favicon service: 0 rate limit, 64px crisp resolution, global CDN
      return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=64`;
    case 1:
      // DuckDuckGo fallback
      return `https://icons.duckduckgo.com/ip3/${encodeURIComponent(hostname)}.ico`;
    case 2:
      // Unavatar fallback
      return `https://unavatar.io/${encodeURIComponent(hostname)}`;
    default:
      return null;
  }
}

function UrlItem({ card }: { card: UrlEntry }) {
  const itemRef = React.useRef<HTMLAnchorElement>(null);
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const cached = (staticMetadataCache as Record<string, WebsiteMetadata | undefined>)[card.id];
  const [metadata, setMetadata] = React.useState<WebsiteMetadata | null>(cached ?? null);
  const [faviconAttempt, setFaviconAttempt] = React.useState(0);

  const website = React.useMemo(() => {
    try {
      return new URL(card.href);
    } catch {
      return null;
    }
  }, [card.href]);

  const fallbackName = React.useMemo(() => {
    if (!website?.hostname) return "Website";
    const clean = website.hostname.replace(/^www\./i, "").split(".")[0] || "Website";
    return clean
      .split(/[-_]/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }, [website]);

  React.useEffect(() => {
    if (cached?.title && cached?.siteName) return;

    const node = itemRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setShouldLoad(true));
      return () => window.cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: "160px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [cached]);

  React.useEffect(() => {
    if (!shouldLoad) return;
    let active = true;
    void loadMetadata(card.id).then((result) => {
      if (active) setMetadata(result);
    });
    return () => { active = false; };
  }, [card.id, shouldLoad]);

  const displayName = metadata?.siteName || metadata?.title || fallbackName;
  const detail = metadata?.title && metadata.title !== displayName
    ? metadata.title
    : metadata?.description;
  const faviconUrl = website
    ? getFaviconUrl(website.hostname, faviconAttempt)
    : null;

  const isPending = !metadata && shouldLoad;

  return (
    <a
      ref={itemRef}
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${displayName} in a new tab`}
      title={card.href}
      className="group flex min-w-0 items-center gap-2.5 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex size-4 shrink-0 items-center justify-center">
        {faviconUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${card.id}-${faviconAttempt}`}
            src={faviconUrl}
            alt=""
            className="size-4 object-contain"
            loading="lazy"
            onError={() => setFaviconAttempt((prev) => prev + 1)}
          />
        ) : (
          <Globe aria-hidden="true" className="size-3.5 text-muted-foreground" />
        )}
      </span>

      <span className="max-w-[45%] shrink-0 truncate text-sm font-medium text-foreground group-hover:underline">
        {displayName}
      </span>
      {detail ? (
        <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">{detail}</span>
      ) : isPending ? (
        <span className="min-w-0 flex-1 flex items-center">
          <Skeleton className="h-3.5 w-44 max-w-full opacity-60" />
        </span>
      ) : null}
    </a>
  );
}

export function DirectoryView() {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const currentCategory = React.useMemo(
    () => CATEGORIES.find((category) => category.id === selectedCategory) ?? CATEGORIES[0],
    [selectedCategory],
  );
  const filteredCards = React.useMemo(
    () => selectedCategory === "all"
      ? URL_ENTRIES
      : URL_ENTRIES.filter((card) => card.category === selectedCategory),
    [selectedCategory],
  );

  return (
    <div className="flex min-h-[calc(100svh-5rem)] w-full min-w-0 gap-8 px-4 py-6 md:gap-10 md:px-6">
      <aside className="hidden w-56 shrink-0 md:block">
        <div className="sticky top-6 flex h-fit flex-col">
          <Sidebar selectedId={selectedCategory} onSelectCategory={setSelectedCategory} />
        </div>
      </aside>

      <main className="min-w-0 flex-1 space-y-10">
        <HeroSection />
        <section className="space-y-4 pt-2">
          <div className="space-y-1">
            <h1 className="heading tracking-tight">{currentCategory.title}</h1>
            <p className="body-text">{currentCategory.description}</p>
          </div>
          {filteredCards.length > 0 ? (
            <div>
              {filteredCards.map((card) => <UrlItem key={card.id} card={card} />)}
            </div>
          ) : (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No items found for {currentCategory.name}.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default DirectoryView;
