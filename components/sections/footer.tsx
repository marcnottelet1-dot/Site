export default function Footer() {
  return (
    <footer className="bg-[#070504] border-t border-white/[0.05]">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/25 tracking-wide">
        <div className="font-display text-sm text-white/60">
          Arch<span className="text-gold-300">&apos;</span>Ocktail
        </div>
        <p>
          © {new Date().getFullYear()} · L&apos;abus d&apos;alcool est dangereux
          pour la santé. À consommer avec modération.
        </p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white/60 transition-colors">
            Mentions légales
          </a>
          <a href="#" className="hover:text-white/60 transition-colors">
            Confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}
