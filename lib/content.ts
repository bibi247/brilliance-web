export const PHONE_MAIN = { label: "+976 9808 0488", href: "tel:+97698080488" };
export const PHONE_ALT = { label: "+976 9800 4006", href: "tel:+97698004006" };
export const EMAIL = "Hidesan.com.ltd@gmail.com";
export const SOCIAL = {
  facebook: "https://www.facebook.com/Brilliancetotal.beauty",
  instagram: "https://www.instagram.com/brilliancesalon_mongolia/",
};
export const SALON_URL = "https://salon.brilliance.mn";

export type Product = {
  id: string;
  name: string;
  type: string;
  image: string;
  brand: string;
  brandId: string;
  href: string;
};

export type Brand = {
  id: string;
  name: string;
  maker: string;
  country: string;
  countryMn: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  logo?: string;
  menuImage: string;
  short: string;
  href: string;
  cta: string;
  products: Product[];
};

const mk = (brandId: string, brand: string, href: string, list: [string, string, string][]): Product[] =>
  list.map(([id, name, type]) => ({ id, name, type, image: `/img/${id}.webp`, brand, brandId, href }));

export const BRANDS: Brand[] = [
  {
    id: "schrammek",
    name: "Dr. med. Christine Schrammek",
    maker: "Dr. med. Christine Schrammek Kosmetik",
    country: "Germany",
    countryMn: "Герман",
    headline: "Эмчилгээний гоо сайхан — 60 жилийн түүхт Герман брэнд",
    intro:
      "Германы гэр бүлийн гоо сайхны компани: бүтээгдэхүүнийг нь арьс зүйч Dr. med. Christine Schrammek-Drusio, Christina Drusio нар анагаах ухааны судалгаанд тулгуурлан боловсруулдаг. Ургамлын гаралтай GREEN PEEL® арьс гуужуулах эмчилгээ болон брэндийн мэдээллээр дэлхийн анхны BB крем болох Blemish Balm-ийг бүтээгч.",
    image: "/img/lifestyle-impurity-stop.webp",
    imageAlt: "Dr. med. Christine Schrammek Impurity Stop тубууд шилэн аяганд, цагаан тавцан дээр",
    logo: "/img/logo.webp",
    menuImage: "/img/schrammek.jpg",
    short: "Германы эмчилгээний гоо сайхан, GREEN PEEL®",
    href: "https://b2c.brilliance.mn/brands/schrammek",
    cta: "Dr. med. Schrammek бүтээгдэхүүнүүд",
    products: mk("schrammek", "Dr. med. Schrammek", "https://b2c.brilliance.mn/brands/schrammek", [
      ["blemish-balm-light", "Blemish Balm (Light)", "Өө дарагч тос (BB)"],
      ["time-control-retinight-essence", "TIME CONTROL RetiNight Essence", "Оройн серум"],
      ["hydra-maximum-day-cream", "Hydra Maximum Day Cream", "Өдрийн тос"],
    ]),
  },
  {
    id: "spa-treatment",
    name: "Spa Treatment",
    maker: "Wave Corporation",
    country: "Japan",
    countryMn: "Япон",
    headline: "Гоо сайхан, эрүүл мэнд, сэтгэл",
    intro:
      "Spa Treatment бол Японы Wave Corporation-ийн мэргэжлийн гоо сайхны брэнд юм. Салоны арчилгааны туршлагаа HAS, экзосом, NMN, D.P.D капсул зэрэг дэвшилтэт технологитой хослуулж, гэр болон салонд хэрэглэх арьс арчилгааны цувралуудыг бүтээдэг.",
    image: "/img/lifestyle-real-c-series.webp",
    imageAlt: "Spa Treatment Real C цувралын серум, лосьон",
    logo: "/img/logo-8a3d.webp",
    menuImage: "/img/lifestyle-exo-moist-essence.webp",
    short: "Японы мэргэжлийн салон арчилгаа, экзосом технологи",
    href: "https://b2c.brilliance.mn/brands/spa-treatment",
    cta: "Spa Treatment бүтээгдэхүүнүүд",
    products: mk("spa-treatment", "Spa Treatment", "https://b2c.brilliance.mn/brands/spa-treatment", [
      ["exo-moist-essence", "EXO Moist Essence", "Серум"],
      ["has-moist-cream", "MOIST CREAM", "Чийгшүүлэгч тос"],
      ["exo-booster", "EXO Booster 25/50", "Серум"],
    ]),
  },
  {
    id: "generex",
    name: "GENEREX",
    maker: "GENEREX Bio-Derma Cosmetics",
    country: "Korea",
    countryMn: "Солонгос",
    headline: "Тарилга биш — арьсаар нэвтрүүлэх технологи",
    intro:
      "GENEREX бол трансдермал (арьсаар нэвтрүүлэх) технологи болон идэвхт бүрэлдэхүүнээр арьсны үндсэн асуудлыг шийдвэрлэдэг Солонгосын «Bio-Derma Cosmetic» брэнд юм. Өсөлтийн хүчин зүйлс (growth factor), пептид зэрэг идэвхт бүрэлдэхүүнийг арьсны гүнд хүргэдэг.",
    image: "/img/lifestyle-lab-glassware.webp",
    imageAlt: "GENEREX бүтээгдэхүүн лабораторийн шилэн сав суулгын дунд",
    logo: "/img/logo-eae6.webp",
    menuImage: "/img/lifestyle-steel-tray.webp",
    short: "Солонгосын Bio-Derma трансдермал технологи",
    href: "https://b2c.brilliance.mn/brands/generex",
    cta: "GENEREX бүтээгдэхүүнүүд",
    products: mk("generex", "GENEREX", "https://b2c.brilliance.mn/brands/generex", [
      ["cellular-rejuvenation-enriched-cream", "Cellular Rejuvenation Enriched Cream", "Нүүрний тос"],
      ["dermatox-lifting-complex-ampoule", "DERMATOX Lifting Complex Ampoule", "Нунтаг холимогтой ампул"],
      ["cellular-balancing-ampoule-mist", "Cellular Balancing Ampoule Mist", "Ампул мист"],
    ]),
  },
  {
    id: "hyuna",
    name: "Hyuna Beauty",
    maker: "Гоо сайхны цуглуулга",
    country: "Collection",
    countryMn: "Цуглуулга",
    headline: "Таны гоо сайхны шинэ нээлт",
    intro: "Hyuna Beauty — Brilliance гэр бүлийн гоо сайхны цуглуулга. Шинэ бүтээгдэхүүн, мэдээллийг брэндийн Instagram хуудаснаас үзээрэй.",
    image: "/img/lifestyle-guasha-plate.webp",
    imageAlt: "Гуаша иллэгийн хавтанг гартаа барьсан нь",
    menuImage: "/img/lifestyle-guasha-plate.webp",
    short: "Гоо сайхны цуглуулга — шинэ нээлт",
    href: "https://www.instagram.com/hyunabeautymongolia/",
    cta: "Брэндийн хуудас",
    products: [],
  },
];

