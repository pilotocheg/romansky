"use client";

import { useState, useEffect } from "react";
import { Menu, X, Plane } from "lucide-react";

const links = [
  { label: "O nas", href: "#about" },
  { label: "Szkolenia", href: "#programs" },
  { label: "Flota", href: "#fleet" },
  { label: "Galeria", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-charcoal font-bold text-xl tracking-tight"
          onClick={close}
        >
          <Plane className="text-brand-sky" size={22} />
          <span>
            Roman<span className="text-brand-sky">Sky</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-charcoal text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-brand-sky hover:bg-brand-sky-dark text-white text-sm font-semibold px-5 py-2 transition-colors"
        >
          Zarezerwuj lot
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-divider px-6 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="text-charcoal font-medium text-base"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-2 inline-flex justify-center bg-brand-sky hover:bg-brand-sky-dark text-white text-sm font-semibold px-5 py-3 transition-colors"
            >
              Zarezerwuj lot
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
