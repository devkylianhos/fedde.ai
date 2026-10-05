# Blogconcepten: review en acceptatie

## Scope

- De vijf korte artikelen zijn uitgewerkt tot zelfstandige concepten: kosten, mailautomatisering, automatisering voor zzp'ers, schrijfstijl en controle.
- Bestaande slugs en oorspronkelijke publicatiedatum blijven behouden. De inhoudelijke wijzigingsdatum staat afzonderlijk in de pagina, Open Graph, JSON-LD en sitemap.
- Het bestaande langere ChatGPT-artikel is niet als zesde nieuw artikel herschreven. Onjuiste absolute claims over ontbrekend geheugen, koppelingen en taken zijn gecorrigeerd, met verwijzingen naar de officiële OpenAI-documentatie.
- De blogroutes en blogstijl bestonden al lokaal, maar ontbraken in de basisbranch. Daarom bevat deze wijziging ook die bestaande integratie, met noodzakelijke correcties.
- Geen aanpassingen aan tarieven, klantdata, homepage-inhoud, dependencies of lockfile.

## Redactionele review

- Alle vijf concepten bevatten een concrete werkwijze, grenzen, herkenbare voorbeelden en een passende kennismakings-CTA.
- Voorbeelden en rekenbedragen zijn expliciet fictief. Geen verzonnen klantresultaten, omzetgaranties of besparingspercentages.
- De kostenberekening telt controle en beheer mee en onderscheidt tijdswinst van geld of omzet.
- Goedkeuring van één actie wordt nergens als structurele toestemming behandeld.
- Mailteksten en externe documenten mogen de uitvoeringsregels niet wijzigen.
- De index claimt niet langer dat deze nieuwe concepten al door een mens zijn gecontroleerd.
- Leestijd is een schatting op basis van 200 woorden per minuut, geen handmatig ingestelde verkoopclaim.

## Technische review

- Footer uit de route-export gehaald, zodat de pagina alleen geldige Next.js-exports bevat.
- Gedeelde navigatie heeft een optionele ankerprefix. Op de homepage verandert het gedrag niet; bloglinks verwijzen naar de secties op de homepage.
- De blog gebruikt de bestaande websitecomponenten en tokens. De blogtypografie is lokaal afgebakend; de homepage is niet opnieuw ontworpen.
- Kaarten passen op smalle schermen; lijsten hebben zichtbare opsommingstekens; verminderde beweging wordt gerespecteerd.
- JSON-LD ontsnapt `<` voordat het in een script wordt gezet.

## Reproduceren

```sh
npm ci --ignore-scripts
npm test
npm run lint
npm run build
npm start -- --hostname 127.0.0.1 --port 3197
# In een tweede terminal:
node tests/blog-http.mjs
```

De HTTP-test controleert alle zes bestaande routes, de volledige artikelinhoud, koppen, canonicals, JSON-LD, wijzigingsdatums, sitemap, CTA, homepage, index en een onbekende slug (404). Voor een andere lokale poort: zet `BLOG_TEST_BASE`.

## Reviewbeperking en bestaande aandachtspunten

Claude Code was niet beschikbaar doordat subscription-toegang was uitgeschakeld. De Codex-probe eindigde met HTTP 401. Er zijn geen credentials aangepast. De inhoud en code zijn daarom in een afzonderlijke kritische zelfreview beoordeeld, niet door een onafhankelijke externe reviewer. Menselijke inhoudelijke goedkeuring blijft nodig vóór publicatie.

`npm audit` meldt in de ongewijzigde dependencybasis een high-issue voor `brace-expansion` en een critical-issue voor `next` (`GHSA-vcvr-r3jv-pc5j`, next/og ImageResponse). Deze contentwijziging voegt geen dependencies of ImageResponse-route toe. De meldingen zijn niet opgelost of als onschadelijk afgedaan: dependency-triage hoort vóór productie bij de eigenaar.

## Publicatiegrens

Deze wijziging wordt als draft PR aangeboden. Geen merge naar main, geen directe Vercel-deploy en geen claim dat de nieuwe teksten live staan. Publicatie en het afhandelen van de genoemde review- en dependencyvragen zijn aparte besluiten.
