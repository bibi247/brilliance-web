import Image from "next/image";
import Nav from "@/components/Nav";
import Effects from "@/components/Effects";
import BrandShowcase from "@/components/BrandShowcase";
import Products from "@/components/Products";
import Rituals from "@/components/Rituals";
import ContactForm from "@/components/ContactForm";
import { DESTINATIONS, EMAIL, HQ, LOCATIONS, PHONE_ALT, PHONE_MAIN, SOCIAL } from "@/lib/content";

const Arrow = () => <span aria-hidden className="arr">↗</span>;
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <Effects />
      <Nav />
      <main id="main">
        {/* HERO */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__media">
            <div className="hero__img" data-parallax="0.18">
              <Image
                src="/img/lifestyle-wrapping-mask.webp"
                alt="Spa Treatment Wrapping Mask маск хийлгэж буй эмэгтэй"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>
          </div>
          <div className="hero__product" aria-hidden>
            <div data-parallax="-0.08" className="hero__product-inner">
              <Image src="/img/lifestyle-exo-moist-essence.webp" alt="" fill sizes="(max-width: 900px) 40vw, 22vw" />
            </div>
          </div>
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow"><span className="line" aria-hidden /> Your world of beauty</p>
            <h1 id="hero-title" className="hero__title">
              <span className="rl"><span>A world</span></span>
              <span className="rl"><span>of <em>beauty.</em></span></span>
              <span className="rl"><span className="hero__t2">Curated</span></span>
              <span className="rl"><span className="hero__t2">for you.</span></span>
            </h1>
            <p className="hero__lede">
              Discover exceptional skincare from Germany, Japan and Korea, brought together through professional expertise and authentic beauty experiences.
            </p>
            <div className="hero__ctas">
              <a href="#destinations" className="btn btn--dark" data-magnetic>Explore our world</a>
              <a href="#brands" className="btn btn--text">Discover our brands <span aria-hidden>→</span></a>
            </div>
          </div>
          <ul className="hero__marquee" aria-label="Брэндүүд">
            <li>Dr. med. Schrammek <small>Germany</small></li>
            <li>Spa Treatment <small>Japan</small></li>
            <li>GENEREX <small>Korea</small></li>
            <li>Hyuna Beauty</li>
          </ul>
          <a href="#story" className="scroll-cue" aria-label="Доош гүйлгэх"><span>Scroll</span><i aria-hidden /></a>
        </section>

        {/* STORY */}
        <section id="story" className="story" aria-labelledby="story-title">
          <div className="wrap story__grid">
            <p className="eyebrow story__eyebrow" data-reveal>Our Story · Бидний түүх</p>
            <h2 id="story-title" className="display-xl story__title" data-reveal>
              Beauty is an <em>experience.</em><br />
              <span className="indent">Not just a routine.</span>
            </h2>
            <figure className="story__img story__img--a" data-reveal="mask">
              <Image src="/img/schrammek.jpg" alt="Dr. med. Christine Schrammek Blemish Balm Classic, цэцгэн хүрээтэй" fill sizes="(max-width: 900px) 90vw, 36vw" />
            </figure>
            <figure className="story__img story__img--b" data-reveal="mask">
              <Image src="/img/lifestyle-face-healing.webp" alt="Spa Treatment Face Healing — нүүрний иллэг хийлгэж буй эмэгтэй" fill sizes="(max-width: 900px) 60vw, 24vw" />
            </figure>
            <div className="story__text">
              <p className="story__drop" data-reveal>
                Brilliance бол Германы Dr. med. Christine Schrammek Kosmetik брэндийг Монголд албан ёсоор төлөөлдөг багийн гоо сайхны брэнд.
              </p>
              <p data-reveal>
                Өнөөдөр бид Японы Wave Corporation-ийн Spa Treatment, Солонгосын GENEREX зэрэг арьс арчилгааны брэндүүдийг нэг дор цуглуулж, Монгол хэрэглэгч бүрт жинхэнэ бүтээгдэхүүн, мэргэжлийн зөвлөгөөг ойртуулж байна.
              </p>
              <p data-reveal>
                Гэртээ хэрэглэх арчилгаа, салоны мэргэжлийн үйлчилгээ, гоо засалчдын сургалт — бүгд нэг итгэлтэй брэндийн дор.
              </p>
              <dl className="facts" data-reveal>
                <div><dt>3</dt><dd>Брэндийн орон<br />Герман · Япон · Солонгос</dd></div>
                <div><dt>4</dt><dd>Үйлчилгээний чиглэл<br />Дэлгүүр · B2B · Салон · Сургалт</dd></div>
                <div><dt>3</dt><dd>Салбар<br />Улаанбаатар</dd></div>
              </dl>
              <p className="story__sig" data-reveal>
                Brilliance-ийг <strong>Hidesan Co., Ltd.</strong> ажиллуулдаг — Dr. med. Christine Schrammek Kosmetik-ийн Монгол дахь албан ёсны дистрибьютор.
              </p>
            </div>
          </div>
        </section>

        <BrandShowcase />
        <Products />
        <Rituals />

        {/* DESTINATIONS */}
        <section id="destinations" className="dest" aria-labelledby="dest-title">
          <div className="wrap dest__head">
            <p className="eyebrow" data-reveal>The Brilliance Family · Brilliance гэр бүл</p>
            <h2 id="dest-title" className="display-l" data-reveal>Four ways <em>into</em> our world.</h2>
          </div>
          <div className="dest__panels">
            {DESTINATIONS.map((d) => (
              <a key={d.n} href={d.href} {...ext} className="panel" data-cursor="Enter">
                <span className="panel__img"><Image src={d.image} alt={d.alt} fill sizes="(max-width: 900px) 100vw, 40vw" /></span>
                <span className="panel__shade" aria-hidden />
                <span className="panel__n">{d.n}</span>
                <span className="panel__body">
                  <span className="panel__aud">{d.audience}</span>
                  <span className="panel__title">{d.title}</span>
                  <span className="panel__mn">{d.mn}</span>
                  <span className="panel__text">{d.text}</span>
                  <span className="panel__cta">{d.cta} <Arrow /><small>{d.host}</small></span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* LOCATIONS */}
        <section id="locations" className="locs" aria-labelledby="locs-title">
          <div className="wrap">
            <div className="locs__head">
              <p className="eyebrow" data-reveal>Locations · Салбарууд</p>
              <h2 id="locs-title" className="display-l" data-reveal>Find us in <em>Ulaanbaatar.</em></h2>
            </div>
            <div className="locs__grid">
              {LOCATIONS.map((l) => (
                <article className="loc" key={l.n} data-reveal>
                  <div className="loc__img"><Image src={l.image} alt="" fill sizes="(max-width: 900px) 90vw, 30vw" /></div>
                  <p className="loc__n">{l.n}</p>
                  <h3 className="loc__name">{l.name}</h3>
                  <p className="loc__addr">{l.address}<br />{l.city}</p>
                  <p className="loc__links">
                    <a href={l.phone.href} className="link-line">{l.phone.label}</a>
                    <a href={l.map} {...ext} className="link-line">Get directions <Arrow /></a>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="wrap contact__grid">
            <div className="contact__info">
              <p className="eyebrow" data-reveal>Contact · Холбоо барих</p>
              <h2 id="contact-title" className="display-l" data-reveal>Let us <em>hear</em> from you.</h2>
              <p className="lede" data-reveal>Бүтээгдэхүүн, захиалга, хамтын ажиллагаа, салон, сургалтын бүх асуултаар.</p>
              <dl className="contact__list" data-reveal>
                <div><dt>Лавлах төв</dt><dd><a href={PHONE_MAIN.href} className="contact__big">{PHONE_MAIN.label}</a></dd></div>
                <div><dt>Нэмэлт утас</dt><dd><a href={PHONE_ALT.href}>{PHONE_ALT.label}</a></dd></div>
                <div><dt>И-мэйл</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div>
                <div><dt>Хаяг</dt><dd>{HQ.address}<br /><a href={HQ.map} {...ext} className="link-line">Газрын зураг дээр харах <Arrow /></a></dd></div>
                <div><dt>Сошиал</dt><dd className="contact__social"><a href={SOCIAL.facebook} {...ext}>Facebook</a><a href={SOCIAL.instagram} {...ext}>Instagram</a></dd></div>
              </dl>
            </div>
            <div className="contact__form" data-reveal>
              <h3 className="display-s">Ерөнхий хүсэлт илгээх</h3>
              <p className="muted">Асуулт, санал хүсэлтээ үлдээгээрэй — бид ажлын цагаар эргэн холбогдоно.</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p className="footer__mark" aria-hidden>BRILLIANCE</p>
          <div className="footer__grid">
            <div>
              <p className="footer__tag">A world of beauty. <em>Curated for you.</em></p>
              <p className="muted">Дэлхийн гоо сайхны брэндүүд — нэг дор.</p>
            </div>
            <nav aria-label="Brilliance гэр бүл">
              <h4>Brilliance гэр бүл</h4>
              <a href="https://www.brilliance.mn" {...ext}>Brilliance</a>
              {DESTINATIONS.map((d) => <a key={d.n} href={d.href} {...ext}>{d.mn}</a>)}
            </nav>
            <div>
              <h4>Холбоо барих</h4>
              <a href={PHONE_MAIN.href}>Лавлах төв: {PHONE_MAIN.label}</a>
              <a href={PHONE_ALT.href}>{PHONE_ALT.label}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div>
              <h4>Салбарууд</h4>
              {LOCATIONS.map((l) => <a key={l.n} href={l.phone.href}>{l.name} — {l.phone.label}</a>)}
            </div>
            <div>
              <h4>Сошиал</h4>
              <a href={SOCIAL.facebook} {...ext}>Facebook</a>
              <a href={SOCIAL.instagram} {...ext}>Instagram</a>
            </div>
          </div>
          <p className="footer__legal">
            Brilliance-ийг Hidesan Co., Ltd. ажиллуулдаг — Dr. med. Christine Schrammek Kosmetik-ийн Монгол дахь албан ёсны дистрибьютор. © {new Date().getFullYear()} Brilliance. Бүх эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </footer>
    </>
  );
}
