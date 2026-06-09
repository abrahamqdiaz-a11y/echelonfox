import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://echelonfox.com";

export const metadata: Metadata = {
  title: {
    default: "Echelon Fox — World-Class Digital Marketing",
    template: "%s | Echelon Fox",
  },
  description:
    "Echelon Fox is the world's premier digital marketing media company. We build brands that dominate through SEO, paid media, brand identity, social media, analytics, and email marketing.",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Echelon Fox — World-Class Digital Marketing",
    description: "We build brands that dominate.",
    url: BASE_URL,
    siteName: "Echelon Fox",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Echelon Fox — World-Class Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Echelon Fox — World-Class Digital Marketing",
    description: "World-Class Digital Marketing Media Company",
    site: "@echelonfox",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FF5500",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Echelon Fox",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "World-class digital marketing media company. We build brands that dominate through SEO, paid media, brand identity, social media, analytics, and email marketing.",
  email: "hello@echelonfox.com",
  sameAs: [
    "https://www.instagram.com/echelonfox",
    "https://www.linkedin.com/company/echelonfox",
    "https://x.com/echelonfox",
    "https://www.tiktok.com/@echelonfox",
  ],
  serviceArea: {
    "@type": "AdministrativeArea",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Content Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paid Media Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity & Creative" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics & Growth Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email & CRM Marketing" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Echelon Fox",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
