import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, rating, source } = await request.json();

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const senderName = name?.trim() || "Anonyme";
    const senderEmail = email?.trim() || "Non renseigné";
    const to = process.env.TESTIMONIAL_EMAIL;

    if (!to) {
      console.error("TESTIMONIAL_EMAIL is not configured");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    await resend.emails.send({
      from: "Jugleey <onboarding@resend.dev>",
      to,
      subject: `Nouveau témoignage de ${senderName}${rating ? ` (${rating}/5)` : ""}`,
      html: `
        <h2>Nouveau témoignage Jugleey</h2>
        <p><strong>Nom :</strong> ${senderName}</p>
        <p><strong>Email :</strong> ${senderEmail}</p>
        ${rating ? `<p><strong>Note :</strong> ${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)</p>` : ""}
        <p><strong>Message :</strong></p>
        <blockquote style="border-left: 3px solid #fc4e4e; padding-left: 12px; color: #333;">${message.trim()}</blockquote>
        <hr />
        <p style="color: #888; font-size: 12px;">Envoyé depuis ${source === "post_download" ? "la popup post-téléchargement" : "le widget témoignage"} de la landing page Jugleey.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Testimonial submission error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
