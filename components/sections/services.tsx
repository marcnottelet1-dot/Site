"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Cartes signatures",
    desc:
      "Une carte de cocktails sur mesure pour votre bar, hôtel ou restaurant. Création, formation des équipes, fiches techniques.",
    img:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1600&auto=format&fit=crop",
  },
  {
    n: "02",
    title: "Événements",
    desc:
      "Bar éphémère, mariages, lancements de marque. Pré-batch pour gros volumes ou prestation live devant vos invités.",
    img:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    n: "03",
    title: "Ateliers mixologie",
    desc:
      "Une heure trente d'immersion ludique pour vos collaborateurs ou vos invités, animée par un mixologue passionné.",
    img:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1600&auto=format&fit=crop",
  },
  {
    n: "04",
    title: "Dégustation à l'aveugle",
    desc:
      "Une expérience sensorielle où chaque gorgée devient une énigme. Idéal pour des soirées privées et des team-buildings premium.",
    img:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40 bg-[#0a0807] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold-300 mb-4">
              Services
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance max-w-2xl">
              Quatre savoir-faire,
              <br />
              <span className="italic text-gold-200">une seule signature.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md leading-relaxed">
            De la création d&apos;une carte permanente au design d&apos;un instant
            unique, nous orchestrons l&apos;expérience cocktail comme un récit
            sur mesure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.a
              href="#contact"
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] aspect-[4/5] md:aspect-[5/6]"
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold-300">
                    {s.n}
                  </span>
                  <ArrowUpRight className="size-5 text-white/70 group-hover:text-gold-300 group-hover:rotate-12 transition-all" />
                </div>
                <h3 className="font-display text-3xl lg:text-4xl mb-3">
                  {s.title}
                </h3>
                <p className="text-white/70 leading-relaxed max-w-md">
                  {s.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
