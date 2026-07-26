import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import Intro from "@/components/intro";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hosttip.mx"),
  title: "HOSTTIP · Construcción y Remodelación en León, Guanajuato",
  description:
    "Obra residencial y comercial, remodelaciones y diagnóstico estructural en León, Gto. Construimos con criterio.",
  keywords: [
    "construcción León Guanajuato",
    "remodelación León",
    "obra residencial León",
    "empresa constructora León",
    "proyecto ejecutivo León",
  ],
  openGraph: {
    title: "HOSTTIP · Construcción y Remodelación",
    description:
      "Descubrimos, diseñamos y construimos con criterio estratégico. León, Guanajuato.",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HOSTTIP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HOSTTIP · Construcción y Remodelación",
    description:
      "Descubrimos, diseñamos y construimos con criterio estratégico. León, Guanajuato.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased" style={{ fontFamily: "var(--font-dm-sans, DM Sans, sans-serif)" }}>
        <Intro />
        {children}
      </body>
    </html>
  );
}
