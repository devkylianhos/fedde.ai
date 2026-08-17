/* Tibbe site content — single source of truth.
   Positionering: een AI-werknemer voor elk bedrijf, 24/7.
   Placeholders flagged with TODO are the "nog invullen met echte gegevens" items. */

export const BOOKING_URL = "https://cal.com/tibbe/kennismaking"; // TODO: echte boekingslink

/* Oprichter — vul je naam in, dan verschijnt hij overal.
   Foto komt later; zolang photo leeg is tonen we een initialen-avatar. */
export const FOUNDER = {
  name: "", // TODO: vul je naam in, bv. "Kylian Hos"
  role: "Oprichter van Tibbe, partner van Kitchen Royal",
  photo: "", // TODO: pad naar foto, bv. "/images/oprichter.jpg"
};

/* Betaplekken — houd dit eerlijk bij terwijl je verkoopt */
export const BETA_SEATS_TOTAL = 10;
export const BETA_SEATS_TAKEN = 3; // TODO: bijwerken per verkochte plek

/* Launchmoment — de dag dat de instap van 250 naar 500 euro gaat */
export const LAUNCH_DATE = "2026-09-01T10:00:00+02:00"; // TODO: echte launchdatum

export const nav = [
  { label: "Voor wie", href: "/#voor-wie" },
  { label: "Wat hij doet", href: "/#diensten" },
  { label: "Hoe het werkt", href: "/#hoe-het-werkt" },
  { label: "Prijzen", href: "/#prijzen" },
];

/* Zeven taken van je AI-werknemer */
export const services = [
  {
    tag: "Content",
    title: "Blogs en teksten die scoren",
    body: "Jij geeft het onderwerp, Tibbe levert een af stuk dat klinkt als jouw merk.",
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
    title: "Tibbe doet het automatisch",
    body: "Hij werkt op je tools, dag en nacht. Terugkerende taken lopen vanzelf, nieuwe vragen pakt hij op zodra ze binnenkomen.",
  },
  {
    title: "Jij keurt goed wat telt",
    body: "Wat naar buiten gaat of gevoelig ligt, komt eerst langs jou. De rest handelt hij zelf af. Alles is gelogd en omkeerbaar.",
  },
  {
    title: "Het wordt een vaste routine",
    body: "Wat één keer goed ging, doet Tibbe voortaan vanzelf. Elke week neemt hij meer van je bord.",
  },
];

/* Webshop-pagina: gespecialiseerde agents per rol */
export const webshopAgents = [
  {
    role: "Site Agent",
    title: "Past je live site direct aan",
    body: "Gekoppeld aan je platform past hij prijzen, banners, productteksten en kortingscodes aan op je live shop. Elke wijziging eerst langs jou.",
    visual: "site" as const,
  },
  {
    role: "Lead Agent",
    title: "Wint verlaten winkelwagens terug",
    body: "Klant laat zijn mandje staan, kort daarna volgt een persoonlijke follow-up met een unieke kortingscode. Geen handwerk, wel omzet terug.",
    visual: "cart" as const,
  },
  {
    role: "Review Agent",
    title: "Haalt reviews vanzelf binnen",
    body: "Na elke levering een reviewverzoek op het juiste moment en in jouw toon. Negatieve reviews escaleren intern voordat ze publiek gaan.",
    visual: "review" as const,
  },
  {
    role: "Creative Agent",
    title: "Maakt beeld en video uit je catalogus",
    body: "Banners, productfoto-varianten, story-creatives en korte video-ads, gegenereerd uit je bestaande producten. Klaar om te plaatsen.",
    visual: "creative" as const,
  },
  {
    role: "Service Agent",
    title: "Doet je klantenservice, dag en nacht",
    body: "Standaardvragen, retouren en beschikbaarheid via WhatsApp, mail en chat. In jouw stem, en alleen wat menselijk oordeel vraagt komt bij jou.",
    visual: "service" as const,
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
    body: "Tibbe plugt in op je e-mail, je kanalen en de tools waar je bedrijf al op draait. Van Gmail en Slack tot Shopify en Mollie, samen in één werknemer.",
    align: "left" as const,
  },
  {
    eyebrow: "Jij houdt de regie",
    title: "Jij keurt goed wat telt",
    body: "Tibbe doet het werk, jij zet de laatste stap. Alles is gelogd en omkeerbaar, dus je ziet precies wat er gebeurt en draait het terug als je wilt.",
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
    q: "Wat doet Tibbe op dag één?",
    a: "In de kennismaking koppelen we je tools: e-mail, WhatsApp, agenda en je documenten. Daarna pakt Tibbe diezelfde dag zijn eerste echte taken op. Inbox opschonen, klanten opvolgen, research, facturen achterna. Je ziet de eerste output binnen uren, niet weken.",
  },
  {
    q: "Ik ben niet technisch. Hoeveel werk is het opzetten?",
    a: "Eén call. We zetten alles samen met je op, live: je systemen, je software, jouw manier van werken. Jij praat, wij koppelen. Is er ergens een wachtwoord nodig, dan typ jij het, wij zien het nooit.",
  },
  {
    q: "Mijn bedrijfsdata op een AI. Hoe veilig is dat?",
    a: "Je Tibbe draait op een eigen afgeschermde machine die wij hosten. Niks wordt gedeeld tussen bedrijven. Alles wat hij doet is gelogd, terug te lezen en omkeerbaar, en hij vraagt het eerst als een actie zwaar telt. Jouw omgeving, jouw regels.",
  },
  {
    q: "Ik gebruik al ChatGPT en Claude. Wat is anders?",
    a: "Dat zijn briljante breinen die wachten tot jij typt. Tibbe is een werknemer: hij werkt 24/7 op zijn eigen machine, op je echte tools, of je laptop nu open staat of niet. Een chatbot antwoordt. Tibbe werkt.",
  },
  {
    q: "Vervangt Tibbe mijn mensen?",
    a: "Tibbe neemt het terugkerende werk over: content, mail, facturen, geregel. Zo komen jij en je team toe aan het werk dat echt aandacht verdient. Jij bepaalt wat hij doet en jij keurt goed wat telt.",
  },
  {
    q: "Wat kost het?",
    a: "Tijdens de beta betaal je 250 euro excl. btw per maand, en die prijs blijft staan zolang je klant blijft. Bij de volledige launch wordt de instap 500 euro per maand. Alles zit erin: je eigen gehoste Tibbe, persoonlijke onboarding, het dashboard en elke tool die we hierna nog bouwen. Token usage en het Claude-abonnement komen er nog bij. Geen prijs per gebruiker, maandelijks opzegbaar.",
  },
  {
    q: "En als het zichzelf niet terugverdient?",
    a: "We blijven op de kennismakingscall tot je eerste winst echt is, en we bouwen met je door tot Tibbe zijn geld waard is. Levert hij in de eerste 14 dagen niet meer op dan je betaalt, dan krijg je je geld terug.",
  },
  {
    q: "Groeit het mee als mijn bedrijf verandert?",
    a: "Ja. Tibbe bouwt met je mee: nieuwe workflows, nieuwe koppelingen, nieuwe dashboards als je bedrijf van vorm verandert. Skills die elders bewezen werken, komen ook bij jou binnen. Je data, bestanden en gesprekken verhuizen nooit tussen bedrijven.",
  },
  {
    q: "Oké. Wat gebeurt er in de kennismaking?",
    a: "Dertig minuten. We brengen je achterkant in kaart, koppelen je systemen live en kiezen de eerste winst die Tibbe diezelfde dag levert. Plan hem hieronder en kom met je rommeligste proces.",
  },
];
