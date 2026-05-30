"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const kpis = [
  { val: "×10", label: "Productivité" },
  { val: "−60%", label: "Coûts opérationnels" },
  { val: "24/7", label: "Disponibilité" },
  { val: "<3 mois", label: "Mise en prod." },
];

const capabilities = [
  { title: "Agents IA autonomes", desc: "Automatisez des workflows complexes avec des agents capables de raisonner et d'agir en autonomie." },
  { title: "LLM & Assistants métier", desc: "Modèles de langage formés sur vos données internes pour un assistant précis et contextuel." },
  { title: "RAG & Knowledge Base", desc: "IA connectée à votre documentation — réponses sourcées, vérifiables et toujours à jour." },
  { title: "Vision par ordinateur", desc: "Détection, classification et contrôle qualité automatisé par analyse d'image en temps réel." },
  { title: "Prédiction & Forecasting", desc: "Anticipez les tendances, optimisez les stocks avec des modèles prédictifs sur mesure." },
  { title: "Automatisation cognitive", desc: "Transformez vos processus répétitifs en workflows intelligents pilotés par l'IA." },
];

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="ai" ref={ref} className="bg-[#0C0C12] py-28 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-lime opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blob-violet opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-4 h-px bg-[#BEFF47]" />
              <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">IA & Transformation</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
            >
              L&apos;IA comme levier<br />
              <span className="text-[#BEFF47]">de votre croissance.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[15px] text-[#6A6A85] max-w-xs leading-relaxed font-light"
          >
            Nous construisons des solutions IA qui créent une valeur réelle et durable.
            Pas de l&apos;IA pour l&apos;IA.
          </motion.p>
        </div>

        {/* KPI row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 border border-white/6 mb-12"
        >
          {kpis.map((k, i) => (
            <div
              key={k.label}
              className={`px-7 py-7 ${i < 3 ? "border-r border-white/6" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-black text-[#BEFF47] mb-1.5">{k.val}</div>
              <div className="text-[10px] text-[#6A6A85] font-bold uppercase tracking-[0.15em]">{k.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 mb-12">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.07 }}
              className="bg-[#0C0C12] px-7 py-6 group hover:bg-[#13131C] transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-1 h-4 bg-[#BEFF47] rounded-full" />
                <h4 className="text-[13px] font-bold text-white/80">{c.title}</h4>
              </div>
              <p className="text-[12px] text-[#6A6A85] leading-relaxed font-light">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55 }}
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#BEFF47] text-[#050508] font-bold text-sm hover:bg-white transition-colors duration-200"
        >
          Démarrer votre projet IA →
        </motion.a>
      </div>
    </section>
  );
}
