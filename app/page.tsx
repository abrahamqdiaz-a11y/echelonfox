import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "Echelon Fox — World-Class Digital Marketing" },
  description:
    "Echelon Fox is the world's premier digital marketing media company. We build brands that dominate through SEO, paid media, brand identity, social media, analytics, and email marketing.",
  alternates: {
    canonical: "https://echelonfox.com",
  },
};

export default function Home() {
  return (
    <main style={{ background: "#080808", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Stats />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
