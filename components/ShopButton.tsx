"use client";

import { SHOP_URL } from "@/config/site";

// Locked button text per brand spec. Cormorant renders the ē macron clearly.
const BUTTON_TEXT = "Shop Human Frēq";

export default function ShopButton() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-4 pb-4 pt-2"
      style={{ background: "linear-gradient(to top, rgba(7,5,10,0.85) 0%, transparent 100%)" }}
    >
      <a
        href={SHOP_URL || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-full px-7 text-lg font-semibold tracking-wide shadow-lg transition-colors duration-200 select-none"
        style={{
          backgroundColor: "var(--color-amber)",
          color: "#07050a",
          minHeight: "52px",
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "1.15rem",
          letterSpacing: "0.04em",
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
        {/* Enso mark */}
        <span aria-hidden="true" style={{ fontSize: "1.3rem", lineHeight: 1 }}>
          ○
        </span>
        {BUTTON_TEXT}
      </a>
    </div>
  );
}
