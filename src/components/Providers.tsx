"use client";

import { MotionConfig } from "framer-motion";

/* reducedMotion="user": framer-motion respecteert de systeeminstelling
   van bezoekers die animaties uit hebben staan. */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
