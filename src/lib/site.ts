/* Fedde site content — single source of truth.
   Positionering: een AI-werknemer voor elk bedrijf, 24/7.
   Placeholders flagged with TODO are the "nog invullen met echte gegevens" items. */

export const BOOKING_URL = "https://cal.com/fedde/kennismaking"; // TODO: echte boekingslink

/* Betaplekken — houd dit eerlijk bij terwijl je verkoopt */
export const BETA_SEATS_TOTAL = 10;
export const BETA_SEATS_TAKEN = 0; // TODO: bijwerken per verkochte plek

/* Launchmoment — de dag dat de instap van 250 naar 500 euro gaat */
export const LAUNCH_DATE = "2026-09-01T10:00:00+02:00"; // TODO: echte launchdatum

export const nav = [
  { label: "Voor wie", href: "#voor-wie" },
  { label: "Wat hij doet", href: "#diensten" },
  { label: "Hoe het werkt", href: "#hoe-het-werkt" },
  { label: "Prijzen", href: "#prijzen" },
];

/* Zeven taken van je AI-werknemer */
export const services = [
  {
    tag: "Content",
    title: "Blogs en teksten die scoren",
    body: "Jij geeft het onderwerp, Fedde levert een af stuk dat klinkt als jouw merk.",
  },
  {
    tag: "Inbox",
    title: "Klantenmail afgehandeld",
    body: "Beantwoord in jouw toon. Wat gevoelig ligt, komt eerst langs jou.",
  },
  {
    tag: "Facturen",
    title: "Facturen en herinneringen",
    body: "Persoonlijk verstuurd, op het juiste moment. Niks blijft liggen.",
  },
  {
    tag: "Design",
    title: "Design in jouw huisstijl",
    body: "Socials, banners en presentaties, altijd in jouw stijl.",
  },
  {
    tag: "Data",
    title: "Dashboard met live cijfers",
    body: "Omzet, taken en content op één scherm, realtime.",
  },
  {
    tag: "Research",
    title: "Research voor je beslissingen",
    body: "Markt, concurrentie en leveranciers, uitgezocht op jouw vraag.",
  },
  {
    tag: "Routine",
    title: "Het terugkerende geregel",
    body: "Bestellingen, retouren, afspraken: het werk dat elke week terugkomt.",
  },
];

/* Voor wie — laat verschillende bedrijven zich herkennen */
export const audiences = [
  {
    label: "Webshops",
    body: "Content, retouren, reviews en klantmail. De hele achterkant draait door.",
  },
  {
    label: "Bureaus",
    body: "Rapportages, socials en klantupdates, klaar voordat je klant erom vraagt.",
  },
  {
    label: "Coaches en consultants",
    body: "Content, facturen en je inbox bijgehouden terwijl jij met klanten werkt.",
  },
  {
    label: "Praktijken",
    body: "Afspraken, herinneringen en administratie, zonder dat het blijft liggen.",
  },
  {
    label: "Horeca en retail",
    body: "Reserveringen, reviews en socials, ook als jij op de vloer staat.",
  },
  {
    label: "Zzp en klein team",
    body: "Al het geregel dat jouw avonden opeet, overgenomen door één werknemer.",
  },
];

/* Zo werkt het — het automatiseringsverhaal */
export const howSteps = [
  {
    title: "Vertel wat er moet gebeuren",
    body: "In gewone taal. \"Stuur elke maandag een weekupdate naar mijn klanten\" of \"beantwoord mail over openingstijden zelf\". Geen flowcharts, geen technische taal.",
  },
  {
    title: "Fedde doet het automatisch",
    body: "Hij werkt op je tools, dag en nacht. Terugkerende taken lopen vanzelf, nieuwe vragen pakt hij op zodra ze binnenkomen.",
  },
  {
    title: "Jij keurt goed wat telt",
    body: "Wat naar buiten gaat of gevoelig ligt, komt eerst langs jou. De rest handelt hij zelf af. Alles is gelogd en omkeerbaar.",
  },
  {
    title: "Het wordt een vaste routine",
    body: "Wat één keer goed ging, doet Fedde voortaan vanzelf. Elke week neemt hij meer van je bord.",
  },
];

