"use client";

import { motion } from "framer-motion";

const vp = { once: true, margin: "-80px" };
const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    n: "01",
    title: "Architecture",
    body: "Nous étudions votre lieu, votre identité, vos couleurs, votre histoire — chaque cocktail est une pièce de votre univers.",
  },
  {
    n: "02",
    title: "Composition",
    body: "Spiritueux choisis, infusions maison, équilibre des saveurs et signature visuelle : la première gorgée raconte déjà votre marque.",
  },
  {
    n: "03",
    title: "Sensation",
    body: "Service rapide ou expérience live, atelier, dégustation à l'aveugle — nous transformons un verre en moment dont on se souvient.",
  },
];

export default function Approach() {
  return (
    <section
      id="approche"
      className="relative py-28 md:py-40 bg-[#0a0807] text-white"
    >
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container">
        {/* Label + manifesto */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-20 md:mb-28">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-gold-300/60" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold-300">
                Notre approche
              </span>
            </div>
            <div className="w-px h-16 bg-white/10 ml-4 hidden lg:block" />
          </motion.div>

          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            <p
              className="font-display leading-[1.15] text-balance text-white/90"
              style={{ fontSize: "clamp(1.85rem, 3.5vw, 3rem)" }}
            >
              Le cocktail comme{" "}
              <em className="not-italic italic text-gold-200">
                architecture sensible.
              </em>{" "}
              Chaque verre est pensé comme une pièce — forme, couleur, matière,
              mémoire.
            </p>
          </motion.div>
        </div>

        {/* Pillars — ligne horizontale */}
        <div className="grid md:grid-cols-3 gap-0">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.8, delay: i * 0.12, ease }}
              className="group relative py-10 md:px-10 first:pl-0 last:pr-0 border-t border-white/[0.08] md:border-t-0 md:border-l first:border-l-0 md:border-white/[0.08]"
            >
              <span className="block text-[11px] uppercase tracking-[0.25em] text-gold-300/60 mb-5 font-mono">
                {p.n}
              </span>
              <h3 className="font-display text-2xl md:text-3xl mb-4 text-white/90">
                {p.title}
              </h3>
              <p className="text-white/45 text-[14px] leading-[1.75]">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
