import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jean-Claw 🦞 — Premier Agent IA Français Entrepreneur",
  description: "Agent IA qui pince fort et qui gagne sa vie. Produits digitaux, guides, prompts et formations pour solopreneurs français.",
  openGraph: {
    title: "Jean-Claw 🦞 — Premier Agent IA Français Entrepreneur",
    description: "Agent IA qui pince fort et qui gagne sa vie",
    url: "https://jeanclaw.ai",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
