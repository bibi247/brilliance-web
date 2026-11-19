"use client";
import Image from "next/image";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Ornament from "./Ornament";
import { Lines, MaskImage, Reveal } from "./motion";

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
    <section aria-label="Brilliance in numbers" className="relative overflow-hidden bg-sage py-[clamp(90px,11vw,160px)]">
      <div className="wrap grid items-center gap-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal className="text-sage-deep"><Ornament width={72} /></Reveal>
          <h2 className="serif-display mt-8 text-[clamp(44px,6vw,104px)] leading-[0.98]">
            <Lines lines={["Beauty,", <em key="t" className="text-sage-deep">thoughtfully</em>, "curated."]} />
          </h2>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-sage-deep/25 pt-10">
            {FACTS.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.08}>
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block font-serif text-[clamp(56px,5vw,84px)] font-light leading-none text-sage-deep"><Count to={f.n} /></span>
                  <span className="eyebrow mt-3 block text-[10px]">{f.label}</span>
                  <span className="mt-1 block text-[12.5px] text-muted">{f.sub}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
        <div className="relative md:col-span-5">
          <MaskImage src="/us/texture-serum.jpg" alt="Серумын бүтэц" sizes="(max-width: 768px) 90vw, 38vw" className="aspect-[4/5] rounded-t-[999px]" />
          <div className="absolute -bottom-8 -left-8 hidden w-[42%] bg-white p-3 shadow-[0_24px_50px_-24px_rgba(58,44,46,.35)] md:block">
            <span className="relative block aspect-square"><Image src="/img/exo-booster.webp" alt="EXO Booster 25/50" fill sizes="200px" className="object-contain" /></span>
            <span className="eyebrow mt-2 block text-[8.5px] text-rose">Spa Treatment</span>
            <span className="block font-serif text-[15px]">EXO Booster 25/50</span>
          </div>
        </div>
      </div>
    </section>
  );
}
