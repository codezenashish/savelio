export interface CategoryPresentationDetails {
  title: string;
  description: string;
}

export const CATEGORY_METADATA_REGISTRY: Record<string, CategoryPresentationDetails> = {
  all: {
    title: "Developer Finds",
    description: "A curated collection of useful developer tools, libraries, and design resources.",
  },
  inspiration: {
    title: "Design Inspiration",
    description: "UI references, visual ideas, and creative web experiences for product teams.",
  },
  resources: {
    title: "Developer Resources",
    description: "Curated landing pages, design systems, community references, and libraries.",
  },
  tools: {
    title: "Developer Tools",
    description: "Utilities, component kits, code editors, and workflow tools for developers.",
  },
  portfolio: {
    title: "Developer Portfolios",
    description: "Personal portfolios, independent studios, and creative agencies worth exploring.",
  },
  "landing-pages": {
    title: "Landing Page Inspiration",
    description: "High-quality landing pages and product websites with thoughtful design.",
  },
  friends: {
    title: "Projects by Friends",
    description: "Hand-crafted tools, open-source libraries, and projects built by friends.",
  },
};

export const CATEGORY_SLUGS = Object.keys(CATEGORY_METADATA_REGISTRY);
