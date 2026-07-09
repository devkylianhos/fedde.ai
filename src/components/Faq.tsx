"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { faq } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <p className="eyebrow">Veelgestelde vragen</p>
          <h2 className="display-2 mt-4">Je hebt vragen. Logisch.</h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-[780px]">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="border-b border-border first:border-t"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[20px] leading-[1.3]" style={{ fontWeight: 500 }}>
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-8 w-8 flex-none place-items-center rounded-full border border-border transition-transform duration-300",
                      isOpen && "rotate-45 border-accent bg-accent text-white",
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
                    <p className="pb-6 pr-14 text-[16px] leading-[1.6] text-muted-fg">
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
