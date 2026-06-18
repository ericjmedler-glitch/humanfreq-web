"use client";

import { SHOP_URL } from "@/config/site";

// Primary above-the-fold CTA — larger and more prominent than the sticky bar.
// Same destination (SHOP_URL), different weight: this is the main pathway.
export default function HeroShopButton() {
  return (
    <a
      href={SHOP_URL || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-full transition-colors duration-200 select-none"
      style={{
        backgroundColor: "var(--color-amber)",
        color: "#07050a",
        minHeight: "56px",
        padding: "0 2rem",
        fontFamily: "var(--font-cormorant), Georgia, serif",
        fontSize: "1.25rem",
        fontWeight: 600,
        letterSpacing: "0.04em",
        boxShadow: "0 4px 24px rgba(192,144,48,0.35)",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          "var(--color-amber-hover)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.backgroundColor =
          "var(--color-amber)")
      }
    >
      <span aria-hidden="true" style={{ fontSize: "1.2rem", lineHeight: 1 }}>
        ○
      </span>
      Shop Human Frēq
    </a>
  );
}
