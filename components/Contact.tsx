"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const info = [
  {
    icon: MapPin,
    label: "Adres",
    value: "Lotnisko Piła (EPPI)\nul. Lotnicza 12\n64-920 Piła",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 512 187 280",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "romansky@wp.pl",
  },
  {
    icon: Clock,
    label: "Godziny",
    value: "Pon – Sob  08:00 – 18:00",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xlgvdqry", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-brand-sky text-sm font-semibold tracking-widest uppercase block mb-4">
            Kontakt
          </span>
          <h2 className="text-charcoal font-bold text-4xl md:text-5xl leading-tight mb-4">
            Napisz do nas
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Chcesz zacząć szkolenie lotnicze, zarezerwować lot zapoznawczy lub
            wynająć samolot? Odezwij się — odpiszemy w ciągu 24 godzin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white border border-divider p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-brand-sky/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-brand-sky" size={24} />
                </div>
                <h3 className="text-charcoal font-bold text-xl mb-2">
                  Wiadomość wysłana!
                </h3>
                <p className="text-muted text-sm">
                  Dziękujemy — Roman odezwie się w ciągu 24 godzin.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-charcoal text-sm font-medium mb-1.5"
                    >
                      Imię i nazwisko <span className="text-brand-sky">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border border-divider px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-brand-sky transition-colors"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-charcoal text-sm font-medium mb-1.5"
                    >
                      E-mail <span className="text-brand-sky">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-divider px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-brand-sky transition-colors"
                      placeholder="jan@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-charcoal text-sm font-medium mb-1.5"
                  >
                    Telefon{" "}
                    <span className="text-muted font-normal">
                      (opcjonalnie)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full border border-divider px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-brand-sky transition-colors"
                    placeholder="+48 600 000 000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry"
                    className="block text-charcoal text-sm font-medium mb-1.5"
                  >
                    Temat zapytania <span className="text-brand-sky">*</span>
                  </label>
                  <select
                    id="enquiry"
                    name="enquiry"
                    required
                    className="w-full border border-divider px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-brand-sky transition-colors bg-white"
                  >
                    <option value="">Wybierz temat…</option>
                    <option value="Szkolenie">Szkolenie lotnicze</option>
                    <option value="Wynajem">Wynajem samolotu</option>
                    <option value="Lot zapoznawczy">Lot zapoznawczy</option>
                    <option value="Inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-charcoal text-sm font-medium mb-1.5"
                  >
                    Wiadomość <span className="text-brand-sky">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-divider px-4 py-3 text-charcoal text-sm focus:outline-none focus:border-brand-sky transition-colors resize-none"
                    placeholder="Napisz kilka słów o sobie i o tym, czego szukasz…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-sky hover:bg-brand-sky-dark disabled:opacity-60 text-white font-semibold py-4 transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    "Wysyłanie…"
                  ) : (
                    <>
                      <Send size={16} />
                      Wyślij wiadomość
                    </>
                  )}
                </button>

                <p className="text-muted text-xs text-center">
                  Przesyłając formularz, akceptujesz naszą{" "}
                  <a
                    href="/polityka-prywatnosci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-sky underline"
                  >
                    Politykę prywatności
                  </a>
                  . Twoje dane nie będą udostępniane osobom trzecim.
                </p>
              </form>
            )}
          </div>

          <div className="space-y-6">
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="p-3 bg-brand-sky/10 text-brand-sky shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-charcoal font-semibold text-sm mb-1">
                    {label}
                  </p>
                  <p className="text-muted text-sm whitespace-pre-line">
                    {value}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-4 border border-divider overflow-hidden">
              <iframe
                title="Lokalizacja szkoły lotniczej RomanSky na Lotnisku Piła"
                src="https://maps.google.com/maps?q=Lotnisko+Pi%C5%82a+EPPI+ul+Lotnicza+12+Pi%C5%82a&z=14&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
