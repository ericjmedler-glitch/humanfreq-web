import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const formId = process.env.KIT_FORM_ID;
  const apiKey = process.env.KIT_API_KEY;

  if (!formId || !apiKey) {
    // Kit not configured — log and succeed silently so email capture never blocks
    console.warn("[subscribe] KIT_FORM_ID or KIT_API_KEY not set");
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: apiKey, email }),
      }
    );
    if (!res.ok) {
      const body = await res.text();
      console.warn("[subscribe] Kit error:", res.status, body);
    }
  } catch (err) {
    // Kit is non-fatal — log and continue
    console.warn("[subscribe] Kit fetch failed:", err);
  }

  return NextResponse.json({ ok: true });
}
