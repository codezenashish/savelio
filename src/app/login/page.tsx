"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signInWithGoogle() {
    setIsLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (signInError) {
      setError(signInError.message);
      setIsLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 bg-background text-foreground">
      <section className="w-full max-w-sm space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="heading">Welcome back</h1>
          <p className="body-text">Sign in to continue to Savelio.</p>
        </div>

        <button
          type="button"
          onClick={signInWithGoogle}
          disabled={isLoading}
          className="flex w-full items-center justify-center gap-3 rounded-md border border-border bg-card px-4 py-3 font-medium text-card-foreground transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Connecting..." : "Continue with Google"}
        </button>

        {error && (
          <p role="alert" className="small-text text-destructive">
            {error}
          </p>
        )}
      </section>
    </main>
  );
}
