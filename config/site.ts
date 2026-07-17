// SINGLE SOURCE OF TRUTH for the storefront link.
// NEXT_PUBLIC_SHOP_URL overrides the locked default (set in Vercel env to migrate providers).
// Every shop button reads from here — never hardcode the URL elsewhere.
// Must be NEXT_PUBLIC_ so the value is inlined into the browser bundle.
//
// LOCKED_SHOP_URL is the canonical public destination and the build-time fallback.
// It ensures shop links are never rendered as "#" when the env var is absent
// (e.g. on Vercel Preview deployments before the env var is configured).
// To migrate providers: update NEXT_PUBLIC_SHOP_URL — do not edit this constant.
const LOCKED_SHOP_URL = "https://human-freq.printify.me";
export const SHOP_URL = process.env.NEXT_PUBLIC_SHOP_URL || LOCKED_SHOP_URL;

export const SITE_NAME = "Human Frēq";
export const SITE_DESCRIPTION =
  "Move at the frequency of your body. Apparel for people who train by feel.";
