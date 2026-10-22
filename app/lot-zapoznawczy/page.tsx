import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";
import { PAGE_COMPARISON, PAGE_DISCOVERY, PAGE_ULL, subPageMetadata } from "@/lib/pages";

export const metadata: Metadata = subPageMetadata(PAGE_DISCOVERY);

export default function LotZapoznawczyPage() {
  return (
    <SubPageShell
      page={PAGE_DISCOVERY}
      eyebrow="Lot próbny · Piła"
      heading="Lot zapoznawczy samolotem w Pile"
      lead="30 minut w powietrzu z instruktorem na pokładzie ultralajta Allegro 2000. Bez doświadczenia i bez zobowiązań — pierwszy krok do licencji pilota albo prezent, którego się nie zapomina."
      ctaLabel="Zarezerwuj lot"
    >
      <section>
        <div className="relative h-64 md:h-96">
          <Image
            src="/images/gallery-5.jpeg"
            alt="Zachód słońca widziany z miejsca pasażera podczas lotu ultralajtem"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </section>

      <section>
        <h2>Na czym polega lot zapoznawczy?</h2>
        <p>
          Lot zapoznawczy to krótka lekcja latania dla osób, które nigdy nie
          siedziały za sterami samolotu. Lecisz z instruktorem{" "}
          <strong>Romanem Jałowieckim</strong> z lotniska{" "}
          <strong>Piła (EPPI)</strong> nad okolicami Piły i doliną Gwdy.
        </p>
        <ol>
          <li>
            <strong>Odprawa na ziemi.</strong> Instruktor pokazuje samolot,
            wyjaśnia, jak działają stery i jak będzie wyglądał lot.
          </li>
          <li>
            <strong>Około 30 minut w powietrzu.</strong> Start, lot nad
            okolicą i lądowanie. Jeśli zechcesz, pod okiem instruktora
            spróbujesz sam poprowadzić samolot.
          </li>
          <li>
            <strong>Rozmowa po locie.</strong> Odpowiadamy na pytania o
            szkolenie i licencję pilota.
          </li>
        </ol>
      </section>

      <section>
        <h2>Pomysł na prezent</h2>
        <p>
          Lot samolotem to prezent na urodziny, rocznicę czy dla kogoś, kto
          „ma już wszystko”. Napisz do nas, a ustalimy termin dogodny dla
          obdarowanej osoby.
        </p>
      </section>

      <section>
        <h2>Co warto wiedzieć przed lotem?</h2>
        <ul>
          <li>
            <strong>Nie potrzebujesz doświadczenia</strong> ani żadnych
            uprawnień.
          </li>
          <li>
            <strong>Pogoda:</strong> latamy w warunkach dobrej widoczności
            (VMC). Przy niskich chmurach lub silnym wietrze przekładamy lot na
            inny termin.
          </li>
          <li>
            <strong>Strój:</strong> wygodne ubranie i płaskie obuwie, w
            słoneczne dni — okulary przeciwsłoneczne.
          </li>
        </ul>
      </section>

      <section>
        <h2>Samolot</h2>
        <p>
          Latamy na <strong>Allegro 2000</strong> — dwumiejscowym samolocie
          ultralekkim z silnikiem Rotax 912 UL (80 KM) i wbudowanym
          spadochronem ratunkowym. Pilot i pasażer siedzą obok siebie, więc
          masz świetny widok i kontakt z instruktorem.
        </p>
      </section>

      <section>
        <h2>Co dalej?</h2>
        <p>
          Jeśli po locie złapiesz bakcyla, możesz od razu zacząć{" "}
          <Link href={PAGE_ULL.path}>kurs na licencję pilota ULL</Link>. Nie
          wiesz, którą licencję wybrać? Przeczytaj nasze{" "}
          <Link href={PAGE_COMPARISON.path}>porównanie ULL, UL i PPL</Link>.
        </p>
      </section>
    </SubPageShell>
  );
}
