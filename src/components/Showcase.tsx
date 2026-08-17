import { Reveal } from "./Reveal";
import { DashboardMock } from "./DashboardMock";

export function Showcase() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <div className="overflow-hidden rounded-[3px] bg-sand px-6 pt-12 sm:px-14 sm:pt-16">
            <div className="mx-auto max-w-[620px] text-center">
              <h2 className="display-2">
                Je ziet alles. Realtime.
              </h2>
              <p className="lead mx-auto mt-5 max-w-[500px]">
                Omzet, taken, mail en content op één scherm. Je ziet wat je
                werknemer doet en zet met één klik de laatste stap.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-[880px] translate-y-6">
              {/* IMAGE NEEDED (optioneel): echte dashboard-screenshot i.p.v. deze mockup */}
              <DashboardMock />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
