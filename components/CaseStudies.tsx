"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Landmark, Zap, ShoppingCart } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { useTilt } from "@/lib/useTilt";

type CaseStudy = {
  icon: typeof Landmark;
  client: string;
  sector: string;
  period: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
  color: string;
  border: string;
  tag: string;
};

const content: Record<Lang, { eyebrow: string; heading: [string, string]; sub: string; labels: { challenge: string; approach: string; outcome: string }; cases: CaseStudy[] }> = {
  fr: {
    eyebrow: "Études de cas",
    heading: ["Des missions réelles,", "des résultats concrets."],
    sub: "Un aperçu de projets critiques menés pour nos clients grands comptes, secteur par secteur.",
    labels: { challenge: "Contexte", approach: "Approche", outcome: "Résultat" },
    cases: [
      {
        icon: Landmark, client: "Société Générale", sector: "Finance & Banque", period: "2024 — en cours",
        title: "Moteur de risque de contrepartie",
        challenge: "Calculer en temps réel des métriques critiques de risque de contrepartie, dans un environnement bancaire fortement régulé, sur des volumes de données massifs.",
        approach: "Conception et déploiement d'un écosystème de microservices cloud-native sur Azure & Kubernetes, traitement des flux via Apache Spark et Kafka, optimisation algorithmique du traitement, TDD/BDD et Clean Code, CI/CD automatisé (GitHub/Jenkins). Intégration pionnière d'outils IA (GitHub Copilot, Claude) dans l'équipe.",
        outcome: "Réduction significative des temps de traitement, baisse notable des incidents en production, vélocité de développement accélérée grâce à l'IA, le tout dans un cadre réglementaire strict.",
        tags: ["Java", "Spring Boot", "Apache Spark", "Azure", "Kubernetes", "Kafka"],
        color: "from-blue-500/10 to-transparent", border: "border-blue-500/20 hover:border-blue-400/40", tag: "text-blue-400",
      },
      {
        icon: Zap, client: "GRTgaz", sector: "Énergie & Utilities", period: "2022 — 2024",
        title: "Plateforme de gestion de distribution énergétique",
        challenge: "Concevoir une plateforme événementielle capable d'absorber des flux de données temps réel, sur un système critique pour la distribution nationale de gaz.",
        approach: "Architecture microservices événementielle, développement backend Java/Kotlin et frontend TypeScript en programmation réactive (Reactor, Kafka), ateliers de cadrage avec les équipes métier, CI/CD sur GitLab, déploiements AWS pilotés par Terraform.",
        outcome: "Une plateforme fiable et réactive, livrée en continu sur deux ans, sur une infrastructure où la moindre défaillance a un impact national.",
        tags: ["Kotlin", "Spring Boot", "Angular", "Kafka", "AWS", "Terraform"],
        color: "from-yellow-500/10 to-transparent", border: "border-yellow-500/20 hover:border-yellow-400/40", tag: "text-yellow-400",
      },
      {
        icon: ShoppingCart, client: "Groupe Casino", sector: "Retail & Distribution", period: "2021 — 2022",
        title: "Moteur de campagnes et d'offres",
        challenge: "Concevoir les APIs backend du moteur de campagnes et d'offres commerciales, à l'échelle d'un grand groupe de distribution.",
        approach: "Conception d'API en Kotlin et Java, pratiques TDD, BDD et programmation fonctionnelle, principes SOLID/KISS/DRY/YAGNI, intégration et déploiement continus sur GitLab et Google Cloud Platform.",
        outcome: "Un moteur de campagnes robuste et maintenable, livré en un peu plus d'un an, sur une plateforme cœur de l'activité commerciale du groupe.",
        tags: ["Kotlin", "Java", "PostgreSQL", "GCP", "Kubernetes"],
        color: "from-[#BEFF47]/10 to-transparent", border: "border-[#BEFF47]/20 hover:border-[#BEFF47]/40", tag: "text-[#BEFF47]",
      },
    ],
  },
  en: {
    eyebrow: "Case studies",
    heading: ["Real missions,", "concrete results."],
    sub: "A look at critical projects delivered for our enterprise clients, sector by sector.",
    labels: { challenge: "Context", approach: "Approach", outcome: "Outcome" },
    cases: [
      {
        icon: Landmark, client: "Société Générale", sector: "Finance & Banking", period: "2024 — ongoing",
        title: "Counterparty risk engine",
        challenge: "Compute critical counterparty risk metrics in real time, in a heavily regulated banking environment, at massive data scale.",
        approach: "Designed and deployed a cloud-native microservices ecosystem on Azure & Kubernetes, processing data streams via Apache Spark and Kafka, algorithmic performance tuning, TDD/BDD and Clean Code, automated CI/CD (GitHub/Jenkins). Pioneered AI tooling (GitHub Copilot, Claude) adoption within the team.",
        outcome: "Significantly reduced processing times, a marked drop in production incidents, and accelerated development velocity through AI adoption, all within a strict regulatory framework.",
        tags: ["Java", "Spring Boot", "Apache Spark", "Azure", "Kubernetes", "Kafka"],
        color: "from-blue-500/10 to-transparent", border: "border-blue-500/20 hover:border-blue-400/40", tag: "text-blue-400",
      },
      {
        icon: Zap, client: "GRTgaz", sector: "Energy & Utilities", period: "2022 — 2024",
        title: "Energy distribution management platform",
        challenge: "Design an event-driven platform able to absorb real-time data streams, on a system critical to national gas distribution.",
        approach: "Event-driven microservices architecture, Java/Kotlin backend and TypeScript frontend with reactive programming (Reactor, Kafka), scoping workshops with business teams, CI/CD on GitLab, Terraform-driven AWS deployments.",
        outcome: "A reliable, responsive platform delivered continuously over two years, on infrastructure where any failure has national impact.",
        tags: ["Kotlin", "Spring Boot", "Angular", "Kafka", "AWS", "Terraform"],
        color: "from-yellow-500/10 to-transparent", border: "border-yellow-500/20 hover:border-yellow-400/40", tag: "text-yellow-400",
      },
      {
        icon: ShoppingCart, client: "Groupe Casino", sector: "Retail & Distribution", period: "2021 — 2022",
        title: "Campaign & offer engine",
        challenge: "Design the backend APIs for the campaign and commercial offer engine, at the scale of a major retail group.",
        approach: "API design in Kotlin and Java, TDD, BDD and functional programming practices, SOLID/KISS/DRY/YAGNI principles, continuous integration and deployment on GitLab and Google Cloud Platform.",
        outcome: "A robust, maintainable campaign engine delivered over just above a year, powering a core part of the group's commercial activity.",
        tags: ["Kotlin", "Java", "PostgreSQL", "GCP", "Kubernetes"],
        color: "from-[#BEFF47]/10 to-transparent", border: "border-[#BEFF47]/20 hover:border-[#BEFF47]/40", tag: "text-[#BEFF47]",
      },
    ],
  },
};

