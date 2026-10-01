"use client";

import * as React from "react";
import { Sidebar } from "@/components/sidebar";
import { HeroSection } from "@/components/hero-section";
import { PortfolioCard } from "@/components/portfolio-card";
import { CATEGORIES, type CategoryId } from "@/data/categories";
import { SHOWCASE_CARDS, type CardItem } from "@/data/cards";

export function DirectoryView() {
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryId>("all");

  const currentCategory = React.useMemo(() => {
    return (
      CATEGORIES.find((cat) => cat.id === selectedCategory) ?? CATEGORIES[0]
    );
  }, [selectedCategory]);

  const filteredCards = React.useMemo(() => {
    if (selectedCategory === "all") return SHOWCASE_CARDS;
    return SHOWCASE_CARDS.filter((card) => card.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex min-h-[calc(100svh-5rem)] w-full min-w-0 gap-8 px-4 py-6 md:gap-10 md:px-6">
      <aside className="hidden w-56 shrink-0 md:block">
        <div className="sticky top-6 flex h-fit flex-col">
          <Sidebar
            selectedId={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </aside>

      <main className="flex-1 min-w-0 space-y-10">
        <HeroSection />

        <section className="space-y-4 pt-2">
          <div className="space-y-1">
            <h1 className="heading tracking-tight">{currentCategory.title}</h1>
            <p className="body-text">{currentCategory.description}</p>
          </div>

          {filteredCards.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredCards.map((card: CardItem) => (
                <PortfolioCard
                  key={card.id}
                  title={card.title}
                  url={card.url}
                  href={card.href}
                  image={card.image}
                  imageHeight={card.imageHeight}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <p className="small-text text-muted-foreground">
                No items found for {currentCategory.name}. More additions coming
                soon.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default DirectoryView;
