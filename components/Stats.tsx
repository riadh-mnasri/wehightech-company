"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { target: 150, suffix: "+",    label: "Projets livrés",           desc: "Depuis 2017" },
  { target: 8,   suffix: " ans", label: "D'expertise",              desc: "Au service de l'innovation" },
  { target: 98,  suffix: "%",    label: "Satisfaction client",      desc: "Mesuré sur chaque projet" },
  { target: 10,  suffix: "+",    label: "Clients grands comptes",   desc: "CAC40 & leaders nationaux" },
];

function Counter({ target, suffix, duration, start }: {
  target: number; suffix: string; duration: number; start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);

  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#050508] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C12]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-14"
        >
          <div className="w-4 h-px bg-[#BEFF47]" />
          <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">
            WeHighTech en chiffres
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-[#050508] px-8 py-10 group hover:bg-[#0C0C12] transition-colors duration-300"
            >
              <div className="text-[2.8rem] md:text-[3.5rem] font-black text-[#BEFF47] leading-none mb-3 tabular-nums">
                <Counter target={s.target} suffix={s.suffix} duration={1600 + i * 200} start={inView} />
              </div>
              <div className="text-[14px] font-bold text-white mb-1">{s.label}</div>
              <div className="text-[11px] text-[#6A6A85] font-light">{s.desc}</div>
              <div className="mt-5 w-6 h-px bg-[#BEFF47]/30 group-hover:w-10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
