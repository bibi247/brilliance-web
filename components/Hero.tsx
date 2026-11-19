"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GoldTerrain from "./GoldTerrain";
import Ornament from "./Ornament";
import { EASE, Lines } from "./motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const fadeIn = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.4, ease: EASE, delay },
  });

  return (
    <section ref={ref} id="top" aria-labelledby="hero-title" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-[#1d1916] text-ivory">
      {/* Sky: warm night gradient + a soft champagne "sun" engraved with fine lines */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_58%,#3a2f27_0%,#241e1a_45%,#1d1916_75%)]" />
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: sunY }}
        className="absolute left-1/2 top-[50%] aspect-square w-[min(74vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(232,214,186,.55),rgba(216,201,180,.16)_48%,rgba(216,201,180,0)_70%)] [mask-image:repeating-linear-gradient(180deg,#000_0_2px,rgba(0,0,0,.55)_2px_5px)]"
        initial={reduce ? false : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: EASE, delay: 0.6 }}
      />
      <GoldTerrain className="absolute inset-x-0 bottom-0 h-[62%] w-full" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1d1916] to-transparent" />
      {/* Classic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-3 border border-champagne/15 md:inset-6">
        <div className="absolute inset-1.5 border border-champagne/10" />
      </div>

      <motion.div style={reduce ? undefined : { y: copyY, opacity: fade }} className="wrap relative flex h-full flex-col items-center justify-center pb-[14svh] pt-24 text-center">
        <motion.div {...fadeIn(0.9)} className="text-champagne">
          <Ornament width={96} />
        </motion.div>
        <motion.p {...fadeIn(1)} className="eyebrow mt-6 text-[10px] tracking-[0.6em] text-champagne/90">
          Brilliance · Ulaanbaatar
        </motion.p>
        <h1 id="hero-title" className="serif-display mt-8 text-[clamp(46px,7.4vw,124px)] leading-[0.95]">
          <Lines immediate delay={1.1} lines={["A world of beauty.", <em key="c" className="text-champagne">Curated for you.</em>]} />
        </h1>
        <motion.p {...fadeIn(1.6)} className="mt-8 font-serif text-[clamp(19px,1.6vw,24px)] italic text-ivory/85">
          Where science meets the art of beauty.
        </motion.p>
        <motion.p {...fadeIn(1.7)} className="mt-3 max-w-[540px] text-[14px] leading-relaxed text-ivory/60">
          Exceptional skincare, professional treatments and beauty rituals from Germany, Japan and Korea.
        </motion.p>
        <motion.div {...fadeIn(1.9)} className="mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          <a href="#experiences" className="btn btn-light" data-magnetic>Explore the experience</a>
          <a href="#world" className="eyebrow link-line text-champagne">Discover our world</a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#story"
        aria-label="Scroll to story"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-champagne/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
      >
        <span className="eyebrow text-[8.5px]">Scroll</span>
        <span className="cue relative h-10 w-px overflow-hidden bg-champagne/20" />
      </motion.a>
    </section>
  );
}
