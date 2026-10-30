import SideBar, { MobileDock } from "@/components/layout/sidebar";
import ModeToggle from "@/components/layout/theme-toggel";
import { CuratedGallery } from "@/components/ui/curated-gallery";
import { KuraLogo } from "@/components/ui/kura-logo";
import { db } from "@/db";
import { links } from "@/db/schema";
import { desc, isNotNull, eq, and, or, lt } from "drizzle-orm";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GalleryPagination from "@/components/ui/gallery-pagination";
import { getSiteUrl } from "@/libs/site-url";
import { CATEGORY_METADATA_REGISTRY } from "@/libs/categories";

type CuratedLink = Omit<typeof links.$inferSelect, "createdAt"> & {
  createdAt: Date | string;
};

interface HomePageProps {
  searchParams?: Promise<{
    category?: string | string[];
    after?: string | string[];
  }>;
}

const PAGE_SIZE = 24;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

interface LinkCursor {
  createdAt: Date;
  id: string;
}

function toIsoDateString(date: Date | string | number): string {
  if (date instanceof Date) {
    return date.toISOString();
  }
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

function decodeCursor(encodedCursor: string | undefined): LinkCursor | undefined {
  if (!encodedCursor) return undefined;

  let decodedCursor: string;
  try {
    decodedCursor = Buffer.from(
      encodedCursor,
      "base64url"
    ).toString("utf8");
  } catch {
    notFound();
  }

  const cursorParts = decodedCursor.split("~");
  const createdAtValue = cursorParts[0];
  const id = cursorParts[1];

  if (
    cursorParts.length !== 2 ||
    !createdAtValue ||
    !id ||
    !UUID_PATTERN.test(id)
  ) {
    notFound();
  }

  const createdAt = new Date(createdAtValue);
  if (Number.isNaN(createdAt.getTime())) notFound();

  return { createdAt, id };
}

function encodeCursor(link: CuratedLink): string {
  return Buffer.from(`${toIsoDateString(link.createdAt)}~${link.id}`).toString("base64url");
}

function getSingleQueryValue(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    if (value.length !== 1) notFound();
    return value[0];
  }
  return value;
}

const getCachedCuratedLinks = unstable_cache(
  async (
    categoryFilter: string,
    cursorCreatedAt: string | null,
    cursorId: string | null
  ): Promise<CuratedLink[]> => {
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

    const cursorCondition = cursorCreatedAt && cursorId
      ? or(
          lt(links.createdAt, new Date(cursorCreatedAt)),
          and(
            eq(links.createdAt, new Date(cursorCreatedAt)),
            lt(links.id, cursorId)
          )
        )
      : undefined;

    return db
      .select({
        id: links.id,
        url: links.url,
        title: links.title,
        description: links.description,
        posterUrl: links.posterUrl,
        category: links.category,
        isStarred: links.isStarred,
        createdAt: links.createdAt,
      })
      .from(links)
      .where(and(activeCategoryFilterCondition, cursorCondition))
      .orderBy(desc(links.createdAt), desc(links.id))
      .limit(PAGE_SIZE + 1);
  },
  ["curated-links-by-category"],
  {
    revalidate: 3600, // Refresh cached query results every hour.
    tags: ["links"],
  }
);

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const requestedCategory = getSingleQueryValue(resolvedSearchParams.category) || "all";
  const category = CATEGORY_METADATA_REGISTRY[requestedCategory]
    ? requestedCategory
    : "all";
  const presentation = CATEGORY_METADATA_REGISTRY[category];
  const after = getSingleQueryValue(resolvedSearchParams.after);
  const query = new URLSearchParams();

  if (category !== "all") query.set("category", category);
  if (after) query.set("after", after);

  const canonicalPath = query.size ? `/?${query.toString()}` : "/";
  const siteUrl = getSiteUrl();

  return {
    title: `${presentation.title} | Kura`,
    description: presentation.description,
    openGraph: {
      type: "website",
      siteName: "Kura",
      title: `${presentation.title} | Kura`,
      description: presentation.description,
    },
    ...(siteUrl
      ? { alternates: { canonical: new URL(canonicalPath, siteUrl).toString() } }
      : {}),
  };
}

export default async function Home({ searchParams }: HomePageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const selectedCategoryFilter = getSingleQueryValue(resolvedSearchParams.category) || "all";
  const afterCursor = decodeCursor(getSingleQueryValue(resolvedSearchParams.after));

  if (!CATEGORY_METADATA_REGISTRY[selectedCategoryFilter]) notFound();

  let pageLinks: CuratedLink[];
  try {
    pageLinks = await getCachedCuratedLinks(
      selectedCategoryFilter,
      afterCursor?.createdAt.toISOString() ?? null,
      afterCursor?.id ?? null
    );
  } catch (databaseQueryError) {
    console.error("Failed to load curated links from database:", databaseQueryError);
    throw databaseQueryError;
  }

  const hasNextPage = pageLinks.length > PAGE_SIZE;
  const curatedLinks = pageLinks.slice(0, PAGE_SIZE);
  const nextCursor = hasNextPage
    ? encodeCursor(curatedLinks[curatedLinks.length - 1])
    : undefined;

  const activeCategoryPresentation = CATEGORY_METADATA_REGISTRY[selectedCategoryFilter];

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
          />
          <GalleryPagination
            category={selectedCategoryFilter}
            nextCursor={nextCursor}
            hasPreviousPage={Boolean(afterCursor)}
          />
        </main>
      </div>
    </div>
  );
}
