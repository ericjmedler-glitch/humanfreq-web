import type { Metadata } from "next";
import Link from "next/link";
import { BOOK_CONFIG, STATUS_LABELS } from "@/config/book";
import BookInterestCapture from "@/components/BookInterestCapture";
import ShopButton from "@/components/ShopButton";

export const metadata: Metadata = {
  title: "HUMAN FRĒQ — A Book by Eric Medler",
  description:
    "A field guide for people who have spent years tuned to noise, urgency, and expectation — and are ready to hear themselves again. By Eric Medler.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "HUMAN FRĒQ — A Book by Eric Medler",
    description:
      "A field guide for people who have spent years tuned to noise, urgency, and expectation — and are ready to hear themselves again.",
    url: "/book",
    images: [
      {
        url: "/images/HumanFreq_IMAGE ONLY_Logo_Cream_4000px.png",
        width: 1679,
        height: 1679,
        alt: "HUMAN FRĒQ book cover by Eric Medler.",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "HUMAN FRĒQ — A Book by Eric Medler",
    description:
      "A field guide for people who have spent years tuned to noise, urgency, and expectation — and are ready to hear themselves again.",
    images: ["/images/HumanFreq_IMAGE ONLY_Logo_Cream_4000px.png"],
  },
};

// ── Analytics event helpers (staged — no collection until launch) ──────────
// Events: book_page_view, book_primary_cta_click, book_interest_signup_start,
//         book_interest_signup_success, book_interest_signup_failure,
//         book_checkout_click, book_format_interest_click, book_faq_open, book_sample_open
// Install an analytics platform only after Eric approves. Do not fire events in staging.

const ebookAvailable = BOOK_CONFIG.ebook.status === "available" && !!BOOK_CONFIG.ebook.checkoutUrl;

// ── Section styles ──────────────────────────────────────────────────────────
const sectionBase = "px-5 max-w-lg mx-auto w-full";

export default function BookPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <header
        id="main-content"
        className="w-full"
        style={{ backgroundColor: "#07050A" }}
      >
        {/* Back nav */}
        <div className={`${sectionBase} pt-10 pb-0`}>
          <Link
            href="/"
            className="inline-block transition-opacity hover:opacity-60"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C09030",
              textDecoration: "none",
            }}
          >
            ← Human Frēq
          </Link>
        </div>

        {/* Cover + title block */}
        <div className={`${sectionBase} pt-10 pb-14`}>
          {/* Cover image suppressed: the v1.18 cover contains an unresolved subtitle
              that has not been approved for public publication. A title-only typographic
              block is used in its place. The image asset is preserved for later use
              once a final subtitle decision has been made. */}

          {/* Typographic title block — used in place of cover image */}
          <div
            className="mx-auto mb-10"
            style={{
              maxWidth: "260px",
              border: "1px solid rgba(200,169,110,0.35)",
              borderRadius: "6px",
              padding: "2.5rem 1.5rem",
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.03)",
            }}
          >
            <p style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C09030", margin: "0 0 1rem", opacity: 0.8 }}>
              Human Fr&#x113;q
            </p>
            <div style={{ fontSize: "2.5rem", color: "#C09030", lineHeight: 1, marginBottom: "1rem" }}>○</div>
            <p style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "clamp(1rem, 4vw, 1.2rem)", letterSpacing: "0.1em", color: "#EDE5D4", margin: "0 0 0.75rem" }}>
              HUMAN FR&#x112;Q
            </p>
            <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "0.85rem", fontStyle: "italic", color: "#EDE5D4", opacity: 0.6, margin: 0 }}>
              by Eric Medler
            </p>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "clamp(1.6rem, 6vw, 2.2rem)",
              fontWeight: 400,
              letterSpacing: "0.1em",
              lineHeight: 1.15,
              color: "#EDE5D4",
              textAlign: "center",
              marginBottom: "0.5rem",
            }}
          >
            HUMAN FRĒQ
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C09030",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            by Eric Medler
          </p>

          {/* Recognition statement */}
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.05rem, 3.5vw, 1.2rem)",
              lineHeight: 1.65,
              color: "#EDE5D4",
              textAlign: "center",
              opacity: 0.9,
              marginBottom: "2.5rem",
            }}
          >
            A human being can do remarkable things. But when doing begins to
            replace being, it&rsquo;s time to come back.
          </p>

          {/* Primary CTA — State A (checkout unavailable) */}
          {!ebookAvailable && (
            <div className="flex flex-col items-center gap-3">
              <p
                style={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C09030",
                  textAlign: "center",
                }}
              >
                The digital edition is being prepared for release
              </p>
              <div className="w-full max-w-sm">
                <BookInterestCapture
                  format="ebook"
                  supportingText="Join the release list for the digital edition. This does not place an order."
                />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "0.85rem",
                  color: "#EDE5D4",
                  opacity: 0.45,
                  textAlign: "center",
                }}
              >
                No spam. One clear message when the edition is ready.
              </p>
            </div>
          )}

          {/* Primary CTA — State B (checkout available) */}
          {ebookAvailable && (
            <div className="flex flex-col items-center gap-3">
              <a
                href={BOOK_CONFIG.ebook.checkoutUrl!}
                rel="noopener noreferrer"
                className="inline-block rounded-lg px-8 py-3 font-semibold tracking-wide transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "#C09030",
                  color: "#07050A",
                  fontFamily: "var(--font-cinzel), serif",
                  fontSize: "0.85rem",
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                }}
              >
                Buy the ebook
              </a>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "0.9rem",
                  color: "#EDE5D4",
                  opacity: 0.6,
                  textAlign: "center",
                }}
              >
                EPUB · Immediate digital delivery
              </p>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 w-full" style={{ backgroundColor: "#F3EDE0" }}>

        {/* ── WHAT THIS BOOK IS ──────────────────────────────────────────── */}
        <section
          aria-labelledby="about-book-heading"
          className={`${sectionBase} pt-14 pb-10`}
        >
          <h2
            id="about-book-heading"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7a6a5a",
              marginBottom: "1.5rem",
            }}
          >
            What this book is
          </h2>
          <div
            className="space-y-5"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.15rem",
              lineHeight: 1.7,
              color: "#2a1f14",
            }}
          >
            <p>
              HUMAN FR&#x112;Q is a field guide for people who have spent years
              responding to noise, expectation, urgency, and performance — and are
              ready to hear themselves again.
            </p>
            <p>
              It begins with a simple premise: you are not broken. You may simply
              have spent too long tuned to signals that were never yours.
            </p>
            <p>
              The book explores presence, receiving, discernment, relationship,
              intelligence, trust, nature, attention, and the quiet work of
              returning to your own frequency.
            </p>
            <p>
              It is not a program for becoming impressive. It is an invitation to
              become available to your own life.
            </p>
          </div>
        </section>

        {/* ── WHAT YOU RECEIVE ──────────────────────────────────────────── */}
        <section
          aria-labelledby="what-you-receive-heading"
          className={`${sectionBase} pt-2 pb-10`}
          style={{ borderTop: "1px solid rgba(42,31,20,0.1)" }}
        >
          <h2
            id="what-you-receive-heading"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7a6a5a",
              marginBottom: "1.5rem",
              marginTop: "2rem",
            }}
          >
            What you receive
          </h2>
          <div
            className="space-y-3"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: "#2a1f14",
            }}
          >
            <p>
              <strong>Format:</strong> EPUB — the standard reflowable ebook
              format supported by Apple Books, Kobo, Google Play Books, and any
              device with a compatible reading app.
            </p>
            <p>
              <strong>Delivery:</strong> Immediately after a confirmed purchase,
              through the secure checkout and download system named on the
              purchase page.
            </p>
            <p>
              <strong>Support:</strong> If the file does not arrive or open
              correctly, reply through the support method in your receipt with
              your purchase email, device, and a description of what happened.
            </p>
            <p
              style={{ opacity: 0.65, fontSize: "0.95rem" }}
            >
              The exact included format, delivery method, device compatibility,
              and support path will be stated clearly on the purchase page before
              checkout. No purchase button appears until those promises have been
              tested end to end.
            </p>
          </div>
        </section>

        {/* ── FORMAT CARDS ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="formats-heading"
          className={`${sectionBase} pt-2 pb-12`}
          style={{ borderTop: "1px solid rgba(42,31,20,0.1)" }}
        >
          <h2
            id="formats-heading"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7a6a5a",
              marginBottom: "1.5rem",
              marginTop: "2rem",
            }}
          >
            Editions
          </h2>

          <div className="space-y-4">
            {/* Ebook card */}
            <div
              className="rounded-xl p-5"
              style={{
                backgroundColor: "#EDE5D4",
                border: "1.5px solid #C09030",
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3
                  style={{
                    fontFamily: "var(--font-cinzel), serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#2a1f14",
                  }}
                >
                  Ebook
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-cinzel), serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#C09030",
                    whiteSpace: "nowrap",
                  }}
                >
                  {STATUS_LABELS[BOOK_CONFIG.ebook.status]}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                  color: "#2a1f14",
                  marginBottom: "1.25rem",
                }}
              >
                A reflowable digital edition designed for phones, tablets, and
                e-readers.
              </p>
              {ebookAvailable ? (
                <a
                  href={BOOK_CONFIG.ebook.checkoutUrl!}
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg px-5 py-2.5 transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: "#C09030",
                    color: "#07050A",
                    fontFamily: "var(--font-cinzel), serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textDecoration: "none",
                  }}
                >
                  Buy the ebook
                </a>
              ) : (
                <BookInterestCapture
                  format="ebook"
                  label="Notify me when the ebook is ready"
                  supportingText="This does not place an order."
                />
              )}
            </div>

            {/* Audiobook card */}
            <div
              className="rounded-xl p-5"
              style={{
                backgroundColor: "#EDE5D4",
                border: "1px solid rgba(42,31,20,0.15)",
                opacity: 0.8,
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3
                  style={{
                    fontFamily: "var(--font-cinzel), serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#2a1f14",
                  }}
                >
                  Audiobook
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-cinzel), serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#7a6a5a",
                    whiteSpace: "nowrap",
                  }}
                >
                  In production
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                  color: "#2a1f14",
                  marginBottom: "1.25rem",
                }}
              >
                Read by Eric Medler in the same one-to-one voice in which the
                book was written.
              </p>
              <BookInterestCapture
                format="audiobook"
                label="Notify me when the audiobook is ready"
                supportingText="This does not place an order."
              />
            </div>

            {/* Hardcover card */}
            <div
              className="rounded-xl p-5"
              style={{
                backgroundColor: "#EDE5D4",
                border: "1px solid rgba(42,31,20,0.15)",
                opacity: 0.8,
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3
                  style={{
                    fontFamily: "var(--font-cinzel), serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#2a1f14",
                  }}
                >
                  Hardcover
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-cinzel), serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#7a6a5a",
                    whiteSpace: "nowrap",
                  }}
                >
                  Forthcoming
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                  color: "#2a1f14",
                  marginBottom: "1.25rem",
                }}
              >
                A physical edition built as an object meant to be kept, returned
                to, and given.
              </p>
              <BookInterestCapture
                format="hardcover"
                label="Notify me when the hardcover is ready"
                supportingText="This does not place an order."
              />
            </div>
          </div>
        </section>

        {/* ── SAMPLE SLOT (reserved) ────────────────────────────────────── */}
        {/* No excerpt is included until editorial approval. Slot reserved. */}

        {/* ── ABOUT ERIC ───────────────────────────────────────────────── */}
        <section
          aria-labelledby="about-eric-heading"
          className={`${sectionBase} pt-2 pb-12`}
          style={{ borderTop: "1px solid rgba(42,31,20,0.1)" }}
        >
          <h2
            id="about-eric-heading"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7a6a5a",
              marginBottom: "1.5rem",
              marginTop: "2rem",
            }}
          >
            About the author
          </h2>
          <div
            className="space-y-5"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "#2a1f14",
            }}
          >
            <p>
              Eric Medler spent nearly four decades speaking to people one at a
              time through radio, voice work, community service, and storytelling.
              HUMAN FR&#x112;Q grew from the period when that life became quiet
              enough for him to hear what remained.
            </p>
            <p>
              Eric is the sole founder of HUMAN FR&#x112;Q and the author of this
              book.{" "}
              <Link
                href="/story"
                style={{ color: "#8a6a2a", textDecoration: "underline" }}
              >
                Read the full story.
              </Link>
            </p>
          </div>
        </section>

        {/* ── DELIVERY AND BUYER TRUST ──────────────────────────────────── */}
        <section
          aria-labelledby="trust-heading"
          className={`${sectionBase} pt-2 pb-12`}
          style={{ borderTop: "1px solid rgba(42,31,20,0.1)" }}
        >
          <h2
            id="trust-heading"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7a6a5a",
              marginBottom: "1.5rem",
              marginTop: "2rem",
            }}
          >
            Delivery and buyer trust
          </h2>
          <div
            className="space-y-4"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "#2a1f14",
            }}
          >
            <p>
              When the ebook is available, the purchase page will state exactly
              which file format is included, how it is delivered, which devices it
              supports, where to get help, and what happens if the file does not
              arrive or open correctly.
            </p>
            <p>
              If the delivery system confirms a valid purchase but you cannot
              access the file, HUMAN FR&#x112;Q will provide a reasonable
              replacement-access path or refund according to the published policy.
            </p>
            <p>
              Your email address is used only to deliver the book and, with your
              explicit consent, to send you relevant updates. It is not shared or
              sold.
            </p>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="faq-heading"
          className={`${sectionBase} pt-2 pb-14`}
          style={{ borderTop: "1px solid rgba(42,31,20,0.1)" }}
        >
          <h2
            id="faq-heading"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7a6a5a",
              marginBottom: "1.5rem",
              marginTop: "2rem",
            }}
          >
            Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What format is the ebook?",
                a: "EPUB — the open standard ebook format.",
              },
              {
                q: "Can I read it on Kindle, Apple Books, Kobo, my phone, or my tablet?",
                a: "EPUB is supported on Apple Books, Kobo, Google Play Books, and most dedicated e-readers. Kindle requires a conversion step or the Send to Kindle service. Device compatibility will be stated clearly before purchase.",
              },
              {
                q: "Will there be an audiobook?",
                a: "Yes. It is in production, read by Eric Medler. Sign up on this page to hear when it is ready.",
              },
              {
                q: "Will there be a hardcover?",
                a: "Yes. A physical edition is planned. Sign up on this page to hear when it becomes available.",
              },
              {
                q: "What should I do if the download does not arrive?",
                a: "Reply through the support method listed in your receipt. Include the email used at checkout, the approximate purchase time, the device or reading app you are using, and a brief description of what happened.",
              },
              {
                q: "Does joining the list place an order?",
                a: "No. Joining the list means you will receive one message when the edition you selected is genuinely ready. It does not charge you, reserve a copy, or commit you to a purchase.",
              },
              {
                q: "Can I buy this as a gift?",
                a: "Gift purchasing is a future option. It is not available during this preparation period.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group"
                style={{ borderBottom: "1px solid rgba(42,31,20,0.1)", paddingBottom: "1rem" }}
              >
                <summary
                  className="cursor-pointer list-none flex justify-between items-start gap-3 py-1"
                  style={{
                    fontFamily: "var(--font-cinzel), serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    color: "#2a1f14",
                  }}
                >
                  <span>{q}</span>
                  <span
                    aria-hidden="true"
                    style={{ color: "#C09030", flexShrink: 0, fontSize: "1rem" }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: "#2a1f14",
                  }}
                >
                  {a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section
          aria-label="Final call to action"
          className={`${sectionBase} pb-16`}
          style={{ borderTop: "1px solid rgba(42,31,20,0.1)" }}
        >
          <div
            className="mt-10 rounded-xl p-8 text-center"
            style={{ backgroundColor: "#07050A" }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.1rem, 4vw, 1.3rem)",
                lineHeight: 1.6,
                color: "#EDE5D4",
                marginBottom: "1.75rem",
              }}
            >
              The final reading file, delivery system, and purchase experience
              are being tested now. Join the list to be told when it is genuinely
              ready — not merely announced.
            </p>
            <div className="flex justify-center">
              <BookInterestCapture
                format="ebook"
                supportingText="This does not place an order."
              />
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <footer
          className={`${sectionBase} mt-6 pt-8 pb-10 border-t text-center`}
          style={{
            borderColor: "rgba(42,31,20,0.1)",
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "#2a1f14",
            opacity: 0.4,
            textTransform: "uppercase",
          }}
        >
          &copy; {new Date().getFullYear()} Human Fr&#x113;q &middot; All rights
          reserved
        </footer>
      </main>

      <ShopButton />
    </>
  );
}
