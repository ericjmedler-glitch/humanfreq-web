import type { Metadata } from "next";
import Link from "next/link";
import ShopButton from "@/components/ShopButton";

export const metadata: Metadata = {
  title: "The Story — Human Frēq",
  description:
    "Thirty-five years on the radio. Then the quiet. Eric Medler on what came after, and why he made Human Frēq.",
  alternates: {
    canonical: "/story",
  },
  openGraph: {
    title: "The Story — Human Frēq",
    description:
      "Thirty-five years on the radio. Then the quiet. Eric Medler on what came after, and why he made Human Frēq.",
    url: "/story",
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
    title: "The Story — Human Frēq",
    description:
      "Thirty-five years on the radio. Then the quiet. Eric Medler on what came after, and why he made Human Frēq.",
  },
};

export default function StoryPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <header
        className="px-5 pt-10 pb-6 max-w-lg mx-auto w-full"
        style={{ backgroundColor: "var(--color-content-bg)" }}
      >
        <Link
          href="/"
          className="inline-block mb-8 transition-opacity hover:opacity-60"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-amber)",
            textDecoration: "none",
          }}
        >
          ← Human Frēq
        </Link>

        <h1
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
            fontWeight: 300,
            lineHeight: 1.25,
            color: "var(--color-content-text)",
          }}
        >
          About the Human Frēq whose journey brought you here
        </h1>
      </header>

      {/* ── STORY BODY ───────────────────────────────────────────────────── */}
      <main
        id="main-content"
        className="flex-1 px-5 pb-16 max-w-lg mx-auto w-full"
        style={{ backgroundColor: "var(--color-content-bg)", color: "var(--color-content-text)" }}
      >
        {/* ── Teaser recap (bridges from landing page) ── */}
        <div
          className="space-y-5 mb-8"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.18rem",
            lineHeight: 1.65,
          }}
        >
          <p>
            I spent thirty-five years on the radio. Talking to a city in the
            morning, mostly. It was a good run and I loved it, and one day it
            ended, the way things do.
          </p>
          <p>
            What came after is the real story. I had to figure out who I was
            without the microphone, and that turned out to be harder and better
            than I expected. I started writing it all down. That writing became a
            book. The working title is <em>Human Frēq</em>, and the name came
            before any of this.
          </p>
        </div>

        {/* ── Full story ── */}
        <div
          className="space-y-5"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.18rem",
            lineHeight: 1.65,
          }}
        >
          <p>
            Here&rsquo;s how the clothing happened. While I was writing, I wanted
            something I could put on that reminded me to stay in frequency with
            who I actually am. Not a slogan. Just a feeling. You know that moment
            when you pull on the right t-shirt and your whole body goes{" "}
            <em>ahh</em> — and for a second you&rsquo;re completely here? I
            wanted that on purpose. So I made it. For me first.
          </p>

          <p>
            The apparel followed the same standard as the book: it had to earn
            its place. I chose pieces I would actually wear, then kept refining
            the details until they felt like Human Fr&#x113;q — quiet, useful,
            comfortable, and strong enough to become part of real life rather
            than another thing asking for attention.
          </p>

          <p>
            I&rsquo;ll tell you what&rsquo;s going on with me right now, too.
            I&rsquo;m in the middle of 75 Hard, a program I&rsquo;m using to
            reset a few things. One of the rules is a gallon of water a day.
            I&rsquo;m about three weeks in as I write this, and drinking that
            much, I&rsquo;ve learned something I didn&rsquo;t expect. Good water,
            from a good bottle, actually feels different. So I chose the
            highest-quality bottle I could find, because what we put in our
            bodies matters.
          </p>
        </div>

        <div
          className="space-y-5"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.18rem",
            lineHeight: 1.65,
          }}
        >
          <p>
            I made the first few things for myself. Then I realized other people
            do other things, and they could use the reminder too. People like my
            kids. My son has spent two years in the Pacific Northwest, living out
            of his van with his dog, learning to handle whatever the elements
            throw at him. He knows gear that doesn&rsquo;t fight you, that just
            works and lets you stay at peace in nature. I&rsquo;m hoping
            he&rsquo;ll help me build the Human Frēq outdoor line someday.
          </p>
        </div>

        {/* ── Founder note — handwriting-style web font (Caveat) ─────────── */}
        <div
          className="my-12 px-6 py-8 rounded-xl"
          style={{
            backgroundColor: "rgba(192,144,48,0.08)",
            borderLeft: "3px solid var(--color-amber)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-caveat), cursive",
              fontSize: "1.4rem",
              lineHeight: 1.55,
              color: "var(--color-content-text)",
            }}
          >
            <p>
              It started as a reminder I made for myself. It&rsquo;s becoming
              something bigger than me, but it&rsquo;s still the same idea.
              Wherever you go, something&rsquo;s there to bring you back to right
              here.
            </p>
            <p className="mt-4">I&rsquo;m glad you found your way here. Welcome.</p>
            <p
              className="mt-6"
              style={{ fontSize: "1.25rem", color: "var(--color-amber)" }}
            >
              — Eric
            </p>
          </div>
        </div>

        {/* ── Back to shop CTA (text, not competing with sticky button) ─── */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              textDecoration: "none",
            }}
          >
            ← Back to Human Frēq
          </Link>
        </div>

        {/* Footer */}
        <footer
          className="mt-16 pt-8 border-t text-center"
          style={{
            borderColor: "rgba(58,44,28,0.12)",
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            color: "var(--color-content-text)",
            opacity: 0.45,
            textTransform: "uppercase",
          }}
        >
          &copy; {new Date().getFullYear()} Human Fr&#x113;q &middot; All rights reserved
        </footer>
      </main>

      {/* Sticky amber shop button — same as landing page */}
      <ShopButton />
    </>
  );
}



