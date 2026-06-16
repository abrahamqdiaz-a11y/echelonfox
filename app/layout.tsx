import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://echelonfox.com";

export const metadata: Metadata = {
  title: {
    default: "Echelon Fox — Performance Marketing for E-Commerce Brands",
    template: "%s | Echelon Fox",
  },
  description:
    "Echelon Fox is a performance marketing studio for e-commerce brands. Paid media, email/CRM, and creative built for profitable, measurable growth.",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Echelon Fox — Performance Marketing for E-Commerce Brands",
    description: "Echelon Fox is a performance marketing studio for e-commerce brands. Paid media, email/CRM, and creative built for profitable, measurable growth.",
    url: BASE_URL,
    siteName: "Echelon Fox",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Echelon Fox — Performance Marketing for E-Commerce Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Echelon Fox — Performance Marketing for E-Commerce Brands",
    description: "Performance marketing for e-commerce brands that want profitable growth.",
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
  verification: {
    google: "2uafgQSWcTThnQUPMe3Mb0bkf0MgbRJ7htDgQU5VMfU",
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
    "A performance marketing studio for e-commerce brands. Paid media, SEO, brand identity, social media, analytics, and email marketing.",
  email: "abe.quinn@echelonfox.com",
  sameAs: [
    "https://www.linkedin.com/company/echelonfox/",
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
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
