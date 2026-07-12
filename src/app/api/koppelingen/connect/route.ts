import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@/lib/session";
import { toolkits, authConfigIdFor, getComposio, composioConfigured } from "@/lib/portal";

/* Start de OAuth-flow voor één tool: Composio geeft een redirect-URL
   naar het goedkeuringsscherm van de aanbieder zelf. Na goedkeuring
   komt de gebruiker terug op /app/koppelingen. */
export async function GET(request: NextRequest) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.redirect(new URL("/app/login", request.url));
  }

  const slug = request.nextUrl.searchParams.get("toolkit");
  const toolkit = toolkits.find((t) => t.slug === slug);
  const authConfigId = toolkit ? authConfigIdFor(toolkit) : null;

  if (!toolkit || !authConfigId || !composioConfigured()) {
    return NextResponse.redirect(
      new URL("/app/koppelingen?fout=niet-beschikbaar", request.url),
    );
  }

  try {
    const connRequest = await getComposio().connectedAccounts.initiate(
      user,
      authConfigId,
      { callbackUrl: new URL("/app/koppelingen", request.url).toString() },
    );
    if (connRequest.redirectUrl) {
      return NextResponse.redirect(connRequest.redirectUrl);
    }
    return NextResponse.redirect(new URL("/app/koppelingen", request.url));
  } catch {
    return NextResponse.redirect(
      new URL("/app/koppelingen?fout=verbinding-mislukt", request.url),
    );
  }
}
