import { Plane, CheckCircle2, Rocket } from "lucide-react";

const details = [
  { label: "Minimalny wiek", value: "16 lat" },
  { label: "Badania lotnicze", value: "Klasa 2 LAPL (możliwa samoocena)" },
  { label: "Egzamin teoretyczny", value: "9 modułów tematycznych, ÚCL / LAA ČR" },
  { label: "Minimalna liczba godzin lotu", value: "30 godz. (z instruktorem + solo)" },
  { label: "Egzamin praktyczny", value: "Sprawdzian umiejętności z egzaminatorem" },
  { label: "Dozwolone statki powietrzne", value: "Ultralekkies do 600 kg MTOW, 2 miejsca" },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-sky text-sm font-semibold tracking-widest uppercase block mb-4">
            Szkolenie lotnicze
          </span>
          <h2 className="text-charcoal font-bold text-4xl md:text-5xl leading-tight mb-4">
            Zacznij swoją przygodę<br />z lataniem
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Prowadzimy szkolenie lotnicze prowadzące do uzyskania świadectwa
            kwalifikacji pilota ultralekkiego statku powietrznego — wydawanego
            przez Urząd Lotnictwa Cywilnego (ÚCL) za pośrednictwem LAA ČR.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-divider shadow-sm p-8 mb-8">
          <div className="flex items-start gap-5 mb-6">
            <div className="p-3 bg-brand-sky/10 text-brand-sky shrink-0">
              <Plane size={28} />
            </div>
            <div>
              <h3 className="text-charcoal font-bold text-2xl mb-1">
                Świadectwo Kwalifikacji Pilota Ultralekkiego (UL PPL)
              </h3>
              <p className="text-muted text-sm">
                Wydane przez Urząd Lotnictwa Cywilnego (ÚCL) · LAA ČR
              </p>
            </div>
          </div>

          <p className="text-muted text-base leading-relaxed mb-6">
            Licencja pilota ultralight uprawnia do samodzielnych lotów
            dwumiejscowymi ultralajty w dozwolonych przestrzeniach powietrznych.
            Szkolenie łączy teorię z praktycznymi lotami z instruktorem oraz
            lotami solo, zakończonymi egzaminem praktycznym. Brak wcześniejszego
            doświadczenia lotniczego nie jest przeszkodą — wystarczy chęć latania
            i podstawowe badania lekarskie.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-brand-sky shrink-0 mt-0.5"
                  size={17}
                />
                <div>
                  <span className="text-charcoal text-sm font-semibold">
                    {d.label}:{" "}
                  </span>
                  <span className="text-muted text-sm">{d.value}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex bg-brand-sky hover:bg-brand-sky-dark text-white font-semibold px-8 py-4 transition-colors"
          >
            Zapytaj o szkolenie
          </a>
        </div>

        <div className="max-w-2xl mx-auto bg-charcoal text-white p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <Rocket className="text-brand-sky shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-1">Lot zapoznawczy</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Nie jesteś jeszcze zdecydowany? Spędź 30 minut w powietrzu z
                Romanem — idealny wstęp do nauki latania lub pomysł na prezent.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 border-2 border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white font-semibold px-6 py-3 transition-colors text-sm whitespace-nowrap"
          >
            Zarezerwuj lot zapoznawczy
          </a>
        </div>
      </div>
    </section>
  );
}
