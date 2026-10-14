"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CATEGORIES,
  type CategoryId,
  type CategoryItem,
} from "@/data/sidebar";

export interface SidebarProps {
  selectedId?: CategoryId;
  onSelectCategory?: (categoryId: CategoryId) => void;
  categories?: CategoryItem[];
}

export function Sidebar({
  selectedId: controlledSelectedId,
  onSelectCategory,
  categories = CATEGORIES,
}: SidebarProps) {
  const shouldReduceMotion = useReducedMotion();
  const [internalSelectedId, setInternalSelectedId] =
    React.useState<CategoryId>("all");

  const selectedId = controlledSelectedId ?? internalSelectedId;

  const handleSelect = (id: CategoryId) => {
    if (onSelectCategory) {
      onSelectCategory(id);
    } else {
      setInternalSelectedId(id);
    }
  };

  return (
    <nav aria-label="Categories" className="w-full select-none">
      <ul className="space-y-0.5">
        {categories.map((category: CategoryItem) => {
          const isActive = category.id === selectedId;
          const Icon = category.icon;

          return (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => handleSelect(category.id)}
                className={`group relative flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-sm transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isActive
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground/80 hover:bg-muted/40 hover:text-foreground"
                }`}
              >
                {isActive && (
                  shouldReduceMotion ? (
                    <span className="absolute inset-0 rounded-lg bg-muted/80 shadow-2xs" />
                  ) : (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-lg bg-muted/80 shadow-2xs"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )
                )}

                <div className="relative z-10 flex min-w-0 items-center gap-2.5">
                  <Icon
                    className={`size-4 shrink-0 transition-opacity duration-150 ${
                      isActive
                        ? "text-foreground opacity-100"
                        : "text-muted-foreground opacity-60 group-hover:opacity-100"
                    }`}
                  />
                  <span className="truncate">{category.name}</span>
                </div>

                {isActive && (
                  <span
                    aria-hidden="true"
                    className="relative z-10 size-1.5 shrink-0 rounded-full bg-foreground"
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
