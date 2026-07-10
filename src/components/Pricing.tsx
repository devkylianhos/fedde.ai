import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/site";
import { Check } from "lucide-react";

const included = [
  "Je eigen Fedde, 24/7 in een afgeschermde omgeving",
  "Persoonlijke onboarding, koppelingen met je samen gezet",
  "Dashboard, alle zeven diensten en alles wat we hierna bouwen",
  "Eigen agent per klant, alles gelogd en omkeerbaar",
  "Maandelijks opzegbaar. Je data gaat met je mee.",
];

export function Pricing() {
  return (
    <section id="prijzen" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <p className="eyebrow">Prijzen</p>
          <h2 className="display-2 mt-4">Eén vast bedrag per maand.</h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[980px] grid-cols-1 gap-4 lg:grid-cols-5">
          {/* price card */}
          <Reveal className="lg:col-span-3">
            <div className="card h-full">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-[14px] font-600 text-muted-fg">Fedde</div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-display text-[56px] leading-none" style={{ fontWeight: 500 }}>
                      € 500
                    </span>
                    <span className="text-[15px] text-muted-fg">/ maand</span>
                  </div>
                  <div className="mt-1 text-[13px] text-muted-fg">excl. btw · excl. token usage en Claude-abonnement</div>
                </div>
                <a href={BOOKING_URL} className="btn-primary">
                  Plan een kennismaking
                </a>
              </div>

              <div className="my-6 h-px bg-border" />

              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-soft text-accent">
                      <Check size={13} />
                    </span>
                    <span className="text-[15px] leading-[1.5] text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[14px] text-muted-fg">
                Token usage en het Claude-abonnement komen er nog bij. Custom
                dashboards en werk op maat vanaf{" "}
                <span className="font-600 text-foreground">€ 1.500</span> excl. btw.
              </p>
            </div>
          </Reveal>

          {/* guarantee card */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div
              className="card flex h-full flex-col justify-between text-white"
              style={{ background: "linear-gradient(135deg, var(--accent-dark), var(--accent))" }}
            >
              <div>
                <div className="font-display text-[64px] leading-none" style={{ fontWeight: 500 }}>
                  14
                </div>
                <div className="mt-2 text-[15px] font-600">dagen garantie</div>
                {/* TODO: alleen tonen als je dit kunt waarmaken */}
                <p className="mt-4 text-[15px] leading-[1.55] text-white/90">
                  Levert Fedde in de eerste 14 dagen niet meer op dan je betaalt, dan
                  krijg je je geld terug.
                </p>
              </div>
              <a
                href={BOOKING_URL}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-display text-[17px] font-600 text-accent-dark transition-transform hover:-translate-y-0.5"
                style={{ fontWeight: 600 }}
              >
                Liever eerst praten? Plan een call
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
