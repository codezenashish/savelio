"use client";

import * as React from "react";
import { Drawer } from "vaul";
import { MorphIcon } from "morphicons/react";
import { Menu } from "lucide"; // data, not components
import { Layers, Check, X as XIcon } from "lucide-react";
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
    <Drawer.Root direction="right" open={open} onOpenChange={setOpen}>
      <aside
        aria-label="Mobile Navigation"
        className={`fixed bottom-5 left-1/2 z-40 -translate-x-1/2 md:hidden transition-all duration-200 ${
          open ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="Open menu"
          className="relative flex size-11 items-center justify-center text-foreground transition-transform duration-150 hover:opacity-80 active:scale-95 focus-visible:outline-none cursor-pointer"
        >
          <MorphIcon icon={Menu} size={22} />
        </button>
      </aside>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xs" />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed z-50 outline-none w-77.5 flex"
          style={{ "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties}
        >
          <div className="bg-card text-card-foreground border border-border h-full w-full grow p-5 flex flex-col rounded-2xl shadow-2xl overflow-hidden">
            <div className="w-full pb-3 border-b border-border flex items-center justify-between">
              <div>
                <Drawer.Title className="font-semibold text-base text-foreground">
                  {dockData.title}
                </Drawer.Title>
                <Drawer.Description className="text-xs text-muted-foreground mt-0.5">
                  {dockData.description}
                </Drawer.Description>
              </div>
              <Drawer.Close asChild>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 active:bg-muted transition-colors cursor-pointer"
                >
                  <XIcon className="size-4" />
                </button>
              </Drawer.Close>
            </div>

            <div className="flex-1 overflow-y-auto pt-3">
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
                        setTimeout(() => {
                          if (category.id === "all") {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          } else {
                            const el = document.getElementById(`category-${category.id}`);
                            if (el) {
                              el.scrollIntoView({ behavior: "smooth" });
                            }
                          }
                        }, 100);
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer ${
                        isSelected
                          ? "bg-foreground font-semibold text-background"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground active:bg-muted"
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
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default MobileDock;
