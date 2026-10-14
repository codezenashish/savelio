"use client";

import * as React from "react";
import { FriendsSection } from "./friends-section";
import { HERO_CONTENT, type HeroData } from "@/data/hero";
import { URL_ENTRIES } from "@/data/url-library";
import { Separator } from "@/components/ui";

export interface HeroSectionProps {
  content?: HeroData;
  totalTools?: number;
}

export function HeroSection({ content = HERO_CONTENT, totalTools }: HeroSectionProps) {
  const count = totalTools ?? URL_ENTRIES.length ?? content.count;

  return (
    <section className="w-full max-w-2xl">
      <div className="space-y-4">
        <p className="small-text font-normal text-muted-foreground/80">
          {content.greeting}
        </p>

        <h1 className="body-text leading-relaxed font-normal text-muted-foreground/90">
          {content.prefix}
          <span className="inline-flex items-baseline font-medium text-foreground group cursor-default">
            <span className="mr-0.5 text-xs">{content.brandEmoji}</span>
            <span className="font-semibold tracking-tight text-foreground">
              {content.brandName}
            </span>
          </span>
          , {content.description}
        </h1>

        <div className="pt-1 small-text">
          <span>
            <strong className="font-semibold text-foreground">
              {count}
            </strong>{" "}
            {content.countLabel}
          </span>
        </div>

        <div className="pt-2">
          <FriendsSection />
        </div>

        <Separator className="mt-6" />
      </div>
    </section>
  );
}

export default HeroSection;
