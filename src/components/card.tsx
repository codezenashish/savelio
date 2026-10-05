"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Globe } from "lucide-react";
import type { CardItem } from "@/data/cards";

export type { CardItem } from "@/data/cards";

export interface CardProps {
  card?: CardItem;
  title?: string;
  url?: string;
  image?: string;
  imageHeight?: number;
  href?: string;
  className?: string;
}

export function Card(props: CardProps) {
  const { card, className = "" } = props;
  const title = card?.title ?? props.title ?? "";
  const url = card?.url ?? props.url ?? "";
  const image = card?.image ?? props.image;
  const imageHeight = card?.imageHeight ?? props.imageHeight ?? 1200;
  const href = card?.href ?? props.href ?? `https://${url}`;
  const description = card?.description;
  const tags = card?.tags;
  const favicon = card?.favicon;

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl ${className}`}
    >
      <div className="rounded-xl border border-border bg-card p-2 group-hover:border-foreground/20 group-hover:shadow-xs">
        {image ? (
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg border border-border bg-background">
            <motion.div
              className="absolute inset-x-0 top-0"
              animate={{ y: isHovered ? "-55%" : "0%" }}
              
            >
              <Image
                src={image}
                alt={`${title} full-page preview`}
                width={1808}
                height={imageHeight}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                className="block h-auto w-full"
                priority={false}
              />
            </motion.div>
          </div>
        ) : (
          <div className="flex aspect-16/10 w-full flex-col justify-between rounded-lg border border-border bg-muted/20 p-4 group-hover:bg-muted/30">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                {favicon ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={favicon}
                    alt=""
                    width={18}
                    height={18}
                    className="size-4.5 shrink-0 rounded-xs object-contain"
                  />
                ) : (
                  <Globe className="size-4 shrink-0 text-muted-foreground" />
                )}
                <span className="font-mono text-xs text-muted-foreground truncate">
                  {url}
                </span>
              </div>
            </div>

            {description && (
              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                {description}
              </p>
            )}

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-1">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-muted/80 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="mt-2.5 flex items-baseline justify-between gap-2 px-1">
        <span className="font-semibold text-foreground truncate group-hover:text-foreground/80">
          {title}
        </span>
        <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0 font-mono">
          <span>{url}</span>
          <ArrowUpRight className="size-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
      </div>
    </a>
  );
}

export default Card;
