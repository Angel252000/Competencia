import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Orbitron } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "1ra Competencia de Programación UNADECA",
  description:
    "Participa en la primera competencia de programación de UNADECA. Hackathons, talleres, premios y más para estudiantes de toda Centroamérica.",
  keywords: [
    "UNADECA",
    "competencia de programación",
    "hackathon",
    "Costa Rica",
    "Centroamérica",
    "programación",
    "estudiantes",
  ],
  openGraph: {
    title: "1ra Competencia de Programación UNADECA",
    description:
      "Participa en la primera competencia de programación de UNADECA.",
    locale: "es_CR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${orbitron.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-void text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
