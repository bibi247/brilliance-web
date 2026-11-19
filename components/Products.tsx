"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ALL_PRODUCTS, BRANDS, type Product } from "@/lib/content";

const CATS = [{ id: "all", label: "Бүгд" }, ...BRANDS.filter((b) => b.products.length).map((b) => ({ id: b.id, label: b.name.replace("Dr. med. Christine ", "Dr. ") }))];

export function ProductCard({ p, onOpen, index }: { p: Product; onOpen: (p: Product) => void; index?: number }) {
  return (
    <article className="pcard" data-cursor="View">
      <button className="pcard__btn" onClick={() => onOpen(p)} aria-haspopup="dialog" aria-label={`${p.name} — дэлгэрэнгүй`}>
        <span className="pcard__stage">
          <Image src={p.image} alt={p.name} fill sizes="(max-width: 700px) 70vw, 300px" />
          <span className="pcard__quick" aria-hidden>Quick view</span>
        </span>
        {index !== undefined && <span className="pcard__n" aria-hidden>{String(index + 1).padStart(2, "0")}</span>}
        <span className="pcard__brand">{p.brand}</span>
        <span className="pcard__name">{p.name}</span>
        <span className="pcard__type">{p.type}</span>
      </button>
    </article>
  );
}

export function QuickView({ p, onClose }: { p: Product | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (p && !d.open) d.showModal();
    if (!p && d.open) d.close();
  }, [p]);
  return (
    <dialog
      ref={ref}
      className="qv"
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
      aria-labelledby="qv-title"
    >
      {p && (
        <div className="qv__body">
          <div className="qv__img"><Image src={p.image} alt={p.name} fill sizes="(max-width: 800px) 90vw, 420px" /></div>
          <div className="qv__text">
            <p className="eyebrow">{p.brand}</p>
            <h3 id="qv-title">{p.name}</h3>
            <p className="qv__type">{p.type}</p>
            <p className="qv__note">
              Бүтээгдэхүүний найрлага, хэрэглэх заавар болон үнийн мэдээллийг албан ёсны онлайн дэлгүүрээс харна уу.
            </p>
            <a className="btn btn--dark" href={p.href} target="_blank" rel="noopener noreferrer" data-magnetic>
              View product <span aria-hidden>↗</span>
            </a>
          </div>
          <button className="qv__close" onClick={onClose} aria-label="Хаах">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden><path d="M1 1l16 16M17 1L1 17" stroke="currentColor" /></svg>
          </button>
        </div>
      )}
    </dialog>
  );
}

export function useQuickView() {
  const [p, setP] = useState<Product | null>(null);
  return { p, open: setP, close: () => setP(null) };
}

export default function Products() {
  const [cat, setCat] = useState("all");
  const qv = useQuickView();
  const track = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ s: true, e: false });
  const list = cat === "all" ? ALL_PRODUCTS : ALL_PRODUCTS.filter((p) => p.brandId === cat);

  const upd = () => {
    const t = track.current;
    if (!t) return;
    setEdge({ s: t.scrollLeft < 8, e: t.scrollLeft + t.clientWidth > t.scrollWidth - 8 });
  };
  useEffect(() => { track.current?.scrollTo({ left: 0 }); upd(); }, [cat]);

  const go = (dir: number) => {
    const t = track.current;
    if (!t) return;
    const card = t.querySelector<HTMLElement>(".pcard");
    t.scrollBy({ left: dir * ((card?.offsetWidth || 300) + 24) * (window.innerWidth > 900 ? 2 : 1), behavior: "smooth" });
  };

  return (
    <section className="products" id="products" aria-labelledby="products-title">
      <div className="wrap products__head">
        <div data-reveal>
          <p className="eyebrow">The Edit</p>
          <h2 id="products-title" className="display-m">Selected <em>essentials</em></h2>
        </div>
        <div className="products__tools" data-reveal>
          <div className="chips" role="tablist" aria-label="Брэндээр шүүх">
            {CATS.map((c) => (
              <button key={c.id} role="tab" aria-selected={cat === c.id} className="chip" onClick={() => setCat(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="arrows">
            <button onClick={() => go(-1)} disabled={edge.s} aria-label="Өмнөх">←</button>
            <button onClick={() => go(1)} disabled={edge.e} aria-label="Дараах">→</button>
          </div>
        </div>
      </div>
      <div className="track" ref={track} onScroll={upd} tabIndex={0} aria-label="Бүтээгдэхүүний жагсаалт">
        {list.map((p, i) => <ProductCard key={p.id} p={p} index={i} onOpen={qv.open} />)}
        <a className="pcard pcard--more" href="https://b2c.brilliance.mn" target="_blank" rel="noopener noreferrer">
          <span>Бүх бүтээгдэхүүнийг<br /><em>онлайн дэлгүүрээс</em></span>
          <span className="link-line">b2c.brilliance.mn ↗</span>
        </a>
      </div>
      <QuickView p={qv.p} onClose={qv.close} />
    </section>
  );
}
