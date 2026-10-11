"use client";

import * as React from "react";
import { CATEGORIES, type CategoryId } from "@/data/sidebar";

interface CategoryContextValue {
  selectedCategory: CategoryId;
  setSelectedCategory: (category: CategoryId) => void;
}

const CategoryContext = React.createContext<CategoryContextValue | undefined>(
  undefined,
);

function getInitialCategory(): CategoryId {
  if (typeof window === "undefined") return "all";
  try {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    if (categoryParam && CATEGORIES.some((c) => c.id === categoryParam)) {
      return categoryParam as CategoryId;
    }
  } catch {
    // Ignore if running in unsupported environment
  }
  return "all";
}

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategoryState] =
    React.useState<CategoryId>(getInitialCategory);

  React.useEffect(() => {
    const handlePopState = () => {
      setSelectedCategoryState(getInitialCategory());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const setSelectedCategory = React.useCallback((category: CategoryId) => {
    setSelectedCategoryState((prev) => {
      if (prev === category) return prev;
      try {
        const url = new URL(window.location.href);
        const currentParam = url.searchParams.get("category");
        const targetParam = category === "all" ? null : category;
        if (currentParam !== targetParam) {
          if (targetParam === null) {
            url.searchParams.delete("category");
          } else {
            url.searchParams.set("category", targetParam);
          }
          window.history.replaceState({}, "", url.toString());
        }
      } catch {
        // Ignore if replaceState fails
      }
      return category;
    });
  }, []);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = React.useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}
