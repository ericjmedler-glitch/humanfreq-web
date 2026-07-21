"use client";

import { SHOP_AVAILABLE } from "@/config/site";

// HeroShopButton renders only when SHOP_AVAILABLE is true.
// During Stage 0 containment the storefront is suppressed pending the
// product-truth, scarcity, privacy, and policy audit of human-freq.printify.me.
export default function HeroShopButton() {
  if (!SHOP_AVAILABLE) return null;

  return (
    <a
      href="#"
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
    >
      <span aria-hidden="true" style={{ fontSize: "1.2rem", lineHeight: 1 }}>
        ○
      </span>
      Shop Human Fr&#x113;q
    </a>
  );
}
