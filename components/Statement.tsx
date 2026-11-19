"use client";
import Image from "next/image";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Ornament from "./Ornament";
import { Lines, Reveal } from "./motion";

// Only facts stated on the site itself.
const FACTS = [
  { n: 3, label: "Beauty cultures", sub: "Germany · Japan · Korea" },
  { n: 4, label: "Houses", sub: "Schrammek · Spa Treatment · GENEREX · Hyuna" },
  { n: 4, label: "Signature rituals", sub: "Brilliance Salon" },
  { n: 3, label: "Destinations", sub: "Ulaanbaatar" },
];

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, reduce, to]);
  return <span ref={ref}>{v}</span>;
}

export default function Statement() {
  return (
    <section aria-label="Brilliance in numbers" className="relative overflow-hidden bg-[#1d1916] text-ivory">
      <div className="absolute inset-0">
        <Image src="/us/hero.jpg" alt="" fill sizes="100vw" className="object-cover object-[65%_40%] opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(29,25,22,.92)_0%,rgba(29,25,22,.6)_50%,rgba(29,25,22,.25)_100%)]" />
      </div>
      <div className="wrap relative flex min-h-[90svh] flex-col justify-center py-28">
        <Reveal className="text-champagne"><Ornament width={72} /></Reveal>
        <h2 className="serif-display mt-8 max-w-[14ch] text-[clamp(44px,6.4vw,112px)] leading-[0.98]">
          <Lines lines={["Beauty,", <em key="t" className="text-champagne">thoughtfully</em>, "curated."]} />
        </h2>
        <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-champagne/20 pt-10 md:grid-cols-4">
          {FACTS.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08}>
              <dt className="sr-only">{f.label}</dt>
              <dd>
                <span className="block font-serif text-[clamp(56px,6vw,96px)] font-light leading-none text-champagne"><Count to={f.n} /></span>
                <span className="eyebrow mt-4 block text-[10px] text-ivory">{f.label}</span>
                <span className="mt-1.5 block text-[12.5px] text-ivory/55">{f.sub}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
