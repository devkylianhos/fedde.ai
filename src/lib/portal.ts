import { Composio } from "@composio/core";

/* Koppelingen in het klantportal, via Composio (dashboard.composio.dev).
   Per tool maak je daar een auth config aan; het ac_... id zet je in de env.
   Een tegel wordt pas actief als zijn env-var is ingevuld. */

export type ToolkitDef = {
  slug: string;
  label: string;
  description: string;
  envVar: string;
};

export const toolkits: ToolkitDef[] = [
  {
    slug: "shopify",
    label: "Shopify",
    description: "Catalogus, bestellingen en retouren van je shop.",
    envVar: "COMPOSIO_AUTH_CONFIG_SHOPIFY",
  },
  {
    slug: "woocommerce",
    label: "WooCommerce",
    description: "Zelfde als Shopify, voor shops op WordPress.",
    envVar: "COMPOSIO_AUTH_CONFIG_WOOCOMMERCE",
  },
  {
    slug: "klaviyo",
    label: "Klaviyo",
    description: "E-mailflows en klantsegmenten.",
    envVar: "COMPOSIO_AUTH_CONFIG_KLAVIYO",
  },
  {
    slug: "mollie",
    label: "Mollie",
    description: "Betalingen en openstaande facturen.",
    envVar: "COMPOSIO_AUTH_CONFIG_MOLLIE",
  },
  {
    slug: "gmail",
    label: "Gmail",
    description: "Factuurherinneringen en klantmail in jouw toon.",
    envVar: "COMPOSIO_AUTH_CONFIG_GMAIL",
  },
  {
    slug: "meta",
    label: "Meta",
    description: "Socials en advertenties op Facebook en Instagram.",
    envVar: "COMPOSIO_AUTH_CONFIG_META",
  },
];

export function authConfigIdFor(toolkit: ToolkitDef): string | null {
  return process.env[toolkit.envVar] || null;
}

export function composioConfigured(): boolean {
  return Boolean(process.env.COMPOSIO_API_KEY);
}

let client: Composio | null = null;

export function getComposio(): Composio {
  if (!process.env.COMPOSIO_API_KEY) {
    throw new Error("COMPOSIO_API_KEY ontbreekt in de omgeving");
  }
  if (!client) {
    client = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
  }
  return client;
}

/* Verbonden accounts van een gebruiker, gegroepeerd per auth config id */
export async function connectionsByAuthConfig(
  userId: string,
): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  if (!composioConfigured()) return map;
  try {
    const result = await getComposio().connectedAccounts.list({
      userIds: [userId],
    });
    for (const item of result.items ?? []) {
      const acId =
        (item as { authConfig?: { id?: string } }).authConfig?.id ?? "";
      if (acId) map.set(acId, item.status);
    }
  } catch {
    // Composio onbereikbaar: toon de tegels als niet-gekoppeld i.p.v. crashen
  }
  return map;
}
