import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--f-serif",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--f-sans",
  display: "swap",
});

const title = "Brilliance — A World of Beauty, Curated for You";
const description =
  "Where science meets the art of beauty. Dr. med. Christine Schrammek (Germany), Spa Treatment (Japan), GENEREX (Korea) — professional treatments, premium skincare and beauty education in Ulaanbaatar.";

export const metadata: Metadata = {
  metadataBase: new URL("https://brilliance-web-ruby.vercel.app"),
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: { title, description, type: "website", locale: "mn_MN", images: [{ url: "/img/lifestyle-wrapping-mask.webp" }] },
  twitter: { card: "summary_large_image", title, description },
};
export const viewport: Viewport = { themeColor: "#F7F4EE" };

const ld = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Brilliance",
  url: "https://www.brilliance.mn",
  telephone: "+97698080488",
  email: "Hidesan.com.ltd@gmail.com",
  address: { "@type": "PostalAddress", streetAddress: "Khan Hills Residences 533-102, 11-r khoroo, Khan-Uul", addressLocality: "Ulaanbaatar", addressCountry: "MN" },
  sameAs: ["https://www.facebook.com/Brilliancetotal.beauty", "https://www.instagram.com/brilliancesalon_mongolia/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="fixed left-4 -top-16 z-[200] bg-espresso px-4 py-2.5 text-ivory transition-[top] focus:top-4">Үндсэн агуулга руу шилжих</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </body>
    </html>
  );
}
