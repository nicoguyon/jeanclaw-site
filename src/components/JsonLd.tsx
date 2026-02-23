// JSON-LD Structured Data — Rich snippets pour Google
// Schémas : WebSite, Organization, Person (Nico Guyon), Products

const BASE_URL = "https://jean-claw.ai";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jean-Claw",
  url: BASE_URL,
  description:
    "Premier agent IA français entrepreneur. Guides, prompts, workshops pour solopreneurs.",
  inLanguage: "fr-FR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jean-Claw",
  url: BASE_URL,
  logo: `${BASE_URL}/icon-192.png`,
  sameAs: [
    "https://twitter.com/JeanClawAI",
    "https://nicoguyon.substack.com",
    "https://nicoguyon.gumroad.com",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@jeanclaw.ai",
    contactType: "customer service",
    availableLanguage: "French",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nicolas Guyon",
  url: "https://nicoguyon.substack.com",
  jobTitle: "Formateur IA & Entrepreneur",
  knowsAbout: ["Intelligence Artificielle", "Automatisation", "Solopreneuriat", "Formation"],
  sameAs: [
    "https://twitter.com/nicoguyon",
    "https://nicoguyon.substack.com",
  ],
};

// Produits avec schema Product — permet l'affichage prix/offre dans Google
const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Guide IA pour Solopreneurs",
    description:
      "50+ pages. Setup agent IA, automatisations business, prospection, contenu, admin. Le playbook complet par Jean-Claw.",
    image: `${BASE_URL}/mockup-guide.webp`,
    url: "https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs",
    brand: {
      "@type": "Brand",
      name: "Jean-Claw",
    },
    offers: {
      "@type": "Offer",
      price: "39.00",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs",
      seller: {
        "@type": "Organization",
        name: "Jean-Claw",
      },
    },
    category: "Digital Product",
    inLanguage: "fr-FR",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "101 Prompts Formateurs",
    description:
      "101 prompts spécialement conçus pour les formateurs professionnels. Compatible Qualiopi. Testés en conditions réelles.",
    url: "https://nicoguyon.gumroad.com/l/101-prompts-formateurs",
    brand: {
      "@type": "Brand",
      name: "Jean-Claw",
    },
    offers: {
      "@type": "Offer",
      price: "29.00",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://nicoguyon.gumroad.com/l/101-prompts-formateurs",
      seller: {
        "@type": "Organization",
        name: "Jean-Claw",
      },
    },
    category: "Digital Product",
    inLanguage: "fr-FR",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "LinkedIn Post Generator — Jean-Claw",
    description:
      "Génère des posts LinkedIn à fort engagement en 30 secondes. Hooks, storytelling, CTA — le style Jean-Claw pour ton audience.",
    url: "https://nicoguyon.gumroad.com/l/linkedin-post-generator",
    brand: {
      "@type": "Brand",
      name: "Jean-Claw",
    },
    offers: {
      "@type": "Offer",
      price: "49.00",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://nicoguyon.gumroad.com/l/linkedin-post-generator",
      seller: {
        "@type": "Organization",
        name: "Jean-Claw",
      },
    },
    category: "Digital Product",
    inLanguage: "fr-FR",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Workshop — Mon Premier Agent IA",
    description:
      "Atelier live de 3h. Configure ton premier agent IA autonome de A à Z avec Jean-Claw et Nico. Limité à 20 places.",
    url: "https://nicoguyon.gumroad.com/l/workshop-premier-agent-ia",
    brand: {
      "@type": "Brand",
      name: "Jean-Claw",
    },
    offers: {
      "@type": "Offer",
      price: "199.00",
      priceCurrency: "EUR",
      availability: "https://schema.org/LimitedAvailability",
      url: "https://nicoguyon.gumroad.com/l/workshop-premier-agent-ia",
      seller: {
        "@type": "Organization",
        name: "Jean-Claw",
      },
    },
    category: "Event",
    inLanguage: "fr-FR",
  },
];

// Schema Event pour le Workshop live (Google Events)
const workshopEventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Workshop — Mon Premier Agent IA",
  description:
    "Atelier live de 3h avec Jean-Claw et Nicolas Guyon. Configure ton premier agent IA autonome de A à Z. Limité à 20 places. Replay HD inclus.",
  startDate: "2026-02-28T14:00:00+01:00",
  endDate: "2026-02-28T17:00:00+01:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: {
    "@type": "VirtualLocation",
    url: "https://nicoguyon.gumroad.com/l/workshop-premier-agent-ia",
  },
  organizer: {
    "@type": "Organization",
    name: "Jean-Claw",
    url: BASE_URL,
  },
  performer: [
    {
      "@type": "Person",
      name: "Nicolas Guyon",
    },
    {
      "@type": "Person",
      name: "Jean-Claw",
      url: BASE_URL,
    },
  ],
  offers: {
    "@type": "Offer",
    price: "199.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
    url: "https://nicoguyon.gumroad.com/l/workshop-premier-agent-ia",
    validFrom: "2026-02-01T00:00:00+01:00",
  },
  image: `${BASE_URL}/og-image.jpg`,
  inLanguage: "fr-FR",
  maximumAttendeeCapacity: 20,
};

export default function JsonLd() {
  const schemas = [
    websiteSchema,
    organizationSchema,
    personSchema,
    ...productSchemas,
    workshopEventSchema,
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
