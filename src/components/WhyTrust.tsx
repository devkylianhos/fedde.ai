import { Reveal } from "./Reveal";

/* Eén vertrouwenssectie (Trust + WhyTrust samengevoegd).
   Andere layout-familie dan de kaartgrids: kop links, feiten als
   verticale lijst met dividers rechts. Geen eyebrow, geen kaarten. */
const facts = [
  {
    title: "Een echt bedrijf, geen anonieme tool",
    body: "Gebouwd door het team achter Kitchen Royal. Een naam, een adres en een KvK-nummer. Je weet met wie je te maken hebt.",
  },
  {
    title: "Jij keurt goed wat telt",
    body: "Wat naar buiten gaat of gevoelig ligt, komt eerst langs jou. Alles is gelogd en omkeerbaar. Je ziet precies wat er gebeurt en draait het terug als je wilt.",
  },
  {
    title: "Eigen medewerker, afgeschermde omgeving",
    body: "Elke klant krijgt een eigen omgeving die wij hosten en bewaken, dag en nacht. Niks wordt gedeeld tussen bedrijven. Onder de motorkap draait Claude van Anthropic.",
  },
  {
    title: "Je loopt geen risico",
    body: "14 dagen garantie, maandelijks opzegbaar en je data gaat altijd met je mee. Bevalt het niet, dan stop je zonder gedoe.",
  },
  {
    title: "We zijn net begonnen, en daar zijn we eerlijk over",
    body: "Daarom nu 10 betaplekken met een vaste prijs en persoonlijke begeleiding van de oprichter zelf. Je bouwt Tibbe mee vanaf het eerste uur.",
  },
];

export function WhyTrust() {
  return (
    <section id="vertrouwen" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="display-2">Waarom je ons nu al kunt vertrouwen.</h2>
              <p className="lead mt-5 max-w-[400px]">
                Geen loze beloftes en geen verzonnen reviews. Wel een paar
                dingen die gewoon kloppen.
              </p>
            </Reveal>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {facts.map((f, i) => (
              <Reveal key={f.title} delay={Math.min(i * 0.04, 0.16)}>
                <div className="grid grid-cols-1 gap-2 py-7 sm:grid-cols-[1fr_1.5fr] sm:gap-8">
                  <h3 className="font-display text-[21px] leading-snug">{f.title}</h3>
                  <p className="text-[15.5px] leading-relaxed text-muted-fg">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
