"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  { name: "Société Générale",  sector: "Finance & Banque",       initial: "SG" },
  { name: "BNP Paribas",       sector: "Finance & Banque",       initial: "BNP" },
  { name: "Caisse d'Épargne",  sector: "Finance & Banque",       initial: "CE" },
  { name: "BforBank",          sector: "Finance & Banque",       initial: "BfB" },
  { name: "GRTgaz",            sector: "Énergie & Utilities",    initial: "GRT" },
  { name: "Enedis",            sector: "Énergie & Utilities",    initial: "ENE" },
  { name: "Groupe Casino",     sector: "Retail & Distribution",  initial: "GC" },
  { name: "Europe Assistance", sector: "Assurance",              initial: "EA" },
];

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
                Références clients
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Ils nous font<br />
              <span className="text-[#BEFF47]">confiance.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-6 text-left"
          >
            {[
              { n: "8+",  l: "grands comptes" },
              { n: "4",   l: "secteurs d'activité" },
              { n: "CAC40", l: "& leaders nationaux" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-black text-[#BEFF47]">{s.n}</div>
                <div className="text-[11px] text-[#6A6A85] font-medium tracking-wide uppercase">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
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
              <div className="text-[10px] font-semibold text-[#6A6A85] tracking-wide uppercase">
                {c.sector}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 text-center text-[13px] text-[#6A6A85] font-light"
        >
          Des entreprises leaders font confiance à WeHighTech pour leurs projets critiques.
          <a href="#contact" className="text-[#BEFF47] font-medium ml-1.5 hover:underline underline-offset-2">
            Rejoignez-les →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
