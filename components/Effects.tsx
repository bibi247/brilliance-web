"use client";
import { useEffect, useRef, useState } from "react";

/** Global, attribute-driven motion: [data-reveal], [data-parallax], [data-magnetic], custom cursor, back-to-top. */
export default function Effects() {
  const dot = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const onScroll = () => setTop(window.scrollY > window.innerHeight * 1.2);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Cursor + magnetic (desktop, motion OK)
    const cleanups: (() => void)[] = [];
    if (fine && !reduce && dot.current) {
      const d = dot.current;
      root.classList.add("has-cursor");
      let x = -100, y = -100, cx = -100, cy = -100, loop = 0;
      const move = (e: PointerEvent) => {
        x = e.clientX; y = e.clientY; d.classList.remove("is-gone");
        const t = e.target as HTMLElement;
        d.classList.toggle("is-link", !!t.closest("a, button, [role=button], input, select, textarea, label"));
        const lbl = t.closest<HTMLElement>("[data-cursor]")?.dataset.cursor;
        d.dataset.label = lbl || "";
        d.classList.toggle("is-label", !!lbl);
        if (!loop) loop = requestAnimationFrame(follow);
      };
      const follow = () => {
        cx += (x - cx) * 0.22; cy += (y - cy) * 0.22;
        d.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        loop = Math.abs(x - cx) + Math.abs(y - cy) > 0.3 ? requestAnimationFrame(follow) : 0;
      };
      const out = () => d.classList.add("is-gone");
      const over = () => d.classList.remove("is-gone");
      window.addEventListener("pointermove", move, { passive: true });
      document.addEventListener("pointerleave", out);
      document.addEventListener("pointerenter", over);
      cleanups.push(() => {
        window.removeEventListener("pointermove", move);
        document.removeEventListener("pointerleave", out);
        document.removeEventListener("pointerenter", over);
        root.classList.remove("has-cursor");
      });

      const mags = (e: PointerEvent) => {
        const el = (e.target as HTMLElement).closest<HTMLElement>("[data-magnetic]");
        document.querySelectorAll<HTMLElement>("[data-magnetic].is-mag").forEach((m) => {
          if (m !== el) { m.classList.remove("is-mag"); m.style.transform = ""; }
        });
        if (!el) return;
        const r = el.getBoundingClientRect();
        const mx = (e.clientX - (r.left + r.width / 2)) * 0.25;
        const my = (e.clientY - (r.top + r.height / 2)) * 0.35;
        el.classList.add("is-mag");
        el.style.transform = `translate(${mx.toFixed(1)}px, ${my.toFixed(1)}px)`;
      };
      window.addEventListener("pointermove", mags, { passive: true });
      cleanups.push(() => window.removeEventListener("pointermove", mags));
    }


    return () => {
      window.removeEventListener("scroll", onScroll);
      cleanups.forEach((c) => c());
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor is-gone" aria-hidden />
      <button
        className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center border border-ivory/25 bg-espresso text-ivory transition-all duration-500 ease-lux hover:bg-charcoal ${top ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        aria-label="Дээш буцах"
        tabIndex={top ? 0 : -1}
        onClick={() => {
          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
          document.querySelector<HTMLElement>(".wordmark")?.focus({ preventScroll: true });
        }}
      >
        <svg width="14" height="18" viewBox="0 0 14 18" aria-hidden><path d="M7 17V1M1 7l6-6 6 6" fill="none" stroke="currentColor" /></svg>
      </button>
    </>
  );
}
