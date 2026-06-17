"use client";

import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "-60px" };

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-44 bg-[#0a0807] text-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Glow très subtil */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(201,161,58,0.07), transparent 60%)",
        }}
      />

      <div className="container relative z-10 max-w-5xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-4 mb-14 md:mb-20"
        >
          <span className="h-px w-8 bg-gold-300/60" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-gold-300">
            Construisons votre signature
          </span>
        </motion.div>

        {/* Titre géant */}
        <div className="mb-16 md:mb-24">
          {["Un projet,", "un verre,", "une histoire."].map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 1, delay: i * 0.12, ease }}
              className={`font-display leading-[0.95] block ${
                i === 1 ? "italic text-gold-200" : "text-white/90"
              }`}
              style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* CTA + infos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
        >
          <a
            href="mailto:contact@archocktail.com"
            className="group inline-flex items-center gap-3 h-12 px-7 text-[13px] tracking-[0.06em] uppercase text-[#0a0807] bg-gold-300 rounded-full hover:bg-gold-200 transition-colors duration-300"
          >
            <Mail className="size-4" />
            contact@archocktail.com
          </a>

          <a
            href="https://instagram.com/archocktail"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white/40 text-[13px] hover:text-white/80 transition-colors duration-300"
          >
            <Instagram className="size-4" />
            @archocktail
          </a>
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-14 md:mt-20 flex flex-wrap gap-x-10 gap-y-3 text-[12px] text-white/20 tracking-[0.06em] uppercase"
        >
          <span>France · Europe</span>
          <span className="hidden sm:inline text-white/10">·</span>
          <span>Réponse sous 24 h</span>
          <span className="hidden sm:inline text-white/10">·</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-400/70 animate-pulse inline-block" />
            Disponibles pour 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
