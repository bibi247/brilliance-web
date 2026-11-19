"use client";
import Image from "next/image";
import { useState } from "react";
import { RITUALS, SALON_URL } from "@/lib/content";

export default function Rituals() {
  const [active, setActive] = useState(0);
  return (
    <section id="experiences" className="rituals" aria-labelledby="rituals-title">
      <div className="rituals__stage" aria-hidden>
        {RITUALS.map((r, i) => (
          <div key={r.id} className={`rituals__bg ${i === active ? "is-on" : ""}`}>
            <Image src={r.image} alt="" fill sizes="100vw" />
          </div>
        ))}
        <div className="rituals__veil" />
      </div>
      <div className="wrap rituals__inner">
        <div className="rituals__head">
          <p className="eyebrow eyebrow--light" data-reveal>Spa Treatment · Brilliance Salon</p>
          <h2 id="rituals-title" className="display-l" data-reveal>
            The salon <em>rituals</em>
          </h2>
          <p className="rituals__lede" data-reveal>
            Бие, сэтгэлийг тайвшруулах Японы Spa Treatment-ийн дөрвөн арчилгаа — мэргэжлийн гоо засалчийн гараар.
          </p>
        </div>
        <ol className="rituals__list">
          {RITUALS.map((r, i) => (
            <li key={r.id} className={i === active ? "is-on" : ""}>
              <button
                aria-expanded={i === active}
                aria-controls={`ritual-${r.id}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <small>0{i + 1}</small>
                <span>{r.name}</span>
              </button>
              <div id={`ritual-${r.id}`} className="rituals__desc" role="region" aria-label={r.name}>
                <div>
                  <div className="rituals__thumb"><Image src={r.image} alt={r.alt} fill sizes="90vw" /></div>
                  <p>{r.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <a className="btn btn--light" href={SALON_URL} target="_blank" rel="noopener noreferrer" data-magnetic data-reveal>
          Reserve your experience <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}
