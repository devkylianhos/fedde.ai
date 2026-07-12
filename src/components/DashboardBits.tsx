"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* Teller die optelt naar de eindwaarde zodra hij in beeld komt.
   Server rendert meteen de eindwaarde, dus zonder JS of animatie
   staat er nooit een nul (de fout die de inspiratiesite wel maakt). */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || reduced) return;
    started.current = true;
    const duration = 900;
    const t0 = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toLocaleString("nl-NL")}
      {suffix}
    </span>
  );
}

/* Staafjes die opgroeien wanneer de grafiek in beeld komt.
   Alleen transform, dus geen layout-verschuiving. */
export function GrowBars({ values }: { values: number[] }) {
  return (
    <div className="flex h-24 items-end gap-2">
      {values.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-md"
          style={{
            height: `${h}%`,
            transformOrigin: "bottom",
            background:
              i === values.length - 1 ? "var(--accent)" : "rgba(45,91,255,0.18)",
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            duration: 0.55,
            delay: 0.1 + i * 0.06,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        />
      ))}
    </div>
  );
}
