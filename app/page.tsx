import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import AISection from "@/components/AISection";
import Values from "@/components/Values";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#050508]">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <AISection />
      <Values />
      <Process />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
