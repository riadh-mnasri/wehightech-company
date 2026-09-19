import type { Metadata } from "next";
import { isLang, type Lang } from "@/lib/i18n";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

const content: Record<Lang, { eyebrow: string; title: string; updated: string; sections: LegalSection[] }> = {
  fr: {
    eyebrow: "Informations légales",
    title: "Mentions légales",
    updated: "Dernière mise à jour : septembre 2026",
    sections: [
      {
        heading: "Éditeur du site",
        body: [
          "Le site wehightech.com est édité par la société WEHIGHTECH, SARL au capital social de 10 000 €, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro SIREN 825 104 128 (SIRET 825 104 128 00020), numéro de TVA intracommunautaire FR48 825104128.",
          "Siège social : 66 Avenue des Champs-Élysées, 75008 Paris, France.",
          "Directeur de la publication : Riadh Mnasri, en qualité de gérant.",
          "Contact : contact@wehightech.com — 01 78 53 87 80.",
        ],
      },
      {
        heading: "Hébergement",
        body: [
          "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.",
        ],
      },
      {
        heading: "Propriété intellectuelle",
        body: [
          "L'ensemble des contenus présents sur ce site (textes, logos, graphismes) est la propriété exclusive de WeHighTech, sauf mention contraire, et est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable, est interdite.",
        ],
      },
      {
        heading: "Données personnelles",
        body: [
          "Le traitement des données personnelles collectées via ce site (notamment le formulaire de contact) est décrit dans notre politique de confidentialité.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Legal information",
    title: "Legal notice",
    updated: "Last updated: September 2026",
    sections: [
      {
        heading: "Site publisher",
        body: [
          "The wehightech.com website is published by WEHIGHTECH, a French SARL (limited liability company) with a share capital of €10,000, registered with the Paris Trade and Companies Register under SIREN number 825 104 128 (SIRET 825 104 128 00020), intra-community VAT number FR48 825104128.",
          "Registered office: 66 Avenue des Champs-Élysées, 75008 Paris, France.",
          "Publication director: Riadh Mnasri, as company manager (gérant).",
          "Contact: contact@wehightech.com — +33 1 78 53 87 80.",
        ],
      },
      {
        heading: "Hosting",
        body: [
          "This site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "All content on this site (text, logos, graphics) is the exclusive property of WeHighTech, unless otherwise stated, and is protected by intellectual property law. Any reproduction, representation or distribution, in whole or in part, without prior authorization, is prohibited.",
        ],
      },
      {
        heading: "Personal data",
        body: [
          "The processing of personal data collected through this site (in particular the contact form) is described in our privacy policy.",
        ],
      },
    ],
  },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/mentions-legales">): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "fr";
  return { title: content[lang].title };
}

export default async function MentionsLegalesPage({ params }: PageProps<"/[lang]/mentions-legales">) {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "fr";
  const t = content[lang];

  return <LegalPage lang={lang} eyebrow={t.eyebrow} title={t.title} updated={t.updated} sections={t.sections} />;
}
