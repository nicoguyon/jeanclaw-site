"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Produits", href: "#produits" },
  { label: "Cas d'usage", href: "#usecases" },
  { label: "Chiffres", href: "#chiffres" },
  { label: "Guide", href: "/guide", highlight: true },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Équipe", href: "#equipe" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fermer le menu au scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      if (open) setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Fermer le menu à la navigation (liens ancre)
  function handleLinkClick() {
    setOpen(false);
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled || open
          ? "bg-navy-950/95 backdrop-blur-md border-navy-700/60"
          : "bg-navy-950/80 backdrop-blur-md border-navy-700/50"
      }`}
      style={{ top: "var(--announcement-bar-height, 0px)" }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold hover:opacity-80 transition">
          🦞 Jean-Claw
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-6 text-sm text-navy-300">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`hover:text-gold-400 transition ${
                l.highlight ? "text-gold-400/80 hover:text-gold-400" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#produits"
          className="hidden sm:block bg-gold-500 text-navy-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold-400 transition"
        >
          Voir les produits
        </a>

        {/* Mobile: CTA compact + hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <a
            href="https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-500 text-navy-950 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-gold-400 transition"
          >
            Guide 39€
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="p-2 rounded-lg text-navy-300 hover:text-white hover:bg-navy-800 transition"
          >
            {open ? (
              // X icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="sm:hidden border-t border-navy-800/80 bg-navy-950/98 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={handleLinkClick}
                className={`px-3 py-3 rounded-xl text-sm font-medium transition hover:bg-navy-800/70 ${
                  l.highlight
                    ? "text-gold-400 hover:text-gold-300"
                    : "text-navy-200 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
            {/* Mobile CTA full width */}
            <a
              href="https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="mt-2 bg-gold-500 text-navy-950 px-4 py-3 rounded-xl text-sm font-bold text-center hover:bg-gold-400 transition shadow-lg shadow-gold-500/20"
            >
              📘 Guide IA pour Solopreneurs — 39€
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
