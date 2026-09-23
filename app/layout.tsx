import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { SITE } from "@/lib/site";

// next/font self-hosts these files on our own domain and preloads them, so no
// visitor request goes to Google (see the privacy policy, section 5).
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-newsreader",
  display: "swap",
  fallback: ["Iowan Old Style", "Palatino Linotype", "Palatino", "Georgia", "serif"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-sans",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plex-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Commercial growth strategy and implementation`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: `${SITE.name} — Find what's holding growth back. Build what comes next.`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE.name} — Find what's holding growth back. Build what comes next.` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Find what's holding growth back. Build what comes next.`,
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
  themeColor: "#F4F0E8",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/eflogo.logo.png`,
  description: SITE.description,
  email: SITE.email,
  sameAs: [SITE.linkedin],
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial growth strategy and implementation",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial diagnosis and positioning", url: `${SITE.url}/services/commercial-diagnosis` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer acquisition and conversion", url: `${SITE.url}/services/customer-acquisition` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sales process, CRM, and follow-up", url: `${SITE.url}/services/sales-process-crm` } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Practical AI and automation", url: `${SITE.url}/services/ai-automation` } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
