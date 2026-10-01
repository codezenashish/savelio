"use client";

import * as React from "react";
import {
  CATEGORIES,
  type CategoryId,
  type CategoryItem,
} from "@/data/categories";

export interface SidebarProps {
  selectedId?: CategoryId;
  onSelectCategory?: (categoryId: CategoryId) => void;
}

export function Sidebar({
  selectedId: controlledSelectedId,
  onSelectCategory,
}: SidebarProps) {
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
      <ul className="space-y-1">
        {CATEGORIES.map((category: CategoryItem) => {
          const isActive = category.id === selectedId;
          const Icon = category.icon;

          return (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => handleSelect(category.id)}
                className={`group flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 small-text transition-colors ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground/80 hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon
                    className={`size-4 shrink-0 transition-opacity ${
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
                    className="size-1.5 shrink-0 rounded-full bg-foreground shadow-xs animate-in fade-in duration-200"
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
