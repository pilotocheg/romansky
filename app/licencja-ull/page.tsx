import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";
import { PAGE_COMPARISON, PAGE_DISCOVERY, PAGE_ULL, subPageMetadata } from "@/lib/pages";
import { MEDICAL_REQUIREMENT } from "@/lib/site";

export const metadata: Metadata = subPageMetadata(PAGE_ULL);

const facts = [
  { label: "Minimalny wiek", value: "16 lat" },
  { label: "Doświadczenie", value: "Nie jest wymagane" },
  { label: "Badania lotniczo-lekarskie", value: MEDICAL_REQUIREMENT },
  { label: "Minimalny nalot", value: "20 godzin (z instruktorem i solo)" },
  { label: "Czas trwania", value: "Zwykle 2–4 miesiące" },
  { label: "Cena szkolenia", value: "14 000 zł (teoria + praktyka)" },
  { label: "Egzamin", value: "Pod nadzorem czeskiego instruktora, ok. 3000 zł" },
  { label: "Samolot szkolny", value: "Allegro 2000, Rotax 912 UL" },
];

export default function LicencjaUllPage() {
  return (
    <SubPageShell
      page={PAGE_ULL}
      eyebrow="Kurs pilota ultralight · Piła"
      heading="Licencja pilota ULL — kurs pilota samolotów ultralekkich"
      lead="Szkolenie do czeskiej licencji pilota ULL według programu LAA ČR na lotnisku Piła (EPPI). Przyjmujemy zupełnych początkujących — od pierwszej lekcji teorii do egzaminu."
      ctaLabel="Zapytaj o szkolenie"
    >
      <section>
        <dl className="grid sm:grid-cols-2 gap-px bg-divider border border-divider">
          {facts.map((f) => (
            <div key={f.label} className="bg-white p-5">
              <dt className="text-xs uppercase tracking-widest text-muted mb-1">
                {f.label}
              </dt>
              <dd className="text-charcoal font-semibold">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2>Czym jest licencja ULL?</h2>
        <p>
          <strong>ULL</strong> to czeska licencja pilota samolotów
          ultralekkich, wydawana według programu{" "}
          <strong>LAA ČR</strong> (Letecká amatérská asociace ČR) pod nadzorem
          czeskiego urzędu lotnictwa cywilnego ÚCL. Uprawnia do samodzielnego
          pilotowania dwumiejscowych samolotów ultralekkich (ultralajtów) w
          locie z widocznością (VFR).
        </p>
        <p>
          Licencja jest uznawana w Czechach oraz w szeregu krajów europejskich
          — w tym w Polsce. To najprostsza i najtańsza droga, żeby zostać
          pilotem i latać rekreacyjnie: na wycieczki, przeloty między
          lotniskami czy po prostu dla przyjemności.
        </p>
        <p>
          Zastanawiasz się, czym ULL różni się od polskiego świadectwa UL albo
          od licencji PPL(A)? Przygotowaliśmy osobne{" "}
          <Link href={PAGE_COMPARISON.path}>porównanie licencji pilota</Link>.
        </p>
      </section>

      <section>
        <h2>Dla kogo jest kurs pilota ULL?</h2>
        <ul>
          <li>
            Dla osób, które <strong>nigdy nie latały</strong> — szkolenie
            zaczynamy od zera.
          </li>
          <li>
            Dla tych, którzy chcą latać <strong>rekreacyjnie</strong>, bez
            kosztów i formalności szkolenia na licencję zawodową.
          </li>
          <li>
            Dla pilotów szybowcowych i paralotniarzy, którzy chcą przesiąść się
            na samolot z napędem.
          </li>
        </ul>
        <p>
          Musisz mieć ukończone <strong>16 lat</strong> oraz ważne orzeczenie
          lotniczo-lekarskie: <strong>{MEDICAL_REQUIREMENT}</strong>. Pomagamy
          w uzyskaniu takiego orzeczenia.
        </p>
      </section>

      <section>
        <h2>Jak wygląda szkolenie?</h2>
        <ol>
          <li>
            <strong>Teoria.</strong> Prawo lotnicze, meteorologia, nawigacja,
            zasady lotu i budowa samolotu, osiągi i planowanie lotu, procedury
            operacyjne, łączność oraz człowiek w lotnictwie.
          </li>
          <li>
            <strong>Loty z instruktorem.</strong> Obsługa samolotu, starty i
            lądowania, lot po kręgu nadlotniskowym, zakręty, przeciągnięcia
            oraz postępowanie w sytuacjach awaryjnych.
          </li>
          <li>
            <strong>Loty samodzielne.</strong> Pierwszy lot solo, a następnie
            loty po kręgu i przeloty nawigacyjne pod nadzorem instruktora.
          </li>
          <li>
            <strong>Egzamin.</strong> Egzamin teoretyczny i praktyczny pod
            nadzorem czeskiego instruktora. Po jego zdaniu otrzymujesz licencję
            pilota ULL.
          </li>
        </ol>
        <p>
          Minimum to <strong>20 godzin lotu</strong> z instruktorem i solo.
          Większość kursantów kończy szkolenie w ciągu{" "}
          <strong>2–4 miesięcy</strong> — zależy to od tego, jak często
          latasz, oraz od pogody. Loty odbywają się w warunkach widoczności
          (VMC), więc przy niskich chmurach lub silnym wietrze lekcję
          przekładamy.
        </p>
      </section>

      <section>
        <h2>Ile kosztuje licencja pilota ULL?</h2>
        <p>
          Cena szkolenia w RomanSky to <strong>14 000 zł</strong> i obejmuje
          zarówno teorię, jak i praktykę na samolocie szkolnym. Oddzielnie
          płatne są:
        </p>
        <ul>
          <li>
            egzamin pod nadzorem czeskiego instruktora — szacunkowo ok. 3000
            zł,
          </li>
          <li>badania lotniczo-lekarskie.</li>
        </ul>
      </section>

      <section>
        <h2>Gdzie i na czym latamy?</h2>
        <p>
          Szkolimy na <strong>lotnisku Piła (EPPI)</strong> w Wielkopolsce, na
          samolocie <strong>Allegro 2000</strong> z silnikiem Rotax 912 UL (80
          KM). Samolot ma wbudowany spadochron ratunkowy. Instruktorem jest{" "}
          <strong>Roman Jałowiecki</strong> — certyfikowany instruktor-pilot z
          nalotem ponad 1000 godzin, szkolący od 2015 roku.
        </p>
        <p>
          Po uzyskaniu licencji możesz dalej latać z nami —{" "}
          <Link href="/#fleet">wynajem Allegro 2000</Link> kosztuje 400 zł za
          godzinę. Oferujemy również pakiety 10-godzinne w cenie 3500 zł.
        </p>
      </section>

      <section>
        <h2>Nie wiesz, czy to dla Ciebie?</h2>
        <p>
          Zacznij od{" "}
          <Link href={PAGE_DISCOVERY.path}>lotu zapoznawczego</Link> — 30
          minut w powietrzu z instruktorem wystarczy, żeby przekonać się, czy
          latanie to coś dla Ciebie.
        </p>
      </section>
    </SubPageShell>
  );
}
