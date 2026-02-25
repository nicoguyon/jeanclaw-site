"use client";

import { useState, useEffect } from "react";

const LAUNCH_DATE = new Date("2026-02-28T00:00:00+01:00"); // Paris time
const DISMISS_KEY = "jc-announcement-dismissed-v3";

function getCountdown() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, minutes };
}

export default function AnnouncementBar() {
  const [countdown, setCountdown] = useState(getCountdown());
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const already = sessionStorage.getItem(DISMISS_KEY);
    if (already) setDismissed(true);

    const interval = setInterval(() => {
      setCountdown(getCountdown());
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted || dismissed) return null;

  const isLaunched = countdown === null;

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setDismissed(true);
  };

  return (
    <div
      className="w-full py-2.5 px-4 text-center text-sm font-medium relative"
      style={{
        background: isLaunched ? "#14532d" : "#18181b",
        borderBottom: `1px solid ${isLaunched ? "#16a34a" : "#27272a"}`,
        color: isLaunched ? "#4ade80" : "#a1a1aa",
      }}
    >
      {isLaunched ? (
        <span>
          🎉{" "}
          <span style={{ color: "#4ade80" }}>Guide OpenClaw lancé !</span>{" "}
          <a
            href="https://nicoguyon.gumroad.com/l/guide-ia-solopreneurs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1 transition-colors"
            style={{ color: "#86efac" }}
          >
            Acheter — 39€ →
          </a>
        </span>
      ) : (
        <span>
          🚀{" "}
          <span style={{ color: "#e4e4e7" }}>
            Lancement le{" "}
            <span style={{ color: "#DC2626", fontWeight: 700 }}>28 février</span>
          </span>
          {countdown && countdown.days > 0 && (
            <span style={{ color: "#71717a" }}>
              {" "}— dans{" "}
              <span style={{ color: "#e4e4e7", fontWeight: 600 }}>
                {countdown.days}j {countdown.hours}h
              </span>
            </span>
          )}
          {countdown && countdown.days === 0 && (
            <span style={{ color: "#E87722", fontWeight: 700 }}>
              {" "}— aujourd&rsquo;hui !
            </span>
          )}
          <a
            href="#offre"
            className="ml-3 text-xs underline transition-colors"
            style={{ color: "#525252" }}
          >
            Voir l&rsquo;offre
          </a>
        </span>
      )}
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs transition-colors hover:text-[#a1a1aa]"
        style={{ color: "#3f3f46" }}
        aria-label="Fermer"
      >
        ✕
      </button>
    </div>
  );
}
