import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CategoryProvider } from "@/components/category-provider";
import { MobileDock } from "@/components/mobile-dock";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col relative">
        <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
          <CategoryProvider>
            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-background via-background/80 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,black_20%,transparent)]"
            />

            {children}

            <div
              aria-hidden="true"
              className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-background via-background/80 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_20%,transparent)]"
            />

            <MobileDock />
          </CategoryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
