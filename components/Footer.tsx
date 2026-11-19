import Image from "next/image";
import { EMAIL, JOURNEYS, LOCATIONS, PHONE_ALT, PHONE_MAIN, SOCIAL } from "@/lib/content";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const H = ({ children }: { children: React.ReactNode }) => <h4 className="eyebrow mb-5 text-[9.5px] text-champagne">{children}</h4>;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-ivory/70">
      <div className="relative h-[70svh] min-h-[460px]">
        <Image src="/img/lifestyle-face-healing.webp" alt="" fill sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(41,36,31,.2),rgba(41,36,31,1))]" />
        <div className="wrap relative flex h-full flex-col items-center justify-center text-center text-ivory">
          <p className="eyebrow mb-8 text-champagne">Beauty, thoughtfully curated.</p>
          <p className="serif-display text-[clamp(44px,6vw,100px)]">A world of beauty.<br /><em className="text-champagne">Curated for you.</em></p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="https://salon.brilliance.mn/" {...ext} className="btn btn-light">Book an appointment</a>
            <a href="https://b2c.brilliance.mn/" {...ext} className="btn btn-ghost on-dark">Shop online</a>
          </div>
        </div>
      </div>

      <div className="wrap">
        <p className="select-none whitespace-nowrap text-center font-serif text-[clamp(44px,12.6vw,230px)] font-light leading-[.9] tracking-[0.1em] text-ivory" aria-hidden>BRILLIANCE</p>

        <div className="mt-14 grid gap-12 border-t border-ivory/12 py-14 text-[14px] sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="mb-7 inline-block bg-ivory p-3"><Image src="/img/emblem.png" alt="Brilliance" width={60} height={42} /></span>
            <p className="max-w-[30ch] font-serif text-[22px] leading-snug text-ivory">Where science meets the art of beauty.</p>
            <p className="mt-4 max-w-[36ch] text-[13px] text-ivory/50">Дэлхийн гоо сайхны брэндүүд — нэг дор.</p>
          </div>
          <nav aria-label="Footer — explore" className="flex flex-col gap-2.5">
            <H>Explore</H>
            {[["Story", "#story"], ["The World", "#world"], ["Experiences", "#experiences"], ["The Edit", "#edit"], ["Locations", "#locations"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} className="hover:text-ivory">{l}</a>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5">
            <H>Houses</H>
            <a href="https://b2c.brilliance.mn/brands/schrammek" {...ext} className="hover:text-ivory">Dr. med. Schrammek</a>
            <a href="https://b2c.brilliance.mn/brands/spa-treatment" {...ext} className="hover:text-ivory">Spa Treatment</a>
            <a href="https://b2c.brilliance.mn/brands/generex" {...ext} className="hover:text-ivory">GENEREX</a>
            <a href="https://www.instagram.com/hyunabeautymongolia/" {...ext} className="hover:text-ivory">Hyuna Beauty</a>
          </div>
          <div className="flex flex-col gap-2.5">
            <H>Brilliance</H>
            <a href="https://www.brilliance.mn" {...ext} className="hover:text-ivory">brilliance.mn</a>
            {JOURNEYS.map((j) => <a key={j.n} href={j.href} {...ext} className="hover:text-ivory">{j.title}</a>)}
          </div>
          <div className="flex flex-col gap-2.5">
            <H>Contact</H>
            <a href={PHONE_MAIN.href} className="hover:text-ivory">{PHONE_MAIN.label}</a>
            <a href={PHONE_ALT.href} className="hover:text-ivory">{PHONE_ALT.label}</a>
            <a href={`mailto:${EMAIL}`} className="break-all hover:text-ivory">{EMAIL}</a>
            <span className="mt-3 flex gap-5">
              <a href={SOCIAL.instagram} {...ext} className="link-line">Instagram</a>
              <a href={SOCIAL.facebook} {...ext} className="link-line">Facebook</a>
            </span>
          </div>
        </div>

        <div className="grid gap-6 border-t border-ivory/12 py-8 text-[12.5px] sm:grid-cols-3">
          {LOCATIONS.map((l) => (
            <a key={l.n} href={l.map} {...ext} className="hover:text-ivory">
              <span className="font-serif text-[16px] text-ivory">{l.name}</span> — {l.lines[0]} · <span className="whitespace-nowrap">{l.phone.label}</span>
            </a>
          ))}
        </div>
        <p className="border-t border-ivory/12 py-8 text-[11.5px] leading-relaxed text-ivory/40">
          Brilliance-ийг Hidesan Co., Ltd. ажиллуулдаг — Dr. med. Christine Schrammek Kosmetik-ийн Монгол дахь албан ёсны дистрибьютор. © {new Date().getFullYear()} Brilliance. Бүх эрх хуулиар хамгаалагдсан.
        </p>
      </div>
    </footer>
  );
}
