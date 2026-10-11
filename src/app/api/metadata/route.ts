import { NextResponse, type NextRequest } from "next/server";
import { getWebsiteMetadata } from "@/lib/metadata";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return NextResponse.json({ error: "Missing 'url' query parameter" }, { status: 400 });
  }

  try {
    const target = new URL(targetUrl);
    if (target.protocol !== "https:" && target.protocol !== "http:") {
      return NextResponse.json({ error: "Unsupported URL protocol" }, { status: 400 });
    }

    const metadata = await getWebsiteMetadata(targetUrl);
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
