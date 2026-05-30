"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Découverte", desc: "Analyse de vos besoins, de votre SI et de vos objectifs métier." },
  { num: "02", title: "Conception", desc: "Architecture technique, choix technologiques et prototypage." },
  { num: "03", title: "Développement", desc: "Sprints agiles, revues de code et tests automatisés." },
  { num: "04", title: "Déploiement", desc: "Mise en production, monitoring et documentation." },
  { num: "05", title: "Support", desc: "Maintenance proactive et évolutions continues." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#0C0C12] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center gap-2 mb-5"
          >
            <div className="w-4 h-px bg-[#BEFF47]" />
            <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">Notre processus</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl font-black text-white tracking-tight"
          >
            Une méthode <span className="text-[#BEFF47]">éprouvée.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-5 gap-px bg-white/4">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09 }}
              className="bg-[#0C0C12] px-6 py-8 group hover:bg-[#13131C] transition-colors duration-300"
            >
              <div className="text-[10px] font-black text-white/8 tracking-[0.2em] mb-5">{s.num}</div>
              <div className="w-4 h-px bg-[#BEFF47] mb-4 group-hover:w-8 transition-all duration-400" />
              <h4 className="text-[13px] font-bold text-white mb-2">{s.title}</h4>
              <p className="text-[11px] text-[#6A6A85] leading-relaxed font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
