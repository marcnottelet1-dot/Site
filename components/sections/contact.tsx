"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 bg-[#0a0807] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(201,161,58,0.18), transparent 60%)",
        }}
      />

      <div className="container relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold-300 mb-6">
            Construisons votre signature
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.02] text-balance">
            Un projet,
            <br />
            <span className="italic text-gold-200">un verre,</span>
            <br />
            une histoire.
          </h2>
          <p className="mt-8 text-white/65 text-lg leading-relaxed max-w-xl mx-auto">
            Parlez-nous de votre lieu, de votre événement ou simplement de
            l&apos;émotion que vous voulez susciter. Nous prenons le temps
            d&apos;écouter avant de composer.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gold" size="lg">
              <a href="mailto:contact@archocktail.com">
                <Mail className="size-4" />
                contact@archocktail.com
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white/30 hover:bg-white hover:text-black">
              <a
                href="https://instagram.com/archocktail"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="size-4" />
                @archocktail
              </a>
            </Button>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-6 text-sm text-white/55">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="size-4 text-gold-300" />
              France · Europe
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="size-4 text-gold-300" />
              Réponse sous 24 h
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Disponibles pour la saison 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
