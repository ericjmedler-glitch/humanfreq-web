import Link from "next/link";
import Image from "next/image";
import ShopButton from "@/components/ShopButton";

// Image slot helper — drop files in public/images/ and swap out the src.
// Each slot shows alt text + a labeled placeholder until the real photo lands.
function PhotoSlot({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <figure className="my-10 -mx-5">
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={800}
          height={500}
          className="w-full object-cover"
          style={{ maxHeight: "420px" }}
        />
      ) : (
        // Placeholder shown until Eric drops the real photo in
        <div
          className="flex items-center justify-center text-center px-6"
          style={{
            backgroundColor: "rgba(58,44,28,0.08)",
            minHeight: "220px",
            borderTop: "1px solid rgba(58,44,28,0.15)",
            borderBottom: "1px solid rgba(58,44,28,0.15)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.75rem",
              color: "var(--color-muted)",
              letterSpacing: "0.08em",
            }}
          >
            [ PHOTO SLOT — {label} ]
            <br />
            Drop file at public/images/{src.replace("/images/", "")}
          </p>
        </div>
      )}
      {alt && src && (
        <figcaption
          className="mt-2 px-5 text-center"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "0.85rem",
            fontStyle: "italic",
            color: "var(--color-muted)",
          }}
        >
          {alt}
        </figcaption>
      )}
    </figure>
  );
}

export default function StoryPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
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
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
            fontWeight: 300,
            lineHeight: 1.25,
            color: "var(--color-content-text)",
          }}
        >
          About the Human Frēq whose journey brought you here
        </h1>
      </header>

      {/* ── STORY BODY ───────────────────────────────────────────────────── */}
      <main
        className="flex-1 px-5 pb-16 max-w-lg mx-auto w-full"
        style={{ backgroundColor: "var(--color-content-bg)", color: "var(--color-content-text)" }}
      >
        {/* ── Teaser recap (bridges from landing page) ── */}
        <div
          className="space-y-5 mb-8"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.18rem",
            lineHeight: 1.65,
          }}
        >
          <p>
            I spent thirty-five years on the radio. Talking to a city in the
            morning, mostly. It was a good run and I loved it, and one day it
            ended, the way things do.
          </p>
          <p>
            What came after is the real story. I had to figure out who I was
            without the microphone, and that turned out to be harder and better
            than I expected. I started writing it all down. That writing became a
            book. The working title is <em>Human Frēq</em>, and the name came
            before any of this.
          </p>
        </div>

        {/* PHOTO SLOT 1 — outdoors / trail / nature beat */}
        <PhotoSlot
          src=""
          alt=""
          label="Eric outdoors — trail, nature, movement beat"
        />

        {/* ── Full story — [ERIC TO EDIT] near-final draft ── */}
        <div
          className="space-y-5"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.18rem",
            lineHeight: 1.65,
          }}
        >
          <p>
            Here&rsquo;s how the clothing happened. While I was writing, I wanted
            something I could put on that reminded me to stay in frequency with
            who I actually am. Not a slogan. Just a feeling. You know that moment
            when you pull on the right t-shirt and your whole body goes{" "}
            <em>ahh</em> — and for a second you&rsquo;re completely here? I
            wanted that on purpose. So I made it. For me first.
          </p>
        </div>

        {/* PHOTO SLOT 2 — casual / coffee / writing beat */}
        <PhotoSlot
          src=""
          alt=""
          label="Eric writing or coffee — personal, quiet beat"
        />

        <div
          className="space-y-5"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.18rem",
            lineHeight: 1.65,
          }}
        >
          <p>
            My girlfriend loves leggings. Not just for runs and workouts, but for
            weekends that are all hers. When it&rsquo;s her time, it&rsquo;s
            leggings time. So when we made ours, &ldquo;fine&rdquo; was never
            going to cut it. We found the best ones we could and put our mark on
            them. And I&rsquo;ll say it, she looks amazing in them. This is the
            early collection. Down the road, she&rsquo;s going to design the next
            generation of Human Frēq gear herself. For now, we picked the best
            out there and made it ours.
          </p>

          <p>
            I&rsquo;ll tell you what&rsquo;s going on with me right now, too.
            I&rsquo;m in the middle of 75 Hard, a program I&rsquo;m using to
            reset a few things. One of the rules is a gallon of water a day.
            I&rsquo;m about three weeks in as I write this, and drinking that
            much, I&rsquo;ve learned something I didn&rsquo;t expect. Good water,
            from a good bottle, actually feels different. So we picked the
            highest-quality bottle we could find, because what we put in our
            bodies matters.
          </p>
        </div>

        {/* PHOTO SLOT 3 — son / Pacific Northwest / outdoor gear beat */}
        <PhotoSlot
          src=""
          alt=""
          label="Son / Pacific Northwest / van life — outdoor line beat"
        />

        <div
          className="space-y-5"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.18rem",
            lineHeight: 1.65,
          }}
        >
          <p>
            I made the first few things for myself. Then I realized other people
            do other things, and they could use the reminder too. People like my
            kids. My son has spent two years in the Pacific Northwest, living out
            of his van with his dog, learning to handle whatever the elements
            throw at him. He knows gear that doesn&rsquo;t fight you, that just
            works and lets you stay at peace in nature. I&rsquo;m hoping
            he&rsquo;ll help me build the Human Frēq outdoor line someday.
          </p>
        </div>

        {/* ── Founder note — handwriting-style web font (Caveat) ─────────── */}
        {/* [ERIC TO EDIT] — this is the personal close; edit freely */}
        <div
          className="my-12 px-6 py-8 rounded-xl"
          style={{
            backgroundColor: "rgba(192,144,48,0.08)",
            borderLeft: "3px solid var(--color-amber)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-caveat), cursive",
              fontSize: "1.4rem",
              lineHeight: 1.55,
              color: "var(--color-content-text)",
            }}
          >
            <p>
              It started as a reminder I made for myself. It&rsquo;s becoming
              something bigger than me, but it&rsquo;s still the same idea.
              Wherever you go, something&rsquo;s there to bring you back to right
              here.
            </p>
            <p className="mt-4">I&rsquo;m glad you found your way here. Welcome.</p>
            <p
              className="mt-6"
              style={{ fontSize: "1.25rem", color: "var(--color-amber)" }}
            >
              — Eric
            </p>
          </div>
        </div>

        {/* ── Back to shop CTA (text, not competing with sticky button) ─── */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              textDecoration: "none",
            }}
          >
            ← Back to Human Frēq
          </Link>
        </div>

        {/* Footer */}
        <footer
          className="mt-16 pt-8 border-t text-center"
          style={{
            borderColor: "rgba(58,44,28,0.12)",
            fontFamily: "var(--font-cinzel), serif",
            fontSize: "0.68rem",
            letterSpacing: "0.15em",
            color: "var(--color-content-text)",
            opacity: 0.45,
            textTransform: "uppercase",
          }}
        >
          &copy; {new Date().getFullYear()} Human Fr&#x113;q &middot; All rights reserved
        </footer>
      </main>

      {/* Sticky amber shop button — same as landing page */}
      <ShopButton />
    </>
  );
}
