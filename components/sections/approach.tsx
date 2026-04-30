"use client";

import { motion } from "framer-motion";
import { Compass, Layers, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Architecture",
    body:
      "Nous étudions votre lieu, votre identité, vos couleurs, votre histoire. Chaque cocktail est dessiné comme une pièce de votre univers.",
  },
  {
    icon: Layers,
    title: "Composition",
    body:
      "Spiritueux choisis, infusions maison, équilibre des saveurs et signature visuelle : tout est pensé pour que la première gorgée raconte déjà votre marque.",
  },
  {
    icon: Sparkles,
    title: "Sensation",
    body:
      "Service rapide ou expérience live, atelier mixologie, dégustation à l'aveugle : nous transformons un verre en moment dont on se souvient.",
  },
];

export default function Approach() {
  return (
    <section id="approche" className="relative py-28 md:py-40 bg-[#0a0807] text-white">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.3em] text-gold-300 mb-4">
            Notre approche
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Le cocktail comme
            <span className="italic text-gold-200"> architecture sensible.</span>
          </h2>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="size-10 rounded-full bg-gold-300/10 text-gold-300 flex items-center justify-center mb-5">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-2xl mb-2">{p.title}</h3>
                <p className="text-white/70 leading-relaxed text-[15px]">{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