export const ALL_PRODUCTS = BRANDS.flatMap((b) => b.products);

export const RITUALS = [
  {
    id: "hot-shell",
    mood: "Warmth, slowly released.",
    includes: ["Шил хясааг биед таатай хэмд халаана","Нүүр болон биеийн арчилгаа","Дулаан ба даралтаар тайвшрал"],
    name: "Hot Shell Healing",
    image: "/img/lifestyle-hot-shell-healing.webp",
    alt: "Халаасан хясаагаар нуруунд иллэг хийж буй нь",
    text: "Хүний биед таатай хэмд халаасан хясаагаар нүүр болон биед хийдэг, дулаан ба даралтаар тайвшруулах арчилгаа.",
  },
  {
    id: "asian-resort",
    mood: "A journey without leaving the city.",
    includes: ["Индонез, Тайландын массажны арга","Ургамлын үнэрт эмчилгээ","Биеийн арчилгаа"],
    name: "Asian Resort Healing",
    image: "/img/lifestyle-asian-resort-healing.webp",
    alt: "Нуруунд Азийн массаж хийж буй гоо засалчийн гар",
    text: "Индонез болон Тайландын массажны аргуудыг хослуулсан, ургамлын үнэрт эмчилгээтэй биеийн арчилгаа.",
  },
  {
    id: "cream-bath",
    mood: "Stillness, from crown to shoulders.",
    includes: ["Толгой, хүзүү, мөр, нурууны массаж","Үсний арчилгаа","Бие сэтгэлийн тайвшрал"],
    name: "Cream Bath",
    image: "/img/lifestyle-cream-bath.webp",
    alt: "Cream Bath — толгойн арьс, үсний арчилгаа",
    text: "Толгой, хүзүү, мөрнөөс нуруу хүртэлх массажийг үсний арчилгаатай хослуулсан, бие сэтгэлийг тайвшруулах үйлчилгээ.",
  },
  {
    id: "face-healing",
    mood: "The face, gently awakened.",
    includes: ["Spa Treatment цувралын бүтээгдэхүүн","Меридиан, энергийн цэгүүдийг өдөөх","Нүүрний иллэг"],
    name: "Face Healing",
    image: "/img/lifestyle-face-healing.webp",
    alt: "Нүүрний иллэг хийлгэж буй, чихэндээ цэцэг хавчуулсан эмэгтэй",
    text: "Spa Treatment цувралын бүтээгдэхүүнийг ашигласан, меридиан буюу энергийн суваг, цэгүүдийг өдөөх нүүрний иллэг.",
  },
];

