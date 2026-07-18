"use client";

import { useState } from "react";

interface BookInterestCaptureProps {
  format: "ebook" | "audiobook" | "hardcover";
  label?: string;
  supportingText?: string;
}

const FORMAT_LABELS: Record<BookInterestCaptureProps["format"], string> = {
  ebook: "Tell me when the ebook is ready",
  audiobook: "Notify me when the audiobook is ready",
  hardcover: "Notify me when the hardcover is ready",
};

export default function BookInterestCapture({
  format,
  label,
  supportingText,
}: BookInterestCaptureProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  const buttonLabel = label ?? FORMAT_LABELS[format];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), tag: `book-${format}-interest` }),
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
      <div className="space-y-2">
        <p
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.05rem",
            color: "var(--color-amber)",
            lineHeight: 1.55,
          }}
        >
          {"You're on the list. We'll reach out when it's genuinely ready. ; )"}
        </p>
        <p
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "0.9rem",
            color: "var(--color-muted)",
          }}
        >
          This does not place an order.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 w-full max-w-sm">
      {supportingText && (
        <p
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "0.95rem",
            color: "var(--color-muted)",
            lineHeight: 1.5,
          }}
        >
          {supportingText}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
        <label
          htmlFor={`book-interest-email-${format}`}
          className="sr-only"
        >
          Your email address
        </label>
        <input
          id={`book-interest-email-${format}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border px-4 py-3 text-base transition-colors"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            borderColor: "rgba(200,169,110,0.35)",
            color: "var(--color-content-text)",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.1rem",
          }}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="rounded-lg px-6 py-3 font-semibold tracking-wide transition-colors disabled:opacity-60"
          style={{
            backgroundColor: "var(--color-amber)",
            color: "#0a0a0a",
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
          }}
        >
          {state === "loading" ? "Sending…" : buttonLabel}
        </button>
        {state === "error" && (
          <p
            className="text-sm"
            style={{ color: "#c05030", fontFamily: "var(--font-cormorant), Georgia, serif" }}
            role="alert"
          >
            Something went wrong. Try again in a moment.
          </p>
        )}
      </form>
    </div>
  );
}
