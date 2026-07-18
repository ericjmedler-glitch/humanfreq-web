import type { Metadata } from "next";
import Link from "next/link";
import ShopButton from "@/components/ShopButton";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "The Book — Human Frēq",
  description:
    "Human Frēq began as a book. Eric Medler wrote what he needed to hear after thirty-five years in morning radio. The book comes first.",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-cinzel), serif",
        fontSize: "0.6rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "var(--color-amber)",
        margin: "0 0 1rem",
        opacity: 0.85,
      }}
    >
      {children}
    </p>
  );
}

export default function BookPage() {
  const bodyStyle: React.CSSProperties = {
    fontFamily: "var(--font-cormorant), Georgia, serif",
    fontSize: "clamp(1.05rem, 3.5vw, 1.18rem)",
    lineHeight: 1.68,
    color: "var(--color-content-text)",
    margin: "0 0 1.25rem",
  };

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
          &#x2190; Human Fr&#x113;q
        </Link>

        <p
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-amber)",
            margin: "0 0 1rem",
            opacity: 0.75,
          }}
        >
          The Book
        </p>

        <h1
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
            fontWeight: 300,
            lineHeight: 1.25,
            color: "var(--color-content-text)",
            margin: 0,
          }}
        >
          Human Fr&#x113;q began as a book.
        </h1>
      </header>

      {/* ── BOOK BODY ─────────────────────────────────────────────────────── */}
      <main
        className="flex-1 px-5 pb-16 max-w-lg mx-auto w-full"
        style={{ backgroundColor: "var(--color-content-bg)" }}
      >
        {/* Opening */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={bodyStyle}>
            Eric Medler spent thirty-five years in morning radio, speaking to
            one person at a time while a city listened. When that chapter ended,
            the questions got louder. He started writing what he needed to hear.
          </p>
          <p style={bodyStyle}>
            The book is called Human Fr&#x113;q. It is about returning to what
            actually matters: energy, presence, and the frequency beneath
            everything else. The brand, the apparel, and the community grew from
            it.
          </p>
        </div>

        {/* Section: What the book is */}
        <div style={{ marginBottom: "3rem" }}>
          <SectionHeading>What it is</SectionHeading>
          <p style={bodyStyle}>
            Human Fr&#x113;q is not a self-help book. It is a personal record
            from someone who had to rebuild his sense of self from scratch. The
            work is direct. The philosophy is earned. The writing is meant to be
            carried into ordinary life, not left on a shelf.
          </p>
        </div>

        {/* Section: When */}
        <div style={{ marginBottom: "3rem" }}>
          <SectionHeading>When it is available</SectionHeading>
          <p style={bodyStyle}>
            The book is in final production. Purchase details, formats, and
            distribution will be announced to the list first. Leave your email
            below and you will hear about it before anyone else.
          </p>
        </div>

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(58,44,28,0.15)",
            margin: "0 0 2.5rem",
          }}
        />

        {/* Email capture */}
        <div style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              margin: "0 0 1rem",
              opacity: 0.7,
            }}
          >
            Get notified first
          </p>
          <EmailCapture />
        </div>

        {/* Divider */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(58,44,28,0.15)",
            margin: "0 0 2.5rem",
          }}
        />

        {/* Navigation */}
        <nav aria-label="Related" style={{ marginBottom: "3rem" }}>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            <li>
              <Link
                href="/story"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  color: "var(--color-content-text)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  textDecorationColor: "rgba(58,44,28,0.35)",
                }}
              >
                How it started &#x2192;
              </Link>
            </li>
            <li>
              <Link
                href="/firstsignal"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  color: "var(--color-content-text)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  textDecorationColor: "rgba(58,44,28,0.35)",
                }}
              >
                Experience The First Signal &#x2192;
              </Link>
            </li>
            <li>
              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.05rem",
                  fontStyle: "italic",
                  color: "var(--color-content-text)",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  textDecorationColor: "rgba(58,44,28,0.35)",
                }}
              >
                &#x2190; Back to Human Fr&#x113;q
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <footer
          style={{
            marginTop: "2rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(58,44,28,0.12)",
            textAlign: "center",
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--color-content-text)",
            opacity: 0.4,
          }}
        >
          &copy; {new Date().getFullYear()} Human Fr&#x113;q &middot; All rights reserved
        </footer>
      </main>

      {/* Sticky amber shop button */}
      <ShopButton />
    </>
  );
}
