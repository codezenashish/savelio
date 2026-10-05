import type { Metadata } from "next";
import { ModeToggle } from "@/components/theme-toggle";
import { DirectoryView } from "@/components/directory-view";
import { HOME_PAGE_METADATA } from "@/data/site";

export const metadata: Metadata = {
  title: HOME_PAGE_METADATA.title,
  description: HOME_PAGE_METADATA.description,
};

export function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col items-center max-w-4xl mx-auto">
      <header className="w-full flex justify-center pt-6 pb-2">
        <ModeToggle />
      </header>

      <DirectoryView />
    </div>
  );
}

export default Home;
