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
  title: "Human Frēq — A book and collection by Eric Medler.",
  description:
    "A human being can do remarkable things. But when doing begins to replace being, it's time to come back. Book and collection by Eric Medler.",
  openGraph: {
    title: "Human Frēq",
    description: "A book and collection by Eric Medler. Start with the book.",
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
    description: "A book and collection by Eric Medler. Start with the book.",
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
