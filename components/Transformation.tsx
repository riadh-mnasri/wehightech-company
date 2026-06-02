"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Rocket, RefreshCcw } from "lucide-react";

const phases = [
  {
    num: "01",
    icon: Search,
    title: "Audit & Cadrage",
    subtitle: "On part de votre réalité",
    desc: "Diagnostic de votre SI, cartographie des processus, identification des opportunités à fort impact. Nous co-construisons une feuille de route réaliste et priorisée.",
    items: [
      "Audit technique & fonctionnel",
      "Identification des quick wins",
      "Feuille de route priorisée",
      "Budget & planning maîtrisés",
    ],
    accent: "#BEFF47",
    accentBg: "bg-[#BEFF47]/10",
    accentText: "text-[#BEFF47]",
    accentBorder: "border-[#BEFF47]/20 hover:border-[#BEFF47]/50",
  },
  {
    num: "02",
    icon: Rocket,
    title: "Conception & Déploiement",
    subtitle: "On construit avec vous",
    desc: "Architecture sur-mesure, développement agile et intégration progressive dans vos systèmes existants. Vos équipes sont impliquées à chaque sprint.",
    items: [
      "Architecture scalable & évolutive",
      "Sprints courts & livrables continus",
      "Intégration SI existant",
      "Tests & assurance qualité",
    ],
    accent: "#A78BFA",
    accentBg: "bg-violet-400/10",
    accentText: "text-violet-400",
    accentBorder: "border-violet-400/20 hover:border-violet-400/50",
  },
  {
    num: "03",
    icon: RefreshCcw,
    title: "Adoption & Évolution",
    subtitle: "On reste à vos côtés",
    desc: "Formation de vos équipes, support continu et itérations pour maximiser l'adoption. Votre transformation n'est pas un projet — c'est un voyage.",
    items: [
      "Conduite du changement",
      "Formation des équipes métier",
      "Support & monitoring 24/7",
      "Évolutions & nouvelles fonctionnalités",
    ],
    accent: "#34D399",
    accentBg: "bg-emerald-400/10",
    accentText: "text-emerald-400",
    accentBorder: "border-emerald-400/20 hover:border-emerald-400/50",
  },
];

export default function Transformation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="transformation" ref={ref} className="bg-[#0C0C12] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] blob-lime opacity-20 pointer-events-none" />

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
              <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">
                Accompagnement
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Un partenaire à chaque étape<br />
              <span className="text-[#BEFF47]">de votre transformation.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[15px] text-[#6A6A85] max-w-sm leading-relaxed font-light"
          >
            Nous ne livrons pas un projet puis disparaissons. Nous vous accompagnons
            de l&apos;audit initial jusqu&apos;à l&apos;évolution continue, comme un partenaire interne.
          </motion.p>
        </div>

        {/* Phases */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[3.2rem] left-[calc(33.33%-1px)] right-[calc(33.33%-1px)] h-px border-t border-dashed border-white/10 z-0" />

          <div className="grid md:grid-cols-3 gap-4 relative z-10">
            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.13 }}
                  className={`card-glow rounded-2xl p-8 border ${p.accentBorder} transition-all duration-300 group`}
                >
                  {/* Phase indicator */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-11 h-11 rounded-xl ${p.accentBg} flex items-center justify-center`}>
                      <Icon size={18} className={p.accentText} />
                    </div>
                    <span className="text-[2.5rem] font-black text-white/5 leading-none select-none">
                      {p.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`text-[10px] font-bold ${p.accentText} tracking-[0.15em] uppercase mb-2`}>
                    {p.subtitle}
                  </div>
                  <h3 className="text-[18px] font-black text-white mb-4 tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-[13px] text-[#6A6A85] leading-relaxed font-light mb-7">
                    {p.desc}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2.5">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className={`w-1 h-1 rounded-full flex-shrink-0`} style={{ background: p.accent }} />
                        <span className="text-[12px] text-[#6A6A85] group-hover:text-white/60 transition-colors duration-300 font-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 card-glow rounded-2xl border border-[#BEFF47]/10"
        >
          <div className="flex-1">
            <div className="text-[13px] font-black text-white mb-1">
              Prêt à lancer votre transformation ?
            </div>
            <div className="text-[12px] text-[#6A6A85] font-light">
              Nous démarrons par un audit gratuit de votre situation actuelle.
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#BEFF47] text-[#050508] font-bold text-sm hover:bg-white transition-colors duration-200"
          >
            Démarrer l&apos;audit gratuit →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
