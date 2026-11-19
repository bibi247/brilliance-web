import { NextResponse } from "next/server";
import { validate } from "@/lib/validate";

/**
 * Contact delivery. Configure ONE of:
 *  - RESEND_API_KEY + CONTACT_TO (+ optional CONTACT_FROM)  → email via Resend
 *  - CONTACT_WEBHOOK_URL                                    → JSON POST (Zapier/Make/erxes/Slack…)
 * Without either, responds 503 so the UI tells the visitor the form is not yet connected.
 */
export async function POST(req: Request) {
  let d: Record<string, string>;
  try {
    d = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_json" }, { status: 400 });
  }
  if (d.website) return NextResponse.json({ ok: true }); // honeypot: silently drop bots

  const clean = Object.fromEntries(
    ["name", "phone", "email", "subject", "message"].map((k) => [k, String(d[k] ?? "").slice(0, 4000).trim()])
  );
  const errors = validate(clean);
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM, CONTACT_WEBHOOK_URL } = process.env;
  const text = `Нэр: ${clean.name}\nУтас: ${clean.phone}\nИ-мэйл: ${clean.email || "-"}\nСэдэв: ${clean.subject}\n\n${clean.message}`;

  try {
    if (RESEND_API_KEY && CONTACT_TO) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: CONTACT_FROM || "Brilliance <onboarding@resend.dev>",
          to: CONTACT_TO.split(","),
          reply_to: clean.email || undefined,
          subject: `Brilliance вэб хүсэлт — ${clean.subject}`,
          text,
        }),
      });
      if (!r.ok) throw new Error(`resend ${r.status}`);
      return NextResponse.json({ ok: true });
    }
    if (CONTACT_WEBHOOK_URL) {
      const r = await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...clean, text, source: "brilliance-web", at: new Date().toISOString() }),
      });
      if (!r.ok) throw new Error(`webhook ${r.status}`);
      return NextResponse.json({ ok: true });
    }
  } catch (e) {
    console.error("contact delivery failed", e);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ error: "not_configured" }, { status: 503 });
}
