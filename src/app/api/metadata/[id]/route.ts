import { NextResponse } from "next/server";
import { URL_ENTRIES } from "@/data/url-library";
import { getWebsiteMetadata } from "@/lib/metadata";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const entry = URL_ENTRIES.find((url) => url.id === id);
  if (!entry) {
    return NextResponse.json({ error: "Unknown directory entry" }, { status: 404 });
  }

  try {
    const target = new URL(entry.href);
    if (target.protocol !== "https:" && target.protocol !== "http:") {
      return NextResponse.json({ error: "Unsupported URL" }, { status: 400 });
    }

    const metadata = await getWebsiteMetadata(entry.href);
    return NextResponse.json(metadata, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return NextResponse.json(
      { title: null, siteName: null, description: null },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  }
}
