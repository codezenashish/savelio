"use client";

import * as React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import {
  FRIENDS_PROJECTS,
  FRIENDS_SECTION_DATA,
  type FriendProject,
  type FriendsSectionData,
} from "@/data/friends";
import { TextShimmer } from "@/components/ui/text-shimmer";

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
      <span className="flex size-4.5 shrink-0 items-center justify-center text-muted-foreground">
        <Heart className="size-3.5 fill-current opacity-60" />
      </span>
    );
  }

  return (
    <span className="flex size-4.5 shrink-0 items-center justify-center">
      <Image
        key={`${domain}-${attempt}-${faviconUrl}`}
        src={faviconUrl}
        alt={`${name} logo`}
        width={18}
        height={18}
        unoptimized
        onError={() => setAttempt((prev) => prev + 1)}
        className="size-4 object-contain rounded-xs"
      />
    </span>
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
      aria-label={`Open ${project.name} in a new tab`}
      title={project.href}
      className="group flex min-w-0 items-center gap-3 py-2 px-2.5 -mx-2.5 rounded-lg text-sm transition-colors duration-150 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <FriendFavicon
        href={project.href}
        name={project.name}
        logoUrl={project.logoUrl}
      />

      <span className="max-w-[42%] shrink-0 truncate font-medium text-foreground transition-colors">
        <TextShimmer as="span" duration={2}>
          {project.name}
        </TextShimmer>
      </span>

      <span className="min-w-0 flex-1 truncate text-xs sm:text-sm text-muted-foreground/85 transition-colors">
        {project.tagline}
      </span>
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

      <div className="divide-y divide-border/20">
        {projects.map((project) => (
          <FriendProjectRow key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default FriendsSection;
