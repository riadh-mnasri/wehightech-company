import type { Metadata } from "next";
import { isLang, type Lang } from "@/lib/i18n";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

const content: Record<Lang, { eyebrow: string; title: string; updated: string; sections: LegalSection[] }> = {
  fr: {
    eyebrow: "Informations légales",
    title: "Conditions générales de vente",
    updated: "Dernière mise à jour : septembre 2026 — modèle standard, à valider avant application commerciale",
    sections: [
      {
        heading: "Objet",
        body: [
          "Les présentes conditions générales de vente régissent les prestations de conseil, développement logiciel, transformation digitale, data et cybersécurité fournies par WEHIGHTECH (SIREN 825 104 128) à ses clients professionnels, sauf accord contractuel particulier signé entre les parties.",
        ],
      },
      {
        heading: "Devis et commande",
        body: [
          "Toute prestation fait l'objet d'un devis détaillant le périmètre, les livrables et le calendrier. La commande est réputée ferme à réception du devis signé ou de tout accord écrit équivalent (email, bon de commande).",
        ],
      },
      {
        heading: "Prix et modalités de paiement",
        body: [
          "Les prix sont exprimés en euros hors taxes. Sauf stipulation contraire au devis, le paiement s'effectue à réception de facture, dans un délai de 30 jours.",
          "Conformément à la loi, tout retard de paiement entraîne l'application de pénalités au taux d'intérêt légal en vigueur majoré, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 €, due de plein droit sans qu'un rappel soit nécessaire.",
        ],
      },
      {
        heading: "Exécution des prestations",
        body: [
          "WeHighTech s'engage à exécuter les prestations avec diligence et selon les règles de l'art, dans le cadre d'une obligation de moyens. Les délais indiqués sont donnés à titre indicatif sauf engagement contractuel exprès.",
        ],
      },
      {
        heading: "Propriété intellectuelle",
        body: [
          "Sauf stipulation contraire au devis, les livrables spécifiquement développés pour le client lui sont cédés à réception du paiement intégral des prestations correspondantes. WeHighTech conserve la propriété de ses outils, méthodes et briques logicielles préexistantes.",
        ],
      },
      {
        heading: "Confidentialité",
        body: [
          "Chaque partie s'engage à conserver confidentielles les informations échangées dans le cadre de la prestation et à ne pas les divulguer à des tiers sans accord préalable.",
        ],
      },
      {
        heading: "Responsabilité",
        body: [
          "La responsabilité de WeHighTech est limitée aux dommages directs et ne saurait excéder le montant total facturé au titre de la prestation concernée. WeHighTech ne saurait être tenue responsable des dommages indirects.",
        ],
      },
      {
        heading: "Droit applicable et juridiction",
        body: [
          "Les présentes conditions sont soumises au droit français. Tout litige relatif à leur interprétation ou leur exécution relève de la compétence des tribunaux de Paris, sauf disposition légale contraire applicable aux consommateurs.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Legal information",
    title: "General terms of sale",
    updated: "Last updated: September 2026 — standard template, pending review before commercial use",
    sections: [
      {
        heading: "Purpose",
        body: [
          "These general terms of sale govern the consulting, software development, digital transformation, data and cybersecurity services provided by WEHIGHTECH (SIREN 825 104 128) to its business clients, unless a specific contractual agreement is signed between the parties.",
        ],
      },
      {
        heading: "Quote and order",
        body: [
          "Every engagement is covered by a quote detailing scope, deliverables and timeline. An order is considered firm upon receipt of the signed quote or any equivalent written agreement (email, purchase order).",
        ],
      },
      {
        heading: "Price and payment terms",
        body: [
          "Prices are quoted in euros, excluding tax. Unless otherwise stated in the quote, payment is due within 30 days of invoice receipt.",
          "As required by French law, any late payment triggers penalties at the applicable statutory interest rate plus a flat €40 collection fee, due automatically without prior notice.",
        ],
      },
      {
        heading: "Performance of services",
        body: [
          "WeHighTech commits to performing services diligently and according to best practices, under a best-efforts obligation. Stated timelines are indicative unless explicitly contracted otherwise.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "Unless otherwise stated in the quote, deliverables developed specifically for the client are transferred to them upon full payment of the corresponding services. WeHighTech retains ownership of its pre-existing tools, methods and software components.",
        ],
      },
      {
        heading: "Confidentiality",
        body: [
          "Each party agrees to keep confidential any information exchanged in the course of the engagement and not to disclose it to third parties without prior agreement.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "WeHighTech's liability is limited to direct damages and shall not exceed the total amount invoiced for the relevant service. WeHighTech shall not be liable for indirect damages.",
        ],
      },
      {
        heading: "Governing law and jurisdiction",
        body: [
          "These terms are governed by French law. Any dispute regarding their interpretation or performance falls under the jurisdiction of the Paris courts, subject to any mandatory consumer-protection provisions.",
        ],
      },
    ],
  },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/cgv">): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "fr";
  return { title: content[lang].title };
}

export default async function CgvPage({ params }: PageProps<"/[lang]/cgv">) {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "fr";
  const t = content[lang];

  return <LegalPage lang={lang} eyebrow={t.eyebrow} title={t.title} updated={t.updated} sections={t.sections} />;
}