export const DESTINATIONS = [
  {
    n: "01",
    title: "Online Store",
    mn: "Онлайн дэлгүүр",
    audience: "Хэрэглэгчдэд",
    text: "Дэлхийн гоо сайхны брэндүүдийн албан ёсны бүтээгдэхүүнийг онлайнаар захиалаарай.",
    cta: "Дэлгүүр орох",
    href: "https://b2c.brilliance.mn",
    host: "b2c.brilliance.mn",
    image: "/img/lifestyle-exo-moist-essence.webp",
    alt: "Spa Treatment EXO Moist Essence серум",
  },
  {
    n: "02",
    title: "Business Partners",
    mn: "Харилцагч / B2B",
    audience: "Салон, эмнэлэг, борлуулагчдад",
    text: "Мэргэжлийн бүтээгдэхүүнийг бөөний нөхцөлөөр авах хамтын ажиллагааны хүсэлт гаргаарай.",
    cta: "Хамтрах",
    href: "https://b2b.brilliance.mn",
    host: "b2b.brilliance.mn",
    image: "/img/lifestyle-steel-tray.webp",
    alt: "GENEREX мэргэжлийн ампулууд ган тавиур дээр",
  },
  {
    n: "03",
    title: "Salon Experience",
    mn: "Салон цаг захиалга",
    audience: "Мэргэжлийн арчилгаа",
    text: "Мэргэжлийн гоо засалчаар арьс арчилгааны үйлчилгээ авах цагаа урьдчилан захиалаарай.",
    cta: "Цаг захиалах",
    href: "https://salon.brilliance.mn",
    host: "salon.brilliance.mn",
    image: "/img/lifestyle-wrapping-mask.webp",
    alt: "Spa Treatment Wrapping Mask маск хийлгэж буй эмэгтэй",
  },
  {
    n: "04",
    title: "Professional Training",
    mn: "Сургалт",
    audience: "Гоо засалчдад",
    text: "Мэргэжлийн арьс арчилгааны сургалтын мэдээлэл аваад бүртгүүлээрэй.",
    cta: "Сургалт үзэх",
    href: "https://training.brilliance.mn",
    host: "training.brilliance.mn",
    image: "/img/lifestyle-guasha-plate.webp",
    alt: "Гуаша иллэгийн хавтанг гартаа барьсан нь",
  },
];

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const LOCATIONS = [
  {
    n: "01",
    name: "Brilliance Salon",
    lines: ["Khan Hills Residences, Building 533", "Khan-Uul District, Ulaanbaatar"],
    mn: "Хан-Уул дүүрэг, Ханхиллс хотхон 533",
    phone: { label: "+976 9800 4006", href: "tel:+97698004006" },
    map: maps("Khan Hills Residences, Khan-Uul, Ulaanbaatar"),
    image: "/us/loc-salon.jpg",
    action: { label: "Book an appointment", href: "https://salon.brilliance.mn/" },
  },
  {
    n: "02",
    name: "Schrammek Store",
    lines: ["E-Mart, 3rd Floor", "Khan-Uul, Ulaanbaatar"],
    mn: "Хан-Уул, E-Mart 3 давхар",
    phone: { label: "+976 9800 4689", href: "tel:+97698004689" },
    map: maps("E-Mart Khan-Uul, Ulaanbaatar"),
    image: "/us/loc-store.jpg",
    action: { label: "Shop Dr. med. Schrammek", href: "https://b2c.brilliance.mn/brands/schrammek" },
  },
  {
    n: "03",
    name: "Minister Tower",
    lines: ["Minister Tower, 4th Floor, Office 406", "Ulaanbaatar"],
    mn: "Minister Tower 406, Эрүүл мэндийн яамны замын баруун талд",
    phone: { label: "+976 8558 0789", href: "tel:+97685580789" },
    map: maps("Minister Tower, Ulaanbaatar"),
    image: "/us/loc-office.jpg",
    action: { label: "Partner with us", href: "https://b2b.brilliance.mn/" },
  },
];

