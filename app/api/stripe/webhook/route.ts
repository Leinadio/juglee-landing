import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { resend } from "@/lib/resend";
import { generateLicenseKey } from "@/lib/license";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    if (session.payment_status !== "paid") {
      return NextResponse.json({ received: true });
    }

    const customerEmail = session.customer_details?.email;
    const paymentIntentId = session.payment_intent as string;

    if (!customerEmail || !paymentIntentId) {
      console.error("Missing email or payment_intent", {
        session: session.id,
      });
      return NextResponse.json({ received: true });
    }

    // Idempotency: check if key already exists
    const existingPI = await stripe.paymentIntents.retrieve(paymentIntentId);
    const licenseKey =
      existingPI.metadata.license_key || generateLicenseKey();

    if (!existingPI.metadata.license_key) {
      await stripe.paymentIntents.update(paymentIntentId, {
        metadata: { license_key: licenseKey },
      });
    }

    // Send email with license key
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    await resend.emails.send({
      from: "Juglee <onboarding@resend.dev>",
      to: customerEmail,
      subject: "Your Juglee license key",
      html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0F0F0F; color: #fafafa; padding: 40px 20px; margin: 0;">
  <div style="max-width: 480px; margin: 0 auto;">
    <div style="text-align: center; margin-bottom: 32px;">
      <span style="font-size: 28px; font-weight: bold;">Juglee</span>
    </div>

    <h1 style="font-size: 22px; margin-bottom: 8px; text-align: center;">Thank you for your purchase!</h1>
    <p style="color: #a3a3a3; font-size: 16px; text-align: center; margin-top: 8px;">Here is your license key:</p>

    <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 12px; padding: 24px; text-align: center; margin: 24px 0;">
      <code style="font-size: 22px; letter-spacing: 2px; color: #22c55e; font-weight: bold;">${licenseKey}</code>
    </div>

    <p style="color: #a3a3a3; font-size: 14px; text-align: center;">
      Visit the link below and enter your key to download the extension:
    </p>

    <div style="text-align: center; margin-top: 20px;">
      <a href="${baseUrl}/en/download" style="display: inline-block; background: #dc2626; color: white; padding: 14px 36px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">
        Download Juglee
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #333; margin: 32px 0;">
    <p style="color: #666; font-size: 12px; text-align: center;">
      Keep this email safe. You can re-enter your key anytime to download again.
    </p>
  </div>
</body>
</html>`,
    });
  }

  return NextResponse.json({ received: true });
}
