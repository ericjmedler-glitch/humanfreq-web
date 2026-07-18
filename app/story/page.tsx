import type { Metadata } from "next";
import Link from "next/link";
import ShopButton from "@/components/ShopButton";
import { SHOP_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Story — Human Frēq",
  description:
    "Eric Medler created Human Frēq from a personal reset. After thirty-five years of morning radio, the microphone went quiet and the questions got louder.",
};

// Section heading component — keeps visual treatment consistent
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

export default function StoryPage() {
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
          Our Story
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
          It began with one question: what actually matters?
        </h1>
      </header>

      {/* ── STORY BODY ───────────────────────────────────────────────────── */}
      <main
        className="flex-1 px-5 pb-16 max-w-lg mx-auto w-full"
        style={{ backgroundColor: "var(--color-content-bg)" }}
      >
        {/* Opening */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={bodyStyle}>
            Eric Medler created Human Fr&#x113;q from a personal reset. After
            thirty-five years of morning radio, the microphone went quiet and the
            questions got louder. He began writing what he needed to hear. The
            book came first. The brand followed.
          </p>
        </div>

        {/* Section: From Voice to Page */}
        <div style={{ marginBottom: "3rem" }}>
          <SectionHeading>From Voice to Page</SectionHeading>
          <p style={bodyStyle}>
            For decades, Eric&rsquo;s work was built around speaking to one
            person at a time. Human Fr&#x113;q carries that same intimacy
            forward&mdash;not as nostalgia, but as a useful way to move through
            modern life with more presence and less noise.
          </p>
        </div>

        {/* Section: From Page to Daily Life */}
        <div style={{ marginBottom: "3rem" }}>
          <SectionHeading>From Page to Daily Life</SectionHeading>
          <p style={bodyStyle}>
            The ideas did not stay on the page. They became apparel,
            comfortwear, daily tools, First Signal, and the beginnings of a
            wider world built to help people protect their energy and return to
            what matters.
          </p>
        </div>

        {/* Section: A Brand People Can Make Their Own */}
        <div style={{ marginBottom: "3.5rem" }}>
          <SectionHeading>A Brand People Can Make Their Own</SectionHeading>
          <p style={bodyStyle}>
            Human Fr&#x113;q was born from Eric&rsquo;s philosophy, but it will
            earn its future through the people who wear it, read it, use it, and
            give it meaning. The brand points in a direction. The community
            decides how far it can go.
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

        {/* Conversion paths */}
        <nav aria-label="Next steps" style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              margin: "0 0 1.25rem",
              opacity: 0.7,
            }}
          >
            Where to go next
          </p>
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
              {/* Book URL not yet configured — using shop as nearest proxy until
                  a governed /book route exists. Documented in QA. */}
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
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
                Start with the Book &#x2192;
              </a>
            </li>
            <li>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
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
                Shop the Collection &#x2192;
              </a>
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
