import type { Metadata } from "next";

/* Tibbe Blog — content als losse module, zodat nieuwe blogs hier bovenop komen.
   Elke post: slug, titel, categorie, datum, leestijd, teaser en body (h2 + alinea's). */

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  minutes: number;
  /** ISO-datum voor sitemap. */
  published: string;
  /** Datum van de laatste inhoudelijke wijziging, niet een nieuwe publicatiedatum. */
  updated?: string;
  sources?: { label: string; url: string }[];
  teaser: string;
  /** Body: sequentie van h2-koppen en alinea's/lijsten. */
  body: Block[];
};

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export const posts: BlogPost[] = [
  {
    "slug": "chatgpt-vs-ai-medewerker",
    "title": "Ik gebruik al ChatGPT. Waarom zou ik nog een AI-medewerker willen ?",
    "category": "AI en toon",
    "date": "21 september 2026",
    "published": "2026-09-21",
    "minutes": 3,
    "teaser": "Een losse chat en een beheerd werkproces zijn niet hetzelfde. Vergelijk bronnen, taken, goedkeuring en beheer voordat je iets extra laat bouwen.",
    "body": [
      {
        "type": "p",
        "text": "Je gebruikt ChatGPT voor teksten en vragen. Moet je dan ook een AI-medewerker laten bouwen? Niet automatisch. Kijk eerst welke terugkerende taak je wilt overdragen en wat je bestaande inrichting al kan."
      },
      {
        "type": "p",
        "text": "Het verschil zit niet alleen in het model. Met AI-medewerker bedoelen we hier een ingericht en beheerd werkproces: met afgesproken bronnen, taken, toegangsrechten en resultaatcontrole. Dat is een keuze in inrichting, geen eigenschap die alleen één product heeft."
      },
      {
        "type": "h2",
        "text": "Het verschil in één werkdag"
      },
      {
        "type": "p",
        "text": "Fictief voorbeeld: je wilt terugkerende klantvragen voorbereiden. In een losse chat lever je zelf de informatie aan en verwerk je het antwoord. In een gekoppelde werkstroom kan een taak berichten selecteren, bronnen opzoeken en concepten voor beoordeling klaarzetten. Dat vraagt inrichting en toegangsafspraken; het is geen gegarandeerde tijdsbesparing."
      },
      {
        "type": "p",
        "text": "ChatGPT biedt ook geheugen, apps en geplande taken. Welke functies je kunt gebruiken, hangt af van je account, instellingen en beschikbare koppelingen. De vergelijking is dus niet simpelweg een chatvenster tegenover een zelfstandig systeem. Vraag welke concrete werkstappen al passen binnen je huidige tools."
      },
      {
        "type": "h2",
        "text": "Waar je bestaande inrichting moet passen"
      },
      {
        "type": "ul",
        "items": [
          "Kan het systeem de benodigde bron met de juiste rechten raadplegen?",
          "Zijn terugkerende taken en uitzonderingen duidelijk ingericht?",
          "Kun je bepalen welke acties vooraf goedkeuring vragen?",
          "Is achteraf controleerbaar wat er werkelijk is uitgevoerd en wie problemen oplost?"
        ]
      },
      {
        "type": "h2",
        "text": "Waar een AI-medewerker de sprong maakt"
      },
      {
        "type": "p",
        "text": "Een AI-medewerker vraagt meer dan toegang tot een model: je eigen gegevens, vaste taken, toegangsrechten en afspraken over goedkeuring en beheer. Een bestaande tool kan voldoende zijn. Maatwerk is pas zinvol als je een concreet gat in de werkwijze kunt aanwijzen."
      },
      {
        "type": "p",
        "text": "Leg blijvende werkafspraken vast in beheerde bronnen, bijvoorbeeld je schrijfstijl en wie offertes goedkeurt. Maak duidelijk wie die informatie bijwerkt en welke bron voorgaat bij tegenstrijdigheden. Ga niet uit van foutloos of onbeperkt geheugen."
      },
      {
        "type": "h2",
        "text": "Is een chatbot dan waardeloos ?"
      },
      {
        "type": "p",
        "text": "Nee. Voor een tekst, samenvatting of losse vraag kan je bestaande chatomgeving voldoende zijn. Ook terugkerend werk kan daarin passen als de benodigde functies en rechten beschikbaar zijn. Beoordeel per proces of je vooral een tool nodig hebt of ook inrichting, koppelingen en doorlopend beheer."
      },
      {
        "type": "h2",
        "text": "Dus, in het kort"
      },
      {
        "type": "ul",
        "items": [
          "Begin bij het werk, niet bij het label chatbot of AI-medewerker.",
          "Controleer wat je huidige tools al kunnen voordat je maatwerk koopt.",
          "Vergelijk ook broncontrole, goedkeuring, foutafhandeling en beheer."
        ]
      },
      {
        "type": "p",
        "text": "Wil je weten wat er voor jouw proces nodig is? Neem één terugkerende taak mee naar een kennismaking. Dan bekijken we welke stappen al geregeld zijn en welke inrichting nog ontbreekt."
      }
    ],
    "updated": "2026-09-30",
    "sources": [
      {
        "label": "OpenAI: geheugen in ChatGPT",
        "url": "https://help.openai.com/en/articles/8590148"
      },
      {
        "label": "OpenAI: verbonden apps in ChatGPT",
        "url": "https://help.openai.com/en/articles/11487775-connected-apps-in-chatgpt"
      },
      {
        "label": "OpenAI: geplande taken in ChatGPT",
        "url": "https://help.openai.com/en/articles/10291617"
      }
    ]
  },
  {
    "slug": "wat-kost-ai-medewerker",
    "title": "Wat kost een AI-medewerker? Reken ook controle en beheer mee .",
    "category": "Prijs en keuzes",
    "date": "21 september 2026",
    "published": "2026-09-21",
    "minutes": 4,
    "teaser": "Breng inrichting, gebruik, controle en beheer in kaart. Met een fictief rekenvoorbeeld bepaal je of één terugkerende taak een proef waard is.",
    "body": [
      {
        "type": "p",
        "text": "Een voorstel voor een AI-medewerker kan aantrekkelijk lijken zolang er alleen een maandbedrag op staat. Maar wie richt de koppelingen in? Wie controleert de uitkomst? En wie lost het op als de taak vastloopt? Vraag dat uit voordat je bedragen vergelijkt."
      },
      {
        "type": "p",
        "text": "Dit artikel geeft geen prijslijst van Tibbe en ook geen marktgemiddelde. Het is een manier om een voorstel te beoordelen op het werk dat je daadwerkelijk wilt overdragen. Begin met één proces, bijvoorbeeld het voorbereiden van antwoorden op terugkerende klantvragen."
      },
      {
        "type": "h2",
        "text": "Splits het voorstel in concrete kostenposten"
      },
      {
        "type": "p",
        "text": "Laat de aanbieder apart benoemen wat eenmalig is, wat terugkomt en wat afhangt van gebruik. Een vast maandbedrag is pas duidelijk wanneer je ook weet wat daar niet onder valt. Gebruik deze lijst tijdens het gesprek:"
      },
      {
        "type": "ul",
        "items": [
          "Inrichting: het proces beschrijven, bronnen ordenen, koppelingen instellen en testgevallen doorlopen.",
          "Gebruik: modellen, hosting en eventuele kosten van de systemen waarmee de medewerker werkt.",
          "Beheer: fouten onderzoeken, koppelingen bijwerken en controleren of de afgesproken taak nog goed loopt.",
          "Eigen tijd: voorstellen beoordelen, ontbrekende informatie aanvullen en uitzonderingen oplossen.",
          "Wijzigingen: een extra proces, nieuwe bron of andere goedkeuringsregel toevoegen."
        ]
      },
      {
        "type": "p",
        "text": "Vraag ook wat er gebeurt als het afgesproken gebruik wordt overschreden. Komt er een waarschuwing, stopt het werk of volgt er een extra rekening? Leg een grens en een verantwoordelijke vast. Laat herstel van mislukte opdrachten niet stilzwijgend als extra productie tellen."
      },
      {
        "type": "h2",
        "text": "Meet eerst het bestaande werk"
      },
      {
        "type": "p",
        "text": "Houd gedurende een representatieve werkperiode bij hoeveel tijd het gekozen proces kost. Noteer niet alleen het schrijven van een antwoord, maar ook het zoeken naar informatie en het herstellen van fouten. Splits normale gevallen en uitzonderingen. Anders vergelijk je later een rustige proef met een drukke gewone werkweek."
      },
      {
        "type": "p",
        "text": "Meet tijdens de proef opnieuw. Tel controle, correcties en beheer mee. Een concept dat snel verschijnt maar volledig herschreven moet worden, heeft nog geen tijd opgeleverd. Spreek ook af wat een bruikbaar resultaat is: bijvoorbeeld een antwoord met de juiste bron, zonder toezegging die buiten de afspraken valt."
      },
      {
        "type": "h2",
        "text": "Een fictief rekenvoorbeeld"
      },
      {
        "type": "p",
        "text": "Stel, uitsluitend als voorbeeld: een taak kost nu 20 uur per maand. In de proef blijven 5 uur controle en 2 uur herstel en beheer over. Je waardeert een vrijgekomen uur op €60. De terugkerende externe kosten zijn €300 per maand en de eenmalige inrichting kost €900. Dit zijn verzonnen invoerwaarden, geen tarieven of klantresultaten."
      },
      {
        "type": "p",
        "text": "De mogelijke tijdswinst is dan 20 min 5 min 2: 13 uur per maand. Tegen de gekozen uurwaarde is dat €780. Na €300 terugkerende kosten blijft €480 aan berekende ruimte over. De inrichting is in dit scenario na ongeveer twee maanden terugverdiend, als de aannames standhouden."
      },
      {
        "type": "p",
        "text": "Vrije tijd is niet automatisch extra omzet of geld op je rekening. De uitkomst wordt pas financieel voordeel als je bijvoorbeeld aantoonbaar kosten vermijdt of betaald werk kunt uitvoeren. Gebruik je de ruimte voor rust of betere bereikbaarheid, benoem dat dan als het doel. Maak het niet mooier met een fictieve omzetbelofte."
      },
      {
        "type": "h2",
        "text": "Spreek af wanneer je doorgaat of stopt"
      },
      {
        "type": "p",
        "text": "Beoordeel naast tijd ook kwaliteit. Hoe vaak ontbreekt een bron? Welke antwoorden moet je inhoudelijk aanpassen? Kun je zien waarom iets is voorgesteld? Een besparing die alleen ontstaat doordat niemand meer controleert, is geen bruikbare uitkomst."
      },
      {
        "type": "p",
        "text": "Leg vóór de proef vast welke resultaten voldoende zijn, wanneer je samen evalueert en wie bij een fout ingrijpt. Vraag bij beëindiging wat er met je toegang, documenten en werkhistorie gebeurt. Zo vergelijk je niet alleen de startprijs, maar ook het beheer en een mogelijke overstap."
      },
      {
        "type": "p",
        "text": "Wil je een AI-medewerker laten bouwen? Neem naar een kennismaking één concrete taak, je huidige werkwijze en een paar geanonimiseerde voorbeelden mee. Dan kan Tibbe de inrichting en het beheer afbakenen voordat er een voorstel ligt."
      }
    ],
    "updated": "2026-09-30"
  },
  {
    "slug": "mail-automatiseren-mkb",
    "title": "Mail automatiseren in het mkb: begin met sorteren en concepten .",
    "category": "Mail en administratie",
    "date": "21 september 2026",
    "published": "2026-09-21",
    "minutes": 4,
    "teaser": "Een werkbare inbox begint met duidelijke regels. Zo richt je sortering, conceptantwoorden, uitzonderingen en goedkeuring in zonder direct automatisch te versturen.",
    "body": [
      {
        "type": "p",
        "text": "Een klant vraagt waar zijn bestelling blijft. Een leverancier stuurt een gewijzigde planning. Er komt een nieuwsbrief binnen. Die berichten horen niet in dezelfde werkstroom, ook al staan ze naast elkaar in je inbox. Begin mailautomatisering daarom met het herkennen en voorbereiden van werk, niet met alles automatisch beantwoorden."
      },
      {
        "type": "p",
        "text": "Hieronder staat een voorgestelde inrichting voor een mkb-mailbox. Het is geen beschrijving van een klantresultaat. Kies alleen de stappen die bij jouw bedrijf passen en laat versturen, verwijderen en toezeggingen aanvankelijk buiten de automatische taak."
      },
      {
        "type": "h2",
        "text": "Kies één soort bericht"
      },
      {
        "type": "p",
        "text": "Neem een terugkerende vraag waarvoor een duidelijke informatiebron bestaat. Denk aan een statusvraag waarvan het antwoord uit een ordersysteem komt. Een klacht met een compensatieverzoek is een ander proces: die vraagt een besluit, niet alleen een status."
      },
      {
        "type": "p",
        "text": "Schrijf de grens letterlijk op. Bijvoorbeeld: de medewerker mag nieuwe statusvragen labelen en een concept maken op basis van de gevonden order. Ontbreekt een betrouwbare match, dan komt het bericht op een uitzonderingenlijst. De oorspronkelijke mail blijft staan."
      },
      {
        "type": "h2",
        "text": "Leg bron, resultaat en eigenaar vast"
      },
      {
        "type": "p",
        "text": "Een bruikbaar concept vertelt niet alleen wat je kunt antwoorden. Het laat ook zien waarop dat antwoord is gebaseerd. Maak vooraf duidelijk welke bron leidend is als een oude mail iets anders zegt dan het actuele ordersysteem. Laat het systeem bij twijfel niet zelf een passend verhaal kiezen."
      },
      {
        "type": "ul",
        "items": [
          "Bron: de bijbehorende mailwisseling en de toegestane gegevens uit het ordersysteem.",
          "Resultaat: een conceptantwoord, met een verwijzing naar de gebruikte bron.",
          "Eigenaar: degene die de uitzonderingen beoordeelt en het antwoord mag versturen.",
          "Stopregel: geen gevonden order, tegenstrijdige gegevens of een vraag buiten de afgesproken categorie.",
          "Toegangsgrens: alleen de mailboxen en gegevens die voor deze taak nodig zijn."
        ]
      },
      {
        "type": "p",
        "text": "Verwijder onnodige persoonsgegevens uit oefenmateriaal. Bepaal ook wie de concepten en het controlelog mag bekijken en hoelang je die bewaart. Dit is een operationele checklist, geen oordeel dat een inrichting daarmee aan alle privacyverplichtingen voldoet."
      },
      {
        "type": "h2",
        "text": "Zo ziet een voorstel eruit"
      },
      {
        "type": "p",
        "text": "Fictief voorbeeld: een klant vraagt om de bezorgdatum. In de toegestane bron staat alleen dat de bestelling is verwerkt. Het concept hoort dan geen bezorgdag te verzinnen. Een passende voorbereiding is: de status tonen, aangeven dat een bezorgdatum ontbreekt en het bericht voor beoordeling klaarzetten."
      },
      {
        "type": "p",
        "text": "Het werkoverzicht kan erbij vermelden: bron gecontroleerd, datum ontbreekt, besluit nodig van de verantwoordelijke collega. Die collega kan vervolgens informatie opvragen of zelf antwoorden. Het systeem heeft zoekwerk voorbereid zonder een belofte namens het bedrijf te doen."
      },
      {
        "type": "h2",
        "text": "Goedkeuren is iets anders dan één keer ja zeggen"
      },
      {
        "type": "p",
        "text": "Goedkeuring voor een specifiek antwoord is geen toestemming om voortaan alle vergelijkbare berichten te versturen. Als je later automatisch verzenden wilt toestaan, maak daar een afzonderlijke afspraak van. Benoem het soort bericht, de toegestane inhoud, de gebruikte bron en de gevallen waarin het systeem moet stoppen."
      },
      {
        "type": "p",
        "text": "Laat een bericht na inhoudelijke wijziging opnieuw beoordelen. Controleer vóór verzending of een collega inmiddels heeft geantwoord. Leg ook vast hoe dubbele verwerking wordt voorkomen als een taak opnieuw start. Een tweede run mag niet ongemerkt een tweede antwoord naar dezelfde klant sturen."
      },
      {
        "type": "h2",
        "text": "Test op lastige mail, niet alleen op nette voorbeelden"
      },
      {
        "type": "p",
        "text": "Gebruik naast normale vragen ook doorgestuurde mail, een ontbrekende bijlage, een onduidelijk ordernummer en een bericht met meerdere verzoeken. Neem een mail op die het systeem vraagt zijn regels te negeren. Behandel zulke tekst als inhoud van de afzender, nooit als toestemming om toegang of werkwijze te veranderen."
      },
      {
        "type": "p",
        "text": "Controleer bij een storing of open werk zichtbaar blijft en bij iemand terechtkomt. Meet hoeveel concepten bruikbaar zijn, hoeveel correctietijd overblijft en welke belangrijke berichten verkeerd zijn ingedeeld. Breid pas uit als je begrijpt waar het misgaat."
      },
      {
        "type": "p",
        "text": "Wil je beginnen met mailautomatisering of AI-klantenservice? Kies één vraagtype dat vaak terugkomt en neem geanonimiseerde voorbeelden mee naar Tibbe. Dan spreken we af wat het systeem voorbereidt en wat bij jou blijft."
      }
    ],
    "updated": "2026-09-30"
  },
  {
    "slug": "automatisering-zzp",
    "title": "Automatiseren als zzp'er: begin met één terugkerende taak .",
    "category": "Automatisering",
    "date": "21 september 2026",
    "published": "2026-09-21",
    "minutes": 4,
    "teaser": "Kies een afgebakende taak, beschrijf wanneer het resultaat goed is en test eerst zonder externe acties. Een praktisch startplan voor zzp'ers.",
    "body": [
      {
        "type": "p",
        "text": "Na een kennismaking zoek je aantekeningen terug, schrijf je een opvolgmail en zet je een herinnering in je agenda. Dat is een concreet beginpunt voor automatisering. Niet je hele verkoopproces, maar de voorbereiding van de volgende stap na één gesprek."
      },
      {
        "type": "p",
        "text": "Als zzp'er ben je vaak ook degene die het systeem moet controleren. Kies daarom geen taak alleen omdat die veel tijd kost. Kies werk waarvan je de uitkomst kunt beoordelen en waarvan je weet wat er moet gebeuren als informatie ontbreekt. Hieronder staat een aanpak die je voor je eigen proces kunt invullen."
      },
      {
        "type": "h2",
        "text": "Zoek een taak met een duidelijk begin en einde"
      },
      {
        "type": "p",
        "text": "Noteer welke handelingen terugkomen en wat ze opleveren. Geef per taak aan welke informatie nodig is, waar die staat en hoeveel maatwerk erbij komt kijken. Zet een proces met onduidelijke afspraken niet meteen om in een automatische keten. Maak de werkwijze eerst begrijpelijk."
      },
      {
        "type": "p",
        "text": "Een bruikbare eerste taak heeft een herkenbaar startsignaal, een beperkt aantal bronnen en een resultaat dat je snel kunt controleren. Bijvoorbeeld: na een afgerond gesprek staat er een conceptopvolging klaar. Niet: de AI regelt voortaan alle nieuwe klanten."
      },
      {
        "type": "h2",
        "text": "Niet elk probleem heeft AI nodig"
      },
      {
        "type": "p",
        "text": "Vraag eerst of een vaste regel of een sjabloon voldoende is. Als iedere aanvraag hetzelfde formulier gebruikt en altijd naar dezelfde map moet, kun je de gewenste stap als regel beschrijven. Voeg AI pas toe wanneer er bijvoorbeeld vrije tekst geïnterpreteerd of een concept geschreven moet worden."
      },
      {
        "type": "p",
        "text": "Dat is een ontwerpkeuze, geen wedstrijd tussen tools. Combineer waar nodig vaste stappen met een AI-voorstel. Laat een model niet opnieuw een beslissing nemen die al eenduidig in je proces vastligt. Zo blijft ook duidelijker waar je bij een fout moet zoeken."
      },
      {
        "type": "h2",
        "text": "Schrijf een taakafspraak die op één scherm past"
      },
      {
        "type": "p",
        "text": "Onderstaande afspraak is een fictief voorbeeld voor de opvolging van een kennismaking. Het is geen belofte dat Tibbe dit zonder verdere inrichting in iedere agenda of mailbox kan uitvoeren."
      },
      {
        "type": "ul",
        "items": [
          "Start: jij markeert de gespreksnotitie als afgerond en geschikt voor opvolging.",
          "Invoer: de notitie en je goedgekeurde beschrijving van de dienst.",
          "Uitvoer: een conceptmail met de besproken vraag en de voorgestelde vervolgstap.",
          "Grenzen: geen prijs, planning of toezegging toevoegen die niet in de bron staat.",
          "Goedkeuring: jij leest het concept en verstuurt het zelf.",
          "Uitzondering: bij ontbrekende afspraken komt er een vraag aan jou, geen ingevuld antwoord."
        ]
      },
      {
        "type": "p",
        "text": "Leg ernaast vast wie het proces bijhoudt en hoe je het stilzet. Ook als je alles zelf doet, helpt het om die verantwoordelijkheid expliciet te maken. Een workflow waar je niet meer bij kunt, is geen werk dat je goed hebt overgedragen."
      },
      {
        "type": "h2",
        "text": "Doe een proef zonder direct buiten je bedrijf te handelen"
      },
      {
        "type": "p",
        "text": "Gebruik eerdere, geanonimiseerde gevallen om de voorbereiding te testen. Neem ook een onvolledige notitie mee en een gesprek waarbij de klant juist geen opvolging wilde. Het systeem hoort dat laatste niet te veranderen in een enthousiast verkoopbericht."
      },
      {
        "type": "p",
        "text": "Bekijk de voorstellen naast wat je zelf zou doen. Klopt de inhoud? Ontbreekt er iets? Hoeveel moet je aanpassen? In deze proef is dubbel controleren juist nuttig. Het doel is niet direct tijdwinst claimen, maar ontdekken of je taakafspraak duidelijk genoeg is."
      },
      {
        "type": "h2",
        "text": "Meet wat er overblijft"
      },
      {
        "type": "p",
        "text": "Noteer bij een echte proef de tijd voor voorbereiding, controle en herstel. Houd bij welke uitzonderingen steeds terugkomen. Als je iedere uitkomst opnieuw moet opbouwen, verklein dan de taak of verbeter de bron. Koop niet automatisch meer functionaliteit om een onduidelijk proces te repareren."
      },
      {
        "type": "p",
        "text": "Kies vooraf een evaluatiemoment en een eenvoudige beslissing: doorgaan, aanpassen of stoppen. Breid pas uit als de eerste taak bruikbaar werk oplevert en je de fouten kunt opvangen. De volgende stap kan een interne herinnering zijn. Een offerte zelfstandig versturen is een afzonderlijk besluit."
      },
      {
        "type": "p",
        "text": "Wil je als zzp'er met automatisering beginnen? Stuur Tibbe de taak die je telkens opnieuw doet, waar de invoer staat en hoe een goed resultaat eruitziet. Daarmee kunnen we een eerste proef afbakenen zonder je hele bedrijf om te bouwen."
      }
    ],
    "updated": "2026-09-30"
  },
  {
    "slug": "ai-in-huisstijl",
    "title": "AI laten schrijven in je huisstijl: van voorbeelden naar werkafspraken .",
    "category": "AI en toon",
    "date": "21 september 2026",
    "published": "2026-09-21",
    "minutes": 4,
    "teaser": "Maak je schrijfstijl concreet met voorbeeldteksten, duidelijke taalregels en een aparte feitencheck. Inclusief een fictief voor-en-na-voorbeeld.",
    "body": [
      {
        "type": "p",
        "text": "Je vraagt om een vriendelijke opvolgmail en krijgt: ‘Wij zijn verheugd u mee te nemen in de volgende fase van uw reis.’ Terwijl jij normaal schrijft: ‘Ik heb je vraag bekeken. Dit is de volgende stap.’ Het probleem is dan niet alleen de lengte. De tekst klinkt als een ander bedrijf."
      },
      {
        "type": "p",
        "text": "‘Schrijf in onze huisstijl’ is als opdracht te ruim. Voor tekst gaat het om woordkeuze, aanspreekvorm, ritme en wat je wel of niet belooft. Maak die keuzes zichtbaar, zodat je een AI-concept aan dezelfde afspraken kunt toetsen als een tekst van een collega."
      },
      {
        "type": "h2",
        "text": "Begin met teksten die je echt zou versturen"
      },
      {
        "type": "p",
        "text": "Verzamel goedgekeurde voorbeelden uit je eigen communicatie: een korte reactie, een uitleg over je dienst en een bericht waarin je nee zegt. Kies niet alleen je mooiste homepagezin. Ook bij een vertraging of onduidelijke vraag moet de stem van je bedrijf herkenbaar blijven."
      },
      {
        "type": "p",
        "text": "Haal privégegevens en informatie over klanten uit de voorbeelden. Noteer per tekst wat bruikbaar is. ‘De eerste zin geeft direct antwoord’ helpt meer dan ‘deze voelt goed’. Markeer ook wat niet als regel moet worden overgenomen, zoals een tijdelijke actie of een persoonlijke afspraak."
      },
      {
        "type": "h2",
        "text": "Vertaal smaak naar concrete regels"
      },
      {
        "type": "p",
        "text": "Een stijlgids hoeft geen boek te zijn. Begin met afspraken die je in een tekst kunt aanwijzen. Onderstaande lijst is een voorbeeld van mogelijke keuzes, niet een universele huisstijl voor ieder bedrijf."
      },
      {
        "type": "ul",
        "items": [
          "Spreek de lezer aan met je en jij, tenzij het kanaal om een andere vorm vraagt.",
          "Geef eerst antwoord en daarna de toelichting.",
          "Gebruik de woorden die klanten zelf gebruiken voor het werk.",
          "Vermijd superlatieven die je niet kunt onderbouwen.",
          "Sluit af met een concrete vervolgstap als die nodig is.",
          "Geef ontbrekende informatie aan in plaats van een overtuigend klinkend antwoord te bedenken."
        ]
      },
      {
        "type": "p",
        "text": "Voeg voorbeelden toe van woorden die je niet wilt gebruiken en laat zien wat er wel past. Alleen een verbodenwoordenlijst is onvoldoende: de schrijver moet ook weten hoe een goed alternatief klinkt. Leg vast wie de stijlgids mag aanpassen."
      },
      {
        "type": "h2",
        "text": "Houd stijl en feiten uit elkaar"
      },
      {
        "type": "p",
        "text": "Een voorbeeldmail kan een oude prijs of een niet meer beschikbare dienst noemen. Gebruik die tekst dan alleen als stijlvoorbeeld. Geef actuele productinformatie apart mee als inhoudelijke bron en laat tegenstrijdigheden eerst oplossen. Een overtuigende toon maakt een onjuist bedrag niet beter."
      },
      {
        "type": "p",
        "text": "Maak in je opdracht onderscheid tussen de stijlgids, de feitelijke bronnen en de vraag van de lezer. Beschrijf ook wat de schrijver moet doen als een antwoord niet uit die bronnen volgt: een vraag stellen of een concept met een duidelijk open punt opleveren."
      },
      {
        "type": "h2",
        "text": "Een fictief voor-en-na-voorbeeld"
      },
      {
        "type": "p",
        "text": "Situatie: je wilt laten weten dat je een aanvraag hebt ontvangen en extra informatie nodig hebt. De inhoudelijke afspraak is alleen ontvangst bevestigen en vragen om het aantal producten. Er is nog geen levertijd toegezegd."
      },
      {
        "type": "p",
        "text": "Te algemeen: ‘Bedankt voor uw gewaardeerde aanvraag. Ons toegewijde team gaat direct aan de slag om de perfecte oplossing voor u te realiseren.’"
      },
      {
        "type": "p",
        "text": "Concreter: ‘Bedankt voor je aanvraag. Om een voorstel te maken, heb ik nog het aantal producten nodig. Kun je dat doorgeven?’"
      },
      {
        "type": "p",
        "text": "De tweede tekst past bij een directe stijl en blijft binnen de afgesproken inhoud. Dat maakt hem niet automatisch geschikt voor elk merk. Een formele dienstverlener kan voor u kiezen. Het belangrijkste is dat de keuze bewust is en de tekst geen extra belofte bevat."
      },
      {
        "type": "h2",
        "text": "Test ook de teksten die moeilijk zijn"
      },
      {
        "type": "p",
        "text": "Laat concepten maken voor een normale vraag, een klacht, ontbrekende informatie en een verzoek dat je moet afwijzen. Beoordeel toon en feiten apart. Vraag bij een correctie niet alleen om ‘menselijker’, maar benoem het probleem: te afstandelijk, antwoord te laat, onduidelijke vervolgstap of een toezegging zonder bron."
      },
      {
        "type": "p",
        "text": "Bewaar de goedgekeurde verbetering als nieuw voorbeeld en werk de relevante regel bij. Laat niet iedere losse voorkeur automatisch de hele stijlgids veranderen. Voor publicatie of verzending blijft een afgesproken inhoudelijke controle nodig."
      },
      {
        "type": "p",
        "text": "Wil je AI inzetten voor campagnes, content of klantreacties? Neem een paar goedgekeurde teksten en een voorbeeld dat juist niet bij je past mee naar Tibbe. Dan kunnen we de schrijfafspraken concreet maken en op echte taken testen."
      }
    ],
    "updated": "2026-09-30"
  },
  {
    "slug": "controle-bij-ai",
    "title": "Controle bij AI: bepaal vooraf wat je medewerker zelf mag doen .",
    "category": "Automatisering",
    "date": "21 september 2026",
    "published": "2026-09-21",
    "minutes": 4,
    "teaser": "Leg beslisruimte, goedkeuring en bewijs vast voordat een AI-medewerker handelt. Met een fictief voorbeeld en een checklist voor uitzonderingen.",
    "body": [
      {
        "type": "p",
        "text": "Een AI-medewerker kan een antwoord voorbereiden, maar mag hij het ook versturen? En geldt jouw akkoord nog als de inhoud daarna verandert? Zulke afspraken horen niet verstopt te zitten in de techniek. Ze bepalen welk werk je overdraagt en waar jij verantwoordelijk blijft voor het besluit."
      },
      {
        "type": "p",
        "text": "Bij Tibbe is het uitgangspunt: context voor de actie, goedkeuring waar afgesproken en bewijs van het resultaat. Hieronder staat hoe je dat voor één proces concreet kunt maken. Het is een ontwerpaanpak, geen garantie dat een systeem nooit een fout maakt."
      },
      {
        "type": "h2",
        "text": "Verdeel het werk naar gevolgen"
      },
      {
        "type": "p",
        "text": "Maak onderscheid tussen informatie bekijken, een voorstel voorbereiden en iets veranderen. Een concept schrijven heeft andere gevolgen dan dat concept naar een klant sturen. Een samenvatting van facturen is iets anders dan een betaling uitvoeren."
      },
      {
        "type": "p",
        "text": "Geef per proces aan welke stap automatisch mag. Kies niet alleen een algemene instelling als ‘zelfstandig werken’. Noteer welke bron gebruikt mag worden, welk resultaat de taak moet opleveren en wanneer het systeem moet stoppen. Houd de technische toegangsrechten zo beperkt als de taak toelaat."
      },
      {
        "type": "ul",
        "items": [
          "Lezen: welke mailbox, map of gegevensbron mag worden geraadpleegd?",
          "Voorbereiden: welk concept of voorstel mag worden aangemaakt?",
          "Wijzigen: welke interne gegevens mogen worden aangepast en onder welke voorwaarden?",
          "Extern handelen: wie keurt een bericht, publicatie of andere actie buiten het werkoverzicht goed?",
          "Stoppen: welke ontbrekende informatie, afwijking of fout vraagt om een mens?"
        ]
      },
      {
        "type": "h2",
        "text": "Goedkeuring moet over een specifieke actie gaan"
      },
      {
        "type": "p",
        "text": "Een bruikbaar voorstel laat zien wat er gaat gebeuren, voor wie en op basis van welke informatie. Toon bij een bericht de ontvanger en de volledige tekst. Toon bij een wijziging de bestaande en voorgestelde waarde. Laat de beoordelaar niet akkoord geven op alleen ‘probleem oplossen’."
      },
      {
        "type": "p",
        "text": "Koppel het akkoord aan die versie van het voorstel. Verandert daarna de ontvanger, inhoud of relevante bron, dan hoort de actie opnieuw beoordeeld te worden. Een eerdere goedkeuring is ook geen toestemming om een nieuwe categorie werk voortaan automatisch af te handelen."
      },
      {
        "type": "h2",
        "text": "Een fictief voorbeeld: antwoord op een klacht"
      },
      {
        "type": "p",
        "text": "Stel dat een klant klaagt over een beschadigd product. De medewerker vindt de order en maakt een concept waarin aanvullende informatie wordt gevraagd. Een terugbetaling aanbieden valt buiten de taak. Dat moet zichtbaar zijn in het voorstel, ook als de klant er nadrukkelijk om vraagt."
      },
      {
        "type": "p",
        "text": "De beoordelaar ziet de oorspronkelijke vraag, de gevonden order en het conceptantwoord. Na akkoord controleert de uitvoerende stap of er inmiddels al een reactie is verstuurd. Bij een nieuwe reactie stopt de oude actie voor herbeoordeling. Zo voorkom je dat een goedgekeurd maar verouderd voorstel alsnog de deur uitgaat."
      },
      {
        "type": "h2",
        "text": "Een geslaagde opdracht is nog geen bewezen resultaat"
      },
      {
        "type": "p",
        "text": "Maak in het werkoverzicht onderscheid tussen voorgesteld, goedgekeurd, uitgevoerd en geverifieerd. Als een systeem meldt dat een wijziging is verwerkt, lees dan waar mogelijk het gewijzigde record terug. Bij een verzonden mail kun je bijvoorbeeld controleren of het bedoelde bericht bij de verzonden items staat. Dat bewijst nog niet dat de ontvanger het heeft gelezen."
      },
      {
        "type": "p",
        "text": "Bewaar in het controlelog de bronverwijzing, het besluit, de uitvoerstatus en de resultaatcontrole. Beperk de inhoud tot wat nodig is om het werk te begrijpen. Kopieer niet standaard complete klantdossiers naar een extra log. Spreek toegang en bewaartermijnen apart af."
      },
      {
        "type": "h2",
        "text": "Ontwerp de foutafhandeling vóór de eerste echte actie"
      },
      {
        "type": "p",
        "text": "Wat gebeurt er als de koppeling wegvalt nadat een verzendopdracht is gegeven? Laat een onzekere status niet automatisch tot opnieuw versturen leiden. Controleer eerst of de oorspronkelijke actie al is uitgevoerd. Als dat niet vastgesteld kan worden, leg de taak bij de verantwoordelijke persoon neer."
      },
      {
        "type": "p",
        "text": "Test ook wat er gebeurt bij een ontbrekende bron, ingetrokken toegang, een afgewezen voorstel en een bericht dat de medewerker probeert andere instructies te geven. Externe tekst is invoer, geen bevoegdheid om de regels te wijzigen. Zorg dat je het proces kunt pauzeren zonder het openstaande werk kwijt te raken."
      },
      {
        "type": "p",
        "text": "Wil je weten welke beslisruimte bij jouw proces past? Neem één taak mee naar Tibbe. We kunnen dan de automatische stappen, menselijke besluiten en resultaatcontroles naast elkaar zetten. Mission Control is bedoeld om dat werk en die beslissingen overzichtelijk te maken, niet om jouw verantwoordelijkheid te verbergen."
      }
    ],
    "updated": "2026-09-30"
  }
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export const siteUrl = "https://tibbe.app";
export const blogUrl = `${siteUrl}/blog`;
export function postUrl(p: BlogPost): string {
  return `${blogUrl}/${p.slug}`;
}
export function blogMetadata(): Metadata {
  return {
    title: "Blog — Tibbe",
    description:
      "Praktische kennis over AI-medewerkers, automatisering en het MKB. Hoe Tibbe werkt, wat het oplevert en hoe jij het inzet. Geschreven door de agent zelf.",
    alternates: { canonical: blogUrl },
    openGraph: {
      title: "Blog — Tibbe",
      description:
        "Praktische kennis over AI-medewerkers en automatisering voor het MKB.",
      type: "website",
      url: blogUrl,
    },
  };
}
