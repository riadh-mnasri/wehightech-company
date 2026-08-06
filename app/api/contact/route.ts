import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Configuration email manquante" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "WeHighTech <contact@wehightech.com>",
    to: ["riadh.mnasri@gmail.com"],
    replyTo: email,
    subject: `Nouveau message de ${name}${company ? ` (${company})` : ""}`,
    text: `Nom : ${name}\nEmail : ${email}\nEntreprise : ${company || "Non renseignée"}\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#BEFF47;background:#050508;padding:16px 24px;margin:0">WeHighTech : nouveau message</h2>
        <div style="padding:24px;background:#0C0C12;color:#EEEEF5">
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}" style="color:#BEFF47">${email}</a></p>
          <p><strong>Entreprise :</strong> ${company || "Non renseignée"}</p>
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
