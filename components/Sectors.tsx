"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Landmark, Zap, ShoppingCart, Shield } from "lucide-react";

const sectors = [
  {
    icon: Landmark,
    title: "Finance & Banque",
    desc: "Systèmes bancaires critiques, open banking, conformité réglementaire et expérience client digitale.",
    clients: ["Société Générale", "BNP Paribas", "Caisse d'Épargne", "BforBank"],
    color: "from-blue-500/10 to-transparent",
    border: "border-blue-500/20 hover:border-blue-400/40",
    tag: "text-blue-400",
  },
  {
    icon: Zap,
    title: "Énergie & Utilities",
    desc: "Gestion des réseaux intelligents, supervision industrielle, IoT et transition énergétique.",
    clients: ["GRTgaz", "Enedis"],
    color: "from-yellow-500/10 to-transparent",
    border: "border-yellow-500/20 hover:border-yellow-400/40",
    tag: "text-yellow-400",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Distribution",
    desc: "Plateformes e-commerce, supply chain intelligente, data client et personnalisation à grande échelle.",
    clients: ["Groupe Casino"],
    color: "from-[#BEFF47]/10 to-transparent",
    border: "border-[#BEFF47]/20 hover:border-[#BEFF47]/40",
    tag: "text-[#BEFF47]",
  },
  {
    icon: Shield,
    title: "Assurance & Prévoyance",
    desc: "Digitalisation des parcours assurantiels, automatisation des sinistres et analyse prédictive des risques.",
    clients: ["Europe Assistance"],
    color: "from-violet-500/10 to-transparent",
    border: "border-violet-500/20 hover:border-violet-400/40",
    tag: "text-violet-400",
  },
];

export default function Sectors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="secteurs" ref={ref} className="bg-[#050508] py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] blob-violet opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-4 h-px bg-[#BEFF47]" />
              <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">Secteurs</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Des expertises sectorielles<br />
              <span className="text-[#BEFF47]">éprouvées.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[15px] text-[#6A6A85] max-w-xs leading-relaxed font-light"
          >
            Nous intervenons dans des secteurs exigeants où la fiabilité et la performance ne sont pas des options.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className={`card-glow rounded-2xl p-8 border ${s.border} transition-all duration-300 group relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} pointer-events-none`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <Icon size={18} className={s.tag} />
                    </div>
                    <span className={`text-[10px] font-bold ${s.tag} tracking-[0.15em] uppercase`}>
                      {s.clients.length} client{s.clients.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  <h3 className="text-[17px] font-black text-white mb-3 tracking-tight">{s.title}</h3>
                  <p className="text-[13px] text-[#6A6A85] leading-relaxed mb-6 font-light">{s.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {s.clients.map((c) => (
                      <span key={c} className="px-3 py-1 text-[11px] font-semibold text-white/50 bg-white/5 rounded-full border border-white/8">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
