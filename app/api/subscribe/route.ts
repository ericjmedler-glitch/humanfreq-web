import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: { email?: string; tag?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email, tag } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const formId = process.env.KIT_FORM_ID;
  const apiKey = process.env.KIT_API_KEY;

  if (!formId || !apiKey) {
    // Credentials not configured — return an honest failure, never a false success.
    console.error("[subscribe] KIT_FORM_ID or KIT_API_KEY not configured — subscriber NOT added.", {
      tag: tag ?? "none",
    });
    return NextResponse.json(
      { error: "Email signup is temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  try {
    const kitRes = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: apiKey, email }),
      }
    );

    if (!kitRes.ok) {
      const kitBody = await kitRes.text();
      console.error("[subscribe] Kit API error:", kitRes.status, kitBody, { tag: tag ?? "none" });
      return NextResponse.json(
        { error: "Unable to complete signup. Please try again." },
        { status: 502 }
      );
    }

    console.info("[subscribe] Subscriber added successfully.", { tag: tag ?? "none" });
    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error(
      "[subscribe] Kit fetch failed:",
      err instanceof Error ? err.message : String(err),
      { tag: tag ?? "none" }
    );
    return NextResponse.json(
      { error: "Network error during signup. Please try again." },
      { status: 503 }
    );
  }
}
