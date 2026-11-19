"use client";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE, Lines } from "./motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" aria-labelledby="hero-title" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-espresso text-ivory">
      {/* Full-bleed campaign image */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.14, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.6, ease: EASE }}
      >
        <motion.div className="absolute -inset-y-[6%] inset-x-0" style={reduce ? undefined : { y: imgY }}>
          <Image
            src="/us/hero.jpg"
            alt="Woman in warm light falling through window blinds"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_40%] md:object-[70%_45%]"
          />
        </motion.div>
      </motion.div>
      {/* Light veil — keeps type legible, lets the image breathe */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,25,22,.35)_0%,rgba(29,25,22,.2)_35%,rgba(29,25,22,.92)_78%)] md:bg-[linear-gradient(90deg,rgba(29,25,22,.88)_0%,rgba(29,25,22,.55)_38%,rgba(29,25,22,0)_62%),linear-gradient(0deg,rgba(29,25,22,.55)_0%,rgba(29,25,22,0)_35%)]" />

      <motion.div style={reduce ? undefined : { y: copyY, opacity: fade }} className="wrap relative flex h-full flex-col justify-end pb-[11svh] md:pb-[12svh]">
        <motion.p
          className="eyebrow mb-7 flex items-center gap-4 text-champagne"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
        >
          <motion.span className="h-px w-12 origin-left bg-current" initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, ease: EASE, delay: 0.6 }} />
          Brilliance
        </motion.p>
        <h1 id="hero-title" className="serif-display text-[clamp(50px,8.4vw,148px)] leading-[0.92]">
          <Lines immediate delay={0.7} lines={["A world", <>of <em>beauty.</em></>, <span key="c" className="pl-[0.7em] italic">Curated for you.</span>]} />
        </h1>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.3 }}
          className="mt-9 max-w-[560px]"
        >
          <p className="font-serif text-[22px] italic leading-snug text-champagne">Where science meets the art of beauty.</p>
          <p className="mt-3 max-w-[440px] text-[14.5px] text-ivory/70">
            Discover exceptional skincare, professional treatments, and extraordinary beauty experiences from Germany, Japan, and Korea.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#experiences" className="btn btn-light" data-magnetic>Explore the experience</a>
            <a href="#world" className="eyebrow link-line">Discover our world <span className="arr" aria-hidden>→</span></a>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#story"
        aria-label="Scroll to story"
        className="absolute bottom-8 right-[clamp(20px,4.5vw,72px)] hidden flex-col items-center gap-3 text-ivory/60 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="eyebrow text-[9px] [writing-mode:vertical-rl]">Scroll</span>
        <span className="cue relative h-14 w-px overflow-hidden bg-ivory/20" />
      </motion.a>
    </section>
  );
}
