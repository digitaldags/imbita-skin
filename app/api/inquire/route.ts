import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { partner1, partner2, date, email, tier, notes, company, elapsed } = await req.json();

    if (company || (typeof elapsed === "number" && elapsed < 3000)) {
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.INQUIRY_RECIPIENT_EMAIL!,
      subject: `New Imbita inquiry — ${partner1} & ${partner2}`,
      html: `
        <p><strong>Partner 1:</strong> ${partner1}</p>
        <p><strong>Partner 2:</strong> ${partner2}</p>
        <p><strong>Wedding date:</strong> ${date}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tier:</strong> ${tier}</p>
        <p><strong>Notes:</strong> ${notes || "—"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[inquire]", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
