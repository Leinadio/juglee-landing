import { customAlphabet } from "nanoid";

// Uppercase alphanumeric without ambiguous characters (0/O, 1/I/L)
const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const generate = customAlphabet(alphabet, 4);

export function generateLicenseKey(): string {
  return `JGLEE-${generate()}-${generate()}-${generate()}`;
}
