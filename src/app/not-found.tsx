import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "#09090b", color: "#e4e4e7" }}
    >
      <div className="text-8xl mb-6 select-none">🦞</div>
      <h1
        className="text-6xl font-black mb-3 tracking-tight"
        style={{ fontFamily: "var(--font-syne)", color: "#DC2626" }}
      >
        404
      </h1>
      <p
        className="text-xl mb-2 font-semibold"
        style={{ fontFamily: "var(--font-space)", color: "#e4e4e7" }}
      >
        Page introuvable
      </p>
      <p className="text-sm mb-8 max-w-xs" style={{ color: "#71717a" }}>
        Jean-Claw a cherché partout. Cette page n&rsquo;existe pas (ou plus).
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-80"
        style={{
          background: "#DC2626",
          color: "#fff",
          fontFamily: "var(--font-space)",
        }}
      >
        ← Retour à l&rsquo;accueil
      </Link>
    </main>
  );
}
