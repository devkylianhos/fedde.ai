"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/* Verticale lijn die meevult met je scrollpositie, met een dot op de kop.
   Grijze basislijn staat altijd in de DOM, dus zonder JS blijft de lijn zichtbaar. */
export function ScrollSpine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.72", "end 0.45"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.4,
  });
  const dotTop = useTransform(progress, (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`);

  return (
    <div ref={ref} aria-hidden className={cn("pointer-events-none relative w-px", className)}>
      {/* basislijn */}
      <div className="absolute inset-0 w-px bg-border" />
      {/* vulling */}
      <motion.div
        className="absolute inset-x-0 top-0 h-full w-px bg-accent"
        style={{ scaleY: progress, transformOrigin: "top" }}
      />
      {/* dot op de voorgrondpositie */}
      <motion.div
        className="absolute left-1/2 h-2.5 w-2.5 rounded-full bg-accent"
        style={{
          top: dotTop,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 0 5px var(--accent-soft)",
        }}
      />
    </div>
  );
}
