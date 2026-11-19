"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PHONE_MAIN, SOCIAL } from "@/lib/content";
import { CULTURES } from "@/lib/cultures";
import { EASE } from "./motion";

const LINKS = [
  { label: "Story", href: "#story" },
  { label: "Brands", href: "#world", mega: true },
  { label: "Experiences", href: "#experiences" },
  { label: "The Edit", href: "#edit" },
  { label: "Locations", href: "#locations" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const t = useRef<number | undefined>(undefined);
  const burger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setSolid(y > 30);
      if (y > 700 && y > last + 6) setHidden(true);
      else if (y < last - 6 || y < 700) setHidden(false);
      last = y;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (open) { setOpen(false); burger.current?.focus(); }
      setMega(false);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const enter = () => { window.clearTimeout(t.current); setMega(true); };
  const leave = () => { t.current = window.setTimeout(() => setMega(false), 180); };
  const lifted = solid || mega;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,transform,box-shadow] duration-700 ease-lux
          ${lifted && !open ? "bg-ivory/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : ""}
          ${hidden && !mega && !open ? "-translate-y-full" : ""} ${open ? "text-ivory" : "text-espresso"}`}
      >
        <div className={`wrap flex items-center gap-10 transition-[height] duration-700 ease-lux ${solid ? "h-16" : "h-20 lg:h-24"}`}>
          <a href="#top" className="wordmark mr-auto flex flex-col gap-1.5" aria-label="Brilliance — home">
            <span className="font-serif text-[22px] leading-none tracking-[0.42em]">BRILLIANCE</span>
            <span className="eyebrow text-[8px] tracking-[0.46em] opacity-60">A world of beauty</span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) =>
              l.mega ? (
                <div key={l.label} className="flex items-center gap-1" onMouseEnter={enter} onMouseLeave={leave}>
                  <a href={l.href} onClick={() => setMega(false)} className="eyebrow nav-link">{l.label}</a>
                  <button aria-expanded={mega} aria-controls="mega" aria-label="Open brands menu" onClick={() => setMega((m) => !m)} onFocus={enter} className="grid h-7 w-6 place-items-center">
                    <svg width="9" height="6" viewBox="0 0 10 6" aria-hidden className={`transition-transform duration-500 ${mega ? "rotate-180" : ""}`}><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" /></svg>
                  </button>
                </div>
              ) : (
                <a key={l.label} href={l.href} className="eyebrow nav-link">{l.label}</a>
              )
            )}
          </nav>
          <a href="https://salon.brilliance.mn/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost hidden !min-h-11 !px-6 lg:inline-flex" data-magnetic>
            Book
          </a>

          <button
            ref={burger}
            className="relative z-[70] h-11 w-11 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`absolute left-2.5 right-2.5 h-px bg-current transition-all duration-500 ease-lux ${open ? "top-[22px] rotate-45" : "top-[18px]"}`} />
            <span className={`absolute left-2.5 right-2.5 h-px bg-current transition-all duration-500 ease-lux ${open ? "top-[22px] -rotate-45" : "top-[26px]"}`} />
          </button>
        </div>

        <AnimatePresence>
          {mega && (
            <motion.div
              id="mega"
              className="absolute inset-x-0 top-full hidden border-t border-line bg-ivory shadow-[0_40px_60px_-40px_rgba(41,36,31,.3)] lg:block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.5, ease: EASE }}
              onMouseEnter={enter}
              onMouseLeave={leave}
            >
              <div className="wrap grid grid-cols-[1.2fr_repeat(3,1fr)] gap-8 py-12">
                <div>
                  <p className="eyebrow mb-5 text-taupe">Three beauty cultures</p>
                  <p className="serif-display text-[34px] leading-[1.1]">Germany, Japan, Korea —<br /><em>one house.</em></p>
                </div>
                {CULTURES.map((c) => (
                  <a key={c.id} href={`#world-${c.id}`} onClick={() => setMega(false)} className="group flex flex-col gap-1.5">
                    <span className="relative mb-3 block aspect-[4/3] overflow-hidden bg-ivory-2">
                      <Image src={c.menuImage} alt="" fill sizes="280px" className="object-cover transition-transform duration-[1400ms] ease-lux group-hover:scale-105" />
                    </span>
                    <span className="eyebrow text-[9.5px] text-taupe">{c.country}</span>
                    <span className="font-serif text-[22px] leading-tight">{c.brand}</span>
                    <span className="text-[13px] leading-snug text-muted">{c.tagline}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-espresso px-[clamp(20px,4.5vw,72px)] pb-10 pt-28 text-ivory"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <nav aria-label="Mobile">
              <ol>
                {[{ label: "Home", href: "#top" }, ...LINKS, { label: "Contact", href: "#contact" }].map((l, i) => (
                  <motion.li
                    key={l.label}
                    className="border-b border-ivory/10"
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.05 }}
                  >
                    <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-5 py-3.5 font-serif text-[clamp(34px,9vw,56px)] font-light leading-tight">
                      <small className="eyebrow text-[9px] text-champagne">0{i + 1}</small>
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ol>
            </nav>
            <div className="space-y-6">
              <a href="https://salon.brilliance.mn/" target="_blank" rel="noopener noreferrer" className="btn btn-light w-full">Book an appointment</a>
              <div className="flex flex-wrap justify-between gap-4 text-[13px] tracking-wide text-ivory/75">
                <a href={PHONE_MAIN.href}>{PHONE_MAIN.label}</a>
                <span className="flex gap-6">
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
