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
    default: "Echelon Fox — Marketing as a Service. Monthly. No Hiring.",
    template: "%s | Echelon Fox",
  },
  description:
    "Echelon Fox is a founder-led marketing and growth partner for businesses across industries. Websites, SEO, paid media, content, branding, email, CRM, analytics, and AI automation on a monthly subscription.",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Echelon Fox — Marketing as a Service. Monthly. No Hiring.",
    description: "A founder-led marketing and growth partner for businesses across industries. Websites, SEO, paid media, content, email, analytics, and AI automation — monthly, no hiring.",
    url: BASE_URL,
    siteName: "Echelon Fox",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Echelon Fox — Marketing as a Service. Monthly. No Hiring.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Echelon Fox — Marketing as a Service. Monthly. No Hiring.",
    description: "A founder-led marketing and growth partner for businesses across industries — monthly, no hiring.",
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
  themeColor: "#FF5500",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Echelon Fox",
  url: BASE_URL,
  logo: `${BASE_URL}/eflogo.logo.png`,
  description:
    "A founder-led marketing and growth partner for businesses across industries. Website design and build, SEO, paid media, content, brand identity, social media, email and CRM, analytics, and AI automation.",
  founder: {
    "@type": "Person",
    name: "Abe Quinn",
    jobTitle: "Founder",
  },
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
    name: "Marketing & Growth Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design & Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Content Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paid Media Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity & Creative" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics & Growth Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Email & CRM Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Agents & Business Automation" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Echelon Fox",
  url: BASE_URL,
  publisher: { "@type": "Organization", name: "Echelon Fox", url: BASE_URL },
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
