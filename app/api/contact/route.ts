import { Resend } from "resend";
import { NextResponse } from "next/server";
import { isLang, type Lang } from "@/lib/i18n";

const errors: Record<Lang, { missingFields: string; missingConfig: string; tooFast: string; rateLimited: string }> = {
  fr: {
    missingFields: "Champs requis manquants",
    missingConfig: "Configuration email manquante",
    tooFast: "Veuillez réessayer.",
    rateLimited: "Trop de tentatives. Réessayez dans quelques minutes.",
  },
  en: {
    missingFields: "Missing required fields",
    missingConfig: "Missing email configuration",
    tooFast: "Please try again.",
    rateLimited: "Too many attempts. Please try again in a few minutes.",
  },
};

// Best-effort in-memory rate limit. Resets on cold start / across instances,
// but pairs with the honeypot + timing check as a deterrent for naive bots.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(req: Request) {
  const { name, email, company, message, lang: rawLang, website, elapsed } = await req.json();
  const lang: Lang = isLang(rawLang) ? rawLang : "fr";
  const t = errors[lang];

  // Honeypot: a real visitor never sees or fills this field.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  // Submitted implausibly fast to have been read and filled by a human.
  if (typeof elapsed === "number" && elapsed < 1500) {
    return NextResponse.json({ error: t.tooFast }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: t.rateLimited }, { status: 429 });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: t.missingFields }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: t.missingConfig }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "WeHighTech <contact@wehightech.com>",
    to: ["riadh.mnasri@gmail.com"],
    replyTo: email,
    subject: `Nouveau message de ${name}${company ? ` (${company})` : ""}`,
    text: `Nom : ${name}\nEmail : ${email}\nEntreprise : ${company || "Non renseignée"}\nLangue : ${lang}\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#BEFF47;background:#050508;padding:16px 24px;margin:0">WeHighTech : nouveau message</h2>
        <div style="padding:24px;background:#0C0C12;color:#EEEEF5">
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}" style="color:#BEFF47">${email}</a></p>
          <p><strong>Entreprise :</strong> ${company || "Non renseignée"}</p>
          <p><strong>Langue du site :</strong> ${lang}</p>
          <hr style="border-color:#ffffff11;margin:20px 0"/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
