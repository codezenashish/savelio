import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

const mSaans = localFont({
  src: "../../public/fonts/MSaansVF.woff2",
  variable: "--font-m-saans",
  display: "swap",
  weight: "100 900",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kura — Curated Developer Tools & Inspiration",
  description: "Curated collection of standout developer tools, libraries, and design inspiration.",
  icons: {
    icon: [
      { url: "/logo-square.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/logo-square.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${mSaans.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden w-full max-w-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
