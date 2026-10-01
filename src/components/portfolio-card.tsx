"use client";

import Image from "next/image";
import { motion } from "motion/react";

export type { CardItem } from "@/data/cards";

export interface PortfolioCardProps {
  title: string;
  url: string;
  image: string;
  imageHeight: number;
  href?: string;
  className?: string;
}

export function PortfolioCard({
  title,
  url,
  image,
  imageHeight,
  href,
  className = "",
}: PortfolioCardProps) {
  return (
    <a
      href={href ?? `https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full ${className}`}
    >
      <div className="rounded-xl border border-border bg-card p-2">
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg border border-border bg-background">
          <motion.div
            className="absolute inset-x-0 top-0"
            animate={{ y: ["0%", "-58%", "0%"] }}
            transition={{
              duration: 18,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
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
      </div>

      <div className="mt-2.5 flex items-baseline justify-between gap-2 px-1">
        <span className="font-semibold text-foreground">{title}</span>
        <span className="text-sm text-muted-foreground">{url}</span>
      </div>
    </a>
  );
}

export default PortfolioCard;
