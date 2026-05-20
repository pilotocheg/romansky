import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <Image
        src="/images/hero-bg.jpeg"
        alt="Ultralight w locie — szkolenie lotnicze RomanSky Piła"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-linear-to-r from-charcoal/80 via-charcoal/50 to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full pt-16">
        <div className="max-w-xl">
          <span className="inline-block text-brand-sky text-sm font-semibold tracking-widest uppercase mb-4">
            Lotnisko Piła (EPPI) · Wielkopolskie
          </span>
          <h1 className="text-white font-bold leading-tight mb-6 text-5xl md:text-6xl lg:text-7xl">
            Szkolenie
            <br />
            lotnicze
            <br />w Pile
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-4 leading-relaxed">
            Szkolenie do licencji ULL i wynajem samolotu
            <br className="hidden sm:block" />
            Allegro 2000 na Lotnisku Piła. Od 2015 roku.
          </p>
          <p className="text-brand-sky text-sm font-medium mb-10">
            Licencja ULL · Lot zapoznawczy · Wynajem samolotu
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#programs"
              className="flex justify-center bg-brand-sky hover:bg-brand-sky-dark text-white font-semibold px-8 py-4 transition-colors text-base"
            >
              Zacznij szkolenie
            </a>
            <a
              href="#fleet"
              className="flex justify-center border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold px-8 py-4 transition-colors text-base"
            >
              Wynajmij samolot →
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white animate-bounce"
        aria-label="Przewiń w dół"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
