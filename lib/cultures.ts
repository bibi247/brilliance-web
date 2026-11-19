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
    hero: "/img/schrammek.jpg",
    heroAlt: "Dr. med. Christine Schrammek Blemish Balm Classic, цэцгэн хүрээтэй",
    second: "/img/lifestyle-impurity-stop.webp",
    secondAlt: "Dr. med. Christine Schrammek Impurity Stop тубууд",
    menuImage: "/img/schrammek.jpg",
    logo: schrammek.logo,
    href: schrammek.href,
    theme: { bg: "#E4F2EB", ink: "#14382C", accent: "#1F7A5A", soft: "#CDE6D9" },
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
    theme: { bg: "#8E1B2E", ink: "#FFF5F3", accent: "#F4C3CA", soft: "#6E1424" },
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
    hero: "/img/lifestyle-lab-glassware.webp",
    heroAlt: "GENEREX бүтээгдэхүүн лабораторийн шилэн сав суулгын дунд",
    second: "/img/lifestyle-steel-tray.webp",
    secondAlt: "GENEREX мэргэжлийн ампулууд ган тавиур дээр",
    menuImage: "/img/lifestyle-lab-glassware.webp",
    logo: generex.logo,
    href: generex.href,
    theme: { bg: "#FFFFFF", ink: "#1F2326", accent: "#7D858C", soft: "#F1F2F3" },
  },
];
