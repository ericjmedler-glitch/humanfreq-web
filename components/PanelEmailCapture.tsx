"use client";

import { useState } from "react";

// Compact email capture for use OVER a photo panel (light text on a dark
// backing). Same Kit mechanism as the end-of-feed capture, smaller footprint
// so it never crowds the amber Shop button.
//
// All copy lives in these consts (never in JSX attributes) so apostrophes and
// quotes can't break the parser.
const HEADING = "JOIN THE FREQUENCY";
const LINE =
  "The book, the collection, and the moments that shape both. I'll reach out when something is worth sharing.";
// The " ; )" below is THREE LITERAL CHARACTERS (semicolon, space, close-paren).
// Never substitute an emoji.
const CONFIRMATION = "You're on the list. I'll only reach out when it matters.  ; )";

export default function PanelEmailCapture() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        background: "rgba(7,5,10,0.62)",
        borderRadius: "14px",
        border: "1px solid rgba(237,229,212,0.14)",
        padding: "14px 16px",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          color: "var(--color-amber)",
          fontFamily: "var(--font-cinzel), serif",
          fontSize: "0.6rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          margin: "0 0 6px",
        }}
      >
        {HEADING}
      </p>

      {state === "done" ? (
        <p
          style={{
            color: "var(--color-hero-text)",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1rem",
            lineHeight: 1.5,
            margin: 0,
            opacity: 0.92,
          }}
        >
          {CONFIRMATION}
        </p>
      ) : (
        <>
          <p
            style={{
              color: "var(--color-hero-text)",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1rem",
              lineHeight: 1.45,
              margin: "0 0 10px",
              opacity: 0.9,
            }}
          >
            {LINE}
          </p>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
          >
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                flex: "1 1 160px",
                minWidth: 0,
                borderRadius: "9999px",
                border: "1px solid rgba(237,229,212,0.3)",
                background: "rgba(255,255,255,0.92)",
                padding: "0 16px",
                minHeight: "46px",
                color: "#07050a",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1rem",
              }}
            />
            <button
              type="submit"
              disabled={state === "loading"}
              style={{
                flex: "0 0 auto",
                borderRadius: "9999px",
                border: "none",
                background: "var(--color-hero-text)",
                color: "#07050a",
                padding: "0 22px",
                minHeight: "46px",
                fontFamily: "var(--font-cinzel), serif",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                fontWeight: 600,
                whiteSpace: "nowrap",
                cursor: "pointer",
                opacity: state === "loading" ? 0.6 : 1,
              }}
            >
              {state === "loading" ? "Sending…" : "Notify me"}
            </button>
          </form>
          {state === "error" && (
            <p
              style={{
                color: "#e0a060",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "0.9rem",
                margin: "8px 0 0",
              }}
            >
              Something went wrong. Try again.
            </p>
          )}
        </>
      )}
    </div>
  );
}
