import SiteNav from "@/components/site-nav";
import Hero from "@/components/sections/hero";
import Approach from "@/components/sections/approach";
import CocktailBuild from "@/components/cocktail-build";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Page() {
  return (
    <main id="top" className="relative bg-[#0a0807]">
      <SiteNav />
      <Hero />
      <Approach />
      <section id="signature">
        <CocktailBuild />
      </section>
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
