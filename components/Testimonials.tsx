import { Star } from "lucide-react";
import Avatar from "./Avatar";

type Testimonial = {
  quote: string;
  name: string;
  license: string;
  avatarUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Od szkolenia z Romanem mam tylko pozytywne wrażenia. Roman jest bardzo profesjonalny pilot i świetny instruktor. Osobno chcę podkreślić samolot Allegro 2000 - który jest świetnym i biezpiecznym samolotem dla początkujących pilotów.",
    name: "Viacheslav Dmytriiev",
    license: "ULL, 2025",
    avatarUrl: "/images/testimony-1-avatar.jpeg",
  },
  {
    quote:
      "Allegro 2000 to świetna maszyna, a szkolenie z Romanem stoi na najwyższym poziomie. Atmosfera na lotnisku w Pile jest bardzo profesjonalna, a jednocześnie przyjazna.",
    name: "Agata",
    license: "ULL, 2020",
  },
  {
    quote:
      "Zapisałem się na lot zapoznawczy z ciekawości i skończyłem na pełnym kursie. Pasja Romana do latania jest naprawdę zaraźliwa. Gorąco polecam szkolenie w RomanSky!",
    name: "Przemysław K.",
    license: "ULL, 2016",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="text-brand-sky fill-brand-sky" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-brand-sky text-sm font-semibold tracking-widest uppercase block mb-4">
            Opinie kursantów
          </span>
          <h2 className="text-charcoal font-bold text-4xl md:text-5xl leading-tight">
            Co mówią nasi piloci
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-divider bg-white p-8 flex flex-col"
            >
              <Stars />
              <blockquote className="text-muted text-base leading-relaxed flex-1 mb-6">
                &bdquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-divider pt-4 flex items-center gap-3">
                <Avatar name={t.name} avatarUrl={t.avatarUrl} />
                <div>
                  <p className="text-charcoal font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted text-xs mt-0.5">{t.license}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
