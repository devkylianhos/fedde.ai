import { Reveal } from "./Reveal";
import { ScrollSpine } from "./ScrollSpine";
import { week, BOOKING_URL } from "@/lib/site";

const badges = ["1", "2-4", "4", "5", "∞"];

export function Week() {
  return (
    <section id="in-een-week" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-[680px]">
          <Reveal className="text-center">
            <span className="eyebrow">Hoe het werkt</span>
            <h2 className="display-2 mt-5">Binnen een week aan het werk.</h2>
            <p className="lead mx-auto mt-5 max-w-[480px]">
              Geen maandenlang traject. We leren je bedrijf kennen, bouwen je
              werknemer en zetten hem aan het werk. Daarna wordt hij elke week
              scherper.
            </p>
          </Reveal>

          {/* verticale stappen met lijn */}
          <div className="relative mt-14">
            <ScrollSpine className="absolute bottom-6 left-[27px] top-6" />
            <div className="flex flex-col gap-5">
              {week.map((step, i) => (
                <Reveal key={step.title} delay={Math.min(i * 0.06, 0.24)}>
                  <div className="relative flex gap-6 rounded-[3px] border border-border bg-white p-6">
                    <span
                      className="relative z-10 grid h-14 w-14 flex-none place-items-center rounded-[3px] font-display text-[16px] text-white"
                      style={{
                        fontWeight: 700,
                        background: i === week.length - 1 ? "var(--amber)" : "var(--accent)",
                      }}
                    >
                      {badges[i]}
                    </span>
                    <div>
                      <div
                        className="text-[13px] font-600 uppercase tracking-[0.08em] text-muted-fg"
                        style={{ fontWeight: 600 }}
                      >
                        {step.day}
                      </div>
                      <h3 className="mt-1 font-display text-[21px]" style={{ fontWeight: 700 }}>
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-muted-fg">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15} className="mt-12 text-center">
            <a href={BOOKING_URL} className="btn-primary">
              Plan je kennismaking
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
