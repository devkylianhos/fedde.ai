"use client";

import { useEffect, useState } from "react";

type Remaining = { d: number; h: number; m: number; s: number; done: boolean };

function remainingUntil(targetMs: number): Remaining {
  const diff = Math.max(0, targetMs - Date.now());
  return {
    d: Math.floor(diff / 86_400_000),
    h: Math.floor(diff / 3_600_000) % 24,
    m: Math.floor(diff / 60_000) % 60,
    s: Math.floor(diff / 1_000) % 60,
    done: diff === 0,
  };
}

/* Countdown zonder nul-flits: de server rekent de startwaarde uit en geeft
   die mee, de client tikt vanaf daar door. Cijfers in tabular-nums zodat
   niets verspringt. */
export function Countdown({
  targetIso,
  initial,
}: {
  targetIso: string;
  initial: Remaining;
}) {
  const [left, setLeft] = useState<Remaining>(initial);

  useEffect(() => {
    const target = new Date(targetIso).getTime();
    const tick = () => setLeft(remainingUntil(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  const cells = [
    { value: left.d, label: "dagen" },
    { value: left.h, label: "uur" },
    { value: left.m, label: "min" },
    { value: left.s, label: "sec" },
  ];

  return (
    <div className="flex gap-3" role="timer" aria-label="Tijd tot de launch">
      {cells.map((cell) => (
        <div
          key={cell.label}
          className="flex w-[76px] flex-col items-center rounded-[3px] border border-border bg-white py-3.5"
        >
          <span
            className="font-display text-[28px] leading-none tabular-nums"
            style={{ fontWeight: 700 }}
          >
            {String(cell.value).padStart(2, "0")}
          </span>
          <span className="mt-1.5 text-[11px] font-600 uppercase tracking-[0.1em] text-muted-fg" style={{ fontWeight: 600 }}>
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  );
}
