import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const serverCookieStore = await cookies();

  const supabaseProjectUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonymousOrPublishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseProjectUrl || !supabaseAnonymousOrPublishableKey) {
    throw new Error(
      "Missing Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY) must be defined."
    );
  }

  return createServerClient(supabaseProjectUrl, supabaseAnonymousOrPublishableKey, {
    cookies: {
      getAll() {
        return serverCookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            serverCookieStore.set(name, value, options)
          );
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be safely ignored if middleware is refreshing user sessions.
        }
      },
    },
  });
}