/* Hoe het werkt, in een week */
export const week = [
  {
    day: "Dag 1",
    title: "Kennismaking",
    body: "We leren je bedrijf kennen en nemen de call op als leerbasis voor je werknemer.",
  },
  {
    day: "Dag 2 tot 4",
    title: "Bouwen en trainen",
    body: "We trainen je werknemer op jouw diensten, toon en branding tot het klopt.",
  },
  {
    day: "Dag 4",
    title: "Eigen omgeving",
    body: "Een afgeschermde omgeving in de cloud. Wij regelen hosting en koppelingen.",
  },
  {
    day: "Dag 5",
    title: "Aan het werk",
    body: "Je werknemer draait en jij ziet alles terug in je dashboard.",
  },
  {
    day: "Doorlopend",
    title: "Slimmer worden",
    body: "Elke call en elke werkweek maakt hem scherper op jouw bedrijf.",
  },
];

/* Koppelingen om te tonen */
export const integrations = [
  "Gmail",
  "Slack",
  "Notion",
  "Shopify",
  "WooCommerce",
  "Klaviyo",
  "Mollie",
  "Meta",
  "Instagram",
  "TikTok",
];

/* Techniek en vertrouwen */
export const trust = [
  {
    eyebrow: "Gekoppeld aan je tools",
    title: "Alles in één brein, altijd actueel",
    body: "Fedde plugt in op je e-mail, je kanalen en de tools waar je bedrijf al op draait. Van Gmail en Slack tot Shopify en Mollie, samen in één werknemer.",
    align: "left" as const,
  },
  {
    eyebrow: "Jij houdt de regie",
    title: "Jij keurt goed wat telt",
    body: "Fedde doet het werk, jij zet de laatste stap. Alles is gelogd en omkeerbaar, dus je ziet precies wat er gebeurt en draait het terug als je wilt.",
    align: "right" as const,
  },
  {
    eyebrow: "Gehost door ons · 24/7",
    title: "Eigen werknemer, afgeschermde omgeving",
    body: "Elke klant krijgt een eigen werknemer in een afgeschermde omgeving. Een aparte bewakingsbot vanuit ons team houdt alles in de gaten, dag en nacht.",
    align: "left" as const,
  },
];

/* FAQ */
export const faq = [
  {
    q: "Wat kan Fedde op dag één?",
    a: "Vanaf dag vijf draait je werknemer op jouw diensten, toon en branding. In de dagen ervoor leren we je bedrijf kennen en trainen we hem. Je begint dus niet met een leeg vel, maar met een werknemer die jouw zaak al kent.",
  },
  {
    q: "Is Fedde een chatbot?",
    a: "Nee. Een chatbot wacht tot jij iets vraagt. Fedde doet het werk waar je nu losse mensen, bureaus en tools voor betaalt, voor één bedrag. Jij keurt goed wat telt.",
  },
  {
    q: "Vervangt Fedde mijn mensen?",
    a: "Fedde neemt het terugkerende werk over: content, mail, facturen, geregel. Zo komen jij en je team toe aan het werk dat echt aandacht verdient. Jij bepaalt wat hij doet en jij keurt goed wat telt.",
  },
  {
    q: "Moet ik technisch zijn om dit op te zetten?",
    a: "Nee. Wij regelen de hosting, de koppelingen en de afgeschermde omgeving. Jij vertelt over je bedrijf en je merk, wij bouwen de rest.",
  },
  {
    q: "Hoe zit het met mijn data en veiligheid?",
    a: "Je krijgt een eigen werknemer in een eigen afgeschermde omgeving. Een aparte bewakingsbot houdt alles in de gaten. Alles wordt gelogd en is omkeerbaar.",
  },
  {
    q: "Wat kost het?",
    a: "Tijdens de beta betaal je 250 euro excl. btw per maand, en die prijs blijft staan zolang je klant blijft. Daarna wordt de instap 500 euro excl. btw per maand. Token usage en het Claude-abonnement komen er nog bij. Custom dashboards en werk op maat starten vanaf 1500 euro excl. btw.",
  },
  {
    q: "En als het niks oplevert?",
    a: "Levert Fedde in de eerste 14 dagen niet meer op dan je betaalt, dan krijg je je geld terug.",
  },
  {
    q: "Wordt hij slimmer over tijd?",
    a: "Ja. Elke call en elke week draaien maakt je werknemer scherper op jouw bedrijf en jouw klanten.",
  },
];
