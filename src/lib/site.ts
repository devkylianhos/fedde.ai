/* Fedde site content — single source of truth.
   Placeholders flagged with TODO are the "nog invullen met echte gegevens" items. */

export const BOOKING_URL = "https://cal.com/fedde/kennismaking"; // TODO: echte boekingslink

export const nav = [
  { label: "Diensten", href: "#diensten" },
  { label: "Hoe het werkt", href: "#hoe-het-werkt" },
  { label: "Vertrouwen", href: "#vertrouwen" },
  { label: "Prijzen", href: "#prijzen" },
];

/* Typewriter rotation under the hero headline */
export const heroPhrases = [
  "runt mijn webshop",
  "schrijft mijn SEO-blogs",
  "handelt mijn retouren af",
  "houdt mijn dashboard bij",
  "haalt reviews binnen",
];

/* Zeven diensten */
export const services = [
  {
    tag: "SEO",
    title: "SEO-blogs op ieder moment",
    body: "Jij geeft het onderwerp, Fedde levert een af stuk dat scoort en klinkt als jouw merk.",
  },
  {
    tag: "Data",
    title: "Dashboard met live data",
    body: "Omzet, retouren, reviews en content op één scherm, realtime.",
  },
  {
    tag: "Retouren",
    title: "Retouren automatisch afgehandeld",
    body: "Bijgehouden en afgehandeld, met signaal als een product te vaak terugkomt.",
  },
  {
    tag: "Design",
    title: "Design in jouw huisstijl",
    body: "Voor socials, banners en productpagina's, altijd in jouw stijl.",
  },
  {
    tag: "Facturen",
    title: "Persoonlijke factuurherinneringen",
    body: "In jouw toon, op het juiste moment verstuurd.",
  },
  {
    tag: "Reviews",
    title: "Reviews die vanzelf binnenlopen",
    body: "Na elke bestelling, zonder dat jij erachteraan zit.",
  },
  {
    tag: "Research",
    title: "Product research op jouw merk",
    body: "Gericht op jouw doelgroep en waar jij naartoe wilt.",
  },
];

/* Hoe het werkt, in een week */
export const week = [
  {
    day: "Dag 1",
    title: "Kennismaking",
    body: "We leren je shop en nemen de call op als leerbasis voor je agent.",
  },
  {
    day: "Dag 2 tot 4",
    title: "Bouwen en trainen",
    body: "We trainen je agent op catalogus, toon en branding tot het klopt.",
  },
  {
    day: "Dag 4",
    title: "Eigen omgeving",
    body: "Een afgeschermde omgeving in de cloud. Wij regelen hosting en koppelingen.",
  },
  {
    day: "Dag 5",
    title: "Live",
    body: "Je agent draait en jij ziet alles terug in je dashboard.",
  },
  {
    day: "Doorlopend",
    title: "Slimmer worden",
    body: "Elke klantcall maakt de agent scherper op jouw merk.",
  },
];

/* Koppelingen om te tonen */
export const integrations = [
  "Shopify",
  "WooCommerce",
  "Klaviyo",
  "Mollie",
  "Meta",
  "TikTok",
  "Instagram",
  "Gmail",
];

/* Techniek en vertrouwen (spine section) */
export const trust = [
  {
    eyebrow: "Gekoppeld aan je tools",
    title: "Alles in één brein, altijd actueel",
    body: "Fedde plugt in op je shop, je e-mail en je kanalen. Shopify, WooCommerce, Klaviyo, Mollie, Meta, TikTok, Instagram en Gmail komen samen in één agent.",
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
    title: "Eigen agent, afgeschermde omgeving",
    body: "Elke klant krijgt een eigen agent in een afgeschermde omgeving. Een aparte bewakingsbot vanuit ons team houdt alle agents in de gaten, dag en nacht.",
    align: "left" as const,
  },
];

/* FAQ */
export const faq = [
  {
    q: "Wat kan Fedde op dag één?",
    a: "Vanaf dag vijf draait je agent op je catalogus, toon en branding. In de dagen ervoor leren we je shop kennen en trainen we de agent. Je begint dus niet met een leeg vel, maar met een agent die jouw merk al kent.",
  },
  {
    q: "Is Fedde een chatbot?",
    a: "Nee. Een chatbot wacht tot jij iets vraagt. Fedde doet het werk waar je nu losse mensen, bureaus en tools voor betaalt, voor één bedrag. Jij keurt goed wat telt.",
  },
  {
    q: "Moet ik technisch zijn om dit op te zetten?",
    a: "Nee. Wij regelen de hosting, de koppelingen en de afgeschermde omgeving. Jij levert je shop en je merk aan, wij bouwen de rest.",
  },
  {
    q: "Hoe zit het met mijn data en veiligheid?",
    a: "Je krijgt een eigen agent in een eigen afgeschermde omgeving. Een aparte bewakingsbot houdt alle agents in de gaten. Alles wordt gelogd en is omkeerbaar.",
  },
  {
    q: "Wat kost het?",
    a: "Fedde start vanaf 500 euro excl. btw per maand, alles inbegrepen. Custom dashboards en werk op maat starten vanaf 1500 euro excl. btw.",
  },
  {
    q: "En als het niks oplevert?",
    a: "Levert Fedde in de eerste 14 dagen niet meer op dan je betaalt, dan krijg je je geld terug.",
  },
  {
    q: "Wordt de agent slimmer over tijd?",
    a: "Ja. Elke klantcall en elke week draaien maakt de agent scherper op jouw merk en jouw doelgroep.",
  },
];
