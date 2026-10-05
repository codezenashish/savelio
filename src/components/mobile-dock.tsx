"use client";

import * as React from "react";
import Link from "next/link";
import { Drawer } from "vaul";
import { Home, LayoutGrid, X, Layers, Check } from "lucide-react";
import {
  CATEGORIES,
  MOBILE_DOCK_DATA,
  type CategoryItem,
  type MobileDockData,
} from "@/data/sidebar";
import { useCategory } from "@/components/category-provider";

export interface MobileDockProps {
  categories?: CategoryItem[];
  dockData?: MobileDockData;
}

export function MobileDock({
  categories = CATEGORIES,
  dockData = MOBILE_DOCK_DATA,
}: MobileDockProps) {
  const [open, setOpen] = React.useState(false);
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <aside
        aria-label="Mobile Navigation"
        className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 md:hidden"
      >
        <div className="flex items-center gap-1 rounded-full border border-border bg-card px-2 py-1.5 shadow-sm">
          <Link
            href="/"
            aria-label="Home"
            className="flex size-10 items-center justify-center rounded-full transition hover:bg-muted active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Home className="size-5" />
          </Link>

          <Drawer.Trigger asChild>
            <button
              type="button"
              aria-label="Open categories"
              className="flex size-10 items-center justify-center rounded-full text-foreground/80 transition hover:bg-muted hover:text-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <LayoutGrid className="size-5" />
            </button>
          </Drawer.Trigger>
        </div>
      </aside>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xs" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex max-h-[85%] flex-col rounded-t-xl border-t border-border bg-card shadow-2xl outline-none">
          <div className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-muted-foreground/25" />

          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div>
              <Drawer.Title className="subheading">{dockData.title}</Drawer.Title>
              <Drawer.Description className="small-text">
                {dockData.description}
              </Drawer.Description>
            </div>
            <Drawer.Close asChild>
              <button
                type="button"
                aria-label="Close categories"
                className="rounded-full p-2 transition hover:bg-muted active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="size-4" />
              </button>
            </Drawer.Close>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3">
            <div className="space-y-1">
              {categories.map((category: CategoryItem) => {
                const isSelected = category.id === selectedCategory;
                const Icon = category.icon || Layers;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3.5 py-3 small-text transition-colors ${
                      isSelected
                        ? "bg-foreground font-semibold text-background"
                        : "hover:bg-muted active:scale-[0.99]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-4 shrink-0 opacity-80" />
                      <span>{category.name}</span>
                    </span>
                    {isSelected && <Check className="size-4 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default MobileDock;
