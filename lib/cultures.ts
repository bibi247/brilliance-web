import { BRANDS, RITUALS } from "./content";

const brand = (id: string) => BRANDS.find((b) => b.id === id)!;

export type Culture = {
  id: "germany" | "japan" | "korea";
  country: string;
  numeral: string;
  brand: string;
  maker: string;
  tagline: string;
  titleText: string;
  intro: string;
  highlights: { label: string; text: string }[];
  hero: string;
  heroAlt: string;
  second: string;
  secondAlt: string;
  menuImage: string;
  logo?: string;
  href: string;
  theme: { bg: string; ink: string; accent: string; soft: string };
};

const schrammek = brand("schrammek");
const spa = brand("spa-treatment");
const generex = brand("generex");

export const CULTURES: Culture[] = [
  {
    id: "germany",
    country: "Germany",
    numeral: "I",
    brand: "Dr. med. Christine Schrammek",
    maker: schrammek.maker,
    tagline: "Medical skincare expertise",
    titleText: "Medical skincare expertise",
    intro: schrammek.intro,
    highlights: [
      { label: "Professional skincare", text: "Арьс зүйч Dr. med. Christine Schrammek-Drusio, Christina Drusio нарын анагаах ухааны судалгаанд тулгуурласан." },
      { label: "GREEN PEEL®", text: "Ургамлын гаралтай арьс гуужуулах эмчилгээ — Brilliance Монголд албан ёсоор түгээдэг." },
      { label: "Blemish Balm", text: "Брэндийн мэдээллээр дэлхийн анхны BB крем." },
    ],
    hero: "/us/de-botanical.jpg",
    heroAlt: "Ургамлын навч, гоо сайхны бүтээгдэхүүний бүтэц",
    second: "/img/schrammek.jpg",
    secondAlt: "Dr. med. Christine Schrammek Blemish Balm Classic, цэцгэн хүрээтэй",
    menuImage: "/img/schrammek.jpg",
    logo: schrammek.logo,
    href: schrammek.href,
    theme: { bg: "#E8F0E4", ink: "#2F3A2E", accent: "#557553", soft: "#D6E5D0" },
  },
  {
    id: "japan",
    country: "Japan",
    numeral: "II",
    brand: "Spa Treatment",
    maker: spa.maker,
    tagline: "The art of Japanese beauty rituals",
    titleText: "The art of Japanese beauty rituals",
    intro: spa.intro,
    highlights: RITUALS.map((r) => ({ label: r.name, text: r.text })),
    hero: "/us/jp-wood.jpg",
    heroAlt: "Модон ванн бүхий Япон маягийн спа өрөө",
    second: "/img/lifestyle-exo-moist-essence.webp",
    secondAlt: "Spa Treatment EXO Moist Essence серум",
    menuImage: "/img/lifestyle-exo-moist-essence.webp",
    logo: spa.logo,
    href: spa.href,
    theme: { bg: "#FAE6E2", ink: "#3A2C2E", accent: "#B8605C", soft: "#F2CFC9" },
  },
  {
    id: "korea",
    country: "Korea",
    numeral: "III",
    brand: "GENEREX",
    maker: generex.maker,
    tagline: "The next perspective on skincare innovation",
    titleText: "The next perspective on skincare innovation",
    intro: generex.intro,
    highlights: [
      { label: "Bio-Derma cosmetics", text: "Арьсны үндсэн асуудлыг шийдвэрлэдэг Солонгосын «Bio-Derma Cosmetic» брэнд." },
      { label: "Transdermal technology", text: "Тарилга биш — арьсаар нэвтрүүлэх технологи. Брэндийн мэдээллээр патентаар хамгаалагдсан." },
      { label: "Professional products", text: "Өсөлтийн хүчин зүйлс (growth factor), пептид зэрэг идэвхт бүрэлдэхүүнийг арьсны гүнд хүргэдэг." },
    ],
    hero: "/us/kr-ampoules.jpg",
    heroAlt: "Шилэн ампулууд — цэвэр, шинжлэх ухаанч өнгө аяс",
    second: "/img/lifestyle-lab-glassware.webp",
    secondAlt: "GENEREX мэргэжлийн ампулууд ган тавиур дээр",
    menuImage: "/img/lifestyle-lab-glassware.webp",
    logo: generex.logo,
    href: generex.href,
    theme: { bg: "#EAF2F1", ink: "#23302F", accent: "#4F7471", soft: "#D3E4E2" },
  },
];
