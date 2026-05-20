"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  /**
   * Default is true.
   */
  animate?: boolean;
};

const stats: Stat[] = [
  { value: 1000, suffix: "+", label: "Godzin w powietrzu" },
  { value: 20, suffix: "+", label: "Wyszkolonych pilotów" },
  { value: 1, suffix: "", label: "Samolotów we flocie", animate: false },
  { value: 11, suffix: "+", label: "Lat doświadczenia" },
];

type CountUpProps = Pick<Stat, "suffix" | "animate"> & {
  active: boolean;
  target: number;
};

function CountUp({ target, suffix, active, animate = true }: CountUpProps) {
  const [count, setCount] = useState(animate ? 0 : target);

  useEffect(() => {
    if (!active || !animate) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [target, active, animate]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-charcoal py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-brand-sky text-4xl md:text-5xl font-bold mb-2">
                <CountUp
                  target={s.value}
                  suffix={s.suffix}
                  active={active}
                  animate={s.animate}
                />
              </div>
              <div className="text-white/70 text-sm font-medium uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
