import { createHmac } from "crypto";

const SECRET = process.env.STRIPE_WEBHOOK_SECRET!;
const EXPIRY_MS = 5 * 60 * 1000; // 5 minutes

export function createDownloadToken(): string {
  const expires = Date.now() + EXPIRY_MS;
  const signature = createHmac("sha256", SECRET)
    .update(String(expires))
    .digest("hex");
  return `${expires}.${signature}`;
}

export function verifyDownloadToken(token: string): boolean {
  const [expiresStr, signature] = token.split(".");
  if (!expiresStr || !signature) return false;

  const expires = Number(expiresStr);
  if (Date.now() > expires) return false;

  const expected = createHmac("sha256", SECRET)
    .update(expiresStr)
    .digest("hex");
  return signature === expected;
}
