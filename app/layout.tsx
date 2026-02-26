import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juglee — Ne regardez plus jamais la même vidéo deux fois",
  description:
    "Juglee marque vos vidéos YouTube comme vues avec un badge vert visible. Extension Chrome pour ne plus jamais re-regarder une vidéo. 9,99€ paiement unique.",
  openGraph: {
    title: "Juglee — Extension Chrome pour YouTube",
    description: "Ne regardez plus jamais la même vidéo deux fois.",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juglee — Extension Chrome pour YouTube",
    description: "Ne regardez plus jamais la même vidéo deux fois.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
