"use client";

import * as React from "react";
import { BetaInfoDrawer } from "./beta-info-drawer";
import { SponsorsSection } from "./sponsors-section";
import { HERO_CONTENT, type HeroData } from "@/data/hero";

export interface HeroSectionProps {
  content?: HeroData;
}

export function HeroSection({ content = HERO_CONTENT }: HeroSectionProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <section className="w-full max-w-2xl">
        <div className="space-y-4">
          <p className="small-text font-normal">{content.greeting}</p>

          <p className="body-text leading-relaxed">
            {content.prefix}
            <span className="inline-flex items-baseline font-medium text-foreground group cursor-default">
              <span className="mr-0.5 text-xs">{content.brandEmoji}</span>
              <span className="font-semibold tracking-tight text-foreground">
                {content.brandName}
              </span>
            </span>
            , {content.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2 small-text">
            <span>
              <strong className="font-semibold text-foreground">
                {content.count}
              </strong>{" "}
              {content.countLabel}
            </span>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center justify-center rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground shadow-xs hover:bg-accent hover:text-accent-foreground active:scale-95 cursor-pointer"
            >
              {content.submitButtonText}
            </button>
          </div>

          <SponsorsSection onBecomeSponsor={() => setDrawerOpen(true)} />

          <div className="border-b border-border pt-6" />
        </div>
      </section>

      <BetaInfoDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        title={content.submissionDrawer.title}
        description={content.submissionDrawer.description}
      />
    </>
  );
}

export default HeroSection;
