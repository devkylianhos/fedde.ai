import { cookies } from "next/headers";

/* Voorlopige sessielaag: e-mail in een httpOnly-cookie.
   Wordt later vervangen door magic-link-login met een echte database.
   De e-mail is ook het user_id richting Composio, zodat koppelingen
   meeverhuizen zodra echte auth er is. */

const COOKIE = "fedde_uid";

export async function currentUser(): Promise<string | null> {
  const jar = await cookies();
  return jar.get(COOKIE)?.value ?? null;
}

export async function signIn(email: string) {
  const jar = await cookies();
  jar.set(COOKIE, email.trim().toLowerCase(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
}

export async function signOut() {
  const jar = await cookies();
  jar.delete(COOKIE);
}
