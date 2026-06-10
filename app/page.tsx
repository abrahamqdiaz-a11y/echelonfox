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
  title: { absolute: "Echelon Fox — Performance Marketing for E-Commerce Brands" },
  description:
    "Echelon Fox is a performance marketing studio for e-commerce brands. Paid media, email/CRM, and creative built for profitable, measurable growth.",
  alternates: {
    canonical: "https://echelonfox.com",
  },
};

export default function Home() {
  return (
    <main style={{ background: "#080808", minHeight: "100vh" }}>
      {/* Hidden form for Netlify build-time detection */}
      <form name="contact" data-netlify="true" method="POST" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input name="name" type="text" />
        <input name="email" type="email" />
        <input name="company" type="text" />
        <textarea name="message" />
      </form>
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
