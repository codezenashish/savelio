import type { Metadata } from "next";
import { ModeToggle } from "@/components/theme-toggal";
import { DirectoryView } from "@/components/directory-view";

export const metadata: Metadata = {
  title: "Curated Developer Tools & UI Components",
  description:
    "Explore hand-picked developer tools, UI component libraries, and design engineering inspiration in the Savelio directory.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <header className="w-full flex justify-center pt-6 pb-2">
        <ModeToggle />
      </header>

      <DirectoryView />
    </div>
  );
}
