import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const BASE_URL = "https://romansky.pl";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "RomanSky Aviation — Szkolenie Lotnicze i Wynajem Samolotu | Piła",
    template: "%s | RomanSky Aviation",
  },
  description:
    "Szkolenie lotnicze na pilota ultralight (UL PPL) oraz wynajem samolotu Allegro 2000 w Pile (lotnisko EPPI). Certyfikowany instruktor Roman Jałowiecki. Lot zapoznawczy dostępny. Szkolenie ultralajtem w Wielkopolsce.",
  keywords: [
    "szkolenie lotnicze",
    "szkolenie lotnicze Piła",
    "szkolenie ultralajtem",
    "szkolenie ultralajtem Piła",
    "lot samolotem",
    "lot samolotem Piła",
    "pilot ultralight",
    "kurs pilota ultralight",
    "licencja pilota ultralight",
    "UL PPL",
    "świadectwo kwalifikacji pilota",
    "nauka latania",
    "nauka latania Piła",
    "szkoła lotnicza",
    "szkoła lotnicza Piła",
    "szkolenie lotnicze Wielkopolska",
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
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: BASE_URL,
    siteName: "RomanSky Aviation",
    title: "RomanSky Aviation — Szkolenie Lotnicze i Wynajem Samolotu | Piła",
    description:
      "Szkolenie na pilota ultralight i wynajem samolotu Allegro 2000 na lotnisku Piła (EPPI). Od 2010 roku. Certyfikowany instruktor. Zarezerwuj lot zapoznawczy!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RomanSky Aviation — Szkolenie Lotnicze w Pile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RomanSky Aviation — Szkolenie Lotnicze | Piła",
    description:
      "Szkolenie lotnicze, pilot ultralight, wynajem samolotu w Pile. Zarezerwuj lot zapoznawczy!",
    images: ["/og-image.jpg"],
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
