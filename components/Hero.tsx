"use client";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GoldTerrain from "./GoldTerrain";
import Ornament from "./Ornament";
import { EASE, Lines } from "./motion";

const FLOATERS = [
  { src: "/img/blemish-balm-light.webp", name: "Blemish Balm", brand: "Dr. med. Schrammek", pos: "left-[-6%] bottom-[8%] md:left-[-16%]", delay: 1.5, drift: [0, -10] },
  { src: "/img/cellular-rejuvenation-enriched-cream.webp", name: "Cellular Rejuvenation Cream", brand: "GENEREX", pos: "right-[-4%] top-[10%] md:right-[-12%]", delay: 1.7, drift: [0, 12] },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  const fadeIn = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.3, ease: EASE, delay },
  });

  return (
    <section ref={ref} id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-[linear-gradient(160deg,#fdf3f1_0%,#f9e3df_55%,#f3dcd6_100%)] pt-28 md:min-h-[100svh] md:pt-0">
      <div aria-hidden className="absolute -left-[15%] top-[30%] h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(202,220,196,.75),rgba(202,220,196,0)_65%)]" />
      <div aria-hidden className="absolute -right-[10%] -top-[20%] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.9),rgba(255,255,255,0)_65%)]" />
      <GoldTerrain className="absolute inset-x-0 bottom-0 h-[45%] w-full" color={0xc4706c} fog={0xf6dcd7} opacity={0.22} />

      <div className="wrap relative grid items-center gap-y-16 pb-24 md:min-h-[100svh] md:grid-cols-12 md:gap-x-6 md:pb-0">
        <motion.div style={reduce ? undefined : { y: copyY }} className="md:col-span-6 md:pt-16">
          <motion.div {...fadeIn(0.9)} className="flex items-center gap-4 text-rose">
            <Ornament width={56} />
            <span className="eyebrow text-[10px]">Skincare · Salon · Beauty</span>
          </motion.div>
          <h1 id="hero-title" className="serif-display mt-7 text-[clamp(48px,6.6vw,112px)] leading-[0.95]">
            <Lines immediate delay={1} lines={["A world", <>of <em className="text-rose">beauty.</em></>, <em key="c" className="text-sage-deep">Curated for you.</em>]} />
          </h1>
          <motion.p {...fadeIn(1.5)} className="mt-8 font-serif text-[clamp(20px,1.7vw,25px)] italic text-charcoal">
            Where science meets the art of beauty.
          </motion.p>
          <motion.p {...fadeIn(1.6)} className="mt-3 max-w-[460px] text-[15px] leading-relaxed text-muted">
            Германы, Японы, Солонгосын арьс арчилгааны албан ёсны бүтээгдэхүүн, мэргэжлийн салон арчилгаа — нэг дор.
          </motion.p>
          <motion.div {...fadeIn(1.8)} className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-4">
            <a href="https://b2c.brilliance.mn/" target="_blank" rel="noopener noreferrer" className="btn btn-dark" data-magnetic>Shop skincare</a>
            <a href="https://salon.brilliance.mn/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Book a treatment</a>
          </motion.div>
          <motion.ul {...fadeIn(2)} className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-espresso/10 pt-6 font-serif text-[17px] text-charcoal">
            <li>Dr. med. Schrammek</li><li>Spa Treatment</li><li>GENEREX</li><li>Hyuna Beauty</li>
          </motion.ul>
        </motion.div>

        <div className="relative mx-auto w-[80%] max-w-[500px] md:col-span-5 md:col-start-8 md:w-full">
          <motion.div
            className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] bg-blush-2 shadow-[0_50px_90px_-40px_rgba(196,112,108,.55)]"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.7 }}
          >
            <motion.div className="absolute -inset-y-[8%] inset-x-0" style={reduce ? undefined : { y: imgY }}>
              <Image src="/img/lifestyle-exo-moist-essence.webp" alt="Spa Treatment EXO Moist Essence серум" fill priority sizes="(max-width: 768px) 80vw, 40vw" className="object-cover object-[50%_62%]" />
            </motion.div>
          </motion.div>
          <div aria-hidden className="pointer-events-none absolute -inset-4 rounded-t-[999px] border border-rose/30" />
          {FLOATERS.map((f) => (
            <motion.div
              key={f.name}
              className={`absolute z-10 w-[40%] max-w-[180px] ${f.pos}`}
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: EASE, delay: f.delay }}
            >
              <motion.div
                className="bg-white p-3 pb-4 shadow-[0_24px_50px_-24px_rgba(58,44,46,.35)]"
                animate={reduce ? undefined : { y: f.drift }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              >
                <span className="relative block aspect-square"><Image src={f.src} alt={f.name} fill sizes="180px" className="object-contain" /></span>
                <span className="eyebrow mt-2 block text-[8.5px] text-rose">{f.brand}</span>
                <span className="mt-0.5 block font-serif text-[15px] leading-tight">{f.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
