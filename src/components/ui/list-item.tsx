"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { ThinkingOrb } from "thinking-orbs";
import Image from "next/image";

export interface ListItemProps {
  id: string;
  title?: string | null;
  url: string;
  description?: string | null;
  initialStarred?: boolean;
  onStarToggle?: (id: string, isStarred: boolean) => void;
  className?: string;
}

/**
 * Extracts and normalizes hostname for clean URL display (e.g., "stripe.com")
 */
function extractHostname(rawUrl: string): string {
  try {
    const normalizedUrl = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
    const parsedUrl = new URL(normalizedUrl);
    return parsedUrl.hostname.replace(/^www\./, "");
  } catch {
    return (
      rawUrl
        .replace(/^https?:\/\//, "")
        .replace(/^www\./, "")
        .split("/")[0] || rawUrl
    );
  }
}

/**
 * Parses title and tagline/description into clean bold title and adjacent description
 * to match minimal typography directory layouts
 */
function parseTitleAndDescription(
  rawTitle: string | null | undefined,
  rawDescription: string | null | undefined,
  domain: string
): { title: string; description: string } {
  let title = rawTitle?.trim() || domain;
  let description = rawDescription?.trim() || "";

  // Split titles like "Codrops — Creative Web Design" or "Monkeytype | Minimalist Typing Test"
  const separatorRegex = /\s+(?:—|–|-|\||·|:)\s+/;
  if (separatorRegex.test(title)) {
    const parts = title.split(separatorRegex);
    const shortTitle = parts[0].trim();
    const tagline = parts.slice(1).join(" — ").trim();

    if (shortTitle.length > 0 && shortTitle.length <= 32) {
      title = shortTitle;
      if (!description || description.toLowerCase().includes("standout")) {
        description = tagline || description;
      }
    }
  }

  // Remove trailing TLDs like .com, .dev, .io if title is just raw domain
  title = title.replace(/\.(com|dev|io|net|co|org|app|design|studio)$/i, "");

  // Capitalize first letter if all lowercase
  if (title === title.toLowerCase()) {
    title = title.charAt(0).toUpperCase() + title.slice(1);
  }

  return { title, description };
}

export function ListItem({
  id: _id,
  title: rawTitle,
  url,
  description: rawDescription,
  className = "",
}: ListItemProps) {
  const [hasFaviconError, setHasFaviconError] = useState(false);
  const [isFaviconLoaded, setIsFaviconLoaded] = useState(false);

  const domain = extractHostname(url);
  const destinationUrl = url.startsWith("http") ? url : `https://${url}`;
  const { title, description } = parseTitleAndDescription(
    rawTitle,
    rawDescription,
    domain
  );

  // Dedicated multi-tier favicon resolver (Google S2 + DuckDuckGo + Monogram SVG fallback)
  const faviconApiEndpoint = `/api/favicon?domain=${domain}`;

  // Ensure loading state doesn't hang indefinitely if browser delays image load event
  useEffect(() => {
    const safetyTimeoutId = setTimeout(() => {
      setIsFaviconLoaded(true);
    }, 2000);
    return () => clearTimeout(safetyTimeoutId);
  }, []);

  return (
    <a
      href={destinationUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title}: ${description || domain}`}
      className={`group flex items-baseline gap-2.5 sm:gap-3 w-full min-w-0 max-w-full overflow-hidden py-2 px-2.5 rounded-lg transition-colors duration-150 hover:bg-muted/50 cursor-pointer select-none text-sm sm:text-base leading-relaxed ${className}`}
    >
      {/* Favicon Slot with ThinkingOrb Animated Loading State */}
      <div className="relative size-4 shrink-0 flex items-center justify-center self-center overflow-hidden rounded-xs">
        {/* Animated ThinkingOrb shown during favicon download */}
        {!isFaviconLoaded && (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="scale-[0.25] origin-center shrink-0 flex items-center justify-center">
              <ThinkingOrb size={64} state="searching" />
            </div>
          </div>
        )}

        <Image
          src={faviconApiEndpoint}
          alt=""
          width={16}
          height={16}
          unoptimized
          loading="lazy"
          onLoad={() => setIsFaviconLoaded(true)}
          onError={() => setIsFaviconLoaded(true)}
          className={`size-4 shrink-0 rounded-xs object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200 ${
            isFaviconLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Bold Name / Title with truncation constraint */}
      <span className="font-semibold text-foreground shrink-0 max-w-[42%] sm:max-w-none truncate group-hover:text-primary transition-colors">
        {title}
      </span>

      {/* Adjacently Aligned Description with min-w-0 flex-1 for guaranteed horizontal fit */}
      {description && (
        <span className="text-muted-foreground/80 truncate font-normal text-sm sm:text-base min-w-0 flex-1">
          {description}
        </span>
      )}

      {/* Subtle Hover External Link Indicator (hidden on mobile to prevent overflow) */}
      <ArrowUpRight className="size-3.5 text-muted-foreground/40 group-hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-auto self-center hidden sm:block" />
    </a>
  );
}

export default ListItem;
