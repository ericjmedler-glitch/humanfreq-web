import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel, DM_Mono, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shop.humanfreq.com"),
  title: "Human Frēq — Your energy at rest is your frequency.",
  description:
    "Move at the frequency of your body. A book and apparel collection for people who train by feel. Early Access.",
  openGraph: {
    title: "Human Frēq",
    description: "Move at the frequency of your body. Book and apparel for people who train by feel.",
    siteName: "Human Frēq",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/HumanFreq_IMAGE ONLY_Logo_Cream_4000px.png",
        width: 1679,
        height: 1679,
        alt: "Human Frēq logomark",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Human Frēq",
    description: "Move at the frequency of your body. Book and apparel for people who train by feel.",
    images: ["/images/HumanFreq_IMAGE ONLY_Logo_Cream_4000px.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${dmMono.variable} ${caveat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  );
}
