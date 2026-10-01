import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/login");
  }

  async function signOut() {
    "use server";

    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 bg-background text-foreground">
      <section className="w-full max-w-lg space-y-6 rounded-lg border border-border bg-card text-card-foreground p-8 shadow-sm">
        <div className="space-y-2">
          <p className="small-text font-medium">Dashboard</p>
          <h1 className="heading">You are signed in</h1>
          <p className="body-text">{data.user.email}</p>
        </div>

        <form action={signOut}>
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            Log out
          </button>
        </form>
      </section>
    </main>
  );
}
