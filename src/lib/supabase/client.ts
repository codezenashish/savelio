import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseKey = process.env
    .NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY as string;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Missing Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY must be defined.",
    );
  }

  return createBrowserClient(supabaseUrl, supabaseKey);
}
