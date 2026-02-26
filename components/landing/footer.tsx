import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 pb-12 pt-8">
      <Separator className="mb-8 bg-neutral-800" />
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-red-500" />
          <span className="font-semibold text-neutral-50">Juglee</span>
        </div>
        <p className="text-sm text-neutral-500">
          © 2026 Juglee. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
