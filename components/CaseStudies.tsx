"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Landmark, Zap, ShoppingCart, Scale } from "lucide-react";
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
        icon: Landmark, client: "Société Générale", sector: "Finance & Banque", period: "2024 - en cours",
        title: "Moteur de risque de contrepartie",
        challenge: "Calculer en temps réel des métriques critiques de risque de contrepartie, dans un environnement bancaire fortement régulé, sur des volumes de données massifs.",
        approach: "Conception et déploiement d'un écosystème de microservices cloud-native sur Azure & Kubernetes, traitement des flux via Apache Spark et Kafka, optimisation algorithmique du traitement, TDD/BDD et Clean Code, CI/CD automatisé (GitHub/Jenkins). Intégration pionnière d'outils IA (GitHub Copilot, Claude) dans l'équipe.",
        outcome: "Batch nocturne passé de 4h à moins de 45 minutes sur plus de 5 millions d'événements par jour, environ 70 % d'incidents critiques en moins en production, et +25 % de vélocité grâce à l'IA, le tout dans un cadre réglementaire strict.",
        tags: ["Java", "Spring Boot", "Apache Spark", "Azure", "Kubernetes", "Kafka"],
        color: "from-blue-500/10 to-transparent", border: "border-blue-500/20 hover:border-blue-400/40", tag: "text-blue-400",
      },
      {
        icon: Zap, client: "GRTgaz", sector: "Énergie & Utilities", period: "2022 - 2024",
        title: "Plateforme de gestion de distribution énergétique",
        challenge: "Concevoir une plateforme événementielle capable d'absorber des flux de données temps réel, sur un système critique pour la distribution nationale de gaz.",
        approach: "Architecture microservices événementielle, développement backend Java/Kotlin et frontend TypeScript en programmation réactive (Reactor, Kafka), ateliers de cadrage avec les équipes métier, CI/CD sur GitLab, déploiements AWS pilotés par Terraform.",
        outcome: "Plus de 10 millions de télémesures traitées par jour, jusqu'à 2 000 événements par seconde en pic, 99,95 % de disponibilité, et des mises en production passées d'un rythme trimestriel à plusieurs par semaine.",
        tags: ["Kotlin", "Spring Boot", "Angular", "Kafka", "AWS", "Terraform"],
        color: "from-yellow-500/10 to-transparent", border: "border-yellow-500/20 hover:border-yellow-400/40", tag: "text-yellow-400",
      },
      {
        icon: ShoppingCart, client: "Groupe Casino", sector: "Retail & Distribution", period: "2021 - 2022",
        title: "Moteur de campagnes et d'offres",
        challenge: "Concevoir les APIs backend du moteur de campagnes et d'offres commerciales, à l'échelle d'un grand groupe de distribution.",
        approach: "Conception d'API en Kotlin et Java, pratiques TDD, BDD et programmation fonctionnelle, principes SOLID/KISS/DRY/YAGNI, intégration et déploiement continus sur GitLab et Google Cloud Platform.",
        outcome: "Des dizaines de milliers d'offres personnalisées diffusées sur plus de 1 000 magasins, restituées en caisse et sur l'application mobile en moins de 50 ms en moyenne (P95 sous 100 ms).",
        tags: ["Kotlin", "Java", "PostgreSQL", "GCP", "Kubernetes"],
        color: "from-[#BEFF47]/10 to-transparent", border: "border-[#BEFF47]/20 hover:border-[#BEFF47]/40", tag: "text-[#BEFF47]",
      },
      {
        icon: Zap, client: "Enedis", sector: "Énergie & Utilities", period: "2017 - 2020",
        title: "Modernisation des systèmes de distribution électrique",
        challenge: "Faire évoluer des systèmes critiques de distribution d'électricité tout en maintenant leur fiabilité, avec des responsabilités de conception d'architecture.",
        approach: "Développement full-stack backend Java/Kotlin et frontend Angular/TypeScript, pratiques de craftsmanship (TDD, ATDD, BDD, DDD, architecture hexagonale, Clean Code), intégration continue et déploiements automatisés avec Ansible.",
        outcome: "Plus de trois ans sur un SI couvrant plus de 35 millions de compteurs Linky, avec des livraisons passées d'une tous les 3 à 6 mois à plusieurs par sprint de deux semaines.",
        tags: ["Java", "Kotlin", "Angular", "PostgreSQL", "Kafka"],
        color: "from-yellow-500/10 to-transparent", border: "border-yellow-500/20 hover:border-yellow-400/40", tag: "text-yellow-400",
      },
      {
        icon: ShoppingCart, client: "Galeries Lafayette", sector: "Retail & Distribution", period: "2020",
        title: "Développement full-stack en équipe craftsmanship",
        challenge: "Analyser et concevoir techniquement de nouvelles fonctionnalités dans une équipe orientée craftsmanship, sur une plateforme retail exigeante.",
        approach: "Développement full-stack (front, back, API) en Java/Kotlin et Angular/TypeScript, Clean Code, TDD, BDD, DDD, architecture hexagonale, revues de code et mob programming, partage de connaissances via des sessions techniques internes.",
        outcome: "Plus de 10 fonctionnalités livrées par sprint de deux semaines au sein d'une feature team de 8 personnes, sur une plateforme déployée sur Google Cloud Platform.",
        tags: ["Java", "Kotlin", "Angular", "Kubernetes", "GCP"],
        color: "from-[#BEFF47]/10 to-transparent", border: "border-[#BEFF47]/20 hover:border-[#BEFF47]/40", tag: "text-[#BEFF47]",
      },
      {
        icon: Scale, client: "Ministère de la Justice", sector: "Secteur public", period: "2020 - 2021",
        title: "Plateforme critique pour le secteur de la justice",
        challenge: "Développer et faire évoluer une plateforme critique pour le secteur de la justice, dans un contexte agile avec un fort enjeu de fiabilité.",
        approach: "Développement full-stack front et back, cadrage produit avec les parties prenantes métier, mentoring des développeurs, Clean Code et revues de code, partage de connaissances en programmation fonctionnelle (Java Streams, fondamentaux Kotlin).",
        outcome: "Une plateforme livrée en continu pour plus de 30 000 magistrats, greffiers et agents, et 5 développeurs encadrés et montés en compétence sur les pratiques de craftsmanship.",
        tags: ["Java", "Kotlin", "Angular", "OpenShift", "Docker"],
        color: "from-rose-500/10 to-transparent", border: "border-rose-500/20 hover:border-rose-400/40", tag: "text-rose-400",
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
        icon: Landmark, client: "Société Générale", sector: "Finance & Banking", period: "2024 - ongoing",
        title: "Counterparty risk engine",
        challenge: "Compute critical counterparty risk metrics in real time, in a heavily regulated banking environment, at massive data scale.",
        approach: "Designed and deployed a cloud-native microservices ecosystem on Azure & Kubernetes, processing data streams via Apache Spark and Kafka, algorithmic performance tuning, TDD/BDD and Clean Code, automated CI/CD (GitHub/Jenkins). Pioneered AI tooling (GitHub Copilot, Claude) adoption within the team.",
        outcome: "Nightly batch cut from 4 hours to under 45 minutes on 5+ million events a day, roughly 70% fewer critical production incidents, and +25% velocity through AI adoption, all within a strict regulatory framework.",
        tags: ["Java", "Spring Boot", "Apache Spark", "Azure", "Kubernetes", "Kafka"],
        color: "from-blue-500/10 to-transparent", border: "border-blue-500/20 hover:border-blue-400/40", tag: "text-blue-400",
      },
      {
        icon: Zap, client: "GRTgaz", sector: "Energy & Utilities", period: "2022 - 2024",
        title: "Energy distribution management platform",
        challenge: "Design an event-driven platform able to absorb real-time data streams, on a system critical to national gas distribution.",
        approach: "Event-driven microservices architecture, Java/Kotlin backend and TypeScript frontend with reactive programming (Reactor, Kafka), scoping workshops with business teams, CI/CD on GitLab, Terraform-driven AWS deployments.",
        outcome: "10+ million telemetry readings processed a day, up to 2,000 events per second at peak, 99.95% availability, and releases moved from quarterly to several per week.",
        tags: ["Kotlin", "Spring Boot", "Angular", "Kafka", "AWS", "Terraform"],
        color: "from-yellow-500/10 to-transparent", border: "border-yellow-500/20 hover:border-yellow-400/40", tag: "text-yellow-400",
      },
      {
        icon: ShoppingCart, client: "Groupe Casino", sector: "Retail & Distribution", period: "2021 - 2022",
        title: "Campaign & offer engine",
        challenge: "Design the backend APIs for the campaign and commercial offer engine, at the scale of a major retail group.",
        approach: "API design in Kotlin and Java, TDD, BDD and functional programming practices, SOLID/KISS/DRY/YAGNI principles, continuous integration and deployment on GitLab and Google Cloud Platform.",
        outcome: "Tens of thousands of personalized offers served across 1,000+ stores, delivered at checkout and in the mobile app in under 50 ms on average (P95 under 100 ms).",
        tags: ["Kotlin", "Java", "PostgreSQL", "GCP", "Kubernetes"],
        color: "from-[#BEFF47]/10 to-transparent", border: "border-[#BEFF47]/20 hover:border-[#BEFF47]/40", tag: "text-[#BEFF47]",
      },
      {
        icon: Zap, client: "Enedis", sector: "Energy & Utilities", period: "2017 - 2020",
        title: "Modernizing electricity distribution systems",
        challenge: "Evolve critical electricity distribution systems while maintaining their reliability, with architecture design responsibilities.",
        approach: "Full-stack development with a Java/Kotlin backend and Angular/TypeScript frontend, craftsmanship practices (TDD, ATDD, BDD, DDD, Hexagonal Architecture, Clean Code), continuous integration and automated deployments with Ansible.",
        outcome: "Over three years on an information system covering 35+ million Linky smart meters, with releases moved from one every 3 to 6 months to several per two-week sprint.",
        tags: ["Java", "Kotlin", "Angular", "PostgreSQL", "Kafka"],
        color: "from-yellow-500/10 to-transparent", border: "border-yellow-500/20 hover:border-yellow-400/40", tag: "text-yellow-400",
      },
      {
        icon: ShoppingCart, client: "Galeries Lafayette", sector: "Retail & Distribution", period: "2020",
        title: "Full-stack development in a craftsmanship team",
        challenge: "Analyze and technically design new features within a craftsmanship-driven team, on a demanding retail platform.",
        approach: "Full-stack development (front, back, API) in Java/Kotlin and Angular/TypeScript, Clean Code, TDD, BDD, DDD, Hexagonal Architecture, code reviews and mob programming, knowledge sharing through internal tech sessions.",
        outcome: "10+ features shipped per two-week sprint within an 8-person feature team, on a platform deployed on Google Cloud Platform.",
        tags: ["Java", "Kotlin", "Angular", "Kubernetes", "GCP"],
        color: "from-[#BEFF47]/10 to-transparent", border: "border-[#BEFF47]/20 hover:border-[#BEFF47]/40", tag: "text-[#BEFF47]",
      },
      {
        icon: Scale, client: "Ministère de la Justice", sector: "Public Sector", period: "2020 - 2021",
        title: "Critical platform for the justice sector",
        challenge: "Build and evolve a critical platform for the justice sector, in an agile context with a strong reliability requirement.",
        approach: "Full-stack front and back-end development, product framing with business stakeholders, developer mentoring, Clean Code and code reviews, knowledge sharing on functional programming (Java Streams, Kotlin fundamentals).",
        outcome: "A platform delivered continuously for 30,000+ judges, clerks and court staff, with 5 developers mentored on craftsmanship practices.",
        tags: ["Java", "Kotlin", "Angular", "OpenShift", "Docker"],
        color: "from-rose-500/10 to-transparent", border: "border-rose-500/20 hover:border-rose-400/40", tag: "text-rose-400",
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
    <section id="case-studies" ref={ref} className="bg-[#0C0C12] py-28 relative overflow-hidden">
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
