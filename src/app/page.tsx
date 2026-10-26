import SideBar, { MobileDock } from "@/components/layout/sidebar";
import ModeToggle from "@/components/layout/theme-toggel";
import { CuratedGallery } from "@/components/ui/curated-gallery";
import { KuraLogo } from "@/components/ui/kura-logo";
import { db } from "@/db";
import { links } from "@/db/schema";
import { desc, isNotNull, eq, and, or } from "drizzle-orm";
import { unstable_cache } from "next/cache";

type CuratedLink = typeof links.$inferSelect;

interface HomePageProps {
  searchParams?: Promise<{ category?: string }>;
}

interface CategoryPresentationDetails {
  title: string;
  description: string;
}

const CATEGORY_METADATA_REGISTRY: Record<string, CategoryPresentationDetails> = {
  all: {
    title: "All Finds",
    description: "Curated collection of developer tools, web inspirations, and design resources.",
  },
  inspiration: {
    title: "Design Inspiration",
    description: "Exceptional UI design, visual references, and creative web experiences.",
  },
  resources: {
    title: "Resources",
    description: "Curated landing pages, design systems, community references, and libraries.",
  },
  tools: {
    title: "Developer Tools",
    description: "Essential dev utilities, component kits, code editors, and workflow boosters.",
  },
  portfolio: {
    title: "Portfolios",
    description: "Standout personal portfolios, independent studios, and creative agencies.",
  },
  "landing-pages": {
    title: "Landing Pages",
    description: "Best-in-class conversion-optimized and high-impact landing pages.",
  },
  friends: {
    title: "Built by Friends",
    description: "Hand-crafted tools, open-source libraries, and projects built by friends.",
  },
};

const HIGH_PRIORITY_PREVIEW_IMAGE_COUNT = 4;

const getCachedCuratedLinks = unstable_cache(
  async (categoryFilter: string): Promise<CuratedLink[]> => {
    const activeCategoryFilterCondition =
      categoryFilter && categoryFilter !== "all"
        ? categoryFilter === "resources"
          ? and(
              isNotNull(links.posterUrl),
              or(
                eq(links.category, "resources"),
                eq(links.category, "landing-pages"),
                eq(links.category, "friends")
              )
            )
          : and(
              isNotNull(links.posterUrl),
              eq(links.category, categoryFilter)
            )
        : isNotNull(links.posterUrl);

    return db
      .select()
      .from(links)
      .where(activeCategoryFilterCondition)
      .orderBy(desc(links.createdAt));
  },
  ["curated-links-by-category"],
  {
    revalidate: 3600, // 1 hour edge cache revalidation
    tags: ["links"],
  }
);

export default async function Home({ searchParams }: HomePageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const selectedCategoryFilter = resolvedSearchParams?.category || "all";

  let curatedLinks: CuratedLink[] = [];
  try {
    curatedLinks = await getCachedCuratedLinks(selectedCategoryFilter);
  } catch (databaseQueryError) {
    console.error("Failed to load curated links from database:", databaseQueryError);
  }

  const activeCategoryPresentation =
    CATEGORY_METADATA_REGISTRY[selectedCategoryFilter] ||
    CATEGORY_METADATA_REGISTRY.all;

  return (
    <div className="min-h-screen bg-background w-full">
      {/* Mobile Header (visible on mobile only) */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 border-b border-border/50 bg-background/85 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <KuraLogo className="size-6 text-foreground" />
          <span className="subheading font-bold">
            Kura
          </span>
        </div>

        <ModeToggle />
      </div>

      {/* Floating Mobile Dock Pill (Search + Menu triggering Vaul bottom drawer) */}
      <MobileDock activeCategoryId={selectedCategoryFilter} />

      {/* Perfectly Centered Content Layout constrained to max-w-4xl */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-10 flex flex-col md:flex-row items-stretch md:items-start gap-8 md:gap-12 min-w-0">
        {/* Desktop Sidebar (hidden on mobile) */}
        <SideBar activeId={selectedCategoryFilter} />

        {/* Main Gallery Area with Grid & List View Toggle */}
        <main className="flex-1 w-full min-w-0 pb-24 md:pb-8">
          <CuratedGallery
            links={curatedLinks}
            categoryTitle={activeCategoryPresentation.title}
            categoryDescription={activeCategoryPresentation.description}
            highPriorityImageCount={HIGH_PRIORITY_PREVIEW_IMAGE_COUNT}
          />
        </main>
      </div>
    </div>
  );
}
