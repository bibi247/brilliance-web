"use client";
import Image from "next/image";
import { useState } from "react";
import { JOURNEYS } from "@/lib/content";
import { Lines, Reveal } from "./motion";

export default function Journeys() {
  const [a, setA] = useState(0);
  return (
    <section id="journeys" aria-labelledby="jr-title" className="bg-white py-[clamp(100px,12vw,180px)]">
      <div className="wrap">
        <div className="mb-[clamp(50px,6vw,90px)] grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal><p className="eyebrow mb-7 text-taupe">05 — Your way in</p></Reveal>
            <h2 id="jr-title" className="serif-display text-[clamp(42px,5.6vw,96px)]">
              <Lines lines={["Four ways", <>into <em>our world.</em></>]} />
            </h2>
          </div>
          <Reveal as="p" className="text-muted md:col-span-4 md:col-start-9">
            Shop, be cared for, partner with us, or learn the craft — each journey leads to its own Brilliance destination.
          </Reveal>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky visual (desktop) */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-24 aspect-[4/5] overflow-hidden bg-ivory-2">
              {JOURNEYS.map((j, i) => (
                <Image
                  key={j.n}
                  src={j.image}
                  alt=""
                  fill
                  sizes="40vw"
                  className={`object-cover transition-[opacity,transform] duration-[1200ms] ease-lux ${i === a ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"}`}
                />
              ))}
              <span className="absolute bottom-6 left-6 font-serif text-[120px] font-light italic leading-none text-ivory mix-blend-difference" aria-hidden>{JOURNEYS[a].n}</span>
            </div>
          </div>

          <ol className="border-t border-line lg:col-span-7">
            {JOURNEYS.map((j, i) => (
              <li key={j.n} className="border-b border-line" onMouseEnter={() => setA(i)} onFocus={() => setA(i)}>
                <a href={j.href} target="_blank" rel="noopener noreferrer" className="group grid gap-6 py-9 md:grid-cols-[70px_1fr] lg:py-11">
                  <span className={`font-serif text-[22px] italic transition-colors duration-500 ${i === a ? "text-espresso" : "text-taupe"}`}>{j.n}</span>
                  <span>
                    <span className="relative mb-6 block aspect-[16/10] overflow-hidden lg:hidden">
                      <Image src={j.image} alt="" fill sizes="90vw" className="object-cover" />
                    </span>
                    <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <span className="serif-display text-[clamp(34px,3.6vw,56px)] transition-transform duration-700 ease-lux group-hover:translate-x-2">{j.title}</span>
                      <span className="eyebrow text-[9.5px] text-taupe">{j.mn}</span>
                    </span>
                    <span className="mt-4 block max-w-[52ch] text-[14.5px] text-muted">{j.text}</span>
                    <span className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-muted">
                      {j.steps.map((s, k) => (
                        <span key={s} className="flex items-center gap-3">
                          {k > 0 && <span className="h-px w-6 bg-champagne" aria-hidden />}
                          <span className={k === j.steps.length - 1 ? "text-espresso" : ""}>{s}</span>
                        </span>
                      ))}
                    </span>
                    <span className="mt-7 flex items-center justify-between gap-4">
                      <span className="eyebrow link-line text-[10px]">{j.cta} <span className="arr">↗</span></span>
                      <span className="text-[12px] text-taupe">{j.host}</span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
