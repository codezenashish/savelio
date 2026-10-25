/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Star, ArrowUpRight, Globe, Copy, Check } from "lucide-react";
import { ThinkingOrb } from "thinking-orbs";

export interface PreviewCardProps {
  id?: string;
  title?: string;
  url: string;
  posterUrl?: string;
  initialStarred?: boolean;
  priority?: boolean;
  onStarToggle?: (id: string, isStarred: boolean) => void;
  onClick?: () => void;
  className?: string;
}

/**
 * Extracts and cleans the hostname for clean URL display (e.g., "claude.ai")
 */
function formatDisplayUrl(rawTargetUrl: string): string {
  try {
    const normalizedTargetUrlWithProtocol = rawTargetUrl.startsWith("http")
      ? rawTargetUrl
      : `https://${rawTargetUrl}`;
    const parsedTargetUrl = new URL(normalizedTargetUrlWithProtocol);
    return parsedTargetUrl.hostname.replace(/^www\./, "");
  } catch {
    return (
      rawTargetUrl
        .replace(/^https?:\/\//, "")
        .replace(/^www\./, "")
        .split("/")[0] || rawTargetUrl
    );
  }
}

export function PreviewCard({
  id = "",
  title,
  url,
  posterUrl,
  initialStarred = false,
  priority = false,
  onStarToggle,
  onClick,
  className = "",
}: PreviewCardProps) {
  const [isResourceStarred, setIsResourceStarred] = useState(initialStarred);
  const [hasCopiedUrlToClipboard, setHasCopiedUrlToClipboard] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasImageLoadFailed, setHasImageLoadFailed] = useState(false);

  const displayUrl = formatDisplayUrl(url);
  const destinationUrl = url.startsWith("http") ? url : `https://${url}`;

  const handleStarButtonClick = (mouseClickEvent: React.MouseEvent) => {
    mouseClickEvent.stopPropagation();
    const updatedStarredState = !isResourceStarred;
    setIsResourceStarred(updatedStarredState);
    if (onStarToggle) {
      onStarToggle(id, updatedStarredState);
    }
  };

  const handleCopyUrlButtonClick = (mouseClickEvent: React.MouseEvent) => {
    mouseClickEvent.stopPropagation();
    navigator.clipboard?.writeText(destinationUrl);
    setHasCopiedUrlToClipboard(true);
    setTimeout(() => setHasCopiedUrlToClipboard(false), 1500);
  };

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : "region"}
      tabIndex={onClick ? 0 : undefined}
      className={`group relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-border bg-card text-card-foreground  transition-all duration-200 hover:border-foreground/30  cursor-pointer select-none ${className}`}
    >
      {/* Background Screenshot Image with Loading Skeleton */}
      {posterUrl && !hasImageLoadFailed ? (
        <>
          {/* Animated ThinkingOrb loading state UI while poster image downloads */}
          {!isImageLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-muted/30 backdrop-blur-2xs transition-opacity duration-300">
              <ThinkingOrb state="searching" size={64} />
            </div>
          )}

          <img
            src={posterUrl}
            alt={title || displayUrl || "Website preview"}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "low"}
            decoding="async"
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setHasImageLoadFailed(true)}
            className={`size-full object-cover object-top transition-all duration-300 ease-out group-hover:scale-[1.02] ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </>
      ) : (
        <div className="flex size-full flex-col items-center justify-center gap-1.5 text-muted-foreground bg-muted/20">
          <Globe className="size-6 stroke-[1.25] opacity-40" />
          <span className="small-text opacity-70">No preview</span>
        </div>
      )}

      {/* Hover State Floating Overlay: Sleek URL Pill & Star Option */}
      <div className="absolute inset-x-2.5 top-2.5 z-20 flex items-center justify-between gap-1.5 opacity-0 -translate-y-1 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none">
        {/* URL Pill with External Link */}
        <a
          href={destinationUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(clickEvent) => clickEvent.stopPropagation()}
          aria-label={`Visit ${displayUrl}`}
          className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/90 px-2.5 py-0.5 small-text font-medium text-foreground backdrop-blur-md  transition-colors hover:bg-background hover:border-foreground/30"
        >
          <span className="max-w-27.5 truncate sm:max-w-35">
            {displayUrl}
          </span>
          <ArrowUpRight className="size-3 shrink-0 opacity-70" />
        </a>

        {/* Action Buttons: Copy & Star */}
        <div className="pointer-events-auto flex items-center gap-1">
          {/* Copy Link Button */}
          <button
            type="button"
            onClick={handleCopyUrlButtonClick}
            aria-label="Copy URL"
            className="flex size-6.5 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground backdrop-blur-md shadow-2xs transition-all duration-150 hover:bg-background hover:scale-105 active:scale-95 cursor-pointer"
          >
            {hasCopiedUrlToClipboard ? (
              <Check className="size-3 text-foreground" />
            ) : (
              <Copy className="size-3 opacity-70" />
            )}
          </button>

          {/* Star Option */}
          <button
            type="button"
            onClick={handleStarButtonClick}
            aria-label={
              isResourceStarred ? "Remove from favorites" : "Add to favorites"
            }
            className={`flex size-6.5 items-center justify-center rounded-full border border-border/80 bg-background/90 backdrop-blur-md shadow-2xs transition-all duration-150 hover:bg-background hover:scale-105 active:scale-95 cursor-pointer ${
              isResourceStarred
                ? "text-amber-500 fill-amber-500 border-amber-500/40"
                : "text-foreground opacity-75 hover:opacity-100"
            }`}
          >
            <Star
              className={`size-3 transition-colors ${
                isResourceStarred ? "fill-amber-500 text-amber-500" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
