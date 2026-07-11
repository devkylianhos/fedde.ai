import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container-x pb-20 sm:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[36px] bg-accent px-8 py-16 text-center sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full"
            style={{ background: "rgba(255,255,255,0.10)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-16 h-[300px] w-[300px] rounded-full"
            style={{ background: "rgba(232,155,60,0.25)" }}
          />
          <div className="relative">
            <h2 className="display-2 text-white">Nog een vraag?</h2>
            <p className="lead mx-auto mt-4 max-w-[460px] text-white/85">
              Stel hem in de kennismaking. We laten je in dertig minuten zien
              wat Fedde voor jouw shop doet.
            </p>
            <a
              href={BOOKING_URL}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-display text-[17px] text-accent-dark transition-transform hover:-translate-y-0.5"
              style={{ fontWeight: 600 }}
            >
              Plan een kennismaking
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
