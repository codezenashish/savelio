import type { CategoryId } from "@/data/categories";

export interface CardItem {
  id: string;
  title: string;
  url: string;
  href: string;
  image: string;
  imageHeight: number;
  category: Exclude<CategoryId, "all">;
  description: string;
  tags?: string[];
}

export const SHOWCASE_CARDS: CardItem[] = [
  {
    id: "uisfx",
    title: "UI SFX",
    url: "uisfx.com",
    href: "https://uisfx.com",
    image: "/shots/screencapture-uisfx-2026-09-30-23_09_03.png",
    imageHeight: 8045,
    category: "components",
    description:
      "Sound effects crafted for modern user interfaces and micro-interactions.",
    tags: ["audio", "micro-interactions", "react"],
  },
  {
    id: "unavatar",
    title: "Unavatar",
    url: "unavatar.io",
    href: "https://unavatar.io",
    image: "/shots/screencapture-unavatar-io-2026-10-01-09_51_35.png",
    imageHeight: 11256,
    category: "utilities",
    description:
      "Get user avatars from social networks, domains, or gravatar in a single query.",
    tags: ["avatars", "api", "utilities"],
  },
];
