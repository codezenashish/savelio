import { KuraLogo } from "@/components/ui/kura-logo";
import SideBar, { MobileDock } from "@/components/layout/sidebar";
import ModeToggle from "@/components/layout/theme-toggel";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background w-full">
      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 border-b border-border/50 bg-background/85 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <KuraLogo className="size-6 text-foreground" />
          <span className="subheading font-bold">Kura</span>
        </div>
        <ModeToggle />
      </div>

      <MobileDock />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-10 flex flex-col md:flex-row items-stretch md:items-start gap-8 md:gap-12 min-w-0">
        <SideBar />

        {/* Gallery Loading Skeleton */}
        <main className="flex-1 w-full min-w-0 pb-24 md:pb-8">
          <div className="flex flex-col gap-5 w-full min-w-0 max-w-full">
            {/* Header skeleton */}
            <div className="flex items-center justify-between gap-3 w-full">
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-8 w-44 rounded-lg bg-muted/60 animate-pulse" />
                <div className="h-4 w-72 rounded-md bg-muted/40 animate-pulse" />
              </div>
              <div className="h-9 w-20 rounded-xl bg-muted/50 animate-pulse" />
            </div>

            {/* Grid Skeletons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full min-w-0">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-16/10 w-full rounded-2xl bg-muted/30 border border-border/60 animate-pulse"
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
