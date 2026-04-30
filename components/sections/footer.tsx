export default function Footer() {
  return (
    <footer className="bg-[#070504] text-white/50 border-t border-white/5">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="font-display text-base text-white">
          Arch<span className="text-gold-300">&apos;</span>Ocktail
        </div>
        <div>
          © {new Date().getFullYear()} Arch&apos;Ocktail · L&apos;abus
          d&apos;alcool est dangereux pour la santé. À consommer avec modération.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Mentions légales</a>
          <a href="#" className="hover:text-white">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
