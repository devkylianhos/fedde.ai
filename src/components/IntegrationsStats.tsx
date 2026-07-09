import { Reveal } from "./Reveal";
import { integrations } from "@/lib/site";

const stats = [
  { value: "7", label: "diensten in 1 agent" },
  { value: "1 week", label: "tot je live bent" },
  { value: "24/7", label: "gehost en bewaakt" },
  { value: "€ 500", label: "per maand, alles inbegrepen" },
];

export function IntegrationsStats() {
  const loop = [...integrations, ...integrations];
  return (
    <section className="border-y border-border bg-white/50 py-16">
      <div className="container-x">
        <p className="text-center text-[13px] font-500 uppercase tracking-[0.14em] text-muted-fg/70">
          Koppelt met de tools die je al gebruikt
        </p>
      </div>

      {/* marquee */}
      <div className="relative mt-8 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: "linear-gradient(90deg, var(--background), transparent)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(270deg, var(--background), transparent)" }}
        />
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 font-display text-[18px]"
              style={{ fontWeight: 500 }}
            >
              <span className="h-2 w-2 rounded-full bg-accent/70" />
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* stats */}
      <div className="container-x mt-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center md:text-left">
              <div className="font-display text-[40px] leading-none" style={{ fontWeight: 500 }}>
                {s.value}
              </div>
              <div className="mt-2 text-[14px] text-muted-fg">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
