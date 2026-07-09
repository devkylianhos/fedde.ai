import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container-x pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] px-8 py-16 text-center sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #080b12, #101b34 60%, #0b2b52)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 60% at 80% 20%, rgba(0,136,255,0.35), transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="display-2 text-white">Nog een vraag?</h2>
            <p className="lead mx-auto mt-4 max-w-[520px] text-white/75">
              Stel hem in de kennismaking. We laten je in dertig minuten zien wat
              Fedde voor jouw shop doet.
            </p>
            <a href={BOOKING_URL} className="btn-primary mt-8">
              Plan een kennismaking
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
