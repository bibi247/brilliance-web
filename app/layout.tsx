import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--f-serif",
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--f-sans",
  display: "swap",
});

const title = "Brilliance — A world of beauty, curated for you";
const description =
  "Германы Dr. med. Christine Schrammek, Японы Spa Treatment, Солонгосын GENEREX — дэлхийн гоо сайхны брэндүүд, салоны арчилгаа, мэргэжлийн сургалт нэг дор.";

export const metadata: Metadata = {
  metadataBase: new URL("https://brilliance-landing-hazel.vercel.app"),
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
        <a href="#main" className="skip">Үндсэн агуулга руу шилжих</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </body>
    </html>
  );
}
