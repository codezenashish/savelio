import Link from "next/link";

interface GalleryPaginationProps {
  category: string;
  nextCursor?: string;
  hasPreviousPage: boolean;
}

function getCategoryHref(category: string): string {
  return category === "all" ? "/" : `/?category=${encodeURIComponent(category)}`;
}

export default function GalleryPagination({
  category,
  nextCursor,
  hasPreviousPage,
}: GalleryPaginationProps) {
  if (!nextCursor && !hasPreviousPage) return null;

  const nextUrl = new URLSearchParams();
  if (category !== "all") nextUrl.set("category", category);
  if (nextCursor) nextUrl.set("after", nextCursor);

  return (
    <nav
      aria-label="Resource pages"
      className="mt-6 flex items-center justify-between gap-3 border-t border-border/60 pt-4"
    >
      {hasPreviousPage ? (
        <Link
          href={getCategoryHref(category)}
          className="body-text rounded-lg px-3 py-2 underline underline-offset-4 hover:bg-muted/50"
        >
          Back to newest resources
        </Link>
      ) : <span />}
      {nextCursor && (
        <Link
          href={`/?${nextUrl.toString()}`}
          className="body-text rounded-lg bg-muted/60 px-3 py-2 font-medium hover:bg-muted"
        >
          Next resources <span aria-hidden="true">→</span>
        </Link>
      )}
    </nav>
  );
}
