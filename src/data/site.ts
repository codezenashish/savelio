export interface SiteConfig {
  name: string;
  url: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Savelio",
  url: "https://savelio.dev",
  title: "Savelio — Curated UI Components & Developer Libraries",
  description:
    "A hand-picked collection of the best UI libraries, components, animations, and developer tools on the web.",
  keywords: [
    "developer tools",
    "UI components",
    "react libraries",
    "design systems",
    "nextjs",
    "tailwind css",
    "animation",
    "web development",
  ],
  author: "Savelio",
};

export const HOME_PAGE_METADATA = {
  title: "Curated Developer Tools & UI Components",
  description:
    "Explore hand-picked developer tools, UI component libraries, and design engineering inspiration in the Savelio directory.",
};
