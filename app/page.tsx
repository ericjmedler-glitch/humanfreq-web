import Image from "next/image";
import Link from "next/link";
import FeedPanel from "@/components/FeedPanel";
import ScrollCue from "@/components/ScrollCue";
import EmailCapture from "@/components/EmailCapture";
import PanelEmailCapture from "@/components/PanelEmailCapture";
import { SHOP_URL } from "@/config/site";
import type { TextPosition } from "@/components/FeedPanel";

// All panel copy lives here — plain JS strings, never in JSX attribute literals.
// Apostrophes and quotes are safe in JS strings delimited by double quotes.
const PANELS: Array<{
  image: string;
  alt: string;
  headline: string;
  body: string;
  textPosition: TextPosition;
  strongScrim?: boolean;
  signature?: string;
  emailCapture?: boolean;
}> = [
  // Panel 4 — Leggings (hero.png is the leggings fit shot despite its filename)
  {
    image: "/images/hero.png",
    alt: "Leggings fit shot",
    headline: "Made for the life you actually live.",
    body: "My girlfriend's been an athlete her whole life, so trust me, she knows the difference between good leggings and the rest. Fine was never going to fly with her. So we kept looking until we found ones she actually loved, and put our mark on them. She wears them to the studio, on the trail, and on the weekends that belong to nobody but her.",
    textPosition: "left",
    emailCapture: true,
  },
  // Panel 5 — Mug
  {
    image: "/images/mug-couple.png",
    alt: "Morning coffee, two people",
    headline: "Be where you are.",
    body: "For thirty-five years I had my coffee every morning with some pretty remarkable people. I miss that. So this mug is my reminder, and maybe yours too. When you're sitting across from someone you love and your head is somewhere else, come back. To the cup. To the table. To them.",
    textPosition: "lower",
  },
  // Panel 6 — Bottle
  {
    image: "/images/bottle-men.png",
    alt: "Water bottle, two men outdoors",
    headline: "What you carry matters.",
    body: "A few weeks ago I started drinking a gallon of water a day. Sounds simple. But somewhere in there I noticed something I didn't expect, that good water out of a good bottle just feels better. So that's the bottle we went and found. Because what you put in your body matters, and the small stuff turns out to be the big stuff.",
    textPosition: "left",
  },
  // Panel 7 — Hoodie (stronger scrim, signed by Eric)
  {
    image: "/images/done-enough.jpeg",
    alt: "Hoodie, quiet evening at home",
    headline: "Done enough.",
    body: "The journey to get here has been long, and honestly, sometimes out of my control. The one thing I wanted was to throw this on, get on the couch, and have Michelle drop her feet in my lap. Kick on the AC, pull on the hoodie, and the whole day goes quiet. I've done enough. Now we just sit here.",
    textPosition: "upper",
    strongScrim: true,
    signature: "eric",
  },
  // Panel 8 — Tee / Garden (closing panel)
  {
    image: "/images/tee-garden-duo.png",
    alt: "Tee, garden, two people",
    headline: "Right here is enough.",
    body: "You know that shirt. The one your hand goes for without thinking, and the second it's on you kind of go ahh. For a breath, you're just there. I wanted to feel that on purpose, so I made it for myself first. Turns out I'm probably not the only one who would like this.",
    textPosition: "upper",
  },
];

export default function FeedPage() {
  return (
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
      {/* Panel 1 — Hero (Landing.png = golden-hour walking women, ad match) */}
      <HeroPanel />

      {/* Panel 2 — Welcome / about the brand (welcome-couple.png, firelight) */}
      <WelcomePanel />

      {/* Panel 3 — Founders Tee (headline + body baked into the image) */}
      <FoundersTeePanel />

      {/* Panels 4-8 from data array */}
      {PANELS.map((p) => (
        <FeedPanel
          key={p.image}
          image={p.image}
          alt={p.alt}
          headline={p.headline}
          body={p.body}
          textPosition={p.textPosition}
          strongScrim={p.strongScrim}
          signature={p.signature}
          emailCapture={p.emailCapture}
        />
      ))}

      {/* Email capture — snaps into place after last panel */}
      <EmailSection />

      {/* Scroll cue — fixed overlay, fades after first scroll */}
      <ScrollCue />
    </div>
  );
}

