"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "IA", href: "#ai" },
  { label: "Valeurs", href: "#values" },
  { label: "À propos", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
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
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-6 h-6 bg-[#BEFF47] flex items-center justify-center">
            <span className="text-[#050508] text-[9px] font-black leading-none">WH</span>
          </div>
          <span className="text-[14px] font-black tracking-tight text-white">
            WeHighTech
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-[13px] text-[#6A6A85] hover:text-white transition-colors duration-200 font-medium tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-[#BEFF47] text-[#050508] text-[13px] font-bold hover:bg-white transition-colors duration-200"
        >
          Nous contacter →
        </a>

        <button onClick={() => setOpen(!open)}
          className="md:hidden text-[#6A6A85] hover:text-white transition-colors"
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
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-sm text-[#6A6A85] hover:text-[#BEFF47] transition-colors py-1 font-medium"
                >{l.label}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                className="mt-2 py-3 bg-[#BEFF47] text-[#050508] text-sm font-bold text-center"
              >Nous contacter →</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
