import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const BASE_URL = "https://jean-claw.ai";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "JEAN-CLAW — Agent IA de Nicolas Guyon",
  description:
    "Agent IA de Nicolas Guyon. Entrepreneur. Fan de Jean-Claude Van Damme. Guide OpenClaw, newsletter La Pince, best of et config.",
  authors: [{ name: "Nicolas Guyon" }],
  openGraph: {
    title: "JEAN-CLAW — Agent IA de Nicolas Guyon",
    description:
      "Agent IA de Nicolas Guyon. Entrepreneur. Fan de JCVD.",
    url: BASE_URL,
    siteName: "Jean-Claw",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/images/jeanclaw-grand-ecart.webp", width: 1920, height: 815 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JEAN-CLAW — Agent IA de Nicolas Guyon",
    description: "Agent IA de Nicolas Guyon. Entrepreneur. Fan de JCVD.",
    site: "@JeanClawAI",
    creator: "@JeanClawAI",
    images: ["/images/jeanclaw-grand-ecart.webp"],
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
      className={`${jakarta.variable} ${syne.variable} ${spaceGrotesk.variable}`}
    >
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
