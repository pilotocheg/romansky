import Image from "next/image";
import {
  Gauge,
  Zap,
  Users,
  Weight,
  Fuel,
  Clock,
  OctagonAlert,
} from "lucide-react";

const specs = [
  { icon: Zap, label: "Silnik", value: "Rotax 912 UL — 80 KM" },
  { icon: Gauge, label: "Prędkość przelotowa", value: "140-150 km/h" },
  { icon: Fuel, label: "Zasięg", value: "~750 km" },
  { icon: Weight, label: "Maksymalna masa startowa", value: "472,5 kg" },
  { icon: Users, label: "Miejsca", value: "2 (pilot i pasażer)" },
  {
    icon: OctagonAlert,
    label: "Biezpieczeństwo",
    value: "Ma wbudowany spadochron",
  },
  { icon: Clock, label: "Cena wynajmu", value: "400 zł / godz." },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-sky text-sm font-semibold tracking-widest uppercase block mb-4">
            Wynajem samolotu
          </span>
          <h2 className="text-charcoal font-bold text-4xl md:text-5xl leading-tight mb-4">
            Nasza flota
          </h2>
          <p className="text-muted text-base">
            Jeden starannie utrzymany samolot — gotowy do wynajmu dla
            licencjonowanych pilotów ultralight.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-divider shadow-sm overflow-hidden max-w-4xl mx-auto">
          <div className="relative h-72 md:h-auto min-h-72">
            <Image
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
              alt="Samolot Allegro 2000 do wynajmu na lotnisku w Pile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 md:hidden">
              <span className="bg-brand-sky text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                Dostępny do wynajmu
              </span>
            </div>
          </div>

          <div className="p-8 bg-white flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-charcoal font-bold text-2xl">
                  Allegro 2000
                </h3>
                <p className="text-muted text-sm mt-1">
                  Jednosilnikowy ultralight · Fantasy Air (Czechy)
                </p>
              </div>
              <span className="hidden md:block bg-brand-sky text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shrink-0 ml-4">
                Dostępny
              </span>
            </div>

            <p className="text-muted text-sm leading-relaxed my-4">
              Allegro 2000 to sportowy czeski ultralight z kompozytowym
              płatowcem, doskonałą widocznością i niezawodnym silnikiem Rotax.
              Latanie nim nad krajobrazem Wielkopolski to czysta przyjemność.
            </p>

            <div className="grid grid-cols-2 gap-3 flex-1">
              {specs.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 border border-divider p-3"
                >
                  <Icon className="text-brand-sky shrink-0 mt-0.5" size={16} />
                  <div>
                    <div className="text-muted text-xs">{label}</div>
                    <div className="text-charcoal text-sm font-semibold">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-divider">
              <p className="text-muted text-xs mb-4">
                <strong className="text-charcoal">Wymagania:</strong> Ważna
                licencja ULL lub równoważna + oblatanie na typie z instruktorem.
              </p>
              <a
                href="#contact"
                className="inline-flex w-full justify-center bg-brand-sky hover:bg-brand-sky-dark text-white font-semibold px-6 py-3 transition-colors"
              >
                Zarezerwuj Allegro 2000
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-muted text-sm mt-6">
          Kolejne samoloty w flocie — wkrótce.
        </p>
      </div>
    </section>
  );
}
