import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let forwardResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseProjectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonymousOrPublishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseProjectUrl || !supabaseAnonymousOrPublishableKey) {
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      const redirectAuthenticationUrl = request.nextUrl.clone();
      redirectAuthenticationUrl.pathname = "/login";
      redirectAuthenticationUrl.searchParams.set("error", "auth_config_missing");
      return NextResponse.redirect(redirectAuthenticationUrl);
    }
    return forwardResponse;
  }

  const supabaseServerClient = createServerClient(
    supabaseProjectUrl,
    supabaseAnonymousOrPublishableKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          forwardResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            forwardResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // IMPORTANT: Keep this call untouched to ensure sessions stay refreshed
  const {
    data: { user: authenticatedUser },
  } = await supabaseServerClient.auth.getUser();

  if (!authenticatedUser && request.nextUrl.pathname.startsWith("/dashboard")) {
    const redirectAuthenticationUrl = request.nextUrl.clone();
    redirectAuthenticationUrl.pathname = "/login";
    return NextResponse.redirect(redirectAuthenticationUrl);
  }

  return forwardResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Images / static assets
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
