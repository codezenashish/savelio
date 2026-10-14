"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, Heart } from "lucide-react";
import {
  FRIENDS_PROJECTS,
  FRIENDS_SECTION_DATA,
  type FriendProject,
  type FriendsSectionData,
} from "@/data/friends";

export type { FriendProject, FriendsSectionData };

function getFriendFaviconUrl(domain: string, attempt: number): string | null {
  switch (attempt) {
    case 0:
      return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;
    case 1:
      return `https://unavatar.io/${encodeURIComponent(domain)}`;
    case 2:
      return `https://icons.duckduckgo.com/ip3/${encodeURIComponent(domain)}.ico`;
    default:
      return null;
  }
}

function FriendFavicon({
  href,
  name,
  logoUrl: explicitLogoUrl,
}: {
  href: string;
  name: string;
  logoUrl?: string;
}) {
  const [attempt, setAttempt] = React.useState(0);

  const domain = React.useMemo(() => {
    try {
      return new URL(href).hostname;
    } catch {
      return "";
    }
  }, [href]);

  const faviconUrl = React.useMemo(() => {
    if (explicitLogoUrl && attempt === 0) {
      return explicitLogoUrl;
    }
    const fallbackAttempt = explicitLogoUrl ? attempt - 1 : attempt;
    return domain ? getFriendFaviconUrl(domain, fallbackAttempt) : null;
  }, [explicitLogoUrl, attempt, domain]);

  if (!faviconUrl) {
    return (
      <div className="flex size-5 shrink-0 items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
        <Heart className="size-3.5 fill-current opacity-60" />
      </div>
    );
  }

  return (
    <div className="flex size-5 shrink-0 items-center justify-center rounded-xs overflow-hidden">
      <Image
        key={`${domain}-${attempt}-${faviconUrl}`}
        src={faviconUrl}
        alt={`${name} logo`}
        width={18}
        height={18}
        unoptimized
        onError={() => setAttempt((prev) => prev + 1)}
        className="size-4 object-contain rounded-xs opacity-90 transition-opacity group-hover:opacity-100"
      />
    </div>
  );
}

export interface FriendsSectionProps {
  projects?: FriendProject[];
  sectionData?: FriendsSectionData;
  onAddProject?: () => void;
}

function FriendProjectRow({ project }: { project: FriendProject }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2.5 rounded-lg py-1.5 px-2 -mx-2 text-xs sm:text-sm transition-colors duration-150 hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <FriendFavicon
        href={project.href}
        name={project.name}
        logoUrl={project.logoUrl}
      />

      <div className="flex items-center gap-1.5 truncate">
        <span className="font-semibold text-foreground tracking-tight">
          {project.name}:
        </span>
        <span className="text-muted-foreground transition-colors group-hover:text-foreground truncate">
          {project.tagline}
        </span>
      </div>

      <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground/70 transition-colors group-hover:text-foreground" />
    </a>
  );
}

export function FriendsSection({
  projects = FRIENDS_PROJECTS,
  sectionData = FRIENDS_SECTION_DATA,
}: FriendsSectionProps) {
  return (
    <div className="pt-2 space-y-1.5">
      <div className="flex items-center gap-1.5">
        <Heart className="size-3 text-red-500/80 fill-red-500/80" />
        <span className="small-text font-semibold uppercase tracking-wider text-muted-foreground text-[11px]">
          {sectionData.title}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        {projects.map((project) => (
          <FriendProjectRow key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default FriendsSection;
