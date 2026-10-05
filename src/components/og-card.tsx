"use client";

import * as React from "react";
import { ArrowUpRight, Globe, ImageOff } from "lucide-react";
import { useMicrolink } from "@/hooks/use-microlink";
import type { CardItem } from "@/data/cards";

export type { CardItem } from "@/data/cards";

export interface OgCardProps {
  card?: CardItem;
  title?: string;
  url?: string;
  href?: string;
  className?: string;
}

function OgImageSkeleton() {
  return (
    <div className="flex aspect-[1200/630] w-full items-center justify-center rounded-lg border border-border bg-muted/30">
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <div className="size-6 animate-pulse rounded-full bg-muted/60" />
        <div className="h-2 w-16 animate-pulse rounded bg-muted/60" />
      </div>
    </div>
  );
}

function OgImageFallback({ url }: { url: string }) {
  return (
    <div className="flex aspect-[1200/630] w-full flex-col items-center justify-center gap-2 rounded-lg border border-border bg-muted/20">
      <ImageOff className="size-6 text-muted-foreground/50" />
      <span className="text-[11px] font-mono text-muted-foreground/50">
        {url}
      </span>
    </div>
  );
}

export function OgCard(props: OgCardProps) {
  const { card, className = "" } = props;
  const title = card?.title ?? props.title ?? "";
  const url = card?.url ?? props.url ?? "";
  const href = card?.href ?? props.href ?? `https://${url}`;

  const microlink = useMicrolink(href);

  const [imgFailed, setImgFailed] = React.useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl ${className}`}
    >
      <div className="rounded-xl border border-border bg-card p-2 group-hover:border-foreground/20 group-hover:shadow-xs">
        {microlink.isLoading ? (
          <OgImageSkeleton />
        ) : microlink.ogImage && !imgFailed ? (
          <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-lg border border-border bg-background">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={microlink.ogImage}
              alt={`${title} preview`}
              onError={() => setImgFailed(true)}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <OgImageFallback url={url} />
        )}
      </div>

      <div className="mt-2.5 flex items-baseline justify-between gap-2 px-1">
        <span className="font-semibold text-foreground truncate">
          {title}
        </span>
        <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0 font-mono">
          <Globe className="size-3 text-muted-foreground/60" />
          <span>{url}</span>
          <ArrowUpRight className="size-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
      </div>
    </a>
  );
}

export default OgCard;
