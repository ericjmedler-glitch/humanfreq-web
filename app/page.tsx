import Link from "next/link";
import ShopButton from "@/components/ShopButton";
import EmailCapture from "@/components/EmailCapture";

export default function LandingPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-end"
        style={{
          backgroundColor: "var(--color-hero-bg)",
          minHeight: "62svh",
          maxHeight: "75svh",
        }}
      >
        {/* Hero image — Eric provides: golden-hour trail photo.
            Drop the file at public/images/hero.jpg to activate. */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            opacity: 0.72,
          }}
          role="img"
          aria-label="Golden-hour trail"
        />

        {/* Gradient — keeps tagline legible against any photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,5,10,0.15) 0%, rgba(7,5,10,0.68) 70%, rgba(7,5,10,0.92) 100%)",
          }}
        />

        <div className="relative z-10 px-5 pb-8 pt-10 max-w-lg mx-auto w-full">
          {/* Wordmark */}
          <p
            className="mb-6"
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

          {/* Tagline — locked copy per build spec */}
          <h1
            style={{
              color: "var(--color-hero-text)",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.9rem, 7vw, 2.8rem)",
              fontWeight: 300,
              lineHeight: 1.3,
            }}
          >
            Your energy is your currency.
            <br />
            <em>Your energy at rest is your frequency.</em>
          </h1>

          {/* Early-access label */}
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

        {/* Scroll-peek cue */}
        <div
          className="absolute bottom-0 left-0 right-0 text-center pb-2 z-10 pointer-events-none"
          aria-hidden="true"
          style={{ color: "var(--color-hero-text)", opacity: 0.35, fontSize: "0.75rem" }}
        >
          ↓
        </div>
      </section>

      {/* ── STORY TEASER ─────────────────────────────────────────────────── */}
      <main
        className="flex-1 px-5 py-12 max-w-lg mx-auto w-full"
        style={{ backgroundColor: "var(--color-content-bg)", color: "var(--color-content-text)" }}
      >
        <h2
          className="mb-6"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-amber)",
          }}
        >
          The Frēq who brought you here
        </h2>

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
