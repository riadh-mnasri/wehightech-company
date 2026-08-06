"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  "Ingénieurs seniors passionnés et spécialisés",
  "Formation et développement continu de nos équipes",
  "Outils & technologies de dernière génération",
  "Contrôles qualité à chaque étape du développement",
  "Relations clients fondées sur la transparence",
  "Solutions personnalisées pour chaque besoin unique",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
              <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">Notre histoire</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-8">
              Une entreprise<br />
              <span className="text-[#BEFF47]">haute technologie</span><br />
              au service de<br />votre succès.
            </h2>
            <p className="text-[15px] text-[#6A6A85] leading-relaxed font-light mb-5">
              Fondée en 2017, WeHighTech est née d&apos;une conviction : dans le secteur
              technologique, la qualité est la seule voie vers le succès durable.
            </p>
            <p className="text-[15px] text-[#6A6A85] leading-relaxed font-light mb-10">
              Nous recrutons les meilleurs ingénieurs, investissons dans leur formation
              et cultivons une culture d&apos;excellence qui se reflète dans chacun de nos produits.
            </p>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#BEFF47] text-[#050508] font-bold text-sm hover:bg-white transition-colors duration-200"
            >
              Travailler avec nous →
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Quote */}
            <div className="card-glow rounded-2xl p-8 mb-6 relative">
              <div className="text-5xl text-[#BEFF47]/20 font-black leading-none mb-4">&ldquo;</div>
              <p className="text-[16px] text-white/70 leading-relaxed font-light italic">
                La qualité n&apos;est pas un buzzword, c&apos;est la valeur fondamentale
                qui imprègne chaque aspect de nos opérations, de nos produits
                à nos relations clients.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-8 h-px bg-[#BEFF47]" />
                <span className="text-[11px] font-bold text-[#6A6A85] tracking-widest uppercase">
                  Fondateur, WeHighTech · 2017
                </span>
              </div>
            </div>

            {/* Pillars */}
            <div className="space-y-0">
              {pillars.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.07 }}
                  className="flex items-center gap-4 py-3.5 border-b border-white/4 last:border-0 group"
                >
                  <div className="w-1 h-1 rounded-full bg-[#BEFF47] flex-shrink-0 group-hover:scale-150 transition-transform duration-200" />
                  <span className="text-[13px] text-[#6A6A85] font-medium group-hover:text-white transition-colors duration-200">{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
