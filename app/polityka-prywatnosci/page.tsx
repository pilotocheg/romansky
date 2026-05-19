import type { Metadata } from "next";
import Link from "next/link";
import { Plane } from "lucide-react";

export const metadata: Metadata = {
  title: "Polityka Prywatności",
  description:
    "Polityka prywatności szkoły lotniczej RomanSky. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Administrator danych osobowych",
    content: `Administratorem Twoich danych osobowych jest Roman Jałowiecki prowadzący działalność pod nazwą RomanSky Aviation (dalej: „Administrator"), ul. Lotnicza 12, 64-920 Piła, Polska. Kontakt: romansky@wp.pl, tel. +48 512 187 280.`,
  },
  {
    title: "2. Jakie dane zbieramy i w jakim celu",
    content: `Za pośrednictwem formularza kontaktowego zbieramy następujące dane:
• Imię i nazwisko — w celu identyfikacji rozmówcy i spersonalizowanej odpowiedzi.
• Adres e-mail — w celu udzielenia odpowiedzi na zapytanie.
• Numer telefonu (opcjonalnie) — w celu kontaktu telefonicznego, jeśli jest to wygodniejsze.
• Temat i treść wiadomości — w celu udzielenia właściwej odpowiedzi.

Dane nie są wykorzystywane w celach marketingowych bez Twojej odrębnej zgody.`,
  },
  {
    title: "3. Podstawa prawna przetwarzania",
    content: `Przetwarzamy Twoje dane na podstawie art. 6 ust. 1 lit. b) RODO — przetwarzanie jest niezbędne do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy (odpowiedź na zapytanie dotyczące szkolenia lub wynajmu samolotu).

W zakresie opcjonalnego numeru telefonu podstawą jest art. 6 ust. 1 lit. a) RODO — Twoja dobrowolna zgoda wyrażona przez podanie tego numeru w formularzu.`,
  },
  {
    title: "4. Czas przechowywania danych",
    content: `Twoje dane przechowujemy przez okres niezbędny do obsługi zapytania, a następnie przez okres 12 miesięcy na wypadek ewentualnych pytań uzupełniających lub zawarcia umowy. Po tym czasie dane są usuwane, chyba że zawarliśmy umowę — wówczas obowiązują odpowiednie terminy wynikające z przepisów prawa (np. podatkowych).`,
  },
  {
    title: "5. Odbiorcy danych",
    content: `Twoje dane mogą być przekazywane wyłącznie podmiotom, które wspierają działanie niniejszej strony:
• Formspree, Inc. (USA) — dostawca usługi obsługi formularza kontaktowego; dane przekazywane na podstawie standardowych klauzul umownych (art. 46 RODO). Polityka prywatności Formspree: formspree.io/legal/privacy-policy.
• Google LLC (USA) — dostawca usługi Google Maps osadzonej na stronie; dane mogą być przetwarzane przez Google zgodnie z jego polityką prywatności: policies.google.com/privacy.

Dane nie są sprzedawane ani udostępniane innym podmiotom trzecim.`,
  },
  {
    title: "6. Twoje prawa",
    content: `Przysługują Ci następujące prawa na mocy RODO:
• Prawo dostępu do danych (art. 15) — możesz uzyskać potwierdzenie, czy przetwarzamy Twoje dane, a jeśli tak — kopię tych danych.
• Prawo do sprostowania (art. 16) — możesz żądać poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych.
• Prawo do usunięcia (art. 17) — możesz żądać usunięcia danych w określonych przypadkach.
• Prawo do ograniczenia przetwarzania (art. 18) — możesz żądać wstrzymania przetwarzania w określonych sytuacjach.
• Prawo do przenoszenia danych (art. 20) — możesz otrzymać swoje dane w ustrukturyzowanym, powszechnie używanym formacie.
• Prawo do sprzeciwu (art. 21) — możesz wnieść sprzeciw wobec przetwarzania opartego na uzasadnionym interesie.
• Prawo do cofnięcia zgody — jeśli przetwarzanie oparte jest na zgodzie, możesz ją cofnąć w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania przed cofnięciem.

Aby skorzystać z powyższych praw, skontaktuj się z nami: romansky@wp.pl.

Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl.`,
  },
  {
    title: "7. Pliki cookie",
    content: `Niniejsza strona używa wyłącznie niezbędnych plików cookie wymaganych do jej prawidłowego działania (sesja przeglądarki). Nie używamy własnych plików cookie śledzących ani reklamowych.

Osadzona mapa Google Maps może ustawiać własne pliki cookie Google — są one regulowane polityką prywatności Google (policies.google.com/privacy). Jeśli nie chcesz, aby Google zbierał Twoje dane, możesz korzystać ze strony bez interakcji z mapą.`,
  },
  {
    title: "8. Bezpieczeństwo danych",
    content: `Strona jest przesyłana przez połączenie szyfrowane (HTTPS). Dane z formularza są przekazywane do Formspree przez szyfrowane połączenie i przechowywane na serwerach Formspree. Stosujemy środki organizacyjne i techniczne odpowiednie do ryzyka przetwarzania.`,
  },
  {
    title: "9. Zmiany polityki prywatności",
    content: `Polityka prywatności może być aktualizowana w związku ze zmianami prawnymi lub organizacyjnymi. Aktualna wersja jest zawsze dostępna na tej stronie. Data ostatniej aktualizacji: maj 2025.`,
  },
];

export default function PolitykaPrywatnosci() {
  return (
    <>
      <header className="bg-white border-b border-divider">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-charcoal font-bold text-xl tracking-tight"
          >
            <Plane className="text-brand-sky" size={22} />
            RomanSky
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-surface">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-charcoal font-bold text-4xl mb-2">
            Polityka prywatności
          </h1>
          <p className="text-muted text-sm mb-12">
            RomanSky Aviation · Ostatnia aktualizacja: maj 2025
          </p>

          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-charcoal font-bold text-xl mb-3">
                  {s.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed whitespace-pre-line">
                  {s.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-divider">
            <Link
              href="/"
              className="text-brand-sky hover:text-brand-sky-dark text-sm font-medium transition-colors"
            >
              ← Powrót na stronę główną
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
