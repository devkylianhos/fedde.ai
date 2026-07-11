import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/site";
import { Check, BadgeEuro } from "lucide-react";

const included = [
  "Je eigen Fedde, 24/7 in een afgeschermde omgeving",
  "Persoonlijke onboarding, koppelingen met je samen gezet",
  "Dashboard en alle zeven diensten",
  "Alles gelogd en omkeerbaar",
  "Maandelijks opzegbaar. Je data gaat met je mee.",
];

export function Pricing() {
  return (
    <section id="prijzen" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[620px] text-center">
          <span className="eyebrow">Prijzen</span>
          <h2 className="display-2 mt-5">Eén vast bedrag per maand.</h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[900px] grid-cols-1 gap-4 md:grid-cols-[1.25fr_1fr]">
          {/* hoofdkaart */}
          <Reveal>
            <div className="card h-full">
              <div className="text-[14px] font-600 text-muted-fg" style={{ fontWeight: 600 }}>
                Fedde
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-[52px] leading-none" style={{ fontWeight: 700 }}>
                  € 500
                </span>
                <span className="text-[15px] text-muted-fg">/ maand</span>
              </div>
              <div className="mt-1.5 text-[13px] text-muted-fg">
                excl. btw · excl. token usage en Claude-abonnement
              </div>

              <ul className="mt-7 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-accent-soft text-accent">
                      <Check size={13} />
                    </span>
                    <span className="text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <a href={BOOKING_URL} className="btn-primary mt-8 w-full">
                Plan een kennismaking
              </a>
            </div>
          </Reveal>

          {/* maatwerkkaart */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-[28px] bg-sand p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-accent">
                <BadgeEuro size={21} />
              </span>
              <h3 className="mt-5 font-display text-[21px]" style={{ fontWeight: 700 }}>
                Werk op maat
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-fg">
                Custom dashboards en maatwerk bovenop je agent, gebouwd op jouw
                shop en jouw processen.
              </p>
              <div className="mt-auto pt-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[30px] leading-none" style={{ fontWeight: 700 }}>
                    vanaf € 1.500
                  </span>
                </div>
                <div className="mt-1 text-[13px] text-muted-fg">excl. btw, eenmalig</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* garantiebanner */}
        {/* TODO: alleen tonen als je dit kunt waarmaken */}
        <Reveal delay={0.14}>
          <div
            className="mx-auto mt-4 flex max-w-[900px] flex-col items-start gap-3 rounded-[28px] px-7 py-6 sm:flex-row sm:items-center"
            style={{ background: "var(--amber-soft)" }}
          >
            <span
              className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-white font-display text-[17px] text-[#a05e12]"
              style={{ fontWeight: 700 }}
            >
              14
            </span>
            <p className="text-[15px] leading-relaxed text-[#7a4a0e]">
              <span className="font-600" style={{ fontWeight: 600 }}>
                14 dagen garantie.
              </span>{" "}
              Levert Fedde in de eerste twee weken niet meer op dan je betaalt,
              dan krijg je je geld terug.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
