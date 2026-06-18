// SINGLE SOURCE OF TRUTH for the storefront link.
// Change this one env var to migrate to a different shop provider.
// Every shop button in the app reads from here — never hardcode the URL.
export const SHOP_URL = process.env.SHOP_URL ?? "";

export const SITE_NAME = "Human Frēq";
export const SITE_DESCRIPTION =
  "Move at the frequency of your body. Apparel for people who train by feel.";
