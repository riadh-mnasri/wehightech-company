"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Lang } from "@/lib/i18n";

const content: Record<Lang, {
  eyebrow: string;
  heading: [string, string];
  sub: string;
  kpis: { val: string; label: string }[];
  capabilities: { title: string; desc: string }[];
  cta: string;
}> = {
  fr: {
    eyebrow: "IA & Transformation",
    heading: ["L'IA comme levier", "de votre croissance."],
    sub: "Nous construisons des solutions IA qui créent une valeur réelle et durable. Pas de l'IA pour l'IA.",
    kpis: [
      { val: "×10", label: "Productivité" },
      { val: "−60%", label: "Coûts opérationnels" },
      { val: "24/7", label: "Disponibilité" },
      { val: "<3 mois", label: "Mise en prod." },
    ],
    capabilities: [
      { title: "Agents IA autonomes", desc: "Automatisez des workflows complexes avec des agents capables de raisonner et d'agir en autonomie." },
      { title: "LLM & Assistants métier", desc: "Modèles de langage formés sur vos données internes pour un assistant précis et contextuel." },
      { title: "RAG & Knowledge Base", desc: "IA connectée à votre documentation, avec réponses sourcées, vérifiables et toujours à jour." },
      { title: "Vision par ordinateur", desc: "Détection, classification et contrôle qualité automatisé par analyse d'image en temps réel." },
      { title: "Prédiction & Forecasting", desc: "Anticipez les tendances, optimisez les stocks avec des modèles prédictifs sur mesure." },
      { title: "Automatisation cognitive", desc: "Transformez vos processus répétitifs en workflows intelligents pilotés par l'IA." },
    ],
    cta: "Démarrer votre projet IA →",
  },
  en: {
    eyebrow: "AI & Transformation",
    heading: ["AI as a lever", "for your growth."],
    sub: "We build AI solutions that create real, lasting value. Not AI for AI's sake.",
    kpis: [
      { val: "×10", label: "Productivity" },
      { val: "−60%", label: "Operating costs" },
      { val: "24/7", label: "Availability" },
      { val: "<3 months", label: "Time to production" },
    ],
    capabilities: [
      { title: "Autonomous AI agents", desc: "Automate complex workflows with agents able to reason and act autonomously." },
      { title: "LLMs & business assistants", desc: "Language models trained on your internal data for a precise, contextual assistant." },
      { title: "RAG & knowledge base", desc: "AI connected to your documentation, with sourced, verifiable, always up-to-date answers." },
      { title: "Computer vision", desc: "Detection, classification and automated quality control through real-time image analysis." },
      { title: "Prediction & forecasting", desc: "Anticipate trends and optimize stock with tailored predictive models." },
      { title: "Cognitive automation", desc: "Turn repetitive processes into intelligent, AI-driven workflows." },
    ],
    cta: "Start your AI project →",
  },
};

export default function AISection({ lang }: { lang: Lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const t = content[lang];

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
              <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">{t.eyebrow}</span>
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[15px] text-[#8A8AA0] max-w-xs leading-relaxed font-light"
          >
            {t.sub}
          </motion.p>
        </div>

        {/* KPI row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 border border-white/6 mb-12"
        >
          {t.kpis.map((k, i) => (
            <div
              key={k.label}
              className={`px-7 py-7 ${i < 3 ? "border-r border-white/6" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-black text-[#BEFF47] mb-1.5">{k.val}</div>
              <div className="text-[10px] text-[#8A8AA0] font-bold uppercase tracking-[0.15em]">{k.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 mb-12">
          {t.capabilities.map((c, i) => (
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
              <p className="text-[12px] text-[#8A8AA0] leading-relaxed font-light">{c.desc}</p>
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
          {t.cta}
        </motion.a>
      </div>
    </section>
  );
}
