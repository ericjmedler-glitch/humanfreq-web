"use client";

import { SHOP_AVAILABLE } from "@/config/site";

// ShopButton renders only when SHOP_AVAILABLE is true.
// During Stage 0 containment the storefront is suppressed pending the
// product-truth, scarcity, privacy, and policy audit of human-freq.printify.me.
export default function ShopButton() {
  if (!SHOP_AVAILABLE) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-4 pt-2"
      style={{ background: "linear-gradient(to top, rgba(7,5,10,0.85) 0%, transparent 100%)" }}
    >
      <a
        href="#"
        className="flex items-center gap-3 rounded-full px-7 text-lg font-semibold tracking-wide shadow-lg transition-colors duration-200 select-none"
        style={{
          backgroundColor: "var(--color-amber)",
          color: "#07050a",
          minHeight: "52px",
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "1.15rem",
          letterSpacing: "0.04em",
        }}
      >
        <span aria-hidden="true" style={{ fontSize: "1.3rem", lineHeight: 1 }}>
          ○
        </span>
        Shop Human Fr&#x113;q
      </a>
    </div>
  );
}
