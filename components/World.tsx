"use client";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { CULTURES } from "@/lib/cultures";
import { EASE, Lines, Reveal } from "./motion";

export default function World() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const c = CULTURES[i];

  useEffect(() => {
    const sync = () => {
      const m = location.hash.match(/^#world-(\w+)/);
      const idx = m ? CULTURES.findIndex((x) => x.id === m[1]) : -1;
      if (idx >= 0) {
        setI(idx);
        document.getElementById("world")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [reduce]);

  const onKey = (e: React.KeyboardEvent) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    const n = (i + d + CULTURES.length) % CULTURES.length;
    setI(n);
    document.getElementById(`tab-${CULTURES[n].id}`)?.focus();
  };

  return (
    <section
      id="world"
      aria-labelledby="world-title"
      className="relative py-[clamp(90px,11vw,170px)] transition-colors duration-[1200ms] ease-lux"
      style={{ backgroundColor: c.theme.bg, color: c.theme.ink }}
    >
      <div className="wrap">
        <div className="mb-[clamp(48px,6vw,90px)] grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal><p className="eyebrow mb-7 opacity-60">02 — The World of Brilliance</p></Reveal>
            <h2 id="world-title" className="serif-display text-[clamp(40px,5.6vw,96px)]">
              <Lines lines={["Three beauty", <em key="c">cultures.</em>]} />
            </h2>
          </div>
          {/* Tabs */}
          <div role="tablist" aria-label="Beauty cultures" onKeyDown={onKey} className="flex gap-0 border-b border-current/15 md:col-span-5">
            {CULTURES.map((x, k) => (
              <button
                key={x.id}
                id={`tab-${x.id}`}
                role="tab"
                aria-selected={k === i}
                aria-controls={`panel-${x.id}`}
                tabIndex={k === i ? 0 : -1}
                onClick={() => setI(k)}
                className="group relative flex-1 pb-5 pt-2 text-left"
              >
                <span className="block font-serif text-[15px] italic opacity-50">{x.numeral}</span>
                <span className={`eyebrow mt-1 block text-[10px] transition-opacity duration-500 ${k === i ? "opacity-100" : "opacity-45 group-hover:opacity-80"}`}>{x.country}</span>
                <span className={`absolute inset-x-0 -bottom-px h-px origin-left bg-current transition-transform duration-700 ease-lux ${k === i ? "scale-x-100" : "scale-x-0"}`} />
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={c.id}
            id={`panel-${c.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${c.id}`}
            className="grid gap-x-6 gap-y-12 md:grid-cols-12"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.35 } }}
          >
            <div className="relative md:col-span-7">
              <motion.div
                className="relative aspect-[4/5] overflow-hidden md:aspect-[6/7]"
                style={{ backgroundColor: c.theme.soft }}
                initial={reduce ? false : { clipPath: "inset(0 0 0 100%)" }}
                animate={{ clipPath: "inset(0 0 0 0%)" }}
                transition={{ duration: 1.3, ease: EASE }}
                data-cursor="Discover"
              >
                <a href={c.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden className="group absolute inset-0">
                  <motion.span className="absolute inset-0 block" initial={reduce ? false : { scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: EASE }}>
                    <Image src={c.hero} alt={c.heroAlt} fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover transition-transform duration-[1800ms] ease-lux group-hover:scale-[1.04]" />
                  </motion.span>
                </a>
              </motion.div>
              <span className="pointer-events-none absolute -bottom-6 left-4 font-serif text-[clamp(90px,13vw,210px)] font-light italic leading-none opacity-90 mix-blend-multiply md:-left-6" style={{ color: c.theme.accent }} aria-hidden>
                {c.numeral}
              </span>
            </div>

            <div className="flex flex-col md:col-span-5 md:pl-6 lg:pl-12">
              <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.25 }}>
                <p className="eyebrow flex items-center gap-3 text-[10px]" style={{ color: c.theme.accent }}>
                  {c.country}<span className="h-px w-8 bg-current" />{c.maker}
                </p>
                <h3 className="serif-display mt-6 text-[clamp(40px,4.2vw,68px)]">{c.brand}</h3>
                <p className="mt-4 font-serif text-[clamp(21px,1.8vw,26px)] italic leading-snug" style={{ color: c.theme.accent }}>{c.titleText}.</p>
                <p className="mt-6 text-[15px] leading-[1.75] opacity-75">{c.intro}</p>
              </motion.div>

              <ul className="mt-10 border-t border-current/15">
                {c.highlights.map((h, k) => (
                  <motion.li
                    key={h.label}
                    className="grid grid-cols-[28px_1fr] gap-x-3 border-b border-current/15 py-4"
                    initial={reduce ? false : { opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.4 + k * 0.08 }}
                  >
                    <span className="pt-1 font-serif text-[13px] italic opacity-50">{String(k + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block font-serif text-[21px] leading-tight">{h.label}</span>
                      <span className="mt-1 block text-[13.5px] leading-relaxed opacity-65">{h.text}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ backgroundColor: c.theme.ink }} data-magnetic>
                  Discover the brand <span className="arr" aria-hidden>↗</span>
                </a>
                {c.id === "japan" && <a href="#experiences" className="eyebrow link-line">The rituals →</a>}
                {c.id !== "japan" && <a href="#edit" className="eyebrow link-line">See products →</a>}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
