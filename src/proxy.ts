import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Fast-path bypass for API routes that do not require session management
  if (pathname.startsWith("/api/poster") || pathname.startsWith("/api/favicon")) {
    return NextResponse.next();
  }

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
    if (pathname.startsWith("/dashboard")) {
      const redirectAuthenticationUrl = request.nextUrl.clone();
      redirectAuthenticationUrl.pathname = "/login";
      redirectAuthenticationUrl.searchParams.set("error", "auth_config_missing");
      return NextResponse.redirect(redirectAuthenticationUrl);
    }
    return forwardResponse;
  }

  // Only execute remote auth check if accessing protected routes
  // or if auth session cookies are present
  const hasAuthCookie = request.cookies
    .getAll()
    .some((cookie) => cookie.name.startsWith("sb-"));

  const isProtectedRoute = pathname.startsWith("/dashboard");

  if (!isProtectedRoute && !hasAuthCookie) {
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

  // Authenticate user for protected routes or refresh existing active session
  const {
    data: { user: authenticatedUser },
  } = await supabaseServerClient.auth.getUser();

  if (!authenticatedUser && isProtectedRoute) {
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
     * - api/poster & api/favicon (public image and favicon delivery)
     * - Images / static assets
     */
    "/((?!_next/static|_next/image|favicon.ico|api/poster|api/favicon|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
