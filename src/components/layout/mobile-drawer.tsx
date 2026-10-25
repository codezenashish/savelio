"use client";

import React, { useState } from "react";
import { Drawer } from "vaul";
import { X } from "lucide-react";

export interface MobileDrawerProps {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  title?: string;
  className?: string;
}

export function MobileDrawer({
  children,
  trigger,
  title = "Drawer for React.",
  className = "",
}: MobileDrawerProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer.Root open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <Drawer.Trigger asChild>
        {trigger ? (
          trigger
        ) : (
          <button
            type="button"
            className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-background px-4 text-sm font-medium shadow-sm transition-all hover:bg-muted border border-border/80 text-foreground"
          >
            Open Drawer
          </button>
        )}
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity" />
        <Drawer.Content
          className={`bg-muted flex flex-col rounded-t-[16px] max-h-[85vh] h-fit fixed bottom-0 left-0 right-0 z-50 outline-none ${className}`}
        >
          <div className="p-5 bg-background rounded-t-[16px] flex-1 overflow-y-auto">
            <div
              aria-hidden
              className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted-foreground/30 mb-6"
            />
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <Drawer.Title className="font-medium text-foreground text-base">
                  {title}
                </Drawer.Title>
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label="Close drawer"
                  className="size-7 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              </div>

              {children}
            </div>
          </div>

          <div className="p-4 bg-muted/80 border-t border-border/50 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              <a
                className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                href="https://github.com/emilkowalski/vaul"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3.5 h-3.5 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
              <a
                className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                href="https://twitter.com/emilkowalski_"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3.5 h-3.5 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default MobileDrawer;

