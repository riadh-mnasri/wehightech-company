import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import { isLang, locales, type Lang } from "@/lib/i18n";
import "../globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
});

const baseUrl = "https://wehightech.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WeHighTech",
  legalName: "WEHIGHTECH",
  url: baseUrl,
  logo: `${baseUrl}/icon.svg`,
  foundingDate: "2017-01-20",
  email: "contact@wehightech.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "66 Avenue des Champs-Élysées",
    postalCode: "75008",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  sameAs: [
    "https://www.linkedin.com/company/wehightech",
    "https://x.com/wehightech",
    "https://github.com/wehightech",
  ],
};

const meta: Record<Lang, { title: string; description: string; ogDescription: string; twitterDescription: string }> = {
  fr: {
    title: "WeHighTech : Excellence Technologique & IA",
    description:
      "WeHighTech développe des solutions technologiques d'excellence propulsées par l'intelligence artificielle. Fondé en 2017 à Paris.",
    ogDescription:
      "Solutions technologiques d'excellence propulsées par l'IA. Développement logiciel, transformation digitale, data & cybersécurité.",
    twitterDescription: "Solutions technologiques d'excellence propulsées par l'IA.",
  },
  en: {
    title: "WeHighTech: Technology Excellence & AI",
    description:
      "WeHighTech builds excellence-driven technology solutions powered by artificial intelligence. Founded in 2017 in Paris.",
    ogDescription:
      "Excellence-driven technology solutions powered by AI. Software development, digital transformation, data & cybersecurity.",
    twitterDescription: "Excellence-driven technology solutions powered by AI.",
  },
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "fr";
  const m = meta[lang];

  return {
    metadataBase: new URL(baseUrl),
    title: m.title,
    description: m.description,
    openGraph: {
      type: "website",
      url: `${baseUrl}/${lang}`,
      siteName: "WeHighTech",
      title: m.title,
      description: m.ogDescription,
      locale: lang === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.twitterDescription,
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: { fr: `${baseUrl}/fr`, en: `${baseUrl}/en`, "x-default": `${baseUrl}/fr` },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();

  return (
    <html lang={rawLang} className={`${geist.variable} ${fraunces.variable} antialiased`}>
      <body className="bg-[#050508] text-[#EEEEF5]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
