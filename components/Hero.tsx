"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Lang } from "@/lib/i18n";

const content: Record<Lang, {
  words: string[];
  tag: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { n: string; l: string }[];
}> = {
  fr: {
    words: ["Excellence.", "Qualité.", "Innovation."],
    tag: "WeHighTech · Fondé en 2017 · Paris, France",
    description:
      "Solutions technologiques de haute précision, propulsées par l'intelligence artificielle. La qualité comme fondation, l'excellence comme standard.",
    ctaPrimary: "Découvrir nos services",
    ctaSecondary: "Parler à un expert",
    stats: [
      { n: "2017", l: "Fondation" },
      { n: "150+", l: "Projets livrés" },
      { n: "98%", l: "Satisfaction" },
      { n: "24/7", l: "Support" },
    ],
  },
  en: {
    words: ["Excellence.", "Quality.", "Innovation."],
    tag: "WeHighTech · Founded in 2017 · Paris, France",
    description:
      "High-precision technology solutions, powered by artificial intelligence. Quality as the foundation, excellence as the standard.",
    ctaPrimary: "Discover our services",
    ctaSecondary: "Talk to an expert",
    stats: [
      { n: "2017", l: "Founded" },
      { n: "150+", l: "Projects delivered" },
      { n: "98%", l: "Satisfaction" },
      { n: "24/7", l: "Support" },
    ],
  },
};

function AnimatedWord({ word, delay }: { word: string; delay: number }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.div>
    </div>
  );
}

export default function Hero({ lang }: { lang: Lang }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const t = content[lang];

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const limeBlobY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const violetBlobY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);

    const dots: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.4, a: Math.random() * 0.25 + 0.05,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190,255,71,${d.a})`;
        ctx.fill();
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(190,255,71,${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-between bg-[#050508] overflow-hidden noise">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Lime blob top-right */}
      <motion.div style={{ y: limeBlobY }} className="absolute -top-40 right-0 w-[700px] h-[700px] blob-lime pointer-events-none" />
      {/* Violet blob bottom-left */}
      <motion.div style={{ y: violetBlobY }} className="absolute bottom-0 -left-20 w-[500px] h-[500px] blob-violet pointer-events-none" />

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-8 w-full pt-32 pb-8"
      >
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#BEFF47] pulse-dot" />
          <span className="text-[11px] font-bold text-[#8A8AA0] tracking-[0.18em] uppercase">
            {t.tag}
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-10">
          <h1 className="text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.92] tracking-[-0.03em] text-white">
            {mounted && (
              <>
                <AnimatedWord word={t.words[0]} delay={0.2} />
                <AnimatedWord word={t.words[1]} delay={0.35} />
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#BEFF47]"
                  >
                    {t.words[2]}
                  </motion.div>
                </div>
              </>
            )}
          </h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="text-[17px] text-[#8A8AA0] max-w-md leading-relaxed font-light"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#BEFF47] text-[#050508] font-bold text-sm hover:bg-white transition-colors duration-200"
            >
              {t.ctaPrimary}
              <span className="group-hover:translate-x-0.5 transition-transform duration-150 inline-block">→</span>
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 text-sm font-medium hover:border-white/25 hover:text-white transition-colors duration-200"
            >
              {t.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative z-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4"
      >
        {t.stats.map((s, i) => (
          <div key={s.l} className={`px-8 py-6 ${i < 3 ? "border-r border-white/5" : ""}`}>
            <div className="text-2xl font-black text-white mb-0.5">{s.n}</div>
            <div className="text-[11px] text-[#8A8AA0] font-medium tracking-widest uppercase">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
