import Image from "next/image";
import Link from "next/link";
import { SHOP_URL } from "@/config/site";
import PanelEmailCapture from "@/components/PanelEmailCapture";

// Text block position within the panel.
// "lower-left" | "lower" | "upper" | "left"
export type TextPosition = "lower-left" | "lower" | "upper" | "left";

type FeedPanelProps = {
  image: string;           // path relative to /public, e.g. "/images/hero.png"
  alt: string;
  headline: string;
  body: string;
  textPosition: TextPosition;
  priority?: boolean;      // true for first panel only
  strongScrim?: boolean;   // darker overlay for high-contrast scenes
  signature?: string;      // optional signoff rendered below body (e.g. "eric")
  emailCapture?: boolean;  // compact Kit capture above the CTA; copy moves up
};

// Scrim gradient behind text, angled per text position, keeps copy legible on
// any image without washing out the photo. When `strong` is set the gradient
// runs darker and deeper for scenes that need the copy to really hold.
function scrimStyle(pos: TextPosition, strong = false): React.CSSProperties {
  const base = "rgba(7,5,10,";
  if (strong) {
    switch (pos) {
      case "upper":
        return { background: `linear-gradient(to bottom, ${base}0.92) 0%, ${base}0.60) 55%, ${base}0.30) 100%)` };
      case "lower":
      case "lower-left":
        return { background: `linear-gradient(to top, ${base}0.92) 0%, ${base}0.60) 55%, ${base}0.30) 100%)` };
      case "left":
        return { background: `linear-gradient(to right, ${base}0.92) 0%, ${base}0.58) 60%, ${base}0.30) 100%)` };
    }
  }
  switch (pos) {
    case "upper":
      return { background: `linear-gradient(to bottom, ${base}0.72) 0%, ${base}0.28) 55%, transparent 100%)` };
    case "lower":
    case "lower-left":
      return { background: `linear-gradient(to top, ${base}0.82) 0%, ${base}0.38) 52%, transparent 100%)` };
    case "left":
      return { background: `linear-gradient(to right, ${base}0.78) 0%, ${base}0.32) 55%, transparent 100%)` };
  }
}

// Absolute position of the copy block within the panel.
function textBlockStyle(pos: TextPosition): React.CSSProperties {
  const base: React.CSSProperties = { position: "absolute", padding: "0 20px" };
  switch (pos) {
    case "upper":
      return { ...base, top: "60px", left: 0, right: 0 };
    case "lower":
      return { ...base, bottom: "160px", left: 0, right: 0 };
    case "lower-left":
      return { ...base, bottom: "160px", left: 0, width: "65%", maxWidth: "320px" };
    case "left":
      return { ...base, top: "50%", transform: "translateY(-50%)", left: 0, width: "60%", maxWidth: "300px" };
  }
}

export default function FeedPanel({
  image,
  alt,
  headline,
  body,
  textPosition,
  priority = false,
  strongScrim = false,
  signature,
  emailCapture = false,
}: FeedPanelProps) {
  // With a capture pinned to the bottom, force the copy to the top so the two
  // never collide and the Shop button stays clear.
  const copyPosition: TextPosition = emailCapture ? "upper" : textPosition;
  return (
    <section
      style={{
        position: "relative",
        height: "100svh",
        scrollSnapAlign: "start",
        overflow: "hidden",
        backgroundColor: "var(--color-hero-bg)",
        flexShrink: 0,
      }}
    >
      {/* Photo — Next.js optimized, served as WebP, responsive sizes */}
      <Image
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        quality={85}
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority={priority}
      />

      {/* Directional scrim for text legibility */}
      <div style={{ position: "absolute", inset: 0, ...scrimStyle(copyPosition, strongScrim) }} />

      {/* Copy block */}
      <div style={textBlockStyle(copyPosition)}>
        <h2
          style={{
            color: "var(--color-hero-text)",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.75rem, 6.5vw, 2.6rem)",
            fontWeight: 300,
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {headline}
        </h2>
        <p
          style={{
            color: "var(--color-hero-text)",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1rem, 3.5vw, 1.15rem)",
            lineHeight: 1.55,
            marginTop: "10px",
            opacity: 0.88,
          }}
        >
          {body}
        </p>
        {signature ? (
          <p
            style={{
              color: "var(--color-hero-text)",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.25rem",
              fontStyle: "italic",
              lineHeight: 1.2,
              marginTop: "14px",
              opacity: 0.85,
            }}
          >
            {signature}
          </p>
        ) : null}
      </div>

      {/* Compact email capture, pinned just above the CTA */}
      {emailCapture ? (
        <div style={{ position: "absolute", left: 0, right: 0, bottom: "150px", padding: "0 20px" }}>
          <PanelEmailCapture />
        </div>
      ) : null}

      {/* Shop CTA + quiet extras link — identical position on every panel */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          padding: "0 20px",
        }}
      >
        <a
          href={SHOP_URL || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "var(--color-amber)",
            color: "#07050a",
            borderRadius: "9999px",
            padding: "0 28px",
            minHeight: "52px",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.15rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(192,144,48,0.4)",
            whiteSpace: "nowrap",
          }}
        >
          <span aria-hidden="true" style={{ fontSize: "1.1rem", lineHeight: 1 }}>○</span>
          Shop the Fr&#x113;q Shop
        </a>

        {/* "Frēq Extras" — sentence case, no uppercase, macron must render clearly */}
        <Link
          href="/story"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.62rem",
            letterSpacing: "0.14em",
            color: "var(--color-hero-text)",
            opacity: 0.5,
            textDecoration: "none",
          }}
        >
          Fr&#x113;q Extras
        </Link>
      </div>

    </section>
  );
}
