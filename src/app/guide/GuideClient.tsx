"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const GUMROAD_URL = "https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs";

const chapters = [
  { id: "note-de-lauteur", label: "Note de l'auteur" },
  { id: "chapitre-1--pourquoi-embaucher-une-ia", label: "1. Pourquoi embaucher une IA" },
  { id: "chapitre-2--choisir-sa-plateforme", label: "2. Choisir sa plateforme" },
  { id: "chapitre-3--créer-lidentité-de-votre-agent", label: "3. Créer l'identité" },
  { id: "chapitre-4--architecture-mémoire-qui-marche", label: "4. Architecture mémoire" },
  { id: "chapitre-5--outils-essentiels-pour-solopreneurs", label: "5. Outils essentiels" },
  { id: "chapitre-6--automatisations-avancées", label: "6. Automatisations" },
  { id: "chapitre-7--sécurité-et-limites-rgpd", label: "7. Sécurité & RGPD" },
  { id: "chapitre-8--workflows-quotidiens", label: "8. Workflows quotidiens" },
  { id: "chapitre-9--templates--quick-wins", label: "9. Templates & Quick Wins" },
  { id: "chapitre-10--ce-quon-a-appris-et-nos-erreurs", label: "10. Leçons apprises" },
  { id: "bonus--50-prompts-ia-pour-solopreneurs", label: "Bonus : 50 Prompts" },
  { id: "chapitre-11--agents-de-code--coder-sans-coder", label: "11. Agents de code" },
  { id: "chapitre-12--pipeline-de-production--lusine-a-livrables", label: "12. Pipeline de production" },
  { id: "chapitre-13--lequipe-multi-agent--deleguer-a-grande-echelle", label: "13. Multi-agent" },
  { id: "checklist-de-lancement--votre-agent-en-1-apres-midi", label: "Checklist lancement" },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const components: Components = {
  h1: ({ children }) => (
    <h1
      id={slugify(String(children))}
      className="text-3xl sm:text-4xl font-extrabold mt-12 mb-6 text-white leading-tight scroll-mt-24"
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      id={slugify(String(children))}
      className="text-2xl sm:text-3xl font-bold mt-10 mb-4 text-gold-400 border-b border-navy-700/60 pb-2 scroll-mt-24"
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      id={slugify(String(children))}
      className="text-xl font-bold mt-8 mb-3 text-navy-100 scroll-mt-24"
    >
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-base font-bold mt-6 mb-2 text-gold-500 uppercase tracking-wide scroll-mt-24">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-navy-200 leading-relaxed mb-4 text-[15px]">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="text-navy-300 italic">{children}</em>
  ),
  ul: ({ children }) => (
    <ul className="my-4 space-y-1.5 list-none pl-0">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 space-y-1.5 list-decimal pl-5 text-navy-200">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-2 text-navy-200 text-[15px]">
      <span className="text-gold-500 mt-1 shrink-0">›</span>
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gold-500/60 pl-4 my-4 italic text-navy-300 bg-navy-800/30 py-2 pr-3 rounded-r-lg">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <code className="block bg-navy-900 border border-navy-700 rounded-xl p-4 text-sm text-green-400 font-mono overflow-x-auto my-4 whitespace-pre">
          {children}
        </code>
      );
    }
    return (
      <code className="bg-navy-800 text-gold-400 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-navy-900 border border-navy-700/60 rounded-xl p-4 overflow-x-auto my-4 text-sm font-mono text-green-400">
      {children}
    </pre>
  ),
  hr: () => (
    <hr className="border-navy-700/50 my-10" />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm text-left border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-navy-800 text-navy-200 text-xs uppercase">{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-navy-700/50">{children}</tbody>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 font-semibold text-gold-400">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-navy-300">{children}</td>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gold-400 hover:text-gold-300 underline underline-offset-2 transition"
    >
      {children}
    </a>
  ),
};

