// SINGLE SOURCE OF TRUTH for the storefront link.
// Change this one env var to migrate to a different shop provider.
// Every shop button in the app reads from here — never hardcode the URL.
// Must be NEXT_PUBLIC_ so the value is inlined into the browser bundle; the
// client-side shop buttons read undefined otherwise.
export const SHOP_URL = process.env.NEXT_PUBLIC_SHOP_URL ?? "";

export const SITE_NAME = "Human Frēq";
export const SITE_DESCRIPTION =
  "Move at the frequency of your body. Apparel for people who train by feel.";
