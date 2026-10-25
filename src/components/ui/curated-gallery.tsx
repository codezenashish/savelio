"use client";

import React, { useState, useEffect } from "react";
import { LayoutGrid, List } from "lucide-react";
import { PreviewCard } from "./preview-card";
import { ListItem } from "./list-item";

export interface CuratedGalleryLink {
  id: string;
  url: string;
  title: string | null;
  description: string | null;
  posterUrl: string | null;
  category: string | null;
  isStarred: boolean | null;
  createdAt: Date;
}

export interface CuratedGalleryProps {
  links: CuratedGalleryLink[];
  categoryTitle: string;
  categoryDescription: string;
  highPriorityImageCount?: number;
}

export function CuratedGallery({
  links,
  categoryTitle,
  categoryDescription,
  highPriorityImageCount = 4,
}: CuratedGalleryProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Hydrate view mode preference from localStorage on client mount
  useEffect(() => {
    try {
      const savedPreference = localStorage.getItem("kura_gallery_view_mode");
      if (savedPreference === "list" || savedPreference === "grid") {
        setViewMode(savedPreference);
      }
    } catch {
      // Ignore localStorage read errors in private browsing modes
    }
  }, []);

  const handleViewModeToggle = (targetMode: "grid" | "list") => {
    setViewMode(targetMode);
    try {
      localStorage.setItem("kura_gallery_view_mode", targetMode);
    } catch {
      // Ignore localStorage write errors
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full min-w-0 max-w-full overflow-hidden">
      {/* Category Header with Title & Grid/List View Mode Switcher */}
      <div className="flex items-center justify-between gap-3 w-full min-w-0">
        <div className="min-w-0 flex-1">
          <h1 className="heading truncate">{categoryTitle}</h1>
          <p className="small-text mt-0.5 truncate">
            {categoryDescription} ({links.length} items)
          </p>
        </div>

        {/* View Mode Toggle Controls */}
        <div
          role="group"
          aria-label="Gallery view mode controls"
          className="flex items-center gap-1 p-1 rounded-xl bg-muted/60 border border-border/70 shadow-2xs shrink-0 select-none"
        >
          <button
            type="button"
            onClick={() => handleViewModeToggle("grid")}
            aria-label="Switch to Grid view"
            aria-pressed={viewMode === "grid"}
            className={`flex size-8 items-center justify-center rounded-lg transition-all duration-150 cursor-pointer ${
              viewMode === "grid"
                ? "bg-background text-foreground shadow-xs font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <LayoutGrid className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => handleViewModeToggle("list")}
            aria-label="Switch to List view"
            aria-pressed={viewMode === "list"}
            className={`flex size-8 items-center justify-center rounded-lg transition-all duration-150 cursor-pointer ${
              viewMode === "list"
                ? "bg-background text-foreground shadow-xs font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <List className="size-4.5" />
          </button>
        </div>
      </div>

      {/* Gallery Content: Grid View or List View */}
      {links.length > 0 ? (
        viewMode === "grid" ? (
          /* Grid View Layout (with ThinkingOrb image loader) */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full min-w-0 max-w-full">
            {links.map((curatedLink, linkIndex) => {
              const posterApiEndpoint = curatedLink.posterUrl
                ? `/api/poster/${curatedLink.id}`
                : undefined;

              return (
                <PreviewCard
                  key={curatedLink.id}
                  id={curatedLink.id}
                  url={curatedLink.url}
                  title={curatedLink.title || ""}
                  posterUrl={posterApiEndpoint}
                  priority={linkIndex < highPriorityImageCount}
                  initialStarred={curatedLink.isStarred ?? false}
                />
              );
            })}
          </div>
        ) : (
          /* Minimal Typography List View Layout (matching reference image) */
          <div className="flex flex-col gap-0.5 sm:gap-1 pt-1 w-full min-w-0 max-w-full overflow-hidden">
            {links.map((curatedLink) => (
              <ListItem
                key={curatedLink.id}
                id={curatedLink.id}
                url={curatedLink.url}
                title={curatedLink.title}
                description={curatedLink.description}
                initialStarred={curatedLink.isStarred ?? false}
              />
            ))}
          </div>
        )
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-border/70 text-muted-foreground">
          <p className="body-text">No items found in this category.</p>
          <p className="small-text mt-1">
            Check back soon or explore other curated categories.
          </p>
        </div>
      )}
    </div>
  );
}

export default CuratedGallery;
