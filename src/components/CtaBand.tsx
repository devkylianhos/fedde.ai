import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container-x pb-20 sm:pb-24">
      <Reveal>
        <div className="sky-panel rounded-[3px] px-8 py-16 text-center sm:py-20">
          <div className="relative">
            <h2 className="display-2 text-white">Benieuwd wat hij voor jou kan doen?</h2>
            <p className="lead mx-auto mt-4 max-w-[460px] text-white/85">
              Stuur een appje. In een half uur laten we zien wat Tibbe morgen al
              voor je regelt. Geen verkooppraatje, gewoon even kijken.
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
