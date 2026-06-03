import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RomanSky Aviation — Szkolenie Lotnicze i Wynajem Samolotu | Piła",
    template: "%s | RomanSky Aviation",
  },
  description:
    "Szkolenie lotnicze do licencji pilota ULL (program czeski) oraz wynajem samolotu Allegro 2000 w Pile (lotnisko EPPI). Certyfikowany instruktor Roman Jałowiecki. Lot zapoznawczy dostępny. Szkolenie ultralajtem w Wielkopolsce.",
  keywords: [
    "szkolenie lotnicze",
    "szkolenie lotnicze Piła",
    "szkolenie ultralajtem",
    "szkolenie ultralajtem Piła",
    "pilot ultralight",
    "kurs pilota ultralight",
    "licencja ULL",
    "licencja pilota ultralight",
    "ULL pilot",
    "program czeski ULL",
    "LAA ČR",
    "LAPL",
    "LAPL(A)",
    "licencja LAPL",
    "szkolenie LAPL",
    "PPL",
    "PPL(A)",
    "licencja PPL",
    "szkolenie PPL",
    "kurs PPL Piła",
    "kurs LAPL Piła",
    "nauka latania",
    "nauka latania Piła",
    "szkoła lotnicza",
    "szkoła lotnicza Piła",
    "szkolenie lotnicze Wielkopolskie",
    "lot zapoznawczy",
    "lot zapoznawczy Piła",
    "wynajem samolotu",
    "wynajem ultralajtu",
    "wynajem Allegro 2000",
    "Allegro 2000",
    "ultralight Piła",
    "lotnisko Piła EPPI",
    "kurs na pilota",
    "jak zostać pilotem",
    "lot ultralajtem",
    "Roman Jałowiecki",
    "RomanSky",
    "pilotaż",
    "latanie ultralight",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "./",
    siteName: "RomanSky Aviation",
    title: "RomanSky Aviation — Szkolenie Lotnicze i Wynajem Samolotu | Piła",
    description:
      "Szkolenie do licencji pilota ULL (program czeski) i wynajem samolotu Allegro 2000 na lotnisku Piła (EPPI). Od 2015 roku. Certyfikowany instruktor. Zarezerwuj lot zapoznawczy!",
    images: [
      {
        url: "/images/hero-bg.jpeg",
        alt: "RomanSky Aviation — Szkolenie Lotnicze w Pile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RomanSky Aviation — Szkolenie Lotnicze | Piła",
    description:
      "Szkolenie do licencji ULL, lot ultralajtem, wynajem Allegro 2000 w Pile. Zarezerwuj lot zapoznawczy!",
    images: ["/images/hero-bg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} h-full antialiased`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
