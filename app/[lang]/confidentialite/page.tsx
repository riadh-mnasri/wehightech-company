import type { Metadata } from "next";
import { isLang, type Lang } from "@/lib/i18n";
import { legalMetadata } from "@/lib/seo";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

const content: Record<Lang, { eyebrow: string; title: string; description: string; updated: string; sections: LegalSection[] }> = {
  fr: {
    eyebrow: "Informations légales",
    title: "Politique de confidentialité",
    description: "Comment WeHighTech traite les données personnelles collectées via le formulaire de contact, conformément au RGPD.",
    updated: "Dernière mise à jour : septembre 2026",
    sections: [
      {
        heading: "Responsable du traitement",
        body: [
          "WEHIGHTECH, SARL au capital de 10 000 €, SIREN 825 104 128, 66 Avenue des Champs-Élysées, 75008 Paris, est responsable du traitement des données personnelles collectées sur ce site. Pour toute question, contactez-nous à riadh.mnasri@wehightech.com.",
        ],
      },
      {
        heading: "Données collectées",
        body: [
          "Le formulaire de contact collecte votre nom, votre adresse email, le nom de votre entreprise (facultatif) et le contenu de votre message. Ces données sont transmises à WeHighTech par email via Resend, notre prestataire d'envoi d'emails.",
          "Ce site utilise Vercel Analytics, un outil de mesure d'audience anonymisé et sans cookie, pour comprendre la fréquentation du site de façon agrégée.",
        ],
      },
      {
        heading: "Finalité et base légale",
        body: [
          "Les données du formulaire de contact sont traitées dans le but exclusif de répondre à votre demande, sur la base de votre consentement exprès lors de la soumission du formulaire (article 6.1.a du RGPD).",
        ],
      },
      {
        heading: "Durée de conservation",
        body: [
          "Les données transmises via le formulaire de contact sont conservées le temps nécessaire au traitement de votre demande, puis archivées ou supprimées dans un délai raisonnable en l'absence de suite commerciale.",
        ],
      },
      {
        heading: "Vos droits",
        body: [
          "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données personnelles. Vous pouvez exercer ces droits en écrivant à riadh.mnasri@wehightech.com. Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (cnil.fr).",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Legal information",
    title: "Privacy policy",
    description: "How WeHighTech processes personal data collected through the contact form, in line with GDPR.",
    updated: "Last updated: September 2026",
    sections: [
      {
        heading: "Data controller",
        body: [
          "WEHIGHTECH, a French SARL with a share capital of €10,000, SIREN 825 104 128, 66 Avenue des Champs-Élysées, 75008 Paris, is the controller of the personal data collected on this site. For any question, contact us at riadh.mnasri@wehightech.com.",
        ],
      },
      {
        heading: "Data collected",
        body: [
          "The contact form collects your name, email address, company name (optional) and message content. This data is forwarded to WeHighTech by email via Resend, our email delivery provider.",
          "This site uses Vercel Analytics, an anonymized, cookieless traffic measurement tool, to understand site usage in aggregate.",
        ],
      },
      {
        heading: "Purpose and legal basis",
        body: [
          "Contact form data is processed solely to respond to your inquiry, based on your explicit consent given when submitting the form (GDPR Article 6.1.a).",
        ],
      },
      {
        heading: "Retention period",
        body: [
          "Data submitted through the contact form is kept for as long as necessary to handle your request, then archived or deleted within a reasonable period if no business relationship follows.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under GDPR, you have the right to access, rectify, erase and object to the processing of your personal data. You can exercise these rights by emailing riadh.mnasri@wehightech.com. You also have the right to lodge a complaint with the French data protection authority (CNIL, cnil.fr).",
        ],
      },
    ],
  },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/confidentialite">): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "fr";
  return legalMetadata(lang, "/confidentialite", content[lang].title, content[lang].description);
}

export default async function ConfidentialitePage({ params }: PageProps<"/[lang]/confidentialite">) {
  const { lang: rawLang } = await params;
  const lang: Lang = isLang(rawLang) ? rawLang : "fr";
  const t = content[lang];

  return <LegalPage lang={lang} eyebrow={t.eyebrow} title={t.title} updated={t.updated} sections={t.sections} />;
}
