"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { Code2, Brain, Layers, BarChart3, Shield, Smartphone } from "lucide-react";

const services = [
  { num: "01", icon: Brain, title: "Intelligence Artificielle", desc: "LLM, agents autonomes, RAG et vision par ordinateur. Des solutions IA sur-mesure qui créent une valeur réelle et mesurable.", tags: ["LLM & RAG", "Agents", "ML / DL"] },
  { num: "02", icon: Code2, title: "Développement Logiciel", desc: "Applications web et backend haute performance, architectures scalables, APIs robustes. Du code de qualité industrielle.", tags: ["Next.js", "Node.js / Python", "Cloud Native"] },
  { num: "03", icon: Layers, title: "Transformation Digitale", desc: "Stratégie, audit et déploiement pour moderniser votre SI, digitaliser vos processus et accélérer votre compétitivité.", tags: ["Stratégie", "Intégration SI", "Roadmap"] },
  { num: "04", icon: BarChart3, title: "Data & Analytics", desc: "Pipelines data, entrepôts et dashboards temps réel pour piloter votre activité par les faits, pas les intuitions.", tags: ["Data Eng.", "BI", "DataLake"] },
  { num: "05", icon: Shield, title: "Cybersécurité", desc: "Audits, architecture Zero Trust, conformité RGPD et réponse aux incidents. Protégez vos actifs numériques critiques.", tags: ["Pentest", "RGPD", "Zero Trust"] },
  { num: "06", icon: Smartphone, title: "Applications Mobiles", desc: "iOS & Android natifs ou cross-platform, UX premium et intégration IA embarquée pour une expérience utilisateur hors-norme.", tags: ["React Native", "Flutter", "UX Premium"] },
];

function Card({ s, i, inView }: { s: typeof services[0]; i: number; inView: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = s.icon;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-0.5, 0.5], [4, -4]);
  const ry = useTransform(mx, [-0.5, 0.5], [-4, 4]);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      style={{ rotateX: rx, rotateY: ry, perspective: 1000 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="card-glow rounded-2xl p-7 cursor-default group"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="text-[10px] font-black text-white/10 tracking-[0.2em]">{s.num}</span>
        <div className="w-9 h-9 rounded-lg bg-[#BEFF47]/10 flex items-center justify-center group-hover:bg-[#BEFF47]/20 transition-colors duration-300">
          <Icon size={16} className="text-[#BEFF47]" />
        </div>
      </div>

      <h3 className="text-[15px] font-bold text-white mb-3 tracking-tight">{s.title}</h3>
      <p className="text-[13px] text-[#6A6A85] leading-relaxed mb-5 font-light">{s.desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {s.tags.map((t) => (
          <span key={t} className="px-2 py-0.5 text-[10px] font-semibold text-[#BEFF47]/60 border border-[#BEFF47]/15 rounded tracking-wide">
            {t}
          </span>
        ))}
      </div>

      {/* Lime bottom glow line */}
      <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#BEFF47]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref} className="bg-[#050508] py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0C0C12]/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-4 h-px bg-[#BEFF47]" />
              <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">Expertises</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Des solutions<br />
              <span className="text-[#BEFF47]">d&apos;excellence</span> pour<br />
              chaque défi.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[15px] text-[#6A6A85] max-w-xs leading-relaxed font-light"
          >
            Chaque projet est une opportunité de dépasser les attentes.
            Qualité, rigueur et résultats mesurables.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ perspective: "1200px" }}>
          {services.map((s, i) => (
            <Card key={s.num} s={s} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
