/**
 * HUMAN FRĒQ — Digital Book Product Configuration
 *
 * Single source of truth for book product states and checkout URLs.
 * UI behavior derives entirely from status values.
 * A missing or absent checkout URL NEVER renders an active purchase control.
 *
 * To activate a checkout link: set the corresponding env var in Vercel.
 * To roll back to coming-soon state: remove the env var. No code change needed.
 */

export type ProductStatus =
  | "preparing"
  | "coming_soon"
  | "available"
  | "temporarily_unavailable"
  | "retired";

export interface BookConfig {
  ebook: {
    status: ProductStatus;
    /** Set NEXT_PUBLIC_PAYHIP_EBOOK_URL in Vercel env to activate checkout. */
    checkoutUrl: string | null;
  };
  audiobook: {
    status: ProductStatus;
    checkoutUrl: string | null;
  };
  hardcover: {
    status: ProductStatus;
    checkoutUrl: string | null;
  };
  /** Kit form ID for ebook release interest. Defaults to general subscribe form. */
  ebookInterestFormId: string | null;
  /** Support contact — set before launch. */
  supportEmail: string | null;
}

export const BOOK_CONFIG: BookConfig = {
  ebook: {
    status: "preparing",
    checkoutUrl: process.env.NEXT_PUBLIC_PAYHIP_EBOOK_URL ?? null,
  },
  audiobook: {
    status: "coming_soon",
    checkoutUrl: null,
  },
  hardcover: {
    status: "coming_soon",
    checkoutUrl: null,
  },
  ebookInterestFormId: process.env.NEXT_PUBLIC_EBOOK_INTEREST_FORM_ID ?? null,
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? null,
};

/** Human-readable status labels for UI display. */
export const STATUS_LABELS: Record<ProductStatus, string> = {
  preparing: "Preparing for release",
  coming_soon: "Coming soon",
  available: "Available now",
  temporarily_unavailable: "Temporarily unavailable",
  retired: "No longer available",
};
