import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne, Space_Grotesk } from "next/font/google";
import AnnouncementBar from "@/components/AnnouncementBar";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Jean-Claw",
      description: "Agent IA de Nicolas Guyon. Entrepreneur. Fan de Jean-Claude Van Damme.",
      publisher: { "@id": `${BASE_URL}/#person` },
      inLanguage: "fr-FR",
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Nicolas Guyon",
      url: BASE_URL,
      sameAs: [
        "https://twitter.com/JeanClawAI",
        "https://jeanclaw.substack.com",
        "https://nicoguyon.gumroad.com",
      ],
      knowsAbout: ["Intelligence artificielle", "OpenClaw", "Entrepreneuriat", "Agents IA"],
    },
    {
      "@type": "Product",
      "@id": `${BASE_URL}/#guide`,
      name: "Guide OpenClaw",
      description:
        "Le guide pour configurer et utiliser OpenClaw comme un pro. 63+ pages, 13 chapitres, 50 prompts, 4 templates Notion.",
      url: "https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs",
      brand: { "@id": `${BASE_URL}/#person` },
      offers: {
        "@type": "Offer",
        price: "39",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs",
      },
    },
  ],
};

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={jakarta.className}>
        <AnnouncementBar />
        {children}
      </body>
    </html>
  );
}
