import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    siteName: "Aarish Sharma",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
