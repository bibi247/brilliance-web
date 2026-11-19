import { RITUALS, SALON_URL } from "@/lib/content";
import { Lines, MaskImage, Reveal } from "./motion";

export default function Experiences() {
  return (
    <section id="experiences" aria-labelledby="exp-title" className="bg-espresso py-[clamp(100px,12vw,190px)] text-ivory">
      <div className="wrap">
        <div className="mb-[clamp(70px,9vw,140px)] grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal><p className="eyebrow mb-7 text-champagne">03 — Signature Experiences · Brilliance Salon</p></Reveal>
            <h2 id="exp-title" className="serif-display text-[clamp(42px,6vw,104px)]">
              <Lines lines={["Four rituals,", <em key="e" className="text-champagne">by hand.</em>]} />
            </h2>
          </div>
          <Reveal as="p" className="text-ivory/65 md:col-span-4">
            Бие, сэтгэлийг тайвшруулах Японы Spa Treatment-ийн дөрвөн арчилгаа — мэргэжлийн гоо засалчийн гараар.
          </Reveal>
        </div>

        <ol className="space-y-[clamp(90px,11vw,170px)]">
          {RITUALS.map((r, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={r.id} className="group grid items-center gap-x-6 gap-y-10 md:grid-cols-12">
                <MaskImage
                  src={r.image}
                  alt={r.alt}
                  sizes="(max-width: 768px) 100vw, 54vw"
                  from={flip ? "right" : "left"}
                  imgClassName="object-cover transition-transform duration-[1800ms] ease-lux group-hover:scale-[1.05]"
                  className={`aspect-[4/5] !bg-charcoal md:col-span-6 ${flip ? "md:col-start-7 md:row-start-1" : ""} ${i === 0 ? "md:aspect-[5/4]" : ""}`}
                />
                <div className={`md:col-span-5 ${flip ? "md:col-start-1 md:row-start-1" : "md:col-start-8"}`}>
                  <Reveal>
                    <p className="flex items-baseline gap-4">
                      <span className="font-serif text-[56px] font-light italic leading-none text-champagne">0{i + 1}</span>
                      <span className="eyebrow text-[9.5px] text-ivory/50">Spa Treatment · Japan</span>
                    </p>
                    <h3 className="serif-display mt-6 text-[clamp(38px,4vw,64px)] transition-[letter-spacing] duration-1000 ease-lux group-hover:tracking-[0.005em]">{r.name}</h3>
                    <p className="mt-4 font-serif text-[23px] italic text-champagne">{r.mood}</p>
                    <p className="mt-6 max-w-[46ch] text-ivory/70">{r.text}</p>
                  </Reveal>
                  <Reveal delay={0.1} className="mt-9">
                    <p className="eyebrow mb-3 text-[9.5px] text-ivory/45">The experience includes</p>
                    <ul className="border-t border-ivory/15">
                      {r.includes.map((x) => (
                        <li key={x} className="flex gap-4 border-b border-ivory/15 py-3 text-[14px] text-ivory/85">
                          <span aria-hidden className="mt-[11px] h-px w-4 shrink-0 bg-champagne" />{x}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-[12.5px] text-ivory/45">Үргэлжлэх хугацаа, үнийг цаг захиалахдаа тодруулна уу.</p>
                    <a href={SALON_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost on-dark mt-8" data-magnetic>
                      Reserve your experience <span className="arr" aria-hidden>↗</span>
                    </a>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
