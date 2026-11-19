"use client";
import Image, { type ImageProps } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type HTMLMotionProps } from "framer-motion";
import { useRef } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade-and-rise on first entry into view. */
export function Reveal({ delay = 0, y = 28, className, children, as = "div", ...rest }: { delay?: number; y?: number; as?: "div" | "p" | "li" | "span" | "h2" | "h3" } & HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

/** Line-by-line masked headline. Pass lines as children array of nodes. */
export function Lines({ lines, className, delay = 0, immediate = false }: { lines: React.ReactNode[]; className?: string; delay?: number; immediate?: boolean }) {
  const reduce = useReducedMotion();
  // The trigger lives on the (unclipped) wrapper; lines inherit the state via variants.
  return (
    <motion.span
      className={`block ${className ?? ""}`}
      initial={reduce ? false : "hidden"}
      {...(immediate ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "0px 0px -8% 0px" } })}
    >
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            variants={{ hidden: { y: "108%" }, show: { y: "0%", transition: { duration: 1.3, ease: EASE, delay: delay + i * 0.09 } } }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Image that is unveiled by a mask wipe and drifts with scroll. */
export function MaskImage({
  className = "",
  imgClassName = "object-cover",
  parallax = 0.08,
  from = "bottom",
  ...img
}: { className?: string; imgClassName?: string; parallax?: number; from?: "bottom" | "left" | "right" } & Omit<ImageProps, "className">) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-parallax * 100}%`, `${parallax * 100}%`]);
  const hidden = { bottom: "inset(100% 0 0 0)", left: "inset(0 100% 0 0)", right: "inset(0 0 0 100%)" }[from];
  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden bg-ivory-2 ${className}`}
      initial={reduce ? false : { clipPath: hidden }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.6, ease: EASE }}
    >
      <motion.div className="absolute -inset-y-[12%] inset-x-0" style={reduce ? undefined : { y }}>
        <Image {...img} fill className={imgClassName} />
      </motion.div>
    </motion.div>
  );
}
