import Link from "next/link";
import { Logo } from "@/components/Logo";

/* Footer in de nieuwe huisstijl, zelfde opbouw als de homepage. */
export function BlogFooter() {
  return (
    <footer className="web-footer">
      <div className="web-container">
        <div className="web-footer__top">
          <Link href="/" aria-label="Tibbe — homepage">
            <Logo inverse />
          </Link>
          <p>
            Calm intelligence.
            <br />
            Werk dat verdergaat.
          </p>
          <nav aria-label="Footernavigatie">
            <Link href="/blog">Blog</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <nav aria-label="Informatie">
            <Link href="/privacy">Privacy</Link>
            <Link href="/voorwaarden">Voorwaarden</Link>
          </nav>
        </div>
        <div className="web-footer__bottom">
          <span>© {new Date().getFullYear()} Tibbe.ai</span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
          <span>VEEL SYSTEEM. WEINIG RUIS.</span>
        </div>
      </div>
    </footer>
  );
}
