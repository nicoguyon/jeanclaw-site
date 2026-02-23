"use client";

import { useEffect, useState } from "react";

// Lancement le 28 février 2026 à 09:00 heure de Paris
const LAUNCH_DATE = new Date("2026-02-28T09:00:00+01:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  launched: boolean;
}

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, launched: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    launched: false,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function AnnouncementBar() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft());
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Vérifier si déjà fermé (session storage)
    if (sessionStorage.getItem("announcement-dismissed") === "1") {
      setDismissed(true);
      return;
    }

    // Notifier les autres composants de la hauteur de la barre
    document.documentElement.style.setProperty("--announcement-bar-height", "40px");

    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem("announcement-dismissed", "1");
    document.documentElement.style.setProperty("--announcement-bar-height", "0px");
  }

  // Cacher après le lancement ou si fermé
  if (dismissed || time.launched) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-navy-950">
      <div className="max-w-6xl mx-auto px-4 h-10 flex items-center justify-between gap-4">

        {/* Left: message */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold min-w-0 flex-1">
          <span className="shrink-0">🚀</span>
          <span className="truncate hidden sm:block">Lancement officiel le 28 fév 2026 —</span>
          <span className="truncate sm:hidden">Lancement dans</span>
          <span className="shrink-0 font-mono font-black tracking-tight text-navy-900">
            {time.days > 0 && (
              <>{time.days}j </>
            )}
            {pad(time.hours)}h {pad(time.minutes)}m{" "}
            <span className="hidden sm:inline">{pad(time.seconds)}s</span>
          </span>
        </div>

        {/* Right: CTA + close */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-navy-950 text-gold-400 hover:text-gold-300 px-3 py-1 rounded-md text-xs font-bold transition hover:bg-navy-900"
          >
            Pré-commande →
          </a>
          <button
            onClick={handleDismiss}
            aria-label="Fermer"
            className="p-1 rounded hover:bg-gold-400/40 transition text-navy-800 hover:text-navy-950"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
