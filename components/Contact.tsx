import { EMAIL, HQ, PHONE_ALT, PHONE_MAIN, SOCIAL } from "@/lib/content";
import ContactForm from "./ContactForm";
import { Lines, Reveal } from "./motion";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="ct-title" className="bg-white py-[clamp(100px,12vw,180px)]">
      <div className="wrap grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal><p className="eyebrow mb-7 text-taupe">VII · Contact</p></Reveal>
          <h2 id="ct-title" className="serif-display text-[clamp(42px,5vw,84px)]">
            <Lines lines={["We would love", <>to <em>hear from you.</em></>]} />
          </h2>
          <Reveal as="p" className="mt-7 max-w-[40ch] text-muted">Бүтээгдэхүүн, захиалга, хамтын ажиллагаа, салон, сургалтын бүх асуултаар.</Reveal>
          <Reveal>
            <dl className="mt-12 border-t border-line text-[14.5px]">
              {[
                ["Concierge", <a key="a" href={PHONE_MAIN.href} className="font-serif text-[30px] leading-none">{PHONE_MAIN.label}</a>],
                ["Salon", <a key="b" href={PHONE_ALT.href}>{PHONE_ALT.label}</a>],
                ["Email", <a key="c" href={`mailto:${EMAIL}`} className="break-all">{EMAIL}</a>],
                ["Address", <span key="d">{HQ.address}<br /><a href={HQ.map} {...ext} className="eyebrow link-line mt-3 text-[9.5px]">Open in Maps <span className="arr">↗</span></a></span>],
                ["Social", <span key="e" className="flex gap-6"><a href={SOCIAL.instagram} {...ext} className="link-line">Instagram</a><a href={SOCIAL.facebook} {...ext} className="link-line">Facebook</a></span>],
              ].map(([k, v]) => (
                <div key={k as string} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[130px_1fr] sm:gap-5">
                  <dt className="eyebrow pt-1 text-[9.5px] text-taupe">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal className="bg-ivory p-[clamp(26px,4vw,64px)] lg:col-span-6 lg:col-start-7 lg:self-start">
          <h3 className="serif-display text-[clamp(28px,2.4vw,38px)]">Send an inquiry</h3>
          <p className="mb-10 mt-3 text-[14px] text-muted">Асуулт, санал хүсэлтээ үлдээгээрэй — бид ажлын цагаар эргэн холбогдоно.</p>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
