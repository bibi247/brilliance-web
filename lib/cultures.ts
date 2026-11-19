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
    secondAlt: "Dr. med. Christine Schrammek Impurity Stop тубууд шилэн аяганд",
    menuImage: "/img/schrammek.jpg",
    logo: schrammek.logo,
    href: schrammek.href,
    theme: { bg: "#FFFFFF", ink: "#29241F", accent: "#5E6B55", soft: "#F2F1EC" },
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
    hero: "/img/lifestyle-real-c-series.webp",
    heroAlt: "Spa Treatment Real C цувралын серум, лосьон",
    second: "/img/lifestyle-face-healing.webp",
    secondAlt: "Spa Treatment Face Healing — нүүрний иллэг",
    menuImage: "/img/lifestyle-exo-moist-essence.webp",
    logo: spa.logo,
    href: spa.href,
    theme: { bg: "#EFE6DA", ink: "#29241F", accent: "#8A6E57", soft: "#E6DBCC" },
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
    theme: { bg: "#E9ECEC", ink: "#22282A", accent: "#56666B", soft: "#DDE2E2" },
  },
];
