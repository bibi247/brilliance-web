"use client";
import Image from "next/image";
import { BRANDS } from "@/lib/content";
import { ProductCard, QuickView, useQuickView } from "./Products";

export default function BrandShowcase() {
  const qv = useQuickView();
  return (
    <section id="brands" className="brands" aria-labelledby="brands-title">
      <div className="wrap brands__head">
        <p className="eyebrow" data-reveal>The Houses · Брэндүүд</p>
        <h2 id="brands-title" className="display-l" data-reveal>
          Houses we <em>believe</em> in.
        </h2>
        <p className="lede" data-reveal>
          Герман, Япон, Солонгосын арьс арчилгааны брэндүүд — үйлдвэрлэгч бүрийн өөрийн түүх, технологитой.
        </p>
      </div>

      {BRANDS.map((b, i) => (
        <article key={b.id} id={`brand-${b.id}`} className={`house ${i % 2 ? "house--flip" : ""} ${b.products.length ? "" : "house--compact"}`}>
          <div className="house__media" data-reveal="mask">
            <a href={b.href} target="_blank" rel="noopener noreferrer" data-cursor="Explore" tabIndex={-1} aria-hidden>
              <Image src={b.image} alt={b.imageAlt} fill sizes="(max-width: 900px) 100vw, 55vw" />
            </a>
            <span className="house__index" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="house__text">
            <p className="house__meta" data-reveal>
              <span>{b.country}</span><i aria-hidden /> <span>{b.maker}</span>
            </p>
            <h3 className="house__name" data-reveal>{b.name}</h3>
            <p className="house__headline" data-reveal>{b.headline}</p>
            <p className="house__intro" data-reveal>{b.intro}</p>
            <a className="btn btn--line" href={b.href} target="_blank" rel="noopener noreferrer" data-reveal data-magnetic>
              {b.cta} <span aria-hidden>↗</span>
            </a>
          </div>
          {b.products.length > 0 && (
            <div className="house__products" aria-label={`${b.name} — сонгосон бүтээгдэхүүн`}>
              {b.products.map((p) => <ProductCard key={p.id} p={p} onOpen={qv.open} />)}
            </div>
          )}
        </article>
      ))}
      <QuickView p={qv.p} onClose={qv.close} />
    </section>
  );
}
