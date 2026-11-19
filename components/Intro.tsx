"use client";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./motion";

/** Cinematic entrance: an espresso curtain carrying the wordmark lifts away once. */
export default function Intro() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-blush text-rose"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 1.1, ease: EASE, delay: 0.9 }}
    >
      <motion.span
        className="font-serif text-[clamp(26px,4vw,44px)] font-light tracking-[0.5em]"
        initial={{ opacity: 0, letterSpacing: "0.9em" }}
        animate={{ opacity: [0, 1, 1, 0], letterSpacing: "0.5em" }}
        transition={{ duration: 1.5, ease: EASE, times: [0, 0.35, 0.7, 1] }}
      >
        BRILLIANCE
      </motion.span>
    </motion.div>
  );
}
