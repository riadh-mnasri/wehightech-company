"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const label: Record<Lang, string> = { fr: "Retour en haut", en: "Back to top" };

export default function BackToTop({ lang = "fr" }: { lang?: Lang }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={label[lang]}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 bg-[#BEFF47] text-[#050508] flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg shadow-[#BEFF47]/20"
        >
          <ArrowUp size={16} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
