"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Lang } from "@/lib/i18n";
import { useTilt } from "@/lib/useTilt";

const content: Record<Lang, {
  eyebrow: string;
  heading: string[];
  stats: { n: string; l: string }[];
  statement: string;
  cta: string;
  clients: { name: string; sector: string; initial: string }[];
}> = {
  fr: {
    eyebrow: "Références clients",
    heading: ["Ils nous font", "confiance."],
    stats: [
      { n: "8+", l: "grands comptes" },
      { n: "4", l: "secteurs d'activité" },
      { n: "CAC40", l: "& leaders nationaux" },
    ],
    statement: "Des entreprises leaders font confiance à WeHighTech pour leurs projets critiques.",
    cta: "Rejoignez-les →",
    clients: [
      { name: "Société Générale", sector: "Finance & Banque", initial: "SG" },
      { name: "BNP Paribas", sector: "Finance & Banque", initial: "BNP" },
      { name: "Caisse d'Épargne", sector: "Finance & Banque", initial: "CE" },
      { name: "BforBank", sector: "Finance & Banque", initial: "BfB" },
      { name: "GRTgaz", sector: "Énergie & Utilities", initial: "GRT" },
      { name: "Enedis", sector: "Énergie & Utilities", initial: "ENE" },
      { name: "Groupe Casino", sector: "Retail & Distribution", initial: "GC" },
      { name: "Europe Assistance", sector: "Assurance", initial: "EA" },
    ],
  },
  en: {
    eyebrow: "Client references",
    heading: ["Trusted by", "industry leaders."],
    stats: [
      { n: "8+", l: "major accounts" },
      { n: "4", l: "industries" },
      { n: "CAC40", l: "& national leaders" },
    ],
    statement: "Leading companies trust WeHighTech with their mission-critical projects.",
    cta: "Join them →",
    clients: [
      { name: "Société Générale", sector: "Finance & Banking", initial: "SG" },
      { name: "BNP Paribas", sector: "Finance & Banking", initial: "BNP" },
      { name: "Caisse d'Épargne", sector: "Finance & Banking", initial: "CE" },
      { name: "BforBank", sector: "Finance & Banking", initial: "BfB" },
      { name: "GRTgaz", sector: "Energy & Utilities", initial: "GRT" },
      { name: "Enedis", sector: "Energy & Utilities", initial: "ENE" },
      { name: "Groupe Casino", sector: "Retail & Distribution", initial: "GC" },
      { name: "Europe Assistance", sector: "Insurance", initial: "EA" },
    ],
  },
};

function ClientCard({ c, i, inView }: { c: { name: string; sector: string; initial: string }; i: number; inView: boolean }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.07 }}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="card-glow rounded-xl p-6 group hover:border-[#BEFF47]/30 transition-all duration-300 relative overflow-hidden cursor-default"
    >
      {/* Background initial watermark */}
      <div className="absolute -bottom-3 -right-2 text-[4rem] font-black text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-[#BEFF47]/5 transition-colors duration-500">
        {c.initial}
      </div>

      {/* Dot indicator */}
      <div className="w-1.5 h-1.5 rounded-full bg-[#BEFF47]/40 mb-5 group-hover:bg-[#BEFF47] transition-colors duration-300" />

      {/* Name */}
      <div className="text-[14px] font-black text-white/70 leading-snug mb-3 group-hover:text-white transition-colors duration-300">
        {c.name}
      </div>

      {/* Sector tag */}
      <div className="text-[10px] font-semibold text-[#8A8AA0] tracking-wide uppercase">
        {c.sector}
      </div>
    </motion.div>
  );
}

export default function Clients({ lang }: { lang: Lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const t = content[lang];

  return (
    <section ref={ref} className="bg-[#0C0C12] py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] blob-lime opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-4 h-px bg-[#BEFF47]" />
              <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">
                {t.eyebrow}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
            >
              {t.heading[0]}<br />
              <span className="text-[#BEFF47]">{t.heading[1]}</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-6 text-left"
          >
            {t.stats.map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-black text-[#BEFF47]">{s.n}</div>
                <div className="text-[11px] text-[#8A8AA0] font-medium tracking-wide uppercase">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {t.clients.map((c, i) => (
            <ClientCard key={c.name} c={c} i={i} inView={inView} />
          ))}
        </div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 text-center text-[13px] text-[#8A8AA0] font-light"
        >
          {t.statement}
          <a href="#contact" className="text-[#BEFF47] font-medium ml-1.5 hover:underline underline-offset-2">
            {t.cta}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
