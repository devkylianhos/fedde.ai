import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container-x pb-20 sm:pb-24">
      <Reveal>
        <div className="sky-panel rounded-[28px] px-8 py-16 text-center sm:py-20">
          <div className="relative">
            <h2 className="display-2 text-white">Nog een vraag?</h2>
            <p className="lead mx-auto mt-4 max-w-[460px] text-white/85">
              Stel hem in de kennismaking. We laten je in dertig minuten zien
              wat Fedde voor jouw shop doet.
            </p>
            <a href={BOOKING_URL} className="btn-inverse mt-8">
              Plan een kennismaking
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
