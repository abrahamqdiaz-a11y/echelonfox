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
