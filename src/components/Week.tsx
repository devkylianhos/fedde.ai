import { Reveal } from "./Reveal";
import { week, BOOKING_URL } from "@/lib/site";

export function Week() {
  return (
    <section id="hoe-het-werkt" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <p className="eyebrow">Hoe het werkt</p>
          <h2 className="display-2 mt-4">Binnen een week live.</h2>
          <p className="lead mx-auto mt-5 max-w-[540px]">
            Geen maandenlang traject. We leren je shop, bouwen je agent en zetten
            hem live. Daarna wordt hij elke week scherper.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-5">
          {week.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07}>
              <div className="card h-full">
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[13px] font-700 text-white">
                    {i + 1}
                  </span>
                  <span className="text-[12px] font-600 uppercase tracking-[0.1em] text-accent">
                    {step.day}
                  </span>
                </div>
                <h3
                  className="mt-4 font-display text-[20px] leading-[1.15]"
                  style={{ fontWeight: 500 }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55] text-muted-fg">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <a href={BOOKING_URL} className="btn-primary">
            Plan je kennismaking
          </a>
        </Reveal>
      </div>
    </section>
  );
}
