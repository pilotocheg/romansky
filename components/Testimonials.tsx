import { Star } from "lucide-react";
import Avatar from "./Avatar";

type Testimonial = {
  quote: string;
  name: string;
  date: string;
  avatarUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Prezent urodzinowy w postaci przelotu samolotem ultralight był wyjątkowym i niezapomnianym przeżyciem. Organizacja to pełen profesjonalizm, a pilot zadbał o bezpieczeństwo i komfort podczas całego przelotu. Możliwość podziwiania krajobrazów z lotu ptaka sprawiła, że był to prezent nie tylko oryginalny, ale też pełen wrażeń i pozytywnych emocji, a także dawki adrenaliny, której zazwyczaj trudno doświadczyć na co dzień. To doświadczenie na długo pozostanie w mojej w pamięci i z pewnością mogę polecić taki prezent każdemu, kto lubi nowe przygody i niezapomniane chwile.\n\nPs. Proszę nie wkurzać pilota, bo zabiję. A i jeszcze nie zaczepiać.",
    name: "Gosia",
    date: "Lipiec, 2025",
  },
  {
    quote:
      "Od szkolenia z Romanem mam tylko pozytywne wrażenia. Roman jest bardzo profesjonalny pilot i świetny instruktor. Osobno chcę podkreślić samolot Allegro 2000 - który jest świetnym i biezpiecznym samolotem dla początkujących pilotów.",
    name: "Viacheslav Dmytriiev",
    date: "Marzec, 2025",
    avatarUrl: "/images/testimony-1-avatar.jpeg",
  },
  {
    quote:
      "Allegro 2000 to świetna maszyna, a szkolenie z Romanem stoi na najwyższym poziomie. Atmosfera na lotnisku w Pile jest bardzo profesjonalna, a jednocześnie przyjazna.",
    name: "Agata",
    date: "Wrzesień, 2024",
  },
  {
    quote:
      "Zapisałem się na lot zapoznawczy z ciekawości i skończyłem na pełnym kursie. Pasja Romana do latania jest naprawdę zaraźliwa. Gorąco polecam szkolenie w RomanSky!",
    name: "Przemysław K.",
    date: "Maj, 2023",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4 shrink-0">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="text-brand-sky fill-brand-sky" />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="border border-divider bg-white p-8 flex flex-col max-h-96 w-80 shrink-0 snap-start">
      <Stars />
      <blockquote className="text-muted text-base leading-relaxed flex-1 min-h-0 overflow-y-auto mb-6 pr-1 whitespace-pre-line">
        &bdquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="border-t border-divider pt-4 flex items-center gap-3 shrink-0">
        <Avatar name={testimonial.name} avatarUrl={testimonial.avatarUrl} />
        <div>
          <p className="text-charcoal font-semibold text-sm">
            {testimonial.name}
          </p>
          <p className="text-muted text-xs mt-0.5">{testimonial.date}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-brand-sky text-sm font-semibold tracking-widest uppercase block mb-4">
            Opinie klientów
          </span>
          <h2 className="text-charcoal font-bold text-4xl md:text-5xl leading-tight">
            Co mówią nasi klienci
          </h2>
        </div>

        <div className="-mx-6 px-6 overflow-x-auto scroll-smooth">
          <div className="flex gap-6 w-max min-w-full justify-center pb-2">
            {testimonials.map((t) => (
              <TestimonialCard key={`${t.name}-${t.date}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
