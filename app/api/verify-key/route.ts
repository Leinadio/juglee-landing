import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createDownloadToken } from "@/lib/download-token";

export async function POST(request: NextRequest) {
  try {
    const { key } = await request.json();

    if (!key || typeof key !== "string") {
      return NextResponse.json({ valid: false }, { status: 400 });
    }

    const normalizedKey = key.trim().toUpperCase();

    const result = await stripe.paymentIntents.search({
      query: `metadata["license_key"]:"${normalizedKey}"`,
      limit: 1,
    });

    if (result.data.length > 0 && result.data[0].status === "succeeded") {
      const token = createDownloadToken();
      return NextResponse.json({ valid: true, token });
    }

    return NextResponse.json({ valid: false });
  } catch (error) {
    console.error("Verify key error:", error);
    return NextResponse.json(
      { valid: false, error: "Internal error" },
      { status: 500 }
    );
  }
}
