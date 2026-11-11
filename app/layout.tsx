import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Motion from "@/components/site/Motion";
import { capabilities } from "@/lib/capabilities";
import CookieConsent from "@/components/CookieConsent";
import { SITE } from "@/lib/site";
const manrope = localFont({
  src: "./fonts/Manrope.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});
const inter = localFont({
  src: "./fonts/Inter.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.publicName} — Business Strategy, Technology & Execution`,
    template: `%s | ${SITE.publicName}`,
  },
  description: SITE.description,
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: `${SITE.displayName} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.publicName,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE.displayName} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.displayName} — ${SITE.tagline}`,
    description: SITE.description,
    site: "@echelonfox",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "2uafgQSWcTThnQUPMe3Mb0bkf0MgbRJ7htDgQU5VMfU",
  },
};

export const viewport: Viewport = {
  themeColor: "#101C2B",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.publicName,
  alternateName: [SITE.displayName, SITE.name],
  url: SITE.url,
  logo: `${SITE.url}/brand/echelonfox-consulting-navy.png`,
  description: SITE.description,
  email: SITE.email,
  sameAs: [SITE.linkedin],
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business strategy, technology and implementation",
    itemListElement: capabilities.map((c) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: c.name,
        url: `${SITE.url}/services/${c.slug}`,
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.publicName,
  url: SITE.url,
  publisher: { "@type": "Organization", name: SITE.publicName, url: SITE.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
        <Motion />
      </body>
    </html>
  );
}