function CaseCard({ c, i, inView, labels }: { c: CaseStudy; i: number; inView: boolean; labels: { challenge: string; approach: string; outcome: string } }) {
  const Icon = c.icon;
  const { ref, style, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1 }}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`card-glow rounded-2xl p-8 border ${c.border} transition-all duration-300 group relative overflow-hidden`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${c.color} pointer-events-none`} />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
            <Icon size={18} className={c.tag} />
          </div>
          <span className={`text-[10px] font-bold ${c.tag} tracking-[0.15em] uppercase`}>{c.period}</span>
        </div>

        <div className="text-[11px] font-bold text-white/50 tracking-widest uppercase mb-1.5">{c.client} · {c.sector}</div>
        <h3 className="text-[17px] font-black text-white mb-5 tracking-tight leading-tight">{c.title}</h3>

        <div className="space-y-4 mb-6">
          <div>
            <div className={`text-[10px] font-bold ${c.tag} tracking-[0.15em] uppercase mb-1.5`}>{labels.challenge}</div>
            <p className="text-[13px] text-[#8A8AA0] leading-relaxed font-light">{c.challenge}</p>
          </div>
          <div>
            <div className={`text-[10px] font-bold ${c.tag} tracking-[0.15em] uppercase mb-1.5`}>{labels.approach}</div>
            <p className="text-[13px] text-[#8A8AA0] leading-relaxed font-light">{c.approach}</p>
          </div>
          <div>
            <div className={`text-[10px] font-bold ${c.tag} tracking-[0.15em] uppercase mb-1.5`}>{labels.outcome}</div>
            <p className="text-[13px] text-[#8A8AA0] leading-relaxed font-light">{c.outcome}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {c.tags.map((t) => (
            <span key={t} className="px-3 py-1 text-[11px] font-semibold text-white/50 bg-white/5 rounded-full border border-white/8">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies({ lang }: { lang: Lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const t = content[lang];

  return (
    <section ref={ref} className="bg-[#0C0C12] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] blob-lime opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-4 h-px bg-[#BEFF47]" />
              <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">{t.eyebrow}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
            >
              {t.heading[0]}<br />
              <span className="text-[#BEFF47]">{t.heading[1]}</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[15px] text-[#8A8AA0] max-w-xs leading-relaxed font-light"
          >
            {t.sub}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {t.cases.map((c, i) => (
            <CaseCard key={c.client} c={c} i={i} inView={inView} labels={t.labels} />
          ))}
        </div>
      </div>
    </section>
  );
}
