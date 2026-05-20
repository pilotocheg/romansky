import { Plane, CheckCircle2, Rocket } from "lucide-react";

const details = [
  { label: "Minimalny wiek", value: "16 lat" },
  {
    label: "Badania lotniczo-lekarskie",
    value: "Ważne orzeczenie do szkolenia UL",
  },
  { label: "Zaświadczenie", value: "O ukończeniu szkolenia lotniczego" },
  { label: "Cena szkolenia", value: "14 000 zł (teoria + praktyka)" },
  {
    label: "Egzamin",
    value: "Opłata pobierana bezpośrednio przez inspektora czeskiego",
  },
  {
    label: "Uznanie licencji",
    value: "Czechy i szereg krajów europejskich, w tym w Polsce",
  },
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
            Zacznij swoją przygodę
            <br />z lataniem
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Prowadzimy szkolenie do czeskiej Licencji Pilota Samolotów
            Ultralekkich (ULL) według programu LAA ČR. Brak wcześniejszego
            doświadczenia nie jest przeszkodą.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-divider shadow-sm p-8 mb-8">
          <div className="flex items-start gap-5 mb-6">
            <div className="p-3 bg-brand-sky/10 text-brand-sky shrink-0">
              <Plane size={28} />
            </div>
            <div>
              <span className="text-brand-sky text-xs font-semibold tracking-widest uppercase">
                Program czeski
              </span>
              <h3 className="text-charcoal font-bold text-2xl mt-0.5">
                Licencja Pilota ULL
              </h3>
              <p className="text-muted text-sm mt-1">
                Licencja Pilota Samolotów Ultralekkich
              </p>
              <p className="text-muted text-xs mt-0.5">ÚCL / LAA ČR</p>
            </div>
          </div>

          <p className="text-muted text-base leading-relaxed mb-6">
            Czeska licencja pilota ultralajtu uprawnia do samodzielnych lotów
            dwumiejscowymi ultralajty. Szkolenie łączy teorię z lotami z
            instruktorem i lotami solo, zakończonymi egzaminem przed inspektorem
            czeskim. Licencja uznawana w Czechach oraz w szeregu krajów
            europejskich — w tym w Polsce.
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
            className="flex justify-center w-full sm:w-fit bg-brand-sky hover:bg-brand-sky-dark text-white font-semibold px-8 py-4 transition-colors"
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
            className="flex shrink-0 justify-center w-full sm:w-auto border-2 border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white font-semibold px-6 py-3 transition-colors text-sm"
          >
            Zarezerwuj lot zapoznawczy
          </a>
        </div>
      </div>
    </section>
  );
}
