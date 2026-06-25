import type { Metadata } from "next";
import { Open_Sans, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "1ra Competencia de Programación UNADECA",
  description:
    "Participa en la primera competencia de programación de UNADECA. Hackathons, talleres, premios y más para estudiantes de todo el país.",
  keywords: [
    "UNADECA",
    "competencia de programación",
    "hackathon",
    "República Dominicana",
    "programación",
    "estudiantes",
  ],
  openGraph: {
    title: "1ra Competencia de Programación UNADECA",
    description:
      "Participa en la primera competencia de programación de UNADECA.",
    locale: "es_DO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${openSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
