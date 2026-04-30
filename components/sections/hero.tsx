"use client";

import { useEffect } from "react";
import ScrollExpandMedia from "@/components/blocks/scroll-expansion-hero";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1600&auto=format&fit=crop";
const HERO_BG =
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2400&auto=format&fit=crop";

export default function Hero({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#0a0807]">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={HERO_IMAGE}
        bgImageSrc={HERO_BG}
        title="Arch'Ocktail"
        date="L'art du cocktail sur mesure"
        scrollToExpand="Faites défiler — l'histoire commence ici"
        textBlend
      >
        {children}
      </ScrollExpandMedia>
    </div>
  );
}
