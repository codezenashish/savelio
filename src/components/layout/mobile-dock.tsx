"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Drawer } from "vaul";
import { Search, Menu, X } from "lucide-react";
import { SIDEBAR_NAVIGATION_OPTIONS } from "./sidebar";
import ModeToggle from "./theme-toggel";

export interface MobileDockProps {
  activeCategoryId?: string;
  onCategorySelect?: (categoryId: string) => void;
  className?: string;
}

export function MobileDock({
  activeCategoryId,
  onCategorySelect,
  className = "",
}: MobileDockProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchFilterQuery, setSearchFilterQuery] = useState("");

  const searchParams = useSearchParams();
  const urlQueryCategory = searchParams?.get("category");
  const effectiveActiveCategoryId =
    activeCategoryId ?? (urlQueryCategory || "all");

  const filteredNavigationOptions = SIDEBAR_NAVIGATION_OPTIONS.filter((item) =>
    item.label.toLowerCase().includes(searchFilterQuery.toLowerCase().trim())
  );

  return (
    <>
      <Drawer.Root open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        {/* Floating Mobile Dock Pill Trigger (Visible on Mobile Only) */}
        <Drawer.Trigger asChild>
          <div
            role="button"
            tabIndex={0}
            aria-label="Open search and navigation dock"
            className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex md:hidden items-center h-10 px-3.5 py-1.5 rounded-xl bg-zinc-900 text-zinc-100 border border-zinc-800/90 shadow-2xl backdrop-blur-md cursor-pointer transition-all duration-150 hover:bg-zinc-800/95 active:scale-95 select-none gap-2.5 ${className}`}
          >
            {/* Search Button Area */}
            <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors">
              <Search className="size-4 shrink-0 text-zinc-400" />
              <span className="text-sm font-normal text-zinc-400">Search</span>
            </div>

            {/* Vertical Divider Line */}
            <span
              className="h-3.5 w-px bg-zinc-700/80 mx-0.5"
              aria-hidden="true"
            />

            {/* Menu Hamburger Area */}
            <div className="flex items-center text-zinc-300 hover:text-white transition-colors">
              <Menu className="size-4.5 shrink-0" />
            </div>
          </div>
        </Drawer.Trigger>

        {/* Vaul Bottom Drawer Portal */}
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity" />

          <Drawer.Content
            className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-[18px] bg-background border-t border-border/80 outline-none max-h-[85vh] h-fit overflow-hidden shadow-2xl"
          >
            {/* Top Drag Indicator Handle */}
            <div className="pt-3 pb-2 bg-background flex justify-center">
              <div
                aria-hidden
                className="w-12 h-1.5 flex-shrink-0 rounded-full bg-muted-foreground/30"
              />
            </div>

            {/* Drawer Body Area */}
            <div className="px-5 pb-4 bg-background flex-1 overflow-y-auto">
              <div className="max-w-md mx-auto flex flex-col gap-4">
                {/* Header with Title and Close Button */}
                <div className="flex items-center justify-between pb-1">
                  <Drawer.Title className="subheading font-medium text-foreground">
                    Browse
                  </Drawer.Title>
                  <Drawer.Description className="sr-only">
                    Search and browse navigation options
                  </Drawer.Description>
                  <button
                    type="button"
                    onClick={() => setIsDrawerOpen(false)}
                    aria-label="Close drawer"
                    className="size-7 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                {/* Search Input Filter */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    value={searchFilterQuery}
                    onChange={(event) => setSearchFilterQuery(event.target.value)}
                    placeholder="Search options..."
                    className="w-full h-10 pl-9 pr-8 rounded-xl bg-muted/60 border border-border/70 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors"
                  />
                  {searchFilterQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchFilterQuery("")}
                      aria-label="Clear search input"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 size-5 flex items-center justify-center text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-3.5" />
                    </button>
                  )}
                </div>

                {/* Navigation Options List */}
                <nav aria-label="Mobile navigation categories">
                  <ul className="flex flex-col gap-1">
                    {filteredNavigationOptions.map((navigationItem) => {
                      const NavigationIcon = navigationItem.icon;
                      const isItemActive =
                        effectiveActiveCategoryId === navigationItem.id;

                      return (
                        <li key={navigationItem.id}>
                          <Link
                            href={navigationItem.href}
                            onClick={() => {
                              onCategorySelect?.(navigationItem.id);
                              setIsDrawerOpen(false);
                            }}
                            aria-current={isItemActive ? "page" : undefined}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left body-text transition-colors duration-150 group cursor-pointer ${
                              isItemActive
                                ? "bg-muted text-foreground font-medium shadow-2xs"
                                : "text-foreground/75 hover:bg-muted/50 hover:text-foreground font-normal"
                            }`}
                          >
                            <NavigationIcon
                              className={`size-4.5 shrink-0 transition-transform duration-150 ${
                                isItemActive
                                  ? "text-foreground"
                                  : "text-foreground/75 group-hover:text-foreground"
                              }`}
                              strokeWidth={1.8}
                            />
                            <span className="truncate">{navigationItem.label}</span>
                          </Link>
                        </li>
                      );
                    })}

                    {filteredNavigationOptions.length === 0 && (
                      <li className="py-4 text-center small-text text-muted-foreground">
                        No options matching &ldquo;{searchFilterQuery}&rdquo;
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Bottom Footer Section (Vaul style with GitHub and Twitter links) */}
            <div className="p-4 bg-muted/70 border-t border-border/50 mt-auto">
              <div className="flex items-center justify-between max-w-md mx-auto">
                <div className="flex items-center gap-3">
                  <ModeToggle />
                  <a
                    href="#feedback"
                    className="small-text underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Feedback
                  </a>
                </div>

                <div className="flex gap-4 items-center">
                  <a
                    className="small-text text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                    href="https://github.com/emilkowalski/vaul"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <svg
                      fill="none"
                      height="14"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="14"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                  <a
                    className="small-text text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                    href="https://twitter.com/emilkowalski_"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                    <svg
                      fill="none"
                      height="14"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="14"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

export default MobileDock;
