"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSent(true), 500);
  };

  const inputClass = "w-full px-4 py-3.5 bg-[#0C0C12] border border-white/6 text-white text-sm placeholder-[#6A6A85] focus:outline-none focus:border-[#BEFF47]/40 transition-colors duration-200 font-light rounded-none";

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
              <span className="text-[10px] font-bold text-[#BEFF47] tracking-[0.18em] uppercase">Contact</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
            >
              Démarrons votre<br />
              <span className="text-[#BEFF47]">projet ensemble.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[15px] text-[#6A6A85] max-w-xs leading-relaxed font-light"
          >
            Réponse sous 24h ouvrées. Discutons de vos objectifs et définissons ensemble la meilleure approche.
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
              { icon: Mail, label: "Email", value: "contact@wehightech.com" },
              { icon: Phone, label: "Téléphone", value: "+33 1 XX XX XX XX" },
              { icon: MapPin, label: "Siège", value: "Paris, France" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="card-glow rounded-xl p-5 flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#BEFF47]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={14} className="text-[#BEFF47]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#6A6A85] tracking-widest uppercase mb-0.5">{label}</div>
                  <div className="text-[13px] text-white font-medium">{value}</div>
                </div>
              </div>
            ))}

            <div className="card-glow rounded-xl p-5 border border-[#BEFF47]/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                <span className="text-[11px] font-bold text-emerald-400 tracking-wide uppercase">Disponible</span>
              </div>
              <p className="text-[12px] text-[#6A6A85] leading-relaxed font-light">
                Lun–Ven, 9h–18h.<br />
                Réponse garantie sous <span className="text-white font-medium">24h ouvrées</span>.
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
                <h3 className="text-xl font-black text-white mb-2">Message envoyé !</h3>
                <p className="text-[13px] text-[#6A6A85] font-light">Nous vous contacterons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glow rounded-2xl p-8 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-[#6A6A85] tracking-[0.15em] uppercase mb-2">Nom *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Jean Dupont" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-[#6A6A85] tracking-[0.15em] uppercase mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="jean@entreprise.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#6A6A85] tracking-[0.15em] uppercase mb-2">Entreprise</label>
                  <input type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Nom de votre société" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#6A6A85] tracking-[0.15em] uppercase mb-2">Projet *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Décrivez votre projet, vos objectifs et vos délais..." className={`${inputClass} resize-none`} />
                </div>
                <button type="submit"
                  className="w-full py-4 bg-[#BEFF47] text-[#050508] font-bold text-sm hover:bg-white transition-colors duration-200 tracking-wide"
                >
                  Envoyer le message →
                </button>
                <p className="text-[10px] text-[#6A6A85] text-center font-light">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
