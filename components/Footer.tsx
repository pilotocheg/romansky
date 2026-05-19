import { Plane } from "lucide-react";

const quickLinks = [
  { label: "O nas", href: "#about" },
  { label: "Szkolenie lotnicze", href: "#programs" },
  { label: "Wynajem samolotu", href: "#fleet" },
  { label: "Galeria", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="text-brand-sky" size={20} />
              <span className="font-bold text-lg">
                Roman<span className="text-brand-sky">Sky</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Szkolenie lotnicze i wynajem samolotu Allegro 2000 na Lotnisku
              Piła (EPPI), Wielkopolskie. Działamy od 2015 roku. Instruktor:
              Roman Jałowiecki.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100048673526562"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-5 text-white/80">
              Szybkie linki
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-5 text-white/80">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Lotnisko Piła (EPPI)</li>
              <li>ul. Lotnicza 12, 64-920 Piła</li>
              <li>Polska</li>
              <li className="pt-2">
                <a
                  href="tel:+48512187280"
                  className="hover:text-white transition-colors"
                >
                  +48 512 187 280
                </a>
              </li>
              <li>
                <a
                  href="mailto:romansky@wp.pl"
                  className="hover:text-white transition-colors"
                >
                  romansky@wp.pl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>
            © {new Date().getFullYear()} RomanSky Aviation. Wszelkie prawa
            zastrzeżone.
          </p>
          <a
            href="/polityka-prywatnosci"
            className="hover:text-white/70 transition-colors"
          >
            Polityka prywatności
          </a>
        </div>
      </div>
    </footer>
  );
}
