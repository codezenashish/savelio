"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TextWaveHover } from "./sponsor-text-animation";
import {
  SPONSORS,
  SPONSORS_SECTION_DATA,
  type Sponsor,
  type SponsorsSectionData,
} from "@/data/sponsors";

export type { Sponsor, SponsorsSectionData };

function getSponsorFaviconUrl(domain: string, attempt: number): string | null {
  switch (attempt) {
    case 0:
      return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;
    case 1:
      return `https://icons.duckduckgo.com/ip3/${encodeURIComponent(domain)}.ico`;
    case 2:
      return `https://unavatar.io/${encodeURIComponent(domain)}`;
    default:
      return null;
  }
}

function SponsorFavicon({ href, name }: { href: string; name: string }) {
  const [attempt, setAttempt] = React.useState(0);

  const domain = React.useMemo(() => {
    try {
      return new URL(href).hostname;
    } catch {
      return "";
    }
  }, [href]);

  const faviconUrl = domain ? getSponsorFaviconUrl(domain, attempt) : null;

  if (!faviconUrl) {
    return (
      <div className="flex size-6 shrink-0 items-center justify-center text-muted-foreground group-hover:text-foreground">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
          aria-hidden="true"
        >
          <path d="M12 3c-1.5 0-3 1-3 2.5s1.2 2.5 3 2.5c2.5 0 4 2 4 4.5 0 2-1.5 3.5-3.5 3.5-2 0-3.5-1.5-3.5-3.5" />
          <path d="M9 16c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5" />
          <circle cx="12" cy="5" r="0.8" fill="currentColor" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex size-6 shrink-0 items-center justify-center">
      <Image
        key={`${domain}-${attempt}`}
        src={faviconUrl}
        alt={`${name} logo`}
        width={18}
        height={18}
        unoptimized
        onError={() => setAttempt((prev) => prev + 1)}
        className="size-4.5 object-contain rounded-xs group-hover:opacity-100 opacity-90"
      />
    </div>
  );
}

export interface SponsorsSectionProps {
  sponsors?: Sponsor[];
  sectionData?: SponsorsSectionData;
  onBecomeSponsor?: () => void;
}

function SponsorRowItem({ sponsor }: { sponsor: Sponsor }) {
  return (
    <a
      href={sponsor.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2.5 small-text hover:text-foreground"
    >
      <SponsorFavicon href={sponsor.href} name={sponsor.name} />

      <TextWaveHover
        segments={[
          {
            text: `${sponsor.name}:`,
            className: "text-foreground font-medium",
          },
          {
            text: " ",
            className: "",
          },
          {
            text: sponsor.tagline,
            className:
              "text-muted-foreground group-hover:text-foreground",
          },
        ]}
      />

      <ArrowUpRight className="size-3.5 text-muted-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}

export function SponsorsSection({
  sponsors = SPONSORS,
  sectionData = SPONSORS_SECTION_DATA,
  onBecomeSponsor,
}: SponsorsSectionProps) {
  return (
    <div className="pt-6 space-y-2.5">
      <div className="flex items-center gap-2">
        <span className="small-text font-medium">{sectionData.title}</span>
        {onBecomeSponsor && (
          <button
            type="button"
            onClick={onBecomeSponsor}
            className="inline-flex items-center justify-center rounded-md border border-border bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground hover:bg-muted hover:text-foreground active:scale-95 cursor-pointer"
          >
            {sectionData.becomeSponsorText}
          </button>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {sponsors.map((sponsor) => (
          <SponsorRowItem key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
}

export default SponsorsSection;
