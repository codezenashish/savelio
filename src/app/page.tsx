import type { Metadata } from "next";
import { ModeToggle } from "@/components/theme-toggle";
import { DirectoryView } from "@/components/directory-view";
import { SITE_CONFIG, HOME_PAGE_METADATA } from "@/data/site";

export const metadata: Metadata = {
  title: HOME_PAGE_METADATA.title,
  description: HOME_PAGE_METADATA.description,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      inLanguage: "en-US",
    },
    {
      "@type": "CollectionPage",
      "@id": `${SITE_CONFIG.url}/#webpage`,
      url: SITE_CONFIG.url,
      name: HOME_PAGE_METADATA.title,
      description: HOME_PAGE_METADATA.description,
      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },
      about: {
        "@type": "Thing",
        name: "Developer Tools & UI Component Libraries",
      },
    },
  ],
};

export function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col items-center max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="w-full flex justify-center pt-6 pb-2">
        <ModeToggle />
      </header>

      <DirectoryView />
    </div>
  );
}

export default Home;
