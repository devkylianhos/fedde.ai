"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";
import { nav, BOOKING_URL } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="flex w-full max-w-[1120px] items-center justify-between rounded-full bg-white/90 px-5 py-2.5 backdrop-blur-md transition-shadow"
        style={{
          boxShadow: scrolled
            ? "0 8px 30px rgba(8,11,18,0.10), 0 1px 0 rgba(255,255,255,0.9) inset"
            : "0 2px 14px rgba(8,11,18,0.06)",
        }}
      >
        <a href="#top" className="flex items-center gap-2">
          <BrandMark />
          <span className="font-display text-[19px] font-600 tracking-tight" style={{ fontWeight: 600 }}>
            Fedde
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-[17px] font-600 text-foreground/90 transition-colors hover:text-accent"
              style={{ fontWeight: 600 }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href={BOOKING_URL} className="btn-primary sm">
          Plan een call
        </a>
      </nav>
    </div>
  );
}
