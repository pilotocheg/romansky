"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const photos = [
  {
    src: "/images/gallery-1.jpeg",
    alt: "Galeria RomanSky — zdjęcie 1",
    caption: "Allegro 2000 przed startem",
  },
  {
    src: "/images/gallery-2.JPG",
    alt: "Galeria RomanSky — zdjęcie 2",
    caption: "Po locie rodzinnym - ojciec i córka",
  },
  {
    src: "/images/gallery-3.JPG",
    alt: "Galeria RomanSky — zdjęcie 3",
    caption: "Allegro pod hangarem na tle pięknego zachodu słońca",
  },
  {
    src: "/images/gallery-4.jpeg",
    alt: "Galeria RomanSky — zdjęcie 4",
    caption: "Niski przelot Allegro nad lotniskiem EPPI",
  },
  {
    src: "/images/gallery-5.jpeg",
    alt: "Galeria RomanSky — zdjęcie 5",
    caption: "Piękny zachód słońca w locie z miejsca pasażera",
  },
  {
    src: "/images/gallery-6.jpeg",
    alt: "Galeria RomanSky — zdjęcie 6",
    caption: "Dwaj myśliwce: Lim-5 i Allegro :)",
  },
  {
    src: "/images/gallery-7.jpeg",
    alt: "Galeria RomanSky — zdjęcie 7",
    caption: "Roman oblatuje nowy typ samolotu",
  },
  {
    src: "/images/gallery-8.JPG",
    alt: "Galeria RomanSky — zdjęcie 8",
    caption: "Roman z uczniem po locie treningowym",
  },
  {
    src: "/images/gallery-9.jpeg",
    alt: "Galeria RomanSky — zdjęcie 9",
    caption: "Widok z powietrza na Piłę",
  },
];

const LightboxPlugins = [Captions];

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
                  src={p.src}
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
        plugins={LightboxPlugins}
        captions={{
          descriptionTextAlign: "center",
        }}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({
          src: p.src,
          alt: p.alt,
          description: p.caption,
        }))}
      />
    </section>
  );
}
