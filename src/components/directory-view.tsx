"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { HeroSection } from "@/components/hero-section";
import { CATEGORIES, type CategoryId } from "@/data/sidebar";
import { URL_LIBRARY, URL_ENTRIES, type DirectoryUrl } from "@/data/url-library";
import { useCategory } from "@/components/category-provider";
import staticMetadataCache from "@/data/metadata-cache.json";
import { Skeleton } from "@/components/ui";
import { Footer } from "@/components/footer";

interface WebsiteMetadata {
  title: string | null;
  siteName: string | null;
  description: string | null;
}

const metadataCache = new Map<string, Promise<WebsiteMetadata>>();

const CONTENT_CATEGORIES = CATEGORIES.filter((category) => category.id !== "all");

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
  if (hostname === "cutnora.app" && attempt === 0) {
    return "/brands/cutnora.svg";
  }
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

const UrlItem = React.memo(function UrlItem({ card }: { card: DirectoryUrl }) {
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [cached]);

  React.useEffect(() => {
    if (!shouldLoad) return;
    let active = true;
    void loadMetadata(card.id).then((result) => {
      if (active) setMetadata(result);
    });
    return () => {
      active = false;
    };
  }, [card.id, shouldLoad]);

  const displayName = metadata?.siteName || metadata?.title || fallbackName;
  const detail =
    metadata?.title && metadata.title !== displayName
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
      className="group flex min-w-0 items-center gap-3 py-2 px-2.5 -mx-2.5 rounded-lg text-sm transition-colors duration-150 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex size-4.5 shrink-0 items-center justify-center">
        {faviconUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${card.id}-${faviconAttempt}`}
            src={faviconUrl}
            alt=""
            className="size-4 object-contain rounded-xs"
            loading="lazy"
            onError={() => setFaviconAttempt((prev) => prev + 1)}
          />
        ) : (
          <Globe aria-hidden="true" className="size-3.5 text-muted-foreground" />
        )}
      </span>

      <span className="max-w-[42%] shrink-0 truncate font-medium text-foreground transition-colors">
        {displayName}
      </span>

      {detail ? (
        <span className="min-w-0 flex-1 truncate text-xs sm:text-sm text-muted-foreground/85 transition-colors">
          {detail}
        </span>
      ) : isPending ? (
        <span className="min-w-0 flex-1 flex items-center">
          <Skeleton className="h-3.5 w-44 max-w-full opacity-60" />
        </span>
      ) : null}
    </a>
  );
});

export function DirectoryView() {
  const { selectedCategory, setSelectedCategory } = useCategory();

  const isManualScroll = React.useRef(false);
  const manualScrollTimeout = React.useRef<NodeJS.Timeout | null>(null);

  // Smooth click scroll to section
  const handleSelectCategory = React.useCallback(
    (id: CategoryId) => {
      isManualScroll.current = true;
      setSelectedCategory(id);

      if (manualScrollTimeout.current) {
        clearTimeout(manualScrollTimeout.current);
      }
      manualScrollTimeout.current = setTimeout(() => {
        isManualScroll.current = false;
      }, 800);

      if (id === "all") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(`category-${id}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [setSelectedCategory],
  );

  // ScrollSpy: auto-detect active category section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll.current) return;

      // Check if near top (Hero / All)
      if (window.scrollY < 180) {
        setSelectedCategory("all");
        return;
      }

      // Check if scrolled near bottom of page
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (isBottom && CONTENT_CATEGORIES.length > 0) {
        const last = CONTENT_CATEGORIES[CONTENT_CATEGORIES.length - 1];
        setSelectedCategory(last.id);
        return;
      }

      // Find section currently in view threshold (offset of 160px from viewport top)
      let currentId: CategoryId = "all";
      const offset = 160;

      for (const cat of CONTENT_CATEGORIES) {
        const el = document.getElementById(`category-${cat.id}`);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          currentId = cat.id;
        } else {
          break;
        }
      }

      setSelectedCategory(currentId);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (manualScrollTimeout.current) {
        clearTimeout(manualScrollTimeout.current);
      }
    };
  }, [setSelectedCategory]);

  return (
    <div className="flex min-h-[calc(100svh-5rem)] w-full min-w-0 gap-8 px-4 py-6 md:gap-10 md:px-6">
      <aside className="hidden w-56 shrink-0 md:block">
        <div className="sticky top-6 flex h-fit flex-col">
          <Sidebar
            selectedId={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>
      </aside>

      <main className="min-w-0 flex-1 space-y-10">
        <HeroSection totalTools={URL_ENTRIES.length} />

        <div className="space-y-6 pb-16">
          {CONTENT_CATEGORIES.map((category) => {
            const cards =
              URL_LIBRARY[category.id as Exclude<CategoryId, "all">] ?? [];
            if (cards.length === 0) return null;

            return (
              <section
                key={category.id}
                id={`category-${category.id}`}
                className="scroll-mt-16 md:scroll-mt-20"
              >
                <div className="divide-y divide-border/20">
                  {cards.map((card) => (
                    <UrlItem key={card.id} card={card} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default DirectoryView;
