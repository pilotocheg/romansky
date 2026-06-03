"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faqs";

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
