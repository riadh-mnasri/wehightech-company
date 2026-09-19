import type { Lang } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export type LegalSection = { heading: string; body: string[] };

export default function LegalPage({
  lang,
  eyebrow,
  title,
  updated,
  sections,
}: {
  lang: Lang;
  eyebrow: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main className="flex flex-col min-h-screen bg-[#050508]">
      <Navbar lang={lang} />
      <article className="flex-1 pt-40 pb-28">
        <div className="max-w-3xl mx-auto px-8">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-4 h-px bg-[#BEFF47]" />
            <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">{eyebrow}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            {title}
          </h1>
          <p className="text-[12px] text-[#8A8AA0] font-light mb-16">{updated}</p>

          <div className="space-y-12">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-[15px] font-bold text-white tracking-tight mb-4">{s.heading}</h2>
                <div className="space-y-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-[14px] text-[#8A8AA0] leading-relaxed font-light">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
      <Footer lang={lang} />
      <BackToTop lang={lang} />
    </main>
  );
}
