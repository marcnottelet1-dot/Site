"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease },
});

export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col justify-between bg-[#0a0807] text-white px-6 md:px-12 lg:px-16 pt-36 pb-10 overflow-hidden">
      {/* Très subtil glow centré */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 65%, rgba(201,161,58,0.055), transparent 65%)",
        }}
      />

      {/* Label haut */}
      <motion.div
        {...reveal(0.1)}
        className="flex items-center gap-4 relative z-10"
      >
        <span className="h-px w-10 bg-gold-300/50" />
        <span className="text-[11px] uppercase tracking-[0.28em] text-gold-300/80">
          Mixologie · Sur mesure · Paris
        </span>
      </motion.div>

      {/* Titre géant */}
      <div className="flex-1 flex items-center relative z-10 py-12 md:py-0">
        <h1
          className="font-display leading-[0.92] text-balance"
          style={{ fontSize: "clamp(3.8rem, 11.5vw, 9.5rem)" }}
        >
          <motion.span className="block text-white/90" {...reveal(0.25)}>
            L&apos;art
          </motion.span>
          <motion.span
            className="block italic text-gold-200"
            {...reveal(0.38)}
          >
            du cocktail
          </motion.span>
          <motion.span className="block text-white/90" {...reveal(0.5)}>
            sur mesure.
          </motion.span>
        </h1>
      </div>

      {/* Bas de page */}
      <div className="relative z-10 flex items-end justify-between gap-8">
        <motion.p
          {...reveal(0.65)}
          className="text-white/35 text-[13px] md:text-sm leading-relaxed max-w-xs"
        >
          Architecture sensorielle pour CHR,
          <br />
          événements &amp; expériences privées.
        </motion.p>

        <motion.div
          {...reveal(0.7)}
          className="hidden sm:flex flex-col items-center gap-2"
        >
          <span
            className="text-[10px] uppercase tracking-[0.25em] text-white/25"
            style={{ writingMode: "vertical-rl" }}
          >
            Défiler
          </span>
          <div className="w-px h-14 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>

      {/* Année — coin bas droit */}
      <motion.span
        {...reveal(0.8)}
        className="absolute bottom-10 right-6 md:right-12 font-display text-[11px] tracking-[0.2em] text-white/15 z-10"
      >
        © 2026
      </motion.span>
    </section>
  );
}
