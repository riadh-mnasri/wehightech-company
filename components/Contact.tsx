"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const content: Record<Lang, {
  eyebrow: string;
  heading: [string, string];
  sub: string;
  infoLabels: { email: string; phone: string; hq: string };
  available: string;
  hours: string;
  responseTime: [string, string];
  form: {
    name: string; email: string; company: string; project: string;
    namePlaceholder: string; emailPlaceholder: string; companyPlaceholder: string; projectPlaceholder: string;
    submit: string; submitting: string; consent: string;
    sentTitle: string; sentDesc: string;
    genericError: string;
  };
}> = {
  fr: {
    eyebrow: "Contact",
    heading: ["Démarrons votre", "projet ensemble."],
    sub: "Réponse sous 24h ouvrées. Discutons de vos objectifs et définissons ensemble la meilleure approche.",
    infoLabels: { email: "Email", phone: "Téléphone", hq: "Siège" },
    available: "Disponible",
    hours: "Lun–Ven, 9h–18h.",
    responseTime: ["Réponse garantie sous ", "24h ouvrées"],
    form: {
      name: "Nom *", email: "Email *", company: "Entreprise", project: "Projet *",
      namePlaceholder: "Jean Dupont", emailPlaceholder: "jean@entreprise.com",
      companyPlaceholder: "Nom de votre société", projectPlaceholder: "Décrivez votre projet, vos objectifs et vos délais...",
      submit: "Envoyer le message →", submitting: "Envoi en cours…",
      consent: "En soumettant ce formulaire, vous acceptez notre politique de confidentialité.",
      sentTitle: "Message envoyé !", sentDesc: "Nous vous contacterons dans les plus brefs délais.",
      genericError: "Une erreur est survenue. Réessayez ou écrivez-nous directement.",
    },
  },
  en: {
    eyebrow: "Contact",
    heading: ["Let's start your", "project together."],
    sub: "Response within 24 business hours. Let's discuss your goals and define the best approach together.",
    infoLabels: { email: "Email", phone: "Phone", hq: "Headquarters" },
    available: "Available",
    hours: "Mon–Fri, 9am–6pm.",
    responseTime: ["Guaranteed response within ", "24 business hours"],
    form: {
      name: "Name *", email: "Email *", company: "Company", project: "Project *",
      namePlaceholder: "John Doe", emailPlaceholder: "john@company.com",
      companyPlaceholder: "Your company name", projectPlaceholder: "Describe your project, goals and timeline...",
      submit: "Send message →", submitting: "Sending…",
      consent: "By submitting this form, you agree to our privacy policy.",
      sentTitle: "Message sent!", sentDesc: "We'll get back to you as soon as possible.",
      genericError: "Something went wrong. Please try again or email us directly.",
    },
  },
};

export default function Contact({ lang }: { lang: Lang }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", website: "" });
  const t = content[lang];
  const [renderedAt] = useState(() => Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, lang, elapsed: Date.now() - renderedAt }),
    });
    setLoading(false);
    if (res.ok) {
      setSent(true);
    } else {
      const data = await res.json().catch(() => null);
      setError(data?.error || t.form.genericError);
    }
  };

  const inputClass = "w-full px-4 py-3.5 bg-[#0C0C12] border border-white/6 text-white text-sm placeholder-[#8A8AA0] focus:outline-none focus:border-[#BEFF47]/40 transition-colors duration-200 font-light rounded-none";

  return (
    <section id="contact" ref={ref} className="bg-[#0C0C12] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blob-lime opacity-40 pointer-events-none" />

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

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 space-y-3"
          >
            {[
              { icon: Mail, label: t.infoLabels.email, value: "contact@wehightech.com" },
              { icon: Phone, label: t.infoLabels.phone, value: "01 78 53 87 80" },
              { icon: MapPin, label: t.infoLabels.hq, value: "66 Avenue des Champs-Élysées, 75008 Paris" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="card-glow rounded-xl p-5 flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#BEFF47]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={14} className="text-[#BEFF47]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#8A8AA0] tracking-widest uppercase mb-0.5">{label}</div>
                  <div className="text-[13px] text-white font-medium">{value}</div>
                </div>
              </div>
            ))}

            <div className="card-glow rounded-xl p-5 border border-[#BEFF47]/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                <span className="text-[11px] font-bold text-emerald-400 tracking-wide uppercase">{t.available}</span>
              </div>
              <p className="text-[12px] text-[#8A8AA0] leading-relaxed font-light">
                {t.hours}<br />
                {t.responseTime[0]}<span className="text-white font-medium">{t.responseTime[1]}</span>.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="card-glow rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <CheckCircle size={44} className="text-[#BEFF47] mb-5" />
                <h3 className="text-xl font-black text-white mb-2">{t.form.sentTitle}</h3>
                <p className="text-[13px] text-[#8A8AA0] font-light">{t.form.sentDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glow rounded-2xl p-8 space-y-4 relative">
                {/* Honeypot: hidden from real users, bots tend to fill every field */}
                <div className="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={e => setForm({...form, website: e.target.value})} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-bold text-[#8A8AA0] tracking-[0.15em] uppercase mb-2">{t.form.name}</label>
                    <input id="contact-name" type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder={t.form.namePlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-bold text-[#8A8AA0] tracking-[0.15em] uppercase mb-2">{t.form.email}</label>
                    <input id="contact-email" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder={t.form.emailPlaceholder} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-[10px] font-bold text-[#8A8AA0] tracking-[0.15em] uppercase mb-2">{t.form.company}</label>
                  <input id="contact-company" type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder={t.form.companyPlaceholder} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-bold text-[#8A8AA0] tracking-[0.15em] uppercase mb-2">{t.form.project}</label>
                  <textarea id="contact-message" required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder={t.form.projectPlaceholder} className={`${inputClass} resize-none`} />
                </div>
                {error && (
                  <p className="text-[12px] text-red-400 text-center">{error}</p>
                )}
                <button type="submit" disabled={loading}
                  className="w-full py-4 bg-[#BEFF47] text-[#050508] font-bold text-sm hover:bg-white transition-colors duration-200 tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? t.form.submitting : t.form.submit}
                </button>
                <p className="text-[10px] text-[#8A8AA0] text-center font-light">
                  {t.form.consent}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
