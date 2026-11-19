"use client";
import { useEffect, useRef } from "react";

/**
 * Endless champagne-gold contour terrain (adapted from formwork-neon's leap-frogging planes).
 * Two planes share a height function that tiles over L, so swapping them is seamless.
 * Classic treatment: fine line mesh, espresso fog, very slow drift. Pauses off-screen;
 * renders one still frame under prefers-reduced-motion; CSS backdrop remains if WebGL fails.
 */
export default function GoldTerrain({ className = "", color = 0xd8c9b4, fog = 0x1d1916, opacity = 0.34 }: { className?: string; color?: number; fog?: number; opacity?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let disposed = false;
    let cleanup = () => {};

    import("three").then((THREE) => {
      if (disposed) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch {
        return;
      }
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const small = innerWidth < 768;
      const size = () => {
        const w = canvas.clientWidth, h = canvas.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, small ? 1.25 : 1.5));
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(fog, 0.034);
      const camera = new THREE.PerspectiveCamera(small ? 70 : 58, 1, 0.1, 200);
      camera.position.set(0, 3.1, 7);
      camera.lookAt(0, 1.2, -40);

      const L = 80, W = 96;
      const SEGX = small ? 64 : 110, SEGZ = small ? 60 : 96;
      const k1 = ((2 * Math.PI) / L) * 2, k2 = ((2 * Math.PI) / L) * 5;
      const height = (x: number, z: number) => {
        const ax = Math.abs(x);
        const edge = Math.min(1, Math.max(0, (ax - 6) / 30)); // calm valley floor under the type
        const dunes = Math.pow(edge, 1.4) * (6.5 + 2.2 * Math.sin(x * 0.32 + 0.6));
        const swell = Math.sin(z * k1 + x * 0.05) * 0.55 + Math.sin(z * k2 + 1.3) * 0.22;
        return dunes + swell * (0.45 + edge * 1.4);
      };

      const material = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity });
      const make = () => {
        const g = new THREE.PlaneGeometry(W, L, SEGX, SEGZ);
        g.rotateX(-Math.PI / 2);
        const p = g.attributes.position;
        for (let i = 0; i < p.count; i++) p.setY(i, height(p.getX(i), p.getZ(i)));
        return new THREE.Mesh(g, material);
      };
      const a = make(), b = make();
      b.position.z = -L;
      scene.add(a, b);

      size();
      const ro = new ResizeObserver(size);
      ro.observe(canvas);

      let visible = true, raf = 0;
      const clock = new THREE.Clock();
      const SPEED = 2.4;
      const tick = () => {
        raf = 0;
        const dt = Math.min(clock.getDelta(), 0.05);
        for (const m of [a, b]) {
          m.position.z += SPEED * dt;
          if (m.position.z > L) m.position.z -= 2 * L;
        }
        renderer.render(scene, camera);
        if (visible && !reduce) raf = requestAnimationFrame(tick);
      };
      const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible && !reduce && !raf) { clock.getDelta(); raf = requestAnimationFrame(tick); }
      });
      io.observe(canvas);
      renderer.render(scene, camera);
      canvas.dataset.ready = "1";
      if (!reduce) raf = requestAnimationFrame(tick);

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        a.geometry.dispose();
        b.geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    });

    return () => { disposed = true; cleanup(); };
  }, []);

  return <canvas ref={ref} aria-hidden className={`opacity-0 transition-opacity duration-[2000ms] data-[ready=1]:opacity-100 ${className}`} />;
}