// ── Panel 1: Hero ─────────────────────────────────────────────────────────────
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
        src="/images/Landing.png"
        alt="Two women walking a golden-hour trail"
        fill
        sizes="100vw"
        quality={85}
        style={{ objectFit: "cover", objectPosition: "center top" }}
        priority
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,5,10,0.90) 0%, rgba(7,5,10,0.44) 50%, transparent 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(7,5,10,0.55) 0%, transparent 65%)" }} />

      <div style={{ position: "absolute", bottom: "160px", left: 0, width: "72%", maxWidth: "340px", padding: "0 20px" }}>
        <p style={{ color: "var(--color-amber)", fontFamily: "var(--font-cinzel), serif", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", margin: "0 0 10px" }}>
          Human Fr&#x113;q
        </p>
        <h1 style={{ color: "var(--color-hero-text)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.85rem, 6.5vw, 2.6rem)", fontWeight: 300, lineHeight: 1.2, margin: 0 }}>
          Your energy is your currency.
          <br />
          <em>Your energy at rest is your frequency.</em>
        </h1>
        <p style={{ color: "var(--color-amber)", fontFamily: "var(--font-cinzel), serif", fontSize: "0.82rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, margin: "16px 0 0" }}>
          Early Access
        </p>
      </div>

      <PanelCTA />
    </section>
  );
}

// ── Panel 2: Welcome / about the brand ───────────────────────────────────────
function WelcomePanel() {
  // Copy in variables so no string literals appear in JSX attributes.
  const p1 = "That's me and Michelle.";
  const p2 = "I spent thirty-five years on the radio, talking to a city every morning. When that chapter ended, I had to figure out who I was without the microphone, and somewhere in that I started making things I actually wanted to wear and live in. Things that reminded me to be where I am, with the people I'm with. I'm wearing our flagship tee right here, the one I made first. It's in the shop.";
  const p3 = "This is the first collection. It wasn't built by a company. It was made by two people who needed it, who figured you might too.";
  const p4 = "A portion of every order goes to St. Jude Children's Research Hospital, because a brand about being present should help the families fighting to have more time. Everything's made to feel good on, the kind of soft you reach for without thinking. This is early access, a limited first collection. You found it early. Maybe it found you.";

  const bodyStyle: React.CSSProperties = {
    color: "var(--color-hero-text)",
    fontFamily: "var(--font-cormorant), Georgia, serif",
    fontSize: "clamp(0.95rem, 3vw, 1.08rem)",
    lineHeight: 1.62,
    margin: "0 0 14px",
    opacity: 0.92,
  };

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
        src="/images/welcome-couple.png"
        alt="Eric and Michelle by firelight"
        fill
        sizes="100vw"
        quality={85}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,5,10,0.88) 0%, rgba(7,5,10,0.55) 55%, rgba(7,5,10,0.18) 100%)" }} />

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "120px", overflowY: "auto", padding: "52px 20px 0" }}>
        <div style={{ maxWidth: "480px" }}>
          <h2 style={{ color: "var(--color-hero-text)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.6rem, 6vw, 2.2rem)", fontWeight: 300, lineHeight: 1.2, margin: "0 0 18px" }}>
            This is where it started.
          </h2>
          <p style={bodyStyle}>{p1}</p>
          <p style={bodyStyle}>{p2}</p>
          <p style={bodyStyle}>{p3}</p>
          <p style={{ ...bodyStyle, margin: "0 0 20px" }}>{p4}</p>
          <Link
            href="/story"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(0.95rem, 3vw, 1.05rem)", fontStyle: "italic", color: "var(--color-hero-text)", textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "rgba(237,229,212,0.45)", opacity: 0.8 }}
          >
            Read our story &#x2192;
          </Link>
        </div>
      </div>

      <PanelCTA />
    </section>
  );
}

// ── Panel 3: Founders Tee ─────────────────────────────────────────────────────
// The image already carries its own headline + body, so we show it whole and
// never overlay duplicate copy. Only the scarcity caption + amber CTA are added.
function FoundersTeePanel() {
  const caption =
    "It carries marks the rest of the collection won't. Small things, on the sleeve, that mean something. This is the only tee that will ever wear them.";

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
      {/* Image shown whole (contain) so the baked-in headline + body never crop */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "352px" }}>
        <Image
          src="/images/founders-tee.png"
          alt="Founders Tee"
          fill
          sizes="100vw"
          quality={85}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>

      {/* Scarcity caption + compact capture, stacked just above the CTA */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "150px",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <p
          style={{
            color: "var(--color-hero-text)",
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1rem",
            lineHeight: 1.5,
            textAlign: "center",
            maxWidth: "440px",
            margin: "0 auto",
            opacity: 0.85,
          }}
        >
          {caption}
        </p>
        <PanelEmailCapture />
      </div>

      <PanelCTA />
    </section>
  );
}

// ── CTA bar — identical position on every panel ───────────────────────────────
function PanelCTA() {
  return (
    <div style={{ position: "absolute", bottom: "32px", left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "0 20px" }}>
      <a
        href={SHOP_URL || "#"}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "var(--color-amber)", color: "#07050a", borderRadius: "9999px", padding: "0 28px", minHeight: "52px", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", boxShadow: "0 4px 20px rgba(192,144,48,0.4)", whiteSpace: "nowrap" }}
      >
        <span aria-hidden="true" style={{ fontSize: "1.1rem", lineHeight: 1 }}>○</span>
        Shop the Fr&#x113;q Shop
      </a>
      <Link
        href="/story"
        style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-hero-text)", opacity: 0.5, textDecoration: "none" }}
      >
        Fr&#x113;q Extras
      </Link>
    </div>
  );
}

// ── Email capture section ─────────────────────────────────────────────────────
function EmailSection() {
  return (
    <section
      style={{ scrollSnapAlign: "start", minHeight: "100svh", backgroundColor: "var(--color-content-bg)", color: "var(--color-content-text)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 1.25rem 5rem", boxSizing: "border-box" }}
    >
      <div style={{ maxWidth: "480px", margin: "0 auto", width: "100%" }}>
        <p style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "1.5rem", opacity: 0.7 }}>
          Grow with us
        </p>
        <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.18rem", lineHeight: 1.65, marginBottom: "1.75rem" }}>
          If you&rsquo;d like to grow with us, we&rsquo;d love to keep you up to date. New pieces, the book, wherever this goes. We&rsquo;ll only reach out when there&rsquo;s something worth sharing.
        </p>
        <EmailCapture />
        <footer style={{ marginTop: "3.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(58,44,28,0.12)", textAlign: "center", fontFamily: "var(--font-cinzel), serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-content-text)", opacity: 0.4 }}>
          &copy; {new Date().getFullYear()} Human Fr&#x113;q &middot; All rights reserved
        </footer>
      </div>
    </section>
  );
}
