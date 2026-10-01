import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MobileDock } from "@/components/mobile-dock";

export const metadata: Metadata = {
  metadataBase: new URL("https://savelio.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Savelio — Curated UI Components & Developer Libraries",
    template: "%s | Savelio",
  },
  description:
    "A hand-picked collection of the best UI libraries, components, animations, and developer tools on the web.",
  keywords: [
    "developer tools",
    "UI components",
    "react libraries",
    "design systems",
    "nextjs",
    "tailwind css",
    "animation",
    "web development",
  ],
  authors: [{ name: "Savelio" }],
  creator: "Savelio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://savelio.dev",
    title: "Savelio — Curated UI Components & Developer Libraries",
    description:
      "A hand-picked collection of the best UI libraries, components, animations, and developer tools on the web.",
    siteName: "Savelio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savelio — Curated UI Components & Developer Libraries",
    description:
      "A hand-picked collection of the best UI libraries, components, animations, and developer tools on the web.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col relative">
        <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
