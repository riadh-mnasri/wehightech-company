import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import AISection from "@/components/AISection";
import Values from "@/components/Values";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#05050f]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <AISection />
      <Values />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
