"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  "Société Générale",
  "BNP Paribas",
  "Caisse d'Épargne",
  "BforBank",
  "GRTgaz",
  "Enedis",
  "Groupe Casino",
  "Europe Assistance",
];

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const row1 = [...clients, ...clients];
  const row2 = [...[...clients].reverse(), ...[...clients].reverse()];

  return (
    <section ref={ref} className="bg-[#0C0C12] py-16 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3"
        >
          <div className="w-4 h-px bg-[#BEFF47]" />
          <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">
            Ils nous font confiance
          </span>
        </motion.div>
      </div>

      {/* Row 1 — gauche vers droite */}
      <div className="mb-4 overflow-hidden">
        <div className="flex marquee-track">
          {row1.map((c, i) => (
            <div key={i} className="flex items-center flex-shrink-0 px-10 gap-10">
              <span className="text-[15px] font-black text-white/25 whitespace-nowrap tracking-tight hover:text-white/60 transition-colors duration-300 cursor-default">
                {c}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF47]/20 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — droite vers gauche */}
      <div className="overflow-hidden">
        <div className="flex marquee-track" style={{ animationDirection: "reverse", animationDuration: "30s" }}>
          {row2.map((c, i) => (
            <div key={i} className="flex items-center flex-shrink-0 px-10 gap-10">
              <span className="text-[15px] font-black text-white/15 whitespace-nowrap tracking-tight hover:text-white/50 transition-colors duration-300 cursor-default">
                {c}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6A6A85]/20 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
