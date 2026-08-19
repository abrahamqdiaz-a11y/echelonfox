import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Stats from "@/components/Stats";
import About from "@/components/About";
import GrowthSprint from "@/components/GrowthSprint";
import WorkPreview from "@/components/WorkPreview";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "Echelon Fox — Your Marketing Team, Monthly" },
  description:
    "Echelon Fox is an embedded marketing team you subscribe to monthly. SEO, paid media, and content run in weekly sprints — strategy and execution, no hiring.",
  alternates: {
    canonical: "https://echelonfox.com",
  },
  openGraph: {
    title: "Echelon Fox — Your Marketing Team, Monthly",
    description:
      "Echelon Fox is an embedded marketing team you subscribe to monthly. SEO, paid media, and content run in weekly sprints — strategy and execution, no hiring.",
    url: "https://echelonfox.com",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Echelon Fox — Your Marketing Team, Monthly" }],
  },
  twitter: {
    title: "Echelon Fox — Your Marketing Team, Monthly",
    description:
      "Echelon Fox is an embedded marketing team you subscribe to monthly. SEO, paid media, and content run in weekly sprints — strategy and execution, no hiring.",
  },
};

export default function Home() {
  return (
    <main style={{ background: "#080808", minHeight: "100vh" }}>
      {/* Static form for Netlify build-time detection — must match all fields in CTA.tsx */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" method="POST" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" type="text" />
        <input name="name" type="text" />
        <input name="email" type="email" />
        <input name="company" type="text" />
        <textarea name="message" />
        <input name="consent" type="checkbox" />
      </form>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <GrowthSprint />
      <WorkPreview />
      <Stats />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
