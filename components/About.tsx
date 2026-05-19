import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const badges = ["Certyfikowany Instruktor Lotniczy", "Program czeski – LAA ČR"];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-sky text-sm font-semibold tracking-widest uppercase block mb-4">
              Nasza historia
            </span>
            <h2 className="text-charcoal font-bold text-4xl md:text-5xl leading-tight mb-6">
              Szkoła lotnicza
              <br />
              RomanSky w Pile
            </h2>
            <p className="text-muted text-base leading-relaxed mb-4">
              Szkoła lotnicza RomanSky działa od 2015 roku i mieści się na
              Lotnisku Piła (EPPI) w Wielkopolsce. Prowadzi ją Roman Jałowiecki
              — certyfikowany instruktor-pilot z całkowitym nalotem ponad 1000
              godzin na różnych typach statków powietrznych, w tym szybowcach.
            </p>
            <p className="text-muted text-base leading-relaxed mb-4">
              Prowadzimy szkolenia do czeskiej Licencji Pilota Samolotów
              Ultralekkich (ULL) według programu LAA ČR. Przyjmujemy zupełnych
              początkujących — wystarczy chęć latania i podstawowe orzeczenie
              lotniczo-lekarskie.
            </p>
            <p className="text-muted text-base leading-relaxed mb-8">
              W ofercie mamy również szkolenia doskonalące i uzupełniające,
              wynajem samolotu oraz loty zapoznawcze — idealny prezent lub
              pierwszy krok w stronę licencji pilota.
            </p>

            <div className="flex flex-wrap gap-3">
              {badges.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-2 border border-divider text-charcoal text-sm font-medium px-4 py-2"
                >
                  <ShieldCheck className="text-brand-sky" size={16} />
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-96 md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80"
              alt="Instruktor lotniczy Roman Jałowiecki przy samolocie ultralight w Pile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
