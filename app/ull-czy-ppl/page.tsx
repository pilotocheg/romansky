import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";
import { PAGE_COMPARISON, PAGE_DISCOVERY, PAGE_ULL, subPageMetadata } from "@/lib/pages";
import { MEDICAL_REQUIREMENT } from "@/lib/site";

export const metadata: Metadata = subPageMetadata(PAGE_COMPARISON);

const columns = ["ULL (CZ)", "UL (PL)", "LAPL(A)", "PPL(A)"];

const rows: { label: string; values: string[] }[] = [
  {
    label: "Kto wydaje",
    values: ["LAA ČR / ÚCL", "ULC", "Krajowy urząd lotnictwa (EASA)", "Krajowy urząd lotnictwa (EASA)"],
  },
  {
    label: "Statki powietrzne",
    values: [
      "Samoloty ultralekkie",
      "Samoloty ultralekkie",
      "Samoloty do 2000 kg, maks. 4 osoby na pokładzie",
      "Samoloty jednosilnikowe tłokowe (SEP)",
    ],
  },
  {
    label: "Minimalny nalot",
    values: ["20 godz.", "28 godz.", "30 godz. (w tym 6 solo)", "45 godz. (w tym 10 solo)"],
  },
  {
    label: "Badania lekarskie",
    values: [MEDICAL_REQUIREMENT, MEDICAL_REQUIREMENT, MEDICAL_REQUIREMENT, MEDICAL_REQUIREMENT],
  },
  {
    label: "Orientacyjna cena szkolenia",
    values: [
      "15 000 zł w RomanSky — bez VAT, możliwe raty",
      "ok. 20 000 zł (często + 23% VAT)",
      "ok. 30 000 zł (często + 23% VAT)",
      "ok. 42 000 zł (często + 23% VAT)",
    ],
  },
  {
    label: "Gdzie można latać",
    values: [
      "Czechy i szereg krajów UE, w tym Polska",
      "Polska (za granicą — wg przepisów danego kraju)",
      "Kraje EASA",
      "Cały świat (licencja ICAO)",
    ],
  },
  {
    label: "Droga do zawodu pilota",
    values: ["Nie", "Nie", "Nie", "Tak — pierwszy krok do CPL/ATPL"],
  },
];

