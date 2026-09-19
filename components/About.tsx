"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import type { Lang } from "@/lib/i18n";

const content: Record<Lang, {
  eyebrow: string;
  heading: [string, string, string];
  p1: string;
  p2: string;
  cta: string;
  quote: string;
  quoteBy: string;
  pillars: string[];
}> = {
  fr: {
    eyebrow: "Notre histoire",
    heading: ["Une entreprise", "haute technologie", "au service de votre succès."],
    p1: "Fondée en 2017, WeHighTech est née d'une conviction : dans le secteur technologique, la qualité est la seule voie vers le succès durable.",
    p2: "Nous recrutons les meilleurs ingénieurs, investissons dans leur formation et cultivons une culture d'excellence qui se reflète dans chacun de nos produits.",
    cta: "Travailler avec nous →",
    quote: "La qualité n'est pas un buzzword, c'est la valeur fondamentale qui imprègne chaque aspect de nos opérations, de nos produits à nos relations clients.",
    quoteBy: "Fondateur, WeHighTech · 2017",
    pillars: [
      "Ingénieurs seniors passionnés et spécialisés",
      "Formation et développement continu de nos équipes",
      "Outils & technologies de dernière génération",
      "Contrôles qualité à chaque étape du développement",
      "Relations clients fondées sur la transparence",
      "Solutions personnalisées pour chaque besoin unique",
    ],
  },
  en: {
    eyebrow: "Our story",
    heading: ["A high-tech", "company built", "for your success."],
    p1: "Founded in 2017, WeHighTech was born from a conviction: in the tech industry, quality is the only path to lasting success.",
    p2: "We hire the best engineers, invest in their continuous training, and cultivate a culture of excellence reflected in every product we ship.",
    cta: "Work with us →",
    quote: "Quality isn't a buzzword, it's the core value that runs through every part of our operations, from our products to our client relationships.",
    quoteBy: "Founder, WeHighTech · 2017",
    pillars: [
      "Passionate, specialized senior engineers",
      "Continuous training and team development",
      "Latest-generation tools & technologies",
      "Quality checks at every stage of development",
      "Client relationships built on transparency",
      "Tailored solutions for every unique need",
    ],
  },
};

export default function About({ lang }: { lang: Lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const t = content[lang];

  return (
    <section id="about" ref={ref} className="bg-[#050508] py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-px bg-[#BEFF47]" />
              <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">{t.eyebrow}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-8">
              {t.heading[0]}<br />
              <span className="text-[#BEFF47]">{t.heading[1]}</span><br />
              {t.heading[2]}
            </h2>
            <p className="text-[15px] text-[#8A8AA0] leading-relaxed font-light mb-5">
              {t.p1}
            </p>
            <p className="text-[15px] text-[#8A8AA0] leading-relaxed font-light mb-10">
              {t.p2}
            </p>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#BEFF47] text-[#050508] font-bold text-sm hover:bg-white transition-colors duration-200"
            >
              {t.cta}
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Quote */}
            <div className="card-glow rounded-2xl p-8 mb-6 relative flex gap-5 items-start">
              <Image
                src="/riadh-mnasri.png"
                alt="Riadh Mnasri, fondateur de WeHighTech"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0 border border-[#BEFF47]/20"
              />
              <div>
                <p
                  className="text-[16px] text-white/80 leading-relaxed italic mb-5"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-[#BEFF47]" />
                  <span className="text-[11px] font-bold text-[#8A8AA0] tracking-widest uppercase">
                    {t.quoteBy}
                  </span>
                </div>
              </div>
            </div>

            {/* Pillars */}
            <div className="space-y-0">
              {t.pillars.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  className="flex items-center gap-4 py-3.5 border-b border-white/4 last:border-0 group"
                >
                  <div className="w-1 h-1 rounded-full bg-[#BEFF47] flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <span className="text-[13px] text-[#8A8AA0] font-medium group-hover:text-white transition-colors duration-200">{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
