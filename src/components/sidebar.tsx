"use client";

import * as React from "react";
import {
  Layers,
  Sparkles,
  Component,
  Hammer,
  Palette,
  Wrench,
  PencilRuler,
  Library,
  Zap,
  LayoutTemplate,
  Database,
  Shapes,
  Type,
} from "lucide-react";

export const SIDEBAR_CATEGORIES = [
  { id: "all", name: "All", icon: Layers },
  { id: "inspiration", name: "Inspiration", icon: Sparkles },
  { id: "components", name: "Components", icon: Component },
  { id: "build", name: "Build", icon: Hammer },
  { id: "visuals", name: "Visuals", icon: Palette },
  { id: "utilities", name: "Utilities", icon: Wrench },
  { id: "design-engineers", name: "Design Engineers", icon: PencilRuler },
  { id: "component-libraries", name: "Component Libraries", icon: Library },
  { id: "motion", name: "Motion", icon: Zap },
  { id: "ui-libraries", name: "UI Libraries", icon: LayoutTemplate },
  { id: "backend-database", name: "Backend & Database", icon: Database },
  { id: "icons-assets", name: "Icons & Assets", icon: Shapes },
  { id: "fonts-typography", name: "Fonts & Typography", icon: Type },
];

export function Sidebar() {
  const [selectedId, setSelectedId] = React.useState("all");

  return (
    <nav aria-label="Categories" className="w-full select-none">
      <ul className="space-y-1">
        {SIDEBAR_CATEGORIES.map((category) => {
          const isActive = category.id === selectedId;
          const Icon = category.icon;

          return (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => setSelectedId(category.id)}
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