export default function UllCzyPplPage() {
  return (
    <SubPageShell
      page={PAGE_COMPARISON}
      eyebrow="Poradnik"
      heading="ULL, UL, LAPL czy PPL(A)? Którą licencję pilota wybrać"
      lead="Chcesz zostać pilotem, ale gubisz się w skrótach? Wyjaśniamy, czym różnią się najpopularniejsze licencje dla pilotów rekreacyjnych w Polsce i która z nich ma sens w Twojej sytuacji."
      ctaLabel="Zapytaj o kurs ULL"
    >
      <section>
        <h2>W skrócie</h2>
        <ul>
          <li>
            <strong>ULL</strong> i <strong>UL</strong> — licencje na samoloty
            ultralekkie. Najszybsza i najtańsza droga do latania rekreacyjnego.
          </li>
          <li>
            <strong>LAPL(A)</strong> — europejska licencja „lekka” na małe
            samoloty, do latania w krajach EASA.
          </li>
          <li>
            <strong>PPL(A)</strong> — pełna licencja pilota turystycznego,
            uznawana na całym świecie i będąca pierwszym krokiem do zawodu
            pilota.
          </li>
        </ul>
      </section>

      <section>
        <h2>Porównanie licencji</h2>
        <div className="overflow-x-auto border border-divider -mx-6 sm:mx-0">
          <table className="w-full min-w-[640px] text-sm text-left">
            <thead className="bg-surface text-charcoal">
              <tr>
                <th className="p-3 font-semibold" />
                {columns.map((c) => (
                  <th key={c} scope="col" className="p-3 font-semibold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-divider align-top">
                  <th scope="row" className="p-3 font-semibold text-charcoal">
                    {r.label}
                  </th>
                  {r.values.map((v, i) => (
                    <td key={columns[i]} className="p-3">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm mt-4">
          Dane orientacyjne. Ceny to uśrednione wartości z cenników polskich
          szkół i aeroklubów (2025–2026) i obejmują teorię oraz minimalny nalot — w
          praktyce większość kursantów potrzebuje kilku dodatkowych godzin.
          Badania lotniczo-lekarskie i opłaty egzaminacyjne są płatne
          oddzielnie.
        </p>
        <p className="text-sm mt-4">
          <strong>Zwróć uwagę na VAT.</strong> Wiele szkół podaje ceny netto,
          do których dolicza się 23% VAT — przy kursie za 30 tys. zł to
          dodatkowe ok. 7 tys. zł. Cena szkolenia ULL w RomanSky jest ceną
          końcową, bez doliczania VAT.
        </p>
        <p className="text-sm mt-4">
          Przepisy i ceny się zmieniają — przed rozpoczęciem szkolenia sprawdź
          aktualne wymagania i cennik w wybranej organizacji szkolącej.
        </p>
      </section>

      <section>
        <h2>Licencja ULL — czeski program ultralight</h2>
        <p>
          Licencja pilota samolotów ultralekkich wydawana według programu LAA
          ČR. Szkolenie jest krótsze i tańsze niż na LAPL czy PPL, a samoloty
          ultralekkie są tanie w eksploatacji. To dobry wybór, jeśli chcesz
          latać dla przyjemności — na wycieczki i przeloty po okolicy.
        </p>
        <p>
          Właśnie do tej licencji szkolimy w RomanSky w Pile —{" "}
          <Link href={PAGE_ULL.path}>
            zobacz szczegóły kursu pilota ULL
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Świadectwo kwalifikacji UL (Polska)</h2>
        <p>
          Polskie świadectwo kwalifikacji pilota statku powietrznego
          ultralekkiego, wydawane przez Urząd Lotnictwa Cywilnego. Uprawnia do
          tej samej kategorii samolotów co ULL, ale szkolenie i egzamin
          odbywają się według przepisów krajowych. Wymaga co najmniej 28 godzin
          lotów szkolnych i orzeczenia lotniczo-lekarskiego ({MEDICAL_REQUIREMENT}).
        </p>
      </section>

      <section>
        <h2>LAPL(A) — Light Aircraft Pilot Licence</h2>
        <p>
          Europejska licencja na samoloty o maksymalnej masie startowej do 2000
          kg, z maksymalnie trzema pasażerami na pokładzie. Wymaga co najmniej
          30 godzin szkolenia w powietrzu (w tym 6 godzin solo) w organizacji
          szkolącej (ATO lub DTO) oraz orzeczenia lotniczo-lekarskiego
          ({MEDICAL_REQUIREMENT}). Ważna w krajach EASA.
        </p>
      </section>

      <section>
        <h2>PPL(A) — Private Pilot Licence</h2>
        <p>
          Licencja pilota turystycznego zgodna z ICAO, uznawana na całym
          świecie. Wymaga co najmniej 45 godzin szkolenia w powietrzu (w tym
          10 godzin solo) i orzeczenia lotniczo-lekarskiego ({MEDICAL_REQUIREMENT}). Szkolenie odbywa się na
          cięższych samolotach niż ultralajty, więc jest zazwyczaj wyraźnie
          droższe. PPL(A) to także pierwszy krok, jeśli myślisz o zawodzie
          pilota (CPL, ATPL).
        </p>
        <p>
          <strong>W RomanSky nie prowadzimy szkoleń PPL(A) ani LAPL(A).</strong>{" "}
          Doświadczenie zdobyte na ultralajcie ułatwia jednak dalsze
          szkolenie, a zgodnie z przepisami EASA (Part-FCL) część nalotu
          można zaliczyć na poczet kursu — do 10% wymaganego czasu lotu, ale
          nie więcej niż 10 godzin.
        </p>
      </section>

      <section>
        <h2>Którą licencję wybrać?</h2>
        <ul>
          <li>
            <strong>Chcesz latać rekreacyjnie, możliwie tanio i szybko?</strong>{" "}
            Wybierz <Link href={PAGE_ULL.path}>licencję ULL</Link> lub UL.
          </li>
          <li>
            <strong>Chcesz latać czteromiejscowym samolotem po Europie?</strong>{" "}
            Rozważ LAPL(A) lub PPL(A).
          </li>
          <li>
            <strong>Myślisz o karierze pilota liniowego?</strong> Twoja droga
            zaczyna się od PPL(A).
          </li>
          <li>
            <strong>Nie wiesz jeszcze, czy latanie jest dla Ciebie?</strong>{" "}
            Zacznij od{" "}
            <Link href={PAGE_DISCOVERY.path}>lotu zapoznawczego</Link>.
          </li>
        </ul>
      </section>
    </SubPageShell>
  );
}
