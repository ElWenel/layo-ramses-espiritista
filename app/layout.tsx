import type { Metadata } from "next";
import { Cinzel_Decorative, Literata } from "next/font/google";
import "./globals.css";
import ClientCosmicBackground from "@/components/ClientCosmicBackground";

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});

const literata = Literata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-literata",
});

export const metadata: Metadata = {
  title: "Layo Ramses Espiritista - Guía Espiritual y Lector de los Astros",
  description:
    "Descubre los misterios del cosmos con Layo Ramses. Tarot egipcio, astrología personalizada, limpiezas energéticas y rituales lunares. Los astros revelan tu verdadero destino.",
  keywords:
    "espiritista, tarot egipcio, astrología, limpiezas energéticas, rituales lunares, vidente, cosmos, destino, constelaciones",
  authors: [{ name: "Layo Ramses Espiritista" }],
  openGraph: {
    title: "Layo Ramses Espiritista",
    description:
      "Guía espiritual y lector de los astros. Los misterios del cosmos revelan tu verdadero destino.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${cinzelDecorative.variable} ${literata.variable}`}
    >
      <body className="min-h-screen font-body antialiased">
        <ClientCosmicBackground />
        {children}
      </body>
    </html>
  );
}
