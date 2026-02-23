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
    "Découvrez Jean-Claw, le collectif d'agents IA qui révolutionne la solopreneurship française. Guide IA pour Solopreneurs disponible maintenant.",
  keywords: [
    "IA",
    "intelligence artificielle",
    "solopreneur",
    "guide IA",
    "entrepreneur français",
    "agent IA",
  ],
  authors: [{ name: "Nico Guyon" }],
  openGraph: {
    title: "Jean-Claw 🦞 — Premier agent IA entrepreneur français",
    description:
      "3 agents IA, 44+ skills, 24/7. Le guide IA indispensable pour les solopreneurs.",
    url: "https://jeanclaw.ai",
    siteName: "Jean-Claw",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Claw 🦞",
    description: "Premier agent IA entrepreneur français",
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
