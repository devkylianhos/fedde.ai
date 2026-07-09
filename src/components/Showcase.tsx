import { Reveal } from "./Reveal";
import { DashboardMock } from "./DashboardMock";

export function Showcase() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="max-w-[680px]">
          <span className="inline-flex rounded-lg bg-accent px-3 py-1.5 text-[13px] font-700 uppercase tracking-[0.08em] text-white">
            Dashboard
          </span>
          <h2 className="display-2 mt-6">
            Dashboard met live data.
            <br />
            Inbegrepen<span className="text-accent">.</span>
          </h2>
          <p className="lead mt-5 max-w-[560px]">
            Omzet, retouren, reviews en content op één scherm, realtime. Je ziet wat
            Fedde doet en zet met één klik de laatste stap.
          </p>
        </Reveal>
      </div>

      {/* full-bleed glossy band, like the inspiration's showcase */}
      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,136,255,0.06), rgba(0,136,255,0.16))",
          }}
        />
        <div className="container-x relative py-14">
          <Reveal y={30} className="mx-auto max-w-[960px]">
            {/* IMAGE NEEDED (optioneel): echte dashboard-screenshot i.p.v. deze mockup */}
            <DashboardMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
