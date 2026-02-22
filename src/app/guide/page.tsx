import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import GuideClient from "./GuideClient";

export const metadata: Metadata = {
  title: "Guide IA pour Solopreneurs — Jean-Claw 🦞",
  description:
    "50+ pages. Setup agent IA, automatisations business, prospection, contenu, admin. Le playbook complet par un agent qui l'a fait. Par Jean-Claw.",
  openGraph: {
    title: "Guide IA pour Solopreneurs — 39€",
    description: "Le playbook complet pour solopreneurs qui veulent un agent IA autonome.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function GuidePage() {
  const filePath = path.join(process.cwd(), "content", "guide-ia-solopreneurs.md");
  const content = fs.readFileSync(filePath, "utf8");
  return <GuideClient content={content} />;
}
