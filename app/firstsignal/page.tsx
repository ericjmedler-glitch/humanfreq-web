import type { Metadata } from "next";
import Link from "next/link";
import FirstSignalGate from "./FirstSignalGate";

// RIGHTS RECORD:
// LINK AUTHORIZED BY ERIC — UNDERLYING MUSIC RIGHTS NOT INDEPENDENTLY CLEARED.
// Do not embed, rehost, download, autoplay, monetize, or redistribute the video.
// Do not reproduce Colin Hay's lyrics in any form.
// Destination is an external click-through link to the authorized public TikTok post.

const TIKTOK_URL = "https://www.tiktok.com/t/ZTSKp1uFC/";

export const metadata: Metadata = {
  title: "THE FIRST SIGNAL — Human Frēq",
  description:
    "A video recorded moments before HUMAN FRĒQ began. Wait until you have finished the book.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "THE FIRST SIGNAL — Human Frēq",
    description: "A video recorded moments before HUMAN FRĒQ began.",
    siteName: "Human Frēq",
    locale: "en_US",
    type: "website",
  },
};

export default function FirstSignalPage() {
  return (
    <>
      {/* ── PAGE HEADER ────────────────────────────────────────────────────── */}
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
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "clamp(1.3rem, 5vw, 1.9rem)",
            fontWeight: 400,
            letterSpacing: "0.14em",
            lineHeight: 1.2,
            color: "var(--color-content-text)",
          }}
        >
          THE FIRST SIGNAL
        </h1>
      </header>

      {/* ── MAIN ───────────────────────────────────────────────────────────── */}
      <main
        id="main-content"
        className="flex-1 px-5 pb-20 max-w-lg mx-auto w-full"
        style={{
          backgroundColor: "var(--color-content-bg)",
          color: "var(--color-content-text)",
        }}
      >
        {/* Interactive completion gate */}
        <FirstSignalGate tiktokUrl={TIKTOK_URL} />

        {/* Divider */}
        <div
          className="my-12"
          style={{ borderTop: "1px solid rgba(58,44,28,0.15)" }}
          role="separator"
        />

        {/* ── Origin context — always visible ─────────────────────────────── */}
        <section aria-labelledby="about-heading">
          <h2
            id="about-heading"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              marginBottom: "1.5rem",
            }}
          >
            About this video
          </h2>

          <div
            className="space-y-5"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "var(--color-content-text)",
            }}
          >
            <p>
              Eric was unemployed and needed to be himself again&mdash;to
              &ldquo;be me.&rdquo; When that happens, he reaches for his old
              friend with six strings and something to say.
            </p>
            <p>
              The video was recorded moments before he sat down to begin putting
              structure around HUMAN FR&#x112;Q. Storytelling was his doorway,
              as it has always been.
            </p>
            <p>
              As a seventh grader in Brockport, New York, Eric was editor of
              the Edzel Gazette, a newspaper created with carbon paper and the
              work of a group of enterprising seventh graders. The child who
              made that newspaper may always have known he would someday find a
              story of his own to put on paper.
            </p>
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────────────────────── */}
        <footer
          className="mt-16 pt-8 border-t text-center"
          style={{
            borderColor: "rgba(58,44,28,0.12)",
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <nav aria-label="Footer navigation">
            <Link
              href="/"
              style={{
                color: "var(--color-muted)",
                textDecoration: "none",
              }}
            >
              ← Back to Human Frēq
            </Link>
          </nav>
          <p
            style={{
              marginTop: "0.85rem",
              color: "var(--color-content-text)",
              opacity: 0.4,
            }}
          >
            &copy; {new Date().getFullYear()} Human Fr&#x113;q &middot; All
            rights reserved
          </p>
        </footer>
      </main>
    </>
  );
}
