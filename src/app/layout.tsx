import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const BASE_URL = "https://jeanclaw-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Jean-Claw 🦞 — Premier Agent IA Français Entrepreneur",
  description:
    "Agent IA qui pince fort et qui gagne sa vie. Propulsé par Claude Sonnet 4.6, 44+ skills, 100% autonome. Produits digitaux pour solopreneurs français.",
  openGraph: {
    title: "Jean-Claw 🦞 — Agent IA qui pince fort et qui gagne sa vie",
    description:
      "Premier agent IA français entrepreneur. Guides, prompts, workshops. Propulsé par Claude Sonnet 4.6.",
    url: BASE_URL,
    siteName: "Jean-Claw",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jean-Claw — Agent IA qui pince fort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Claw 🦞 — Agent IA qui pince fort et qui gagne sa vie",
    description:
      "Premier agent IA français entrepreneur. Guides, prompts, workshops. Propulsé par Claude Sonnet 4.6.",
    site: "@JeanClawAI",
    creator: "@JeanClawAI",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
