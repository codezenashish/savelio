"use client";

import * as React from "react";
import { Drawer } from "vaul";
import { X, Sparkles } from "lucide-react";
import { UPCOMING_FEATURES, type FeatureItem } from "@/data/features";

export type { FeatureItem };

export interface BetaInfoDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  features?: FeatureItem[];
  title?: string;
  description?: string;
}

export function BetaInfoDrawer({
  open,
  onOpenChange,
  features = UPCOMING_FEATURES,
  title = "Upcoming Features & Beta Access",
  description = "A preview of capabilities currently in active development for Savelio.",
}: BetaInfoDrawerProps) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xs transition-opacity duration-300" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] flex-col rounded-t-3xl border-t border-border bg-card text-card-foreground shadow-2xl outline-none sm:max-w-2xl sm:mx-auto sm:border-x">
          <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-muted-foreground/30" />

          <div className="flex items-start justify-between border-b border-border px-6 py-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="size-3" />
                  Beta Roadmap
                </span>
              </div>
              <Drawer.Title className="text-lg font-semibold tracking-tight text-foreground">
                {title}
              </Drawer.Title>
              <Drawer.Description className="small-text mt-0.5">
                {description}
              </Drawer.Description>
            </div>

            <Drawer.Close asChild>
              <button
                type="button"
                aria-label="Close modal"
                className="rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="size-4" />
              </button>
            </Drawer.Close>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 pb-[max(1.5rem,env(safe-area-inset-bottom,1.5rem))]">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isBeta = feature.status === "Beta";
              const isSoon = feature.status === "Coming Soon";

              return (
                <div
                  key={feature.id}
                  className="flex items-start gap-3.5 rounded-xl border border-border bg-card/60 p-4 transition-all hover:border-border hover:bg-muted/50"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-foreground">
                    <Icon className="size-4.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 text-[10px] font-medium tracking-wide rounded-full border select-none ${
                          isBeta
                            ? "border-primary/30 bg-primary/10 text-primary"
                            : isSoon
                            ? "border-secondary-foreground/20 bg-secondary text-secondary-foreground"
                            : "border-border bg-muted text-muted-foreground"
                        }`}
                      >
                        {feature.status}
                      </span>
                    </div>

                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="mt-4 rounded-xl border border-border bg-muted/40 p-3.5 text-center small-text">
              <p>
                Have ideas or suggestions for Savelio? These features are rolling
                out in the upcoming release.
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default BetaInfoDrawer;
