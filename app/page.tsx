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
  objectPosition?: string;
  strongScrim?: boolean;
  signature?: string;
  emailCapture?: boolean;
}> = [
  // Panel 4 — Leggings (hero.png is the leggings fit shot despite its filename)
  {
    image: "/images/hero.png",
    alt: "Leggings fit shot",
    headline: "Made for the life you actually live.",
    body: "These are the leggings you reach for when the day could go anywhere. Supportive enough for movement, comfortable enough for the hours after, and clean enough to live in beyond the workout. The point was never to make another pair. It was to choose one worth putting the HUMAN FRĒQ mark on.",
    textPosition: "left",
    objectPosition: "center 60%",
    emailCapture: true,
  },
  // Panel 5 — Mug
  {
    image: "/images/mug-couple.png",
    alt: "Morning coffee, two people",
    headline: "Be where you are.",
    body: "For thirty-five years I had my coffee every morning with some pretty remarkable people. I miss that. So this mug is my reminder, and maybe yours too. When you're sitting across from someone you love and your head is somewhere else, come back. To the cup. To the table. To them.",
    textPosition: "lower",
    objectPosition: "center top",
  },
  // Panel 6 — Bottle
  {
    image: "/images/bottle-men.png",
    alt: "Water bottle, two men outdoors",
    headline: "What you carry matters.",
    body: "A few weeks ago I started drinking a gallon of water a day. Sounds simple. But somewhere in there I noticed something I didn't expect, that good water out of a good bottle just feels better. So that's the bottle we went and found. Because what you put in your body matters, and the small stuff turns out to be the big stuff.",
    textPosition: "left",
    objectPosition: "center 40%",
  },
  // Panel 7 — Founders Tee (stronger scrim, signed by Eric)
    {
    image: "/images/founders-tee-approved-master-v1.jpg",
    alt: "Eric Medler wearing the Founders Tee, HUMAN FRĒQ",
    headline: "Done enough.",
    body: "Some days ask enough of you. This is the layer you pull on when the work is finished, the noise can stop, and you can finally come back to yourself. Soft, familiar, and made for the moment the whole day goes quiet.",
    textPosition: "upper",
    objectPosition: "center 25%",
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
      id="main-content"
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
          objectPosition={p.objectPosition}
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
      className="hf-feed-panel"
      style={{
        height: "100svh",
        scrollSnapAlign: "start",
        overflow: "hidden",
        backgroundColor: "var(--color-hero-bg)",
        flexShrink: 0,
        position: "relative",
      }}
    >
      {/* Image cell */}
      <div className="hf-panel-media">
        <Image
          src="/images/Landing.png"
          alt="Two women walking a golden-hour trail"
          fill
          sizes="(min-width: 1024px) 56vw, 100vw"
          quality={85}
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,5,10,0.90) 0%, rgba(7,5,10,0.44) 50%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(7,5,10,0.55) 0%, transparent 65%)" }} />

        {/* Mobile-only: overlaid text and CTA */}
        <div className="hf-panel-mobile-only">
          <div style={{ position: "absolute", bottom: "160px", left: 0, width: "72%", maxWidth: "340px", padding: "0 20px" }}>
            <p style={{ color: "var(--color-amber)", fontFamily: "var(--font-cinzel), serif", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", margin: "0 0 10px" }}>
              Human Fr&#x113;q
            </p>
            <h1 style={{ color: "var(--color-hero-text)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.85rem, 6.5vw, 2.6rem)", fontWeight: 300, lineHeight: 1.2, margin: 0 }}>
              Your energy is your currency.
              <br />
              <em>Your energy at rest is your frequency.</em>
            </h1>
            <p style={{ color: "var(--color-hero-text)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(0.9rem, 3vw, 1rem)", lineHeight: 1.5, margin: "14px 0 8px", opacity: 0.8 }}>
              Book &amp; Apparel for people who train by feel.
            </p>
            <p style={{ color: "var(--color-amber)", fontFamily: "var(--font-cinzel), serif", fontSize: "0.82rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, margin: "0" }}>
              Early Access
            </p>
          </div>
          <PanelCTA isHero />
        </div>
      </div>

      {/* Desktop: right text column */}
      <div className="hf-panel-desktop-col">
        <div className="hf-panel-desktop-inner">
          <p style={{ color: "var(--color-amber)", fontFamily: "var(--font-cinzel), serif", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>
            Human Fr&#x113;q
          </p>
          <h1 style={{ color: "var(--color-hero-text)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2rem, 2.8vw, 3.2rem)", fontWeight: 300, lineHeight: 1.2, margin: "0 0 1rem" }}>
            Your energy is your currency.
            <br />
            <em>Your energy at rest is your frequency.</em>
          </h1>
          <p style={{ color: "var(--color-hero-text)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1rem, 1.1vw, 1.1rem)", lineHeight: 1.6, margin: "0 0 0.5rem", opacity: 0.82 }}>
            Book &amp; Apparel for people who train by feel.
          </p>
          <p style={{ color: "var(--color-amber)", fontFamily: "var(--font-cinzel), serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, margin: "0 0 2rem" }}>
            Early Access
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "var(--color-amber)", color: "#07050a", borderRadius: "9999px", padding: "0 28px", minHeight: "52px", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", boxShadow: "0 4px 20px rgba(192,144,48,0.4)", whiteSpace: "nowrap" }}
            >
              <span aria-hidden="true" style={{ fontSize: "1.1rem", lineHeight: 1 }}>○</span>
              Shop the Fr&#x113;q Shop
            </a>
            <Link
              href="/story"
              style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-hero-text)", opacity: 0.6, textDecoration: "none" }}
            >
              Our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Panel 2: Welcome / about the brand ───────────────────────────────────────
function WelcomePanel() {
  const p2 = "I spent thirty-five years on the radio, talking to a city every morning. When that chapter ended, I had to figure out who I was without the microphone, and somewhere in that I started making things I actually wanted to wear and live in. Things that reminded me to be where I am, with the people I'm with. I'm wearing our flagship tee right here, the one I made first. It's in the shop.";
  const p3 = "HUMAN FRĒQ began when Eric Medler started making the things he wanted to wear, use, and live with—pieces that helped him return to what mattered. The book came first. The brand grew from the same idea.";
  const p4 = "Everything's made to feel good on, the kind of soft you reach for without thinking. This is early access, a limited first collection. You found it early. Maybe it found you.";

  const bodyStyle: React.CSSProperties = {
    color: "var(--color-hero-text)",
    fontFamily: "var(--font-cormorant), Georgia, serif",
    fontSize: "clamp(0.95rem, 3vw, 1.08rem)",
    lineHeight: 1.62,
    margin: "0 0 14px",
    opacity: 0.92,
  };

  const textContent = (
    <>
      <h2 style={{ color: "var(--color-hero-text)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1.6rem, 6vw, 2.2rem)", fontWeight: 300, lineHeight: 1.2, margin: "0 0 18px" }}>
        This is where it started.
      </h2>
      <p style={bodyStyle}>{p2}</p>
      <p style={bodyStyle}>{p3}</p>
      <p style={{ ...bodyStyle, margin: "0 0 20px" }}>{p4}</p>
    </>
  );

  return (
    <section
      className="hf-feed-panel"
      style={{
        height: "100svh",
        scrollSnapAlign: "start",
        overflow: "hidden",
        backgroundColor: "var(--color-hero-bg)",
        flexShrink: 0,
        position: "relative",
      }}
    >
      {/* Image cell */}
      <div className="hf-panel-media">
        <Image
          src="/images/founder-eric-approved-v1.jpg"
          alt="Eric Medler, founder of HUMAN FRĒQ, wearing the Founders Tee"
          fill
          sizes="(min-width: 1024px) 56vw, 100vw"
          quality={85}
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,5,10,0.88) 0%, rgba(7,5,10,0.55) 55%, rgba(7,5,10,0.18) 100%)" }} />

        {/* Mobile-only: scrollable text overlay */}
        <div className="hf-panel-mobile-only">
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "120px", overflowY: "auto", padding: "52px 20px 0" }}>
            <div style={{ maxWidth: "480px" }}>
              {textContent}
              <Link
                href="/story"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(0.95rem, 3vw, 1.05rem)", fontStyle: "italic", color: "var(--color-hero-text)", textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "rgba(237,229,212,0.45)", opacity: 0.8 }}
              >
                Read our story &#x2192;
              </Link>
            </div>
          </div>
          <PanelCTA />
        </div>
      </div>

      {/* Desktop: right text column */}
      <div className="hf-panel-desktop-col">
        <div className="hf-panel-desktop-inner">
          {textContent}
          <Link
            href="/story"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.05rem", fontStyle: "italic", color: "var(--color-hero-text)", textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "rgba(237,229,212,0.45)", opacity: 0.8, display: "block", marginBottom: "2rem" }}
          >
            Read our story &#x2192;
          </Link>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "var(--color-amber)", color: "#07050a", borderRadius: "9999px", padding: "0 28px", minHeight: "52px", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", boxShadow: "0 4px 20px rgba(192,144,48,0.4)", whiteSpace: "nowrap" }}
            >
              <span aria-hidden="true" style={{ fontSize: "1.1rem", lineHeight: 1 }}>○</span>
              Shop the Fr&#x113;q Shop
            </a>
            <Link
              href="/story"
              style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-hero-text)", opacity: 0.6, textDecoration: "none" }}
            >
              Our story
            </Link>
          </div>
        </div>
      </div>
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
      className="hf-feed-panel"
      style={{
        height: "100svh",
        scrollSnapAlign: "start",
        overflow: "hidden",
        backgroundColor: "var(--color-hero-bg)",
        flexShrink: 0,
        position: "relative",
      }}
    >
      {/* Image cell */}
      <div className="hf-panel-media">
        {/* Image shown whole (contain) so the baked-in headline + body never crop */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "352px" }}>
          <Image
            src="/images/founders-tee.png"
            alt="Eric Medler wearing the Founders Tee, HUMAN FRĒQ"
            fill
            sizes="(min-width: 1024px) 56vw, 100vw"
            quality={85}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>

        {/* Mobile-only: caption + capture, stacked just above the CTA */}
        <div className="hf-panel-mobile-only">
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
        </div>
      </div>

      {/* Desktop: right text column */}
      <div className="hf-panel-desktop-col">
        <div className="hf-panel-desktop-inner">
          <p style={{ color: "var(--color-amber)", fontFamily: "var(--font-cinzel), serif", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 1.25rem" }}>
            Founders Tee
          </p>
          <p style={{ color: "var(--color-hero-text)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(1rem, 1.2vw, 1.15rem)", lineHeight: 1.65, margin: "0 0 1.75rem", opacity: 0.88 }}>
            {caption}
          </p>
          <div style={{ marginBottom: "1.75rem" }}>
            <PanelEmailCapture />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "var(--color-amber)", color: "#07050a", borderRadius: "9999px", padding: "0 28px", minHeight: "52px", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", boxShadow: "0 4px 20px rgba(192,144,48,0.4)", whiteSpace: "nowrap" }}
            >
              <span aria-hidden="true" style={{ fontSize: "1.1rem", lineHeight: 1 }}>○</span>
              Shop the Fr&#x113;q Shop
            </a>
            <Link
              href="/story"
              style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-hero-text)", opacity: 0.6, textDecoration: "none" }}
            >
              Our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA bar — identical position on every mobile panel ───────────────────────
function PanelCTA({ isHero = false }: { isHero?: boolean }) {
  return (
    <div style={{ position: "absolute", bottom: "32px", left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "0 20px" }}>
      <a
        href={SHOP_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: "var(--color-amber)", color: "#07050a", borderRadius: "9999px", padding: "0 28px", minHeight: "52px", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none", boxShadow: "0 4px 20px rgba(192,144,48,0.4)", whiteSpace: "nowrap" }}
      >
        <span aria-hidden="true" style={{ fontSize: "1.1rem", lineHeight: 1 }}>○</span>
        Shop the Fr&#x113;q Shop
      </a>
      {isHero ? null : (
        <Link
          href="/story"
          style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--color-hero-text)", opacity: 0.5, textDecoration: "none" }}
        >
          Our story
        </Link>
      )}
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
          Stay in the frequency
        </p>
        <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.18rem", lineHeight: 1.65, marginBottom: "1.75rem" }}>
          We&rsquo;re building this in the open. New pieces, the book in progress, the moments that shape it. We&rsquo;ll only reach out when there&rsquo;s something worth sharing.
        </p>
        <EmailCapture />
        <footer style={{ marginTop: "3.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(58,44,28,0.12)", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "0.95rem", lineHeight: 1.5, color: "var(--color-content-text)", opacity: 0.55, margin: "0 0 1rem" }}>
            Finished the book?{" "}
            <Link
              href="/firstsignal"
              style={{ color: "var(--color-content-text)", textDecoration: "underline", textUnderlineOffset: "3px", opacity: 0.9, fontStyle: "italic" }}
            >
              The First Signal &#x2192;
            </Link>
          </p>
          <p style={{ fontFamily: "var(--font-cinzel), serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-content-text)", opacity: 0.4, margin: 0 }}>
            &copy; {new Date().getFullYear()} Human Fr&#x113;q &middot; All rights reserved
          </p>
        </footer>
      </div>
    </section>
  );
}



