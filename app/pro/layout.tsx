import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0a0807",
};

export const metadata: Metadata = {
  title: "Arch'Ocktail · Espace Pro",
  description:
    "Pre Batch artisanaux à 40€, fiches techniques et commandes by Arch'Ocktail.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Arch'Ocktail",
  },
};

export default function ProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
