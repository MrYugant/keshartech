import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { brand } from "@/config/theme";
import { getNavData } from "@/lib/nav-data";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { ThemeScript } from "@/components/layout/theme-script";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Interactions } from "@/components/animations/interactions";
import { JsonLd } from "@/components/ui/json-ld";
import "./globals.css";

/** Type system: expressive display face for headings, a calm grotesque for reading, a mono for labels and numbers. */
const fontDisplay = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap", axes: ["opsz"] });
const fontBody = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline.replace(/\.$/, "")}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { type: "website", siteName: siteConfig.name, locale: siteConfig.locale, url: siteConfig.url },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: brand.white },
    { media: "(prefers-color-scheme: dark)", color: brand.black },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}>
      <head>
        <ThemeScript />
      </head>
      <body>
        <SiteHeader navData={getNavData()} />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <Interactions />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
