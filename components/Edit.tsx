"use client";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ALL_PRODUCTS, BRANDS, type Product } from "@/lib/content";
import { EASE, Lines, Reveal } from "./motion";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "schrammek", label: "Dr. med. Schrammek" },
  { id: "spa-treatment", label: "Spa Treatment" },
  { id: "generex", label: "GENEREX" },
];
const COUNTRY: Record<string, string> = Object.fromEntries(BRANDS.map((b) => [b.id, b.country]));

export default function Edit() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState<number | null>(null);
  const [edge, setEdge] = useState({ s: true, e: false, p: 0 });
  const track = useRef<HTMLDivElement>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  const reduce = useReducedMotion();
  const list = filter === "all" ? ALL_PRODUCTS : ALL_PRODUCTS.filter((p) => p.brandId === filter);

  const upd = useCallback(() => {
    const t = track.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    setEdge({ s: t.scrollLeft < 8, e: t.scrollLeft > max - 8, p: max > 0 ? t.scrollLeft / max : 1 });
  }, []);
  useEffect(() => { track.current?.scrollTo({ left: 0 }); requestAnimationFrame(upd); }, [filter, upd]);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const go = (dir: number) => {
    const t = track.current;
    if (!t) return;
    const w = t.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 320;
    t.scrollBy({ left: dir * (w + 28) * (window.innerWidth >= 1024 ? 2 : 1), behavior: reduce ? "auto" : "smooth" });
  };

  const p: Product | null = open !== null ? list[open] : null;
  const step = (d: number) => setOpen((o) => (o === null ? o : (o + d + list.length) % list.length));

  return (
    <section id="edit" aria-labelledby="edit-title" className="overflow-hidden bg-ivory py-[clamp(100px,12vw,180px)]">
      <div className="wrap mb-14 grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <Reveal><p className="eyebrow mb-7 text-taupe">IV · The Beauty Edit</p></Reveal>
          <h2 id="edit-title" className="serif-display text-[clamp(42px,5.6vw,96px)]">
            <Lines lines={["Selected", <em key="e">essentials.</em>]} />
          </h2>
        </div>
        <Reveal className="flex flex-col gap-6 md:col-span-6 md:items-end">
          <div role="tablist" aria-label="Filter by brand" className="no-scrollbar -mx-1 flex max-w-full gap-1 overflow-x-auto px-1">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`eyebrow min-h-11 whitespace-nowrap border px-4 text-[9.5px] transition-colors duration-500 ${filter === f.id ? "border-espresso bg-espresso text-ivory" : "border-line hover:border-espresso"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div
        ref={track}
        onScroll={upd}
        tabIndex={0}
        aria-label="Products"
        className="no-scrollbar grid snap-x snap-mandatory auto-cols-[78vw] grid-flow-col gap-5 overflow-x-auto overscroll-x-contain px-[clamp(20px,4.5vw,72px)] pb-4 [scroll-padding-inline:clamp(20px,4.5vw,72px)] xs:auto-cols-[56vw] md:auto-cols-[34vw] md:gap-7 lg:auto-cols-[25vw] 2xl:auto-cols-[340px]"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((x, k) => (
            <motion.article
              key={x.id}
              data-card
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: k * 0.05 }}
              className="group snap-start"
              data-cursor="View"
            >
              <button onClick={() => setOpen(k)} aria-haspopup="dialog" className="block w-full text-left">
                <span className="stage stage-shadow relative block aspect-[4/5] overflow-hidden">
                  <span className="absolute inset-0 m-auto block h-[64%] w-[64%] max-w-[300px] transition-transform duration-[1200ms] ease-lux group-hover:-translate-y-2.5 group-hover:scale-[1.05]">
                    <Image src={x.image} alt={x.name} fill sizes="300px" className="object-contain mix-blend-multiply" />
                  </span>
                  <span className="absolute left-5 top-5 font-serif text-[14px] italic text-taupe">{String(k + 1).padStart(2, "0")}</span>
                  <span className="eyebrow absolute right-5 top-5 text-[9px] text-taupe">{COUNTRY[x.brandId]}</span>
                  <span className="eyebrow absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-3 whitespace-nowrap bg-espresso px-5 py-3 text-[9.5px] text-ivory opacity-0 transition-all duration-700 ease-lux group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    Quick view
                  </span>
                </span>
                <span className="mt-5 block">
                  <span className="eyebrow block text-[9.5px] text-taupe">{x.brand}</span>
                  <span className="mt-1.5 block font-serif text-[23px] leading-tight">{x.name}</span>
                  <span className="mt-1 block text-[13.5px] text-muted">{x.type}</span>
                </span>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
        <a href="https://b2c.brilliance.mn/" target="_blank" rel="noopener noreferrer" data-card className="group flex aspect-[4/5] snap-start flex-col justify-between bg-espresso p-8 text-ivory">
          <span className="eyebrow text-[9.5px] text-champagne">Online store</span>
          <span className="serif-display text-[clamp(30px,2.6vw,40px)] leading-[1.1]">The full collection,<br /><em className="text-champagne">online.</em></span>
          <span className="eyebrow link-line self-start text-[10px]">b2c.brilliance.mn <span className="arr">↗</span></span>
        </a>
      </div>

      <div className="wrap mt-10 flex items-center gap-8">
        <div className="relative h-px flex-1 bg-line" aria-hidden>
          <span className="absolute inset-y-0 left-0 bg-espresso transition-[width] duration-300" style={{ width: `${Math.max(12, edge.p * 100)}%` }} />
        </div>
        <div className="hidden gap-2 md:flex">
          {[-1, 1].map((d) => (
            <button key={d} onClick={() => go(d)} disabled={d < 0 ? edge.s : edge.e} aria-label={d < 0 ? "Previous products" : "Next products"} className="grid h-12 w-12 place-items-center border border-espresso transition-colors duration-500 hover:bg-espresso hover:text-ivory disabled:pointer-events-none disabled:opacity-25">
              {d < 0 ? "←" : "→"}
            </button>
          ))}
        </div>
        <p className="hidden text-[12.5px] text-muted lg:block">Үнэ, нөөцийн мэдээллийг онлайн дэлгүүрээс харна уу.</p>
      </div>

      <dialog ref={dlg} className="qv" onClose={() => setOpen(null)} onClick={(e) => e.target === dlg.current && setOpen(null)} aria-labelledby="qv-title">
        {p && (
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square bg-white md:aspect-auto md:min-h-[540px]">
              <AnimatePresence mode="wait">
                <motion.span key={p.id} className="absolute inset-0 m-auto block h-[62%] w-[62%] max-w-[352px]" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: EASE }}>
                  <Image src={p.image} alt={p.name} fill sizes="352px" className="object-contain mix-blend-multiply" />
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="flex flex-col p-[clamp(28px,4vw,56px)]">
              <p className="eyebrow text-[9.5px] text-taupe">{p.brand} · {COUNTRY[p.brandId]}</p>
              <h3 id="qv-title" className="serif-display mt-5 text-[clamp(32px,3.2vw,48px)] leading-[1.05]">{p.name}</h3>
              <p className="mt-3 font-serif text-[21px] italic text-charcoal">{p.type}</p>
              <p className="mt-7 text-[14px] text-muted">
                Найрлага, хэрэглэх заавар, үнийн мэдээллийг албан ёсны онлайн дэлгүүрээс харна уу.
              </p>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-9 self-start" data-magnetic>
                Shop on b2c.brilliance.mn <span className="arr" aria-hidden>↗</span>
              </a>
              <div className="mt-auto flex items-center justify-between border-t border-line pt-6">
                <button onClick={() => step(-1)} className="eyebrow min-h-11 text-[10px]">← Prev</button>
                <span className="font-serif text-[14px] italic text-taupe">{(open ?? 0) + 1} / {list.length}</span>
                <button onClick={() => step(1)} className="eyebrow min-h-11 text-[10px]">Next →</button>
              </div>
            </div>
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-3 top-3 grid h-12 w-12 place-items-center">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden><path d="M1 1l16 16M17 1L1 17" stroke="currentColor" /></svg>
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}
