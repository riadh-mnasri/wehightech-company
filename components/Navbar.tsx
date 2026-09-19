"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const content: Record<Lang, { links: { label: string; href: string }[]; cta: string; openMenu: string; closeMenu: string }> = {
  fr: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Accompagnement", href: "#transformation" },
      { label: "IA", href: "#ai" },
      { label: "À propos", href: "#about" },
    ],
    cta: "Nous contacter →",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  en: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Approach", href: "#transformation" },
      { label: "AI", href: "#ai" },
      { label: "About", href: "#about" },
    ],
    cta: "Get in touch →",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

const sectionIds = ["services", "transformation", "ai", "values", "secteurs", "about", "contact"];

export default function Navbar({ lang }: { lang: Lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const t = content[lang];
  const otherLang: Lang = lang === "fr" ? "en" : "fr";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (y / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/5 bg-[#050508]/90 backdrop-blur-xl py-3" : "py-6"
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#BEFF47] transition-[width] duration-75 z-10 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href={`/${lang}`} className="flex items-center gap-2.5">
          <div className="w-6 h-6 bg-[#BEFF47] flex items-center justify-center">
            <span className="text-[#050508] text-[9px] font-black leading-none">WH</span>
          </div>
          <span className="text-[14px] font-black tracking-tight text-white">WeHighTech</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {t.links.map((l) => {
            const id = l.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 pb-1 ${
                  isActive ? "text-white" : "text-[#8A8AA0] hover:text-white"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#BEFF47]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href={`/${otherLang}`}
            className="text-[12px] font-bold text-[#8A8AA0] hover:text-[#BEFF47] transition-colors duration-200 tracking-widest uppercase"
          >
            {otherLang}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#BEFF47] text-[#050508] text-[13px] font-bold hover:bg-white transition-colors duration-200"
          >
            {t.cta}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? t.closeMenu : t.openMenu}
          className="md:hidden text-[#8A8AA0] hover:text-white transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/5 bg-[#050508] overflow-hidden"
          >
            <nav className="flex flex-col px-8 py-5 gap-4">
              {t.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm py-1 font-medium transition-colors duration-200 ${
                    activeSection === l.href.replace("#", "")
                      ? "text-[#BEFF47]"
                      : "text-[#8A8AA0] hover:text-[#BEFF47]"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`/${otherLang}`}
                onClick={() => setOpen(false)}
                className="text-sm py-1 font-bold text-[#8A8AA0] hover:text-[#BEFF47] tracking-widest uppercase"
              >
                {otherLang}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 py-3 bg-[#BEFF47] text-[#050508] text-sm font-bold text-center"
              >
                {t.cta}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
