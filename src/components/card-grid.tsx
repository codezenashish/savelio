"use client";

import * as React from "react";
import { OgCard } from "./og-card";
import { SHOWCASE_CARDS, type CardItem } from "@/data/cards";
import type { CategoryId } from "@/data/sidebar";

export interface CardGridProps {
  cards?: CardItem[];
  selectedCategory?: CategoryId;
  categoryName?: string;
  emptyMessage?: string;
}

export function CardGrid({
  cards,
  selectedCategory,
  categoryName,
  emptyMessage,
}: CardGridProps) {
  const displayedCards = React.useMemo(() => {
    if (cards) return cards;
    if (!selectedCategory || selectedCategory === "all") return SHOWCASE_CARDS;
    return SHOWCASE_CARDS.filter((card) => card.category === selectedCategory);
  }, [cards, selectedCategory]);

  if (displayedCards.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <p className="small-text text-muted-foreground">
          {emptyMessage ??
            `No items found for ${categoryName ?? "this category"}. More additions coming soon.`}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {displayedCards.map((card: CardItem) => (
        <OgCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardGrid;
