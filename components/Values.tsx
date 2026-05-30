"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  { num: "01", title: "Qualité sans compromis", desc: "La qualité n'est pas un objectif, c'est notre mode de fonctionnement. Chaque livrable est soumis à nos standards les plus exigeants." },
  { num: "02", title: "Excellence opérationnelle", desc: "Conception, développement, tests — nous visons l'excellence à chaque étape. Aucun détail n'est laissé au hasard." },
  { num: "03", title: "Innovation continue", desc: "En veille permanente, nous intégrons les meilleures pratiques pour vous offrir un avantage compétitif réel." },
  { num: "04", title: "Sens du service", desc: "Nous écoutons, conseillons, livrons. La satisfaction de nos clients est la mesure de notre succès." },
  { num: "05", title: "Transparence totale", desc: "Communication ouverte, reporting clair, budgets maîtrisés. Toujours informés, sans aucune surprise." },
  { num: "06", title: "Fiabilité & Confiance", desc: "Nos engagements sont tenus. Délais respectés, résultats livrés. Votre confiance est notre capital le plus précieux." },
];

export default function Values() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="values" ref={ref} className="bg-[#050508] py-28">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-4 h-px bg-[#BEFF47]" />
              <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">Nos valeurs</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Ce qui nous définit<br />
              <span className="text-[#BEFF47]">depuis 2017.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[15px] text-[#6A6A85] max-w-xs leading-relaxed font-light"
          >
            Des principes non négociables qui guident chacune de nos décisions et façonnent nos relations clients.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
          {values.map((v, i) => (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="bg-[#050508] p-8 group hover:bg-[#0C0C12] transition-colors duration-300"
            >
              <div className="text-[10px] font-black text-white/8 tracking-[0.2em] mb-5">{v.num}</div>
              <div className="w-4 h-px bg-[#BEFF47] mb-5 group-hover:w-10 transition-all duration-400" />
              <h3 className="text-[14px] font-bold text-white mb-2.5 tracking-tight">{v.title}</h3>
              <p className="text-[12px] text-[#6A6A85] leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
