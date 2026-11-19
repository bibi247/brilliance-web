"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BRANDS, PHONE_MAIN, SOCIAL } from "@/lib/content";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "Our Story", href: "#story" },
  { label: "Brands", href: "#brands", mega: true },
  { label: "Experiences", href: "#experiences" },
  { label: "Locations", href: "#locations" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const closeT = useRef<number | undefined>(undefined);
  const burger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 600 && y > last + 4);
      if (y < last - 4) setHidden(false);
      last = y;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (open) { setOpen(false); burger.current?.focus(); }
      setMega(false);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const enter = () => { window.clearTimeout(closeT.current); setMega(true); };
  const leave = () => { closeT.current = window.setTimeout(() => setMega(false), 160); };

  return (
    <>
      <header className={`nav ${solid || mega ? "nav--solid" : ""} ${hidden && !mega && !open ? "nav--hidden" : ""}`}>
        <div className="nav__inner">
          <a href="#top" className="wordmark" aria-label="Brilliance — нүүр">
            BRILLIANCE<span>Your world of beauty</span>
          </a>
          <nav aria-label="Үндсэн цэс" className="nav__links">
            {LINKS.map((l) =>
              l.mega ? (
                <div key={l.label} className="nav__mega-wrap" onMouseEnter={enter} onMouseLeave={leave}>
                  <a href={l.href} className="nav__link" onClick={() => setMega(false)}>{l.label}</a>
                  <button
                    className="nav__caret"
                    aria-expanded={mega}
                    aria-controls="mega"
                    aria-label="Брэндийн цэсийг нээх"
                    onClick={() => setMega((m) => !m)}
                    onFocus={enter}
                  >
                    <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" /></svg>
                  </button>
                </div>
              ) : (
                <a key={l.label} href={l.href} className="nav__link">{l.label}</a>
              )
            )}
          </nav>
          <a href="#contact" className="nav__cta" data-magnetic>Contact</a>
          <button
            ref={burger}
            className={`burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Цэс хаах" : "Цэс нээх"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span />
          </button>
        </div>

        <div id="mega" className={`mega ${mega ? "is-open" : ""}`} onMouseEnter={enter} onMouseLeave={leave} hidden={!mega}>
          <div className="mega__grid">
            <div className="mega__intro">
              <p className="eyebrow">The Houses</p>
              <p className="mega__title">Three countries.<br /><em>One philosophy</em> of care.</p>
              <a href="#brands" className="link-line" onClick={() => setMega(false)}>Бүх брэнд</a>
            </div>
            {BRANDS.map((b) => (
              <a key={b.id} href={`#brand-${b.id}`} className="mega__item" onClick={() => setMega(false)}>
                <span className="mega__img">
                  <Image src={b.menuImage} alt="" fill sizes="220px" />
                </span>
                <span className="mega__country">{b.country}</span>
                <span className="mega__name">{b.name}</span>
                <span className="mega__desc">{b.short}</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mmenu ${open ? "is-open" : ""}`} aria-hidden={!open} inert={!open}>
        <nav aria-label="Гар утасны цэс">
          <ol>
            {[...LINKS, { label: "Contact", href: "#contact" }].map((l, i) => (
              <li key={l.label} style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  <small>0{i + 1}</small>{l.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mmenu__foot">
          <a href={PHONE_MAIN.href}>{PHONE_MAIN.label}</a>
          <span>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </span>
        </div>
      </div>
    </>
  );
}
