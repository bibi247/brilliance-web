import { LOCATIONS } from "@/lib/content";
import { Lines, MaskImage, Reveal } from "./motion";

export default function Locations() {
  return (
    <section id="locations" aria-labelledby="loc-title" className="bg-ivory py-[clamp(100px,12vw,180px)]">
      <div className="wrap">
        <div className="mb-[clamp(56px,7vw,110px)]">
          <Reveal><p className="eyebrow mb-7 text-taupe">VI · The Destinations</p></Reveal>
          <h2 id="loc-title" className="serif-display text-[clamp(42px,5.6vw,96px)]">
            <Lines lines={["Find us in", <em key="u">Ulaanbaatar.</em>]} />
          </h2>
        </div>
        <div className="grid gap-16 md:grid-cols-3 md:gap-8">
          {LOCATIONS.map((l, i) => (
            <article key={l.n} className={`group ${i === 1 ? "md:mt-24" : i === 2 ? "md:mt-48" : ""}`}>
              <MaskImage
                src={l.image}
                alt=""
                sizes="(max-width: 768px) 100vw, 32vw"
                parallax={0.05}
                imgClassName="object-cover saturate-[.8] transition-[transform,filter] duration-[1600ms] ease-lux group-hover:scale-[1.05] group-hover:saturate-100"
                className="aspect-[4/5]"
              />
              <Reveal className="pt-8">
                <p className="font-serif text-[16px] italic text-taupe">{l.n}</p>
                <h3 className="serif-display mt-2 text-[clamp(32px,2.6vw,42px)]">{l.name}</h3>
                <address className="mt-4 text-[14.5px] not-italic leading-relaxed text-muted">
                  {l.lines.map((x) => <span key={x} className="block">{x}</span>)}
                  <span className="mt-1 block text-[12.5px] text-taupe">{l.mn}</span>
                </address>
                <a href={l.phone.href} className="mt-5 block font-serif text-[24px]">{l.phone.label}</a>
                <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-5">
                  <a href={l.map} target="_blank" rel="noopener noreferrer" className="eyebrow link-line text-[9.5px]">Get directions <span className="arr">↗</span></a>
                  <a href={l.action.href} target="_blank" rel="noopener noreferrer" className="eyebrow link-line text-[9.5px]">{l.action.label} <span className="arr">↗</span></a>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
