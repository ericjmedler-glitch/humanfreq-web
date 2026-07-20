"use client";

// RIGHTS RECORD:
// LINK AUTHORIZED BY ERIC — UNDERLYING MUSIC RIGHTS NOT INDEPENDENTLY CLEARED.
// Do not embed, rehost, download, autoplay, monetize, or redistribute the video.
// Do not reproduce Colin Hay's lyrics in any form.
// This component renders an external click-through link only.

import { useState } from "react";

interface FirstSignalGateProps {
  tiktokUrl: string;
}

export default function FirstSignalGate({ tiktokUrl }: FirstSignalGateProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div>
      {!revealed ? (
        /* ── Gate — shown before reader confirms completion ────────────── */
        <section aria-label="Completion gate">
          {/* Warning */}
          <p
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-content-text)",
              marginBottom: "1.5rem",
            }}
          >
            Wait until the end.
          </p>

          <div
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.15rem",
              lineHeight: 1.65,
              color: "var(--color-content-text)",
            }}
          >
            <p>
              If you have not finished reading or listening to HUMAN FR&#x112;Q,
              stop here.
            </p>
            <p style={{ marginTop: "0.85rem" }}>
              When you reach the end, come back.
            </p>
          </div>

          {/* Completion button */}
          <button
            type="button"
            onClick={() => setRevealed(true)}
            aria-label="I have finished HUMAN FRĒQ — show me The First Signal"
            style={{
              display: "block",
              marginTop: "2.25rem",
              padding: "0.9rem 2rem",
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-hero-text)",
              backgroundColor: "var(--color-content-text)",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            I finished. Show me the First Signal.
          </button>
        </section>
      ) : (
        /* ── Revealed — shown after reader confirms completion ─────────── */
        <section aria-label="The First Signal">
          <div
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.18rem",
              lineHeight: 1.65,
              color: "var(--color-content-text)",
            }}
          >
            <p>You finished the book.</p>
            <p style={{ marginTop: "0.75rem" }}>
              Now you may see the moment before it began.
            </p>
            <p
              style={{
                marginTop: "1.25rem",
                fontStyle: "italic",
                color: "var(--color-muted)",
                fontSize: "1.05rem",
              }}
            >
              This was recorded moments before I sat down and began putting
              structure around HUMAN FR&#x112;Q.
            </p>
          </div>

          {/* Watch link — external, opens in new tab, no embed */}
          <div style={{ marginTop: "2.25rem" }}>
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.9rem 2rem",
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#07050a",
                backgroundColor: "var(--color-amber)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--color-amber-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--color-amber)";
              }}
            >
              Watch The First Signal
            </a>
          </div>

          {/* Display URL lockup */}
          <p
            style={{
              marginTop: "1.25rem",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              color: "var(--color-muted)",
            }}
          >
            HUMANFR&#x112;Q.COM/FIRSTSIGNAL
          </p>
        </section>
      )}
    </div>
  );
}
