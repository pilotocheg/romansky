"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=70",
    alt: "Kokpit samolotu ultralight — szkolenie lotnicze Piła",
    caption: "W kokpicie Allegro 2000",
  },
  {
    src: "https://images.unsplash.com/photo-1520437358207-323b43b50729?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1520437358207-323b43b50729?w=600&q=70",
    alt: "Lotnisko z lotu ptaka — Piła EPPI",
    caption: "Lotnisko Piła z powietrza",
  },
  {
    src: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=600&q=70",
    alt: "Pilot w kokpicie podczas lotu solo",
    caption: "Lot solo — kurs pilota ultralight",
  },
  {
    src: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?w=600&q=70",
    alt: "Lot nad Wielkopolską — widok z lotu ptaka",
    caption: "Lot nad Wielkopolską",
  },
  {
    src: "https://images.unsplash.com/photo-1548613053-22087dd8edb8?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1548613053-22087dd8edb8?w=600&q=70",
    alt: "Skrzydło ultralajtu podczas lotu",
    caption: "W drodze, 600 m n.p.m.",
  },
  {
    src: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?w=600&q=70",
    alt: "Odprawianie przed lotem — inspekcja przedlotowa",
    caption: "Odprawa przedlotowa z Romanem",
  },
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=70",
    alt: "Allegro 2000 na płycie lotniska w Pile",
    caption: "Allegro 2000 gotowy do startu",
  },
  {
    src: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=70",
    alt: "Ultralight na tle błękitnego nieba — lot samolotem Piła",
    caption: "Idealna pogoda do latania",
  },
  {
    src: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=600&q=70",
    alt: "Zachód słońca na lotnisku — lotnisko Piła",
    caption: "Złota godzina w Pile",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="py-24 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-brand-sky text-sm font-semibold tracking-widest uppercase block mb-4">
            Galeria
          </span>
          <h2 className="text-charcoal font-bold text-4xl md:text-5xl leading-tight mb-4">
            Życie w RomanSky
          </h2>
          <p className="text-muted text-base">
            Zajrzyj za kulisy naszych lotów i szkoleń w Pile.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((p, i) => (
            <button
              key={p.src}
              className="relative w-full overflow-hidden group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky"
              onClick={() => setIndex(i)}
              aria-label={`Otwórz zdjęcie: ${p.caption}`}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={p.thumb}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-300 flex items-end">
                <p className="w-full text-white text-sm font-medium px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {p.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
      />
    </section>
  );
}
