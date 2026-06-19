import Image from "next/image";
import Link from "next/link";
import FeedPanel from "@/components/FeedPanel";
import ScrollCue from "@/components/ScrollCue";
import EmailCapture from "@/components/EmailCapture";
import { SHOP_URL } from "@/config/site";

// Six panels in spec order. textPosition drives the gradient scrim direction
// and where the copy block sits within the panel.
const PANELS = [
  {
    image: "/images/hero.png",
    alt: "Two women on a golden-hour trail",
    headline: "Your energy is your currency.",
    headlineItalic: "Your energy at rest is your frequency.",
    label: "Early Access Collection · Limited Availability",
    textPosition: "lower-left" as const,
    isHero: true,
    priority: true,
  },
  {
    image: "/images/leggings-studio.png",
    alt: "Studio and trail leggings",
    headline: "Made for the life you actually live.",
    body: "Studio, trail, the in-between. Move through your day in something that feels like you.",
    textPosition: "left" as const,
  },
  {
    image: "/images/mug-couple.png",
    alt: "Morning coffee, two people",
    headline: "Be where you are.",
    body: "The first cup, the person across from you, the morning you're actually in.",
    textPosition: "lower" as const,
  },
  {
    image: "/images/hoodie-curls.png",
    alt: "Hoodie, relaxed moment",
    headline: "Easy. Like you on a good day.",
    body: "Soft enough to live in, made for the moments that are all yours.",
    textPosition: "upper" as const,
  },
  {
    image: "/images/bottle-men.png",
    alt: "Water bottle, two men outdoors",
    headline: "What you carry matters.",
    body: "Good water, good company, the day in front of you.",
    textPosition: "left" as const,
  },
  {
    image: "/images/tee-garden-duo.png",
    alt: "Tee, garden, two people",
    headline: "Right here is enough.",
    body: "Hands in the soil, someone beside you, nowhere else to be.",
    textPosition: "upper" as const,
  },
];

export default function FeedPage() {
  return (
    // Scroll-snap root — overflow here, not on body, so snap works correctly.
    // id="feed" lets ScrollCue attach its scroll listener.
    <div
      id="feed"
      style={{
        height: "100svh",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollSnapType: "y mandatory",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* Panel 1 — hero, special layout */}
      <HeroPanel />

      {/* Panels 2-6 */}
      {PANELS.slice(1).map((panel) => (
        <FeedPanel
          key={panel.image}
          image={panel.image}
          alt={panel.alt}
          headline={panel.headline}
          body={"body" in panel ? (panel as { body: string }).body : ""}
          textPosition={panel.textPosition}
        />
      ))}

      {/* Email capture — 7th snap section */}
      <EmailSection />

      {/* Animated scroll cue — fixed overlay, fades after first scroll */}
      <ScrollCue />
    </div>
  );
}

// ── Hero panel — eyebrow wordmark, split headline, early-access label ────────
function HeroPanel() {
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
      <Image
        src="/images/hero.png"
        alt="Two women on a golden-hour trail"
        fill
        sizes="100vw"
        quality={85}
        style={{ objectFit: "cover", objectPosition: "center top" }}
        priority
      />

      {/* Scrim — bottom-left emphasis */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,5,10,0.88) 0%, rgba(7,5,10,0.42) 50%, transparent 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(7,5,10,0.52) 0%, transparent 65%)" }} />

      {/* Copy */}
      <div
        style={{
          position: "absolute",
          bottom: "160px",
          left: 0,
          width: "72%",
          maxWidth: "340px",
          padding: "0 20px",
        }}
      >
        <p
          style={{
            color: "var(--color-amber)",
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.62rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Human Fr&#x113;q
        </p>
        <h1
          style={{
            color: "var(--color-hero-text)",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.85rem, 6.5vw, 2.6rem)",
            fontWeight: 300,
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          Your energy is your currency.
          <br />
          <em>Your energy at rest is your frequency.</em>
        </h1>
        <p
          style={{
            color: "var(--color-amber)",
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.58rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginTop: "14px",
            opacity: 0.85,
          }}
        >
          Early Access Collection · Limited Availability
        </p>
      </div>

      <PanelCTA />
    </section>
  );
}

// ── Identical CTA bar on every panel — shop button + quiet extras link ────────
function PanelCTA() {
  return (
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
      <Link
        href="/story"
        style={{
          fontFamily: "var(--font-cinzel), serif",
          fontSize: "0.6rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-hero-text)",
          opacity: 0.55,
          textDecoration: "none",
        }}
      >
        Fr&#x113;q Extras
      </Link>
    </div>
  );
}

// ── Email capture — 7th section, snaps into place after panel 6 ──────────────
function EmailSection() {
  return (
    <section
      style={{
        scrollSnapAlign: "start",
        minHeight: "100svh",
        backgroundColor: "var(--color-content-bg)",
        color: "var(--color-content-text)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "3rem 1.25rem 5rem",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "480px", margin: "0 auto", width: "100%" }}>
        <p
          style={{
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            marginBottom: "1.5rem",
            opacity: 0.7,
          }}
        >
          Grow with us
        </p>
        <p
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.18rem",
            lineHeight: 1.65,
            marginBottom: "1.75rem",
          }}
        >
          If you&rsquo;d like to grow with us, we&rsquo;d love to keep you up
          to date. New pieces, the book, wherever this goes. We&rsquo;ll only
          reach out when there&rsquo;s something worth sharing.
        </p>
        <EmailCapture />

        <footer
          style={{
            marginTop: "3.5rem",
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
      </div>
    </section>
  );
}
