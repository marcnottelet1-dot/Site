import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Arch'Ocktail · L'art du cocktail sur mesure",
  description:
    "Arch'Ocktail compose des cartes signatures, des événements et des ateliers de mixologie haut de gamme. Le cocktail comme architecture sensible.",
  metadataBase: new URL("https://archocktail.com"),
  openGraph: {
    title: "Arch'Ocktail",
    description:
      "Cocktails sur mesure, gestion de bars et expériences mixologie pour le CHR et l'événementiel.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${fraunces.variable} font-sans bg-[#0a0807] text-white`}>
        {children}
      </body>
    </html>
  );
}
