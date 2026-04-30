"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#approche", label: "Approche" },
  { href: "#services", label: "Services" },
  { href: "#signature", label: "Signature" },
  { href: "#contact", label: "Contact" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md bg-black/40 border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between py-5">
        <Link
          href="#top"
          className="font-display text-xl tracking-tight text-white"
        >
          Arch<span className="text-gold-300">&apos;</span>Ocktail
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="gold" size="sm">
            <a href="#contact">Réserver une rencontre</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="md:hidden text-white"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-black/85 backdrop-blur-xl transition-[max-height] duration-500",
          open ? "max-h-[400px] border-t border-white/10" : "max-h-0"
        )}
      >
        <div className="container flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-white/80 hover:text-white border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="gold" size="sm" className="mt-3 self-start">
            <a href="#contact" onClick={() => setOpen(false)}>
              Réserver une rencontre
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
