import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { CookieSettingsButton } from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Cookiebeleid — Fedde",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalShell title="Cookiebeleid" updated="12 juli 2026">
      <p>
        We houden het simpel: Fedde volgt je niet over websites heen en verkoopt
        je gegevens niet. We gebruiken alleen de cookies die nodig zijn om de site
        te laten werken, plus optioneel een cookie om te meten hoe de site
        gebruikt wordt. Die laatste zet je zelf aan of uit.
      </p>

      <h2>Welke cookies we gebruiken</h2>
      <table>
        <thead>
          <tr>
            <th>Soort</th>
            <th>Waarvoor</th>
            <th>Nodig?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Noodzakelijk</td>
            <td>Om ingelogd te blijven en je voorkeuren te onthouden</td>
            <td>Ja, altijd aan</td>
          </tr>
          <tr>
            <td>Statistiek</td>
            <td>Geanonimiseerd meten hoe de site gebruikt wordt</td>
            <td>Nee, jouw keuze</td>
          </tr>
        </tbody>
      </table>

      <h2>Je keuze aanpassen</h2>
      <p>
        Je kunt je keuze op elk moment wijzigen. Klik hieronder om je
        cookievoorkeur opnieuw in te stellen.
      </p>
      <p>
        <CookieSettingsButton />
      </p>

      <h2>Meer weten</h2>
      <p>
        Hoe we met je persoonsgegevens omgaan lees je in onze{" "}
        <a href="/privacy">privacyverklaring</a>.
      </p>
    </LegalShell>
  );
}
