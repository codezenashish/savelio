"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Images,
  Lightbulb,
  LayoutGrid,
  Code2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { KuraLogo } from "@/components/ui/kura-logo";
import ModeToggle from "./theme-toggel";

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export const SIDEBAR_NAVIGATION_OPTIONS: NavigationItem[] = [
  {
    id: "all",
    label: "Finds",
    href: "/",
    icon: Images,
  },
  {
    id: "inspiration",
    label: "Inspiration",
    href: "/?category=inspiration",
    icon: Lightbulb,
  },
  {
    id: "resources",
    label: "Resources",
    href: "/?category=resources",
    icon: LayoutGrid,
  },
  {
    id: "tools",
    label: "Tools",
    href: "/?category=tools",
    icon: Code2,
  },
  {
    id: "portfolio",
    label: "Portfolios",
    href: "/?category=portfolio",
    icon: Users,
  },
  {
    id: "landing-pages",
    label: "Landing Pages",
    href: "/?category=landing-pages",
    icon: Images,
  },
  {
    id: "friends",
    label: "By Friends",
    href: "/?category=friends",
    icon: Users,
  },
];

interface SidebarContentProps {
  selectedCategoryId?: string;
  onCategorySelect?: (categoryId: string) => void;
}

function SidebarContentInner({
  selectedCategoryId,
  onCategorySelect,
}: SidebarContentProps) {
  const searchParams = useSearchParams();
  const urlQueryCategory = searchParams?.get("category");
  const effectiveActiveCategoryId =
    selectedCategoryId ?? (urlQueryCategory || "all");

  return (
    <div className="flex flex-col h-full justify-between gap-6 select-none bg-background text-foreground">
      <div className="flex flex-col gap-5">
        {/* Kura Brand Logo */}
        <div className="flex items-center pt-1">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 group cursor-pointer"
            aria-label="Kura — Home"
          >
            <KuraLogo className="size-8 text-foreground transition-transform duration-200 group-hover:scale-105" />
          </Link>
        </div>

        {/* App Description */}
        <p className="small-text leading-snug">
          Curated developer tools, libraries, and design resources.
        </p>

        {/* Action Button */}
        <Button
          variant="default"
          className="w-full cursor-pointer rounded-full h-9 body-text text-primary-foreground! font-medium transition-opacity hover:opacity-90 active:scale-[0.99] bg-primary shadow-xs"
        >
          Submit test
        </Button>

        {/* Browse Navigation Section */}
        <div className="flex flex-col gap-1.5 pt-1">
          <span className="small-text text-muted-foreground/80 px-3 py-1 font-medium">
            Browse
          </span>

          <nav aria-label="Browse navigation">
            <ul className="flex flex-col gap-1">
              {SIDEBAR_NAVIGATION_OPTIONS.map((navigationItem) => {
                const NavigationIcon = navigationItem.icon;
                const isItemActive =
                  effectiveActiveCategoryId === navigationItem.id;

                return (
                  <li key={navigationItem.id}>
                    <Link
                      href={navigationItem.href}
                      onClick={() => onCategorySelect?.(navigationItem.id)}
                      aria-current={isItemActive ? "page" : undefined}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left body-text transition-colors duration-150 group cursor-pointer ${
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
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Footer Section without hard border */}
      <div className="pt-4 flex items-center justify-between">
        <a
          href="#feedback"
          className="small-text underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Share feedback
        </a>
        <ModeToggle />
      </div>
    </div>
  );
}

export function SidebarContent(props: SidebarContentProps) {
  return (
    <React.Suspense fallback={null}>
      <SidebarContentInner {...props} />
    </React.Suspense>
  );
}

interface SideBarProps {
  activeId?: string;
  onSelectCategory?: (categoryId: string) => void;
  className?: string;
}

export const SideBar: React.FC<SideBarProps> = ({
  activeId,
  onSelectCategory,
  className = "",
}) => {
  return (
    <aside
      aria-label="Sidebar navigation"
      className={`hidden md:flex flex-col w-56 lg:w-60 shrink-0 sticky top-10 self-start h-[calc(100vh-5rem)] bg-background text-foreground justify-between ${className}`}
    >
      <SidebarContent
        selectedCategoryId={activeId}
        onCategorySelect={onSelectCategory}
      />
    </aside>
  );
};

export {
  MobileDock,
  MobileDock as MobileSidebarDrawer,
  type MobileDockProps,
} from "./mobile-dock";

export default SideBar;
