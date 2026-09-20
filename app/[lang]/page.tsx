import { MotionConfig } from "framer-motion";
import { notFound } from "next/navigation";
import { isLang } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Transformation from "@/components/Transformation";
import AISection from "@/components/AISection";
import Stats from "@/components/Stats";
import Sectors from "@/components/Sectors";
import CaseStudies from "@/components/CaseStudies";
import Values from "@/components/Values";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import HashScroll from "@/components/HashScroll";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang = rawLang;

  return (
    <MotionConfig reducedMotion="user">
      <HashScroll />
      <main className="flex flex-col min-h-screen bg-[#050508]">
        <Navbar lang={lang} />
        <Hero lang={lang} />
        <TechMarquee />
        <Clients lang={lang} />
        <Services lang={lang} />
        <Transformation lang={lang} />
        <AISection lang={lang} />
        <Stats lang={lang} />
        <Sectors lang={lang} />
        <CaseStudies lang={lang} />
        <Values lang={lang} />
        <Process lang={lang} />
        <About lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
        <BackToTop lang={lang} />
      </main>
    </MotionConfig>
  );
}
