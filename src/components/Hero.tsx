import { Typewriter } from "./Typewriter";
import { DashboardMock } from "./DashboardMock";
import { Reveal } from "./Reveal";
import { heroPhrases, BOOKING_URL } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-44">
      {/* soft radial glow, matching the inspiration's light hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px]"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 8%, rgba(0,136,255,0.10) 0%, rgba(0,136,255,0) 70%)",
        }}
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              De achterkant van je webshop, gerund
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="display-1 mt-6">
              Fedde,
              <br />
              <Typewriter phrases={heroPhrases} />
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="lead mx-auto mt-7 max-w-[620px]">
              Geen chatbot maar een compleet ecommerce team in één agent. Fedde doet
              het werk waar je nu losse mensen, bureaus en tools voor betaalt.{" "}
              <span className="text-foreground">Jij keurt goed wat telt.</span>
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={BOOKING_URL} className="btn-primary">
                Plan een kennismaking
              </a>
              <a href="#hoe-het-werkt" className="btn-secondary">
                Bekijk hoe het werkt
              </a>
            </div>
          </Reveal>
        </div>

        {/* Hero visual: MacBook-style frame with the live dashboard */}
        <Reveal delay={0.25} y={30}>
          <div className="mx-auto mt-16 max-w-[940px]">
            {/* IMAGE NEEDED (optioneel): Hero — MacBook open met het Fedde-dashboard.
                Voor nu een echte HTML/CSS dashboard-mockup, geen placeholder. */}
            <DashboardMock />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
