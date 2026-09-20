"use client";

import Image from "next/image";
import type { Lang } from "@/lib/i18n";

const content: Record<Lang, {
  tagline: string;
  cols: Record<string, { label: string; href: string }[]>;
  legal: { label: string; href: string }[];
  copyright: (year: number) => string;
  foundedBy: string;
  langLabel: string;
}> = {
  fr: {
    tagline: "Entreprise high-tech fondée en 2017. Solutions technologiques d'excellence, propulsées par l'IA.",
    cols: {
      Services: [
        { label: "Intelligence Artificielle", href: "#services" },
        { label: "Développement Logiciel", href: "#services" },
        { label: "Transformation Digitale", href: "#services" },
        { label: "Data & Analytics", href: "#services" },
        { label: "Cybersécurité", href: "#services" },
      ],
      Entreprise: [
        { label: "À propos", href: "#about" },
        { label: "Valeurs", href: "#valeurs" },
        { label: "Processus", href: "#processus" },
        { label: "Nous contacter", href: "#contact" },
      ],
      Contact: [
        { label: "Démarrer un projet", href: "#contact" },
        { label: "Email", href: "mailto:contact@wehightech.com" },
      ],
    },
    legal: [
      { label: "Mentions légales", href: "/fr/mentions-legales" },
      { label: "Confidentialité", href: "/fr/confidentialite" },
      { label: "CGV", href: "/fr/cgv" },
    ],
    copyright: (year) => `© ${year} WeHighTech. Tous droits réservés. Fondé par`,
    foundedBy: "Riadh MNASRI",
    langLabel: "EN",
  },
  en: {
    tagline: "High-tech company founded in 2017. Excellence-driven technology solutions, powered by AI.",
    cols: {
      Services: [
        { label: "Artificial Intelligence", href: "#services" },
        { label: "Software Development", href: "#services" },
        { label: "Digital Transformation", href: "#services" },
        { label: "Data & Analytics", href: "#services" },
        { label: "Cybersecurity", href: "#services" },
      ],
      Company: [
        { label: "About", href: "#about" },
        { label: "Values", href: "#valeurs" },
        { label: "Process", href: "#processus" },
        { label: "Contact us", href: "#contact" },
      ],
      Contact: [
        { label: "Start a project", href: "#contact" },
        { label: "Email", href: "mailto:contact@wehightech.com" },
      ],
    },
    legal: [
      { label: "Legal notice", href: "/en/mentions-legales" },
      { label: "Privacy", href: "/en/confidentialite" },
      { label: "Terms", href: "/en/cgv" },
    ],
    copyright: (year) => `© ${year} WeHighTech. All rights reserved. Founded by`,
    foundedBy: "Riadh MNASRI",
    langLabel: "FR",
  },
};

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/wehightech" },
  { label: "X (Twitter)", href: "https://x.com/wehightech" },
  { label: "GitHub", href: "https://github.com/wehightech" },
];

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();
  const t = content[lang];
  const otherLang: Lang = lang === "fr" ? "en" : "fr";

  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top lime line */}
        <div className="w-16 h-px bg-[#BEFF47] mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <Image src="/logo-mark.png" alt="WeHighTech" width={32} height={30} className="w-8 h-auto" />
              <span className="text-[14px] font-black text-white">WeHighTech</span>
            </div>
            <p className="text-[13px] text-[#8A8AA0] leading-relaxed max-w-xs mb-6 font-light">
              {t.tagline}
            </p>
            <div className="flex flex-col gap-2">
              {socials.map(s => (
                <a key={s.label} href={s.href}
                  className="text-[12px] text-[#8A8AA0] hover:text-[#BEFF47] transition-colors duration-200 font-medium"
                >
                  {s.label} ↗
                </a>
              ))}
              <a href={`/${otherLang}`}
                className="text-[12px] text-[#8A8AA0] hover:text-[#BEFF47] transition-colors duration-200 font-bold tracking-widest uppercase mt-1"
              >
                {t.langLabel}
              </a>
            </div>
          </div>

          {Object.entries(t.cols).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[10px] font-black text-[#8A8AA0]/50 uppercase tracking-[0.2em] mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[12px] text-[#8A8AA0] hover:text-[#BEFF47] transition-colors duration-200 font-light">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#8A8AA0]/60 font-light">
            {t.copyright(year)}{" "}
            <a href="https://riadh-mnasri.pro" className="hover:text-[#BEFF47] transition-colors duration-200">
              {t.foundedBy}
            </a>
          </p>
          <div className="flex items-center gap-6 text-[11px] text-[#8A8AA0]/60 font-light">
            {t.legal.map(l => (
              <a key={l.label} href={l.href} className="hover:text-[#BEFF47] transition-colors duration-200">{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
