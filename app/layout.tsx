import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
    default: `${SITE.name} — Growth Strategy & Business Systems Consultancy`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: `${SITE.name} — Find what’s holding your business back. Build what moves it forward.`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Find what’s holding your business back. Build what moves it forward.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Find what’s holding your business back. Build what moves it forward.`,
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
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/eflogo.logo.png`,
  description: SITE.description,
  email: SITE.email,
  sameAs: [SITE.linkedin],
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Growth Strategy & Business Systems Consultancy",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Growth Strategy & Business Advisory",
          url: `${SITE.url}/services/commercial-diagnosis`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing & Customer Acquisition",
          url: `${SITE.url}/services/customer-acquisition`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sales & Conversion Systems",
          url: `${SITE.url}/services/sales-process-crm`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technology & Operations",
          url: `${SITE.url}/services/technology-operations`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automation & Operations",
          url: `${SITE.url}/services/ai-automation`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Websites & Digital Infrastructure",
          url: `${SITE.url}/services/websites-digital-infrastructure`,
        },
      },
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
      </body>
    </html>
  );
}
