"use client";

const col: Record<string, { label: string; href: string }[]> = {
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
};

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/wehightech" },
  { label: "X (Twitter)", href: "https://x.com/wehightech" },
  { label: "GitHub", href: "https://github.com/wehightech" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top lime line */}
        <div className="w-16 h-px bg-[#BEFF47] mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-6 h-6 bg-[#BEFF47] flex items-center justify-center">
                <span className="text-[#050508] text-[9px] font-black">WH</span>
              </div>
              <span className="text-[14px] font-black text-white">WeHighTech</span>
            </div>
            <p className="text-[13px] text-[#6A6A85] leading-relaxed max-w-xs mb-6 font-light">
              Entreprise high-tech fondée en 2017. Solutions technologiques d&apos;excellence,
              propulsées par l&apos;IA.
            </p>
            <div className="flex flex-col gap-2">
              {socials.map(s => (
                <a key={s.label} href={s.href}
                  className="text-[12px] text-[#6A6A85] hover:text-[#BEFF47] transition-colors duration-200 font-medium"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          {Object.entries(col).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[10px] font-black text-[#6A6A85]/50 uppercase tracking-[0.2em] mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[12px] text-[#6A6A85] hover:text-[#BEFF47] transition-colors duration-200 font-light">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#6A6A85]/50 font-light">© {year} WeHighTech. Tous droits réservés.</p>
          <div className="flex items-center gap-6 text-[11px] text-[#6A6A85]/50 font-light">
            {["Mentions légales", "Confidentialité", "CGV"].map(l => (
              <a key={l} href="#" className="hover:text-[#BEFF47] transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
