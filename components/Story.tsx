import { Lines, MaskImage, Reveal } from "./motion";

export default function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="py-[clamp(110px,14vw,220px)]">
      <div className="wrap grid grid-cols-12 gap-x-6">
        <Reveal className="col-span-12 mb-8"><p className="eyebrow text-taupe">01 — The House</p></Reveal>
        <h2 id="story-title" className="serif-display col-span-12 text-[clamp(42px,6.6vw,116px)] leading-[0.98]">
          <Lines lines={["Beauty is more", "than a routine.", <span key="x" className="block pl-[1.2em] italic text-charcoal">It is an experience.</span>]} />
        </h2>

        <MaskImage
          src="/us/story-facial.jpg"
          alt="Гоо засалчийн гараар хийж буй нүүрний арчилгаа"
          sizes="(max-width: 768px) 100vw, 58vw"
          className="col-span-12 mt-[clamp(56px,7vw,110px)] aspect-[4/5] md:col-span-7 md:aspect-[5/6]"
        />

        <div className="col-span-12 mt-12 flex flex-col md:col-span-4 md:col-start-9 md:mt-[clamp(56px,7vw,110px)]">
          <MaskImage
            src="/us/texture-serum.jpg"
            alt="Серумын бүтэц — алтлаг дусал"
            sizes="(max-width: 768px) 60vw, 28vw"
            from="right"
            className="ml-auto aspect-[3/4] w-3/5 md:w-4/5"
          />
          <div className="mt-auto pt-14">
            <Reveal as="p" className="font-serif text-[clamp(24px,2.1vw,32px)] font-light leading-[1.3]">
              A destination where professional expertise, international houses and <em>personal care</em> meet.
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-6 text-muted">
              Германы Schrammek-ээс эхэлсэн Brilliance өнөөдөр Японы Spa Treatment, Солонгосын GENEREX брэндүүдийг нэг дор цуглуулж — гэрийн арчилгаа, салоны үйлчилгээ, мэргэжлийн сургалтыг нэг итгэлтэй брэндийн дор хүргэж байна.
            </Reveal>
            <Reveal delay={0.15} className="mt-10 border-t border-line pt-6 text-[13px] leading-relaxed text-muted">
              <span className="eyebrow mb-2 block text-[9.5px] text-taupe">Official distributor</span>
              Brilliance-ийг <strong className="font-medium text-espresso">Hidesan Co., Ltd.</strong> ажиллуулдаг — Dr. med. Christine Schrammek Kosmetik-ийн Монгол дахь албан ёсны дистрибьютор.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
