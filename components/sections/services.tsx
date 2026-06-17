"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Cartes signatures",
    desc: "Création d'une carte cocktails sur mesure pour votre bar, hôtel ou restaurant. Formation des équipes, fiches techniques, identité visuelle du verre.",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "02",
    title: "Événements",
    desc: "Bar éphémère, mariages, lancements de marque. Pré-batch pour gros volumes ou prestation live devant vos invités.",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "03",
    title: "Ateliers mixologie",
    desc: "Une heure trente d'immersion ludique pour vos collaborateurs ou invités, animée par un mixologue passionné.",
    img: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop",
  },
  {
    n: "04",
    title: "Dégustation à l'aveugle",
    desc: "Une expérience sensorielle où chaque gorgée devient une énigme. Idéal pour soirées privées et team-buildings premium.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-28 md:py-40 bg-[#0a0807] text-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Image flottante desktop */}
      <div className="pointer-events-none hidden lg:block absolute right-12 xl:right-20 top-1/2 -translate-y-1/2 w-[260px] h-[340px] z-10">
        <AnimatePresence mode="wait">
          {hovered !== null && (
            <motion.div
              key={hovered}
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -8 }}
              transition={{ duration: 0.45, ease }}
              className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.08]"
            >
              <Image
                src={services[hovered].img}
                alt={services[hovered].title}
                fill
                sizes="260px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="container">
        {/* En-tête */}
        <div className="flex items-end justify-between mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-8 bg-gold-300/60" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-gold-300">
                Services
              </span>
            </div>
            <h2
              className="font-display leading-[1.0] text-white/90"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
            >
              Ce que
              <br />
              <span className="italic text-gold-200">nous faisons.</span>
            </h2>
          </motion.div>

          <span className="hidden md:block font-display text-[5rem] lg:text-[7rem] leading-none text-white/[0.04] select-none">
            04
          </span>
        </div>

        {/* Liste */}
        <div className="lg:max-w-[60%]">
          <div className="h-px bg-white/[0.07]" />
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
            >
              <a
                href="#contact"
                className="group flex items-center gap-6 md:gap-10 py-7 md:py-8 cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Numéro */}
                <span className="font-mono text-[11px] text-gold-300/50 shrink-0 w-7">
                  {s.n}
                </span>

                {/* Titre */}
                <span
                  className="font-display text-2xl md:text-3xl lg:text-4xl flex-1 text-white/80 group-hover:text-white transition-colors duration-300"
                >
                  {s.title}
                </span>

                {/* Description — visible md+ au hover */}
                <span className="hidden md:block text-white/30 text-[13px] leading-relaxed max-w-[220px] group-hover:text-white/55 transition-colors duration-300">
                  {s.desc}
                </span>

                {/* Flèche */}
                <ArrowUpRight
                  className="size-4 md:size-5 text-white/20 group-hover:text-gold-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                />
              </a>
              <div className="h-px bg-white/[0.07]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