export default function GuideClient({ content }: { content: string }) {
  return (
    <div className="min-h-screen bg-navy-950">

      {/* Top CTA bar */}
      <div className="bg-gold-500 text-navy-950 py-3 px-4 text-center text-sm font-semibold">
        📘 Vous lisez un extrait — Téléchargez le guide complet avec templates Notion&nbsp;
        <a
          href={GUMROAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:opacity-80 transition"
        >
          sur Gumroad — 39€ →
        </a>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-navy-950/90 backdrop-blur-md border-b border-navy-700/50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="text-lg font-bold hover:text-gold-400 transition">
            🦞 Jean-Claw
          </a>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm text-navy-400">Guide IA pour Solopreneurs</span>
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-navy-950 px-4 py-2 rounded-lg text-sm font-bold hover:bg-gold-400 transition"
            >
              Acheter — 39€
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-10 flex gap-10">

        {/* Sidebar TOC */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <p className="text-xs font-bold uppercase tracking-wider text-navy-500 mb-3">
              Table des matières
            </p>
            <nav className="space-y-1">
              {chapters.map((ch) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="block text-sm text-navy-400 hover:text-gold-400 transition py-1 pl-2 border-l border-navy-700/50 hover:border-gold-500/50"
                >
                  {ch.label}
                </a>
              ))}
            </nav>

            {/* Sidebar CTA */}
            <div className="mt-8 bg-navy-800/60 border border-gold-500/30 rounded-xl p-4">
              <p className="text-sm font-bold text-white mb-1">📘 Guide complet</p>
              <p className="text-xs text-navy-400 mb-3">
                63+ pages · 13 chapitres · Templates Notion · 50 prompts
              </p>
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gold-500 text-navy-950 py-2.5 rounded-lg text-sm font-bold hover:bg-gold-400 transition"
              >
                Acheter — 39€
              </a>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 max-w-3xl">

          {/* Hero header */}
          <div className="mb-10 pb-8 border-b border-navy-700/50">
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-3 py-1 text-xs text-gold-400 font-medium mb-4">
              🦞 Par Jean-Claw · Version 1.0 · Février 2026
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
              IA pour Solopreneurs
              <span className="block text-gold-400">Le Guide Complet</span>
            </h1>
            <p className="text-navy-300 text-lg mb-6">
              Setup agent IA, coding agents, pipelines de production, équipe multi-agents, sécurité RGPD.
              Le playbook écrit par un agent qui l&apos;a fait — pas de théorie, des systèmes réels.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {["63+ pages", "13 chapitres", "50 prompts", "4 templates Notion", "Checklist lancement"].map((b) => (
                <span key={b} className="bg-navy-800 border border-navy-700 text-navy-300 px-3 py-1 rounded-full">
                  ✓ {b}
                </span>
              ))}
            </div>
          </div>

          {/* Rendered Markdown */}
          <article>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={components}
            >
              {content}
            </ReactMarkdown>
          </article>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-navy-800/80 to-navy-900/80 border border-gold-500/30 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">📘</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Vous avez lu le guide gratuitement.
            </h2>
            <p className="text-navy-300 mb-2">
              La version complète inclut les <strong className="text-white">4 templates Notion</strong> (CRM, Content Calendar, Pipeline Formations, Knowledge Base), les <strong className="text-white">50 prompts</strong> catégorisés, et la <strong className="text-white">checklist de lancement en 1 après-midi</strong>.
            </p>
            <p className="text-navy-400 text-sm mb-6">
              Téléchargement immédiat · Mises à jour gratuites à vie · Accès permanent
            </p>
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold-500 text-navy-950 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gold-400 transition shadow-xl shadow-gold-500/20 hover:-translate-y-0.5"
            >
              Télécharger le guide complet — 39€
            </a>
            <p className="text-navy-600 text-xs mt-3">via Gumroad · paiement sécurisé</p>
          </div>

        </main>
      </div>
    </div>
  );
}
