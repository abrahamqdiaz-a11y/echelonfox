import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WebsitesClient from "./WebsitesClient";

export const metadata: Metadata = {
  title: { absolute: "Website Design & Build for Local Businesses — Echelon Fox" },
  description:
    "Flat-rate website design and build for local and service businesses — insurance, beauty, pet care, home services and more. Done in weeks, with local SEO basics included.",
  alternates: { canonical: "https://echelonfox.com/websites" },
  openGraph: {
    title: "Websites for Local Businesses — Echelon Fox",
    description: "Flat-rate website design and build for local businesses — done in weeks, not months.",
    url: "https://echelonfox.com/websites",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Websites for Local Businesses — Echelon Fox" }],
  },
};

export default function WebsitesPage() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh", color: "#fff" }}>
      <Nav />
      <main>
        <WebsitesClient />
      </main>
      <Footer />
    </div>
  );
}
