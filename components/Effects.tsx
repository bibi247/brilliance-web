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

    // Reveal
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    const observe = () => document.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => io.observe(el));
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    // Parallax + back-to-top
    const px = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      setTop(window.scrollY > vh * 1.2);
      if (reduce) return;
      for (const el of px) {
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        const speed = parseFloat(el.dataset.parallax || "0.12");
        const off = (r.top + r.height / 2 - vh / 2) * -speed;
        el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0) scale(1.12)`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    tick();

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

    requestAnimationFrame(() => root.classList.add("is-loaded"));

    return () => {
      io.disconnect(); mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cleanups.forEach((c) => c());
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor is-gone" aria-hidden />
      <button
        className={`totop ${top ? "is-on" : ""}`}
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
