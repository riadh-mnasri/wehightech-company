import { lang as getLang } from "next/root-params";
import { isLang, type Lang } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const content: Record<Lang, { eyebrow: string; title: string; desc: string; cta: string }> = {
  fr: {
    eyebrow: "Erreur 404",
    title: "Cette page n'existe pas.",
    desc: "Le lien est peut-être obsolète, ou l'adresse a été mal saisie.",
    cta: "Retour à l'accueil →",
  },
  en: {
    eyebrow: "404 error",
    title: "This page doesn't exist.",
    desc: "The link may be outdated, or the address was mistyped.",
    cta: "Back to homepage →",
  },
};

export default async function NotFound() {
  const rawLang = await getLang();
  const lang: Lang = rawLang && isLang(rawLang) ? rawLang : "fr";
  const t = content[lang];

  return (
    <main className="flex flex-col min-h-screen bg-[#050508]">
      <Navbar lang={lang} />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8 pt-32 pb-20">
        <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase mb-5">{t.eyebrow}</span>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          {t.title}
        </h1>
        <p className="text-[15px] text-[#8A8AA0] max-w-sm leading-relaxed font-light mb-10">
          {t.desc}
        </p>
        <a
          href={`/${lang}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#BEFF47] text-[#050508] font-bold text-sm hover:bg-white transition-colors duration-200"
        >
          {t.cta}
        </a>
      </div>
      <Footer lang={lang} />
    </main>
  );
}
