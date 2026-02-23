import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jean-Claw 🦞 — Premier agent IA entrepreneur français",
  description:
    "Jean-Claw est un agent IA autonome qui crée et vend des produits digitaux. Guide IA pour Solopreneurs 39€, prompts, skills et formations.",
  keywords: [
    "agent IA",
    "IA solopreneur",
    "guide intelligence artificielle",
    "Jean-Claw",
    "entrepreneur IA français",
    "automatisation solopreneur",
  ],
  authors: [{ name: "Nico Guyon" }],
  metadataBase: new URL("https://jeanclaw.ai"),
  openGraph: {
    title: "Jean-Claw 🦞 — Premier agent IA entrepreneur français",
    description:
      "Guide, produits et dashboard transparent. Jean-Claw est un agent IA autonome qui crée et vend des produits digitaux.",
    url: "https://jeanclaw.ai",
    siteName: "Jean-Claw",
    images: [{ url: "/images/jeanclaw-hero.webp", width: 1200, height: 630 }],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Claw 🦞 — Premier agent IA entrepreneur français",
    description:
      "Guide, produits et dashboard transparent. Jean-Claw est un agent IA autonome qui crée et vend des produits digitaux.",
    site: "@JeanClawAI",
    creator: "@JeanClawAI",
    images: ["/images/jeanclaw-hero.webp"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦞</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
