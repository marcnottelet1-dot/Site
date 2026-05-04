"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-[#0a0807]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-[72px]">
        <Link
          href="#top"
          className="font-display text-[1.15rem] tracking-tight text-white hover:text-gold-200 transition-colors"
        >
          Arch<span className="text-gold-300">&apos;</span>Ocktail
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wide text-white/55 hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center h-9 px-5 text-[12px] tracking-[0.08em] uppercase text-white/70 border border-white/20 rounded-full hover:bg-white hover:text-[#0a0807] transition-all duration-300"
        >
          Réserver
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="md:hidden text-white/70 hover:text-white transition-colors"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-500",
          open ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-[#0a0807]/97 backdrop-blur-xl border-t border-white/[0.06] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="self-start mt-2 inline-flex items-center h-9 px-5 text-[12px] tracking-[0.08em] uppercase text-white/70 border border-white/20 rounded-full hover:bg-white hover:text-[#0a0807] transition-all duration-300"
          >
            Réserver
          </a>
        </div>
      </div>
    </header>
  );
}
