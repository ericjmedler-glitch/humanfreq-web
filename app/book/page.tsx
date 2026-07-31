import { redirect } from "next/navigation";

/**
 * HUMAN FRĒQ — /book temporary redirect
 *
 * TEMPORARY REPAIR (2026-07-31, work order CW-01A).
 *
 * The Digital Early Access Edition is live and verified on the Payhip
 * storefront, but this route still rendered a "being prepared for release"
 * state. That stale state is a public trust defect: it tells visitors the
 * ebook is unavailable when it is in fact purchasable.
 *
 * Until a full /book page rebuild is authorized, this route performs the
 * framework's standard temporary redirect (Next.js `redirect()`, HTTP 307)
 * to the verified sales page.
 *
 * This is deliberately temporary. A 307 preserves the ability to restore a
 * first-party /book experience later without any cached permanent redirect
 * lingering in browsers or intermediaries. Do not change this to
 * `permanentRedirect()` without explicit authorization.
 *
 * To revert: restore this file from commit 061b9fca0f31a3edc4d85fbbc917556f731fff9f
 *   git checkout 061b9fca0f31a3edc4d85fbbc917556f731fff9f -- app/book/page.tsx
 *
 * Scope note: this repair intentionally does not touch config/site.ts,
 * SHOP_AVAILABLE, config/book.ts, Printify links, Payhip configuration, or
 * the First Edition. It introduces no second commerce configuration system.
 */

/** Verified live sales destination for the Digital Early Access Edition. */
const BOOK_SALES_URL = "https://payhip.com/humanfreq";

export default function BookPage() {
  redirect(BOOK_SALES_URL);
}
