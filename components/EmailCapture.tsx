"use client";

import { useState } from "react";

// Confirmation copy: " ; )" must render as THREE LITERAL CHARACTERS — never an emoji.
const CONFIRMATION =
  "Your inbox isn’t a human Frēq, so if you don’t see us, peek in spam. The AI running things back there is still “working on its presence.”  ; )";

export default function EmailCapture() {
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
      if (res.ok) {
        setState("done");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p
        className="text-base leading-relaxed"
        style={{ color: "var(--color-content-text)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.05rem" }}
        // The " ; )" below is literal characters — do not convert to emoji
        dangerouslySetInnerHTML={{ __html: CONFIRMATION }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
      <input
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full rounded-lg border px-4 py-3 text-base outline-none transition-colors"
        style={{
          backgroundColor: "rgba(255,255,255,0.6)",
          borderColor: "rgba(58,44,28,0.3)",
          color: "var(--color-content-text)",
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "1.1rem",
        }}
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="rounded-lg px-6 py-3 text-base font-semibold tracking-wide transition-colors disabled:opacity-60"
        style={{
          backgroundColor: "var(--color-content-text)",
          color: "var(--color-content-bg)",
          fontFamily: "var(--font-cinzel), serif",
          fontSize: "0.85rem",
          letterSpacing: "0.12em",
        }}
      >
        {state === "loading" ? "Sending…" : "Grow with us →"}
      </button>
      {state === "error" && (
        <p className="text-sm" style={{ color: "#a05030" }}>
          Something went wrong. Try again or email us directly.
        </p>
      )}
    </form>
  );
}
