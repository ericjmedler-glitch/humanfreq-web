"use client";

import { useEffect, useState } from "react";

// Animated scroll cue — fixed at bottom of viewport, fades after first scroll.
// Listens to the #feed div (the scroll-snap container), not window.
export default function ScrollCue() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const feed = document.getElementById("feed");
    if (!feed) return;
    const onScroll = () => {
      if (feed.scrollTop > 30) setVisible(false);
    };
    feed.addEventListener("scroll", onScroll, { passive: true });
    return () => feed.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes hf-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(5px); opacity: 1; }
        }
      `}</style>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: "110px",       /* sits above the shop button */
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "0.9rem",
            fontStyle: "italic",
            color: "var(--color-hero-text)",
            opacity: 0.65,
            animation: "hf-bounce 1.8s ease-in-out infinite",
            display: "block",
            whiteSpace: "nowrap",
          }}
        >
          See what the Fr&#x113;q is &#x2192;
        </span>
      </div>
    </>
  );
}
