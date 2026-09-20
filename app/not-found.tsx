import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="fr">
      <body className="bg-[#050508] text-[#EEEEF5] antialiased">
        <main className="flex min-h-screen flex-col items-center justify-center text-center px-8">
          <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase mb-5">
            Erreur 404 · 404 error
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Page introuvable / Page not found
          </h1>
          <p className="text-[15px] text-[#8A8AA0] max-w-sm leading-relaxed font-light mb-10">
            Le lien est peut-être obsolète. / This link may be outdated.
          </p>
          <div className="flex gap-3">
            <Link
              href="/fr"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#BEFF47] text-[#050508] font-bold text-sm hover:bg-white transition-colors duration-200"
            >
              Accueil FR →
            </Link>
            <Link
              href="/en"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 text-sm font-medium hover:border-white/25 hover:text-white transition-colors duration-200"
            >
              EN home →
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
