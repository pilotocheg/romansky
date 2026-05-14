"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Czy potrzebuję wcześniejszego doświadczenia, żeby zacząć szkolenie lotnicze?",
    a: "Nie, wcześniejsze doświadczenie nie jest wymagane. Przyjmujemy kompletnych początkujących. Przed pierwszą lekcją latania wykonasz krótką samoocenę zdrowotną oraz wstępne zajęcia teoretyczne z Romanem.",
  },
  {
    q: "Jak długo trwa uzyskanie świadectwa kwalifikacji pilota ultralight (UL PPL)?",
    a: "Większość kursantów uzyskuje licencję pilota w ciągu 3–6 miesięcy, w zależności od częstotliwości lekcji i warunków pogodowych. Minimum to 30 godzin lotu (z instruktorem i solo) oraz zdanie egzaminu teoretycznego z 9 modułów.",
  },
  {
    q: "Jakie badania lekarskie są wymagane do kursu pilota ultralight?",
    a: "Do świadectwa kwalifikacji UL PPL wymagana jest klasa 2 LAPL lub samoocena zdrowotna, w zależności od indywidualnej sytuacji. Przed rozpoczęciem szkolenia otrzymasz pełną informację o tym, jaką drogę wybrać.",
  },
  {
    q: "Czy mogę wynająć samolot, posiadając licencję wydaną w innym kraju?",
    a: "Tak — akceptujemy pilotów z uznanymi zagranicznymi licencjami UL lub LAPL. Przed pierwszym samodzielnym lotem wymagany jest krótki lot sprawdzający z Romanem, aby upewnić się, że znasz Allegro 2000 i lokalne procedury.",
  },
  {
    q: "Jakie są wymagania pogodowe do lotów?",
    a: "Loty ultralajtem odbywają się w warunkach VMC (widoczność wzrokowa). Lekcje mogą być przełożone w przypadku niskiej chmurności, silnego bocznego wiatru lub złej widoczności. Roman na bieżąco monitoruje warunki i zawsze stawia bezpieczeństwo na pierwszym miejscu.",
  },
  {
    q: "Jak zarezerwować lot zapoznawczy?",
    a: "Wystarczy wypełnić formularz kontaktowy powyżej, wybrać opcję 'Lot zapoznawczy' jako temat zapytania i podać preferowane terminy. Roman potwierdzi dostępność zazwyczaj w ciągu 24 godzin.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-brand-sky text-sm font-semibold tracking-widest uppercase block mb-4">
            FAQ
          </span>
          <h2 className="text-charcoal font-bold text-4xl md:text-5xl leading-tight">
            Często zadawane pytania
          </h2>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-divider border border-divider">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-charcoal font-semibold text-sm">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-muted shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
