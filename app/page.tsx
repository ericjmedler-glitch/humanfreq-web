import Link from "next/link";
import ShopButton from "@/components/ShopButton";
import HeroShopButton from "@/components/HeroShopButton";
import EmailCapture from "@/components/EmailCapture";

export default function LandingPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* Full viewport so the shop button is visible without scrolling on any phone */}
      <section
        className="relative flex flex-col"
        style={{
          backgroundColor: "var(--color-hero-bg)",
          minHeight: "100svh",
        }}
      >
        {/* Hero image — golden-hour trail, message-matched to the launch ad.
            Drop at public/images/hero.jpg — sibling shot of the ad image. */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            opacity: 0.68,
          }}
          role="img"
          aria-label="Golden-hour trail"
        />

        {/* Top gradient — keeps wordmark legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,5,10,0.72) 0%, rgba(7,5,10,0.28) 38%, rgba(7,5,10,0.55) 70%, rgba(7,5,10,0.88) 100%)",
          }}
        />

        {/* All hero content in one column — top wordmark, tagline, then CTA at bottom */}
        <div className="relative z-10 flex flex-col justify-between flex-1 px-5 pt-10 pb-28 max-w-lg mx-auto w-full">

          {/* Top: wordmark */}
          <p
            style={{
              color: "var(--color-amber)",
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Human Frēq
          </p>

          {/* Middle: tagline */}
          <div>
            <h1
              style={{
                color: "var(--color-hero-text)",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 7.5vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.25,
              }}
            >
              Your energy is your currency.
              <br />
              <em>Your energy at rest is your frequency.</em>
            </h1>

            <p
              className="mt-5"
              style={{
                color: "var(--color-amber)",
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.9,
              }}
            >
              Early Access Collection · Limited Availability
            </p>
          </div>

          {/* Bottom: primary hero CTA — the main pathway, impossible to miss */}
          <div className="flex flex-col items-start gap-3">
            <HeroShopButton />
            {/* Quiet nudge so they know there's more if they want it */}
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "0.95rem",
                color: "var(--color-hero-text)",
                opacity: 0.55,
                fontStyle: "italic",
              }}
            >
              Or scroll to learn the story.
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY TEASER — optional depth, below the fold ───────────────── */}
      <main
        className="flex-1 px-5 py-12 max-w-lg mx-auto w-full"
        style={{ backgroundColor: "var(--color-content-bg)", color: "var(--color-content-text)" }}
      >
        {/* Quiet optional label — signals this is depth, not the main path */}
        <p
          className="mb-6"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            opacity: 0.7,
          }}
        >
          The story, if you want it
        </p>

        <div
          className="space-y-5"
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

        {/* Quiet text link — NOT a button, never competes with the shop CTA */}
        <Link
          href="/story"
          className="mt-6 inline-block transition-opacity hover:opacity-60"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.05rem",
            color: "var(--color-content-text)",
            fontStyle: "italic",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            textDecorationColor: "var(--color-muted)",
          }}
        >
          Read the rest of the story →
        </Link>

        {/* ── EMAIL CAPTURE ─────────────────────────────────────────────── */}
        <div
          className="mt-14 pt-10 border-t"
          style={{ borderColor: "rgba(58,44,28,0.15)" }}
        >
          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "var(--color-content-text)",
            }}
          >
            If you&rsquo;d like to grow with us, we&rsquo;d love to keep you up
            to date. New pieces, the book, wherever this goes. We&rsquo;ll only
            reach out when there&rsquo;s something worth sharing.
          </p>
          <EmailCapture />
        </div>

        {/* ── FOOTER ──────────────────────────────────────────────────────── */}
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

      {/* Sticky amber shop button — anchored at the bottom, always visible */}
      <ShopButton />
    </>
  );
}
