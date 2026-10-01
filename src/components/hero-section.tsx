"use client";

import * as React from "react";
import { BetaInfoDrawer } from "./beta-info-drawer";
import { SponsorsSection } from "./sponsors-section";
import { HERO_CONTENT } from "@/data/hero";

export function HeroSection() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <section className="w-full max-w-2xl">
        <div className="space-y-4">
          <p className="small-text font-normal">{HERO_CONTENT.greeting}</p>

          <p className="body-text leading-relaxed">
            This is{" "}
            <span className="inline-flex items-baseline font-medium text-foreground group cursor-default">
              <span className="mr-0.5 text-xs">🌱</span>
              <span className="font-semibold tracking-tight text-foreground">
                {HERO_CONTENT.brandName}
              </span>
            </span>
            , {HERO_CONTENT.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2 small-text">
            <span>
              <strong className="font-semibold text-foreground">
                {HERO_CONTENT.count}
              </strong>{" "}
              {HERO_CONTENT.countLabel}
            </span>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex items-center justify-center rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground shadow-xs transition hover:bg-accent hover:text-accent-foreground active:scale-95 cursor-pointer"
            >
              submit it
            </button>
          </div>

          <SponsorsSection onBecomeSponsor={() => setDrawerOpen(true)} />

          <div className="border-b border-border pt-6" />
        </div>
      </section>

      <BetaInfoDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        title="Community Submissions & Savelio Beta"
        description="Submit your portfolio or tool to be featured on Savelio, or learn more about our upcoming creator tools."
      />
    </>
  );
}

export default HeroSection;
