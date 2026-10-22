import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export type SubPage = {
  path: string;
  /** Short label used in navigation, breadcrumbs and links. */
  label: string;
  title: string;
  description: string;
  /** Date of the last meaningful content change — used as sitemap `lastModified`. */
  updated: string;
};

export const PAGE_ULL: SubPage = {
  path: "/licencja-ull",
  label: "Licencja pilota ULL",
  title: "Licencja pilota ULL — kurs pilota ultralight w Pile",
  description:
    "Kurs na licencję pilota samolotów ultralekkich ULL (program czeski LAA ČR) w Pile. Wymagania, przebieg szkolenia, czas trwania i cena 15 000 zł (możliwe raty). Szkoła lotnicza RomanSky, lotnisko EPPI.",
  updated: "2026-10-22",
};

export const PAGE_COMPARISON: SubPage = {
  path: "/ull-czy-ppl",
  label: "ULL, UL czy PPL?",
  title: "ULL, UL, LAPL czy PPL(A)? Porównanie licencji pilota",
  description:
    "Czym różni się licencja ULL od polskiego świadectwa UL, LAPL(A) i PPL(A)? Wymagania, minimalny nalot, uprawnienia i orientacyjne ceny — porównanie, które pomoże wybrać kurs pilota.",
  updated: "2026-10-22",
};

export const PAGE_DISCOVERY: SubPage = {
  path: "/lot-zapoznawczy",
  label: "Lot zapoznawczy",
  title: "Lot zapoznawczy samolotem w Pile — pomysł na prezent",
  description:
    "30-minutowy lot zapoznawczy ultralajtem Allegro 2000 z instruktorem na lotnisku w Pile (EPPI). Bez doświadczenia — pierwszy krok do licencji pilota lub wyjątkowy prezent.",
  updated: "2026-10-22",
};

export const SUB_PAGES = [PAGE_ULL, PAGE_COMPARISON, PAGE_DISCOVERY];

export function subPageMetadata(page: SubPage): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      type: "article",
      locale: "pl_PL",
      url: page.path,
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
      images: [{ url: "/images/hero-bg.jpeg", alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/images/hero-bg.jpeg"],
    },
  };
}
