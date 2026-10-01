import {
  Layers,
  Sparkles,
  Component,
  Hammer,
  Palette,
  Wrench,
  PencilRuler,
  Library,
  Zap,
  LayoutTemplate,
  Database,
  Shapes,
  Type,
  type LucideIcon,
} from "lucide-react";

export interface CategoryItem {
  id: CategoryId;
  name: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export type CategoryId =
  | "all"
  | "inspiration"
  | "components"
  | "build"
  | "visuals"
  | "utilities"
  | "design-engineers"
  | "component-libraries"
  | "motion"
  | "ui-libraries"
  | "backend-database"
  | "icons-assets"
  | "fonts-typography";

export const CATEGORIES: CategoryItem[] = [
  {
    id: "all",
    name: "All",
    title: "All Developer Tools & Components",
    description:
      "Explore the complete directory of hand-picked libraries, tools, and UI inspiration.",
    icon: Layers,
  },
  {
    id: "inspiration",
    name: "Inspiration",
    title: "Design & Interaction Inspiration",
    description:
      "Carefully curated design engineer portfolios and creative technology showcases.",
    icon: Sparkles,
  },
  {
    id: "components",
    name: "Components",
    title: "Crafted UI Components",
    description:
      "Production-ready, accessible, and beautifully styled components for modern apps.",
    icon: Component,
  },
  {
    id: "build",
    name: "Build",
    title: "Build Tools & CLI Utilities",
    description:
      "Essential toolchains and scaffolding utilities that accelerate modern development.",
    icon: Hammer,
  },
  {
    id: "visuals",
    name: "Visuals",
    title: "Visual Assets & Shaders",
    description:
      "Visual assets, WebGL experiments, canvas utilities, and design resources.",
    icon: Palette,
  },
  {
    id: "utilities",
    name: "Utilities",
    title: "Development Utilities",
    description:
      "High-utility helper libraries, avatars, formatting, and everyday dev workflows.",
    icon: Wrench,
  },
  {
    id: "design-engineers",
    name: "Design Engineers",
    title: "Design Engineer Portfolios",
    description:
      "Inspiring portfolios and personal sites crafted by leading design engineers.",
    icon: PencilRuler,
  },
  {
    id: "component-libraries",
    name: "Component Libraries",
    title: "Component Libraries",
    description:
      "Comprehensive UI design systems built on Tailwind CSS, Radix, and React.",
    icon: Library,
  },
  {
    id: "motion",
    name: "Motion",
    title: "Motion & Animation Libraries",
    description:
      "Fluid animation engines, physics transitions, and micro-interaction utilities.",
    icon: Zap,
  },
  {
    id: "ui-libraries",
    name: "UI Libraries",
    title: "UI Frameworks & Kits",
    description:
      "Headless UI primitives and full-featured component ecosystems.",
    icon: LayoutTemplate,
  },
  {
    id: "backend-database",
    name: "Backend & Database",
    title: "Backend & Database Infrastructure",
    description:
      "Modern databases, serverless platforms, authentication, and ORM toolsets.",
    icon: Database,
  },
  {
    id: "icons-assets",
    name: "Icons & Assets",
    title: "Icons & Graphics",
    description:
      "Consistent, crisp SVG icon sets and design tokens for web and mobile.",
    icon: Shapes,
  },
  {
    id: "fonts-typography",
    name: "Fonts & Typography",
    title: "Typography & Web Fonts",
    description:
      "Distinctive display and monospace typefaces for developer platforms.",
    icon: Type,
  },
];
