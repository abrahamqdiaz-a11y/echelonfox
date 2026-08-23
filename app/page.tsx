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
  title: { absolute: "Echelon Fox — Your Marketing Team. Monthly. No Hiring." },
  description:
    "A founder-led marketing team you subscribe to monthly. Websites, SEO, paid media, content, email, analytics, and AI automation — run in weekly sprints for businesses across industries.",
  alternates: {
    canonical: "https://echelonfox.com",
  },
  openGraph: {
    title: "Echelon Fox — Your Marketing Team. Monthly. No Hiring.",
    description:
      "A founder-led marketing team you subscribe to monthly. Websites, SEO, paid media, content, email, analytics, and AI automation — run in weekly sprints.",
    url: "https://echelonfox.com",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Echelon Fox — Your Marketing Team. Monthly. No Hiring." }],
  },
  twitter: {
    title: "Echelon Fox — Your Marketing Team. Monthly. No Hiring.",
    description:
      "A founder-led marketing team you subscribe to monthly. Websites, SEO, paid media, content, email, analytics, and AI automation.",
  },
};

export default function Home() {
  return (
    <div style={{ background: "#080808", minHeight: "100vh" }}>
      {/* Static form for Netlify build-time detection — must match all fields in ContactForm.tsx */}
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
      <main>
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
      </main>
      <Footer />
    </div>
  );
}
