# CLAUDE / ENGINEERING WORK ORDER
## Expedited digital-book launch

Repository: `ericjmedler-glitch/humanfreq-web`
Branch: `feature/expedited-book-launch`

## Objective
Create the fastest trustworthy path from HUMANFREQ.COM to a direct purchase of the Digital Early Access Edition.

## Required experience
- One primary CTA: `Read HUMAN FRĒQ Now`
- CTA uses the Payhip direct checkout URL supplied by Eric.
- Mobile-first, but verified on phone, tablet, laptop, and desktop.
- No forced account creation on the HUMAN FRĒQ site.
- No modal before checkout.
- Preserve current Vercel protection and governance constraints until explicitly authorized otherwise.
- Add a secondary email signup for The Weekly Frēq.
- Explain that purchasers receive complimentary early audiobook access when available and release news for hardcover and audiobook.
- Do not imply the audiobook or hardcover is available today.
- Do not introduce new public references to Michelle.
- Use “frequency” rather than “signal” where genuinely earned.
- No em dashes in public copy.

## Suggested implementation
1. Add a governed early-access sales section to the homepage.
2. Use an environment variable for the Payhip direct checkout URL: `NEXT_PUBLIC_BOOK_CHECKOUT_URL`.
3. Add a simple `/book` route with cover, short promise, included items, direct checkout button, email signup, and accessible FAQ.
4. Add analytics events for book page view, checkout click, and newsletter signup.
5. Verify responsive composition at common phone, tablet, laptop, and desktop widths.
6. Return screenshots and evidence. Do not deploy publicly without the existing authorization gate.

## Acceptance criteria
- Customer reaches checkout in one click from the primary CTA.
- No horizontal scroll or cropped cover on any target breakpoint.
- CTA is keyboard accessible.
- Copy exactly matches the approved launch offer.
- No claim of immediate audiobook or hardcover availability.