export const HQ = {
  address: "Хан-Уул дүүрэг, 11-р хороо, Khan Hills Residences 533-102, Улаанбаатар, Монгол улс",
  map: maps("Khan Hills Residences, Khan-Uul, Ulaanbaatar"),
};

export const JOURNEYS = [
  { n: "01", title: "Online Shopping", mn: "Онлайн дэлгүүр", steps: ["Discover products", "Explore details", "Visit the store"], text: "Дэлхийн гоо сайхны брэндүүдийн албан ёсны бүтээгдэхүүнийг онлайнаар захиалаарай.", cta: "Visit the online store", href: "https://b2c.brilliance.mn/", host: "b2c.brilliance.mn", image: "/img/lifestyle-exo-moist-essence.webp" },
  { n: "02", title: "Salon Experience", mn: "Салон цаг захиалга", steps: ["Discover treatments", "Understand the ritual", "Book a visit"], text: "Мэргэжлийн гоо засалчаар арьс арчилгааны үйлчилгээ авах цагаа урьдчилан захиалаарай.", cta: "Book an appointment", href: "https://salon.brilliance.mn/", host: "salon.brilliance.mn", image: "/img/lifestyle-wrapping-mask.webp" },
  { n: "03", title: "Business Partners", mn: "Харилцагч / B2B", steps: ["Professional brands", "Wholesale terms", "Send an inquiry"], text: "Салон, эмнэлэг, борлуулагчдад — мэргэжлийн бүтээгдэхүүнийг бөөний нөхцөлөөр авах хамтын ажиллагааны хүсэлт гаргаарай.", cta: "Become a partner", href: "https://b2b.brilliance.mn/", host: "b2b.brilliance.mn", image: "/img/lifestyle-steel-tray.webp" },
  { n: "04", title: "Professional Training", mn: "Сургалт", steps: ["Professional education", "Explore programmes", "Register"], text: "Гоо засалчдад — мэргэжлийн арьс арчилгааны сургалтын мэдээлэл аваад бүртгүүлээрэй.", cta: "Explore training", href: "https://training.brilliance.mn/", host: "training.brilliance.mn", image: "/img/lifestyle-guasha-plate.webp" },
];
