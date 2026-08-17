"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { faq } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[620px] text-center">
          <h2 className="display-2">Je hebt vragen. Logisch.</h2>
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-[720px] flex-col gap-3">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(
                  "rounded-[3px] border bg-white transition-colors",
                  isOpen ? "border-accent/30" : "border-border",
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[18px] leading-snug" style={{ fontWeight: 600 }}>
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-8 w-8 flex-none place-items-center rounded-full bg-accent-soft text-accent transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 pr-14 text-[15px] leading-relaxed text-muted-fg">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
