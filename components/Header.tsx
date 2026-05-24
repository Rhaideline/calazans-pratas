"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/colecao", label: "Coleção" },
  { href: "/colecao?cat=aneis", label: "Anéis" },
  { href: "/colecao?cat=colares", label: "Colares" },
  { href: "/colecao?cat=brincos", label: "Brincos" },
  { href: "/certificado", label: "Certificado" },
  { href: "/sobre", label: "Sobre" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-cream-paper)]/95 backdrop-blur border-b border-[var(--color-muted)]/15">
      <div className="container-main flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[11px] tracking-[0.5em] font-bold text-[var(--color-gold-dark)] uppercase">Calazans</span>
          <span className="font-display text-[28px] md:text-[34px] font-bold italic text-[var(--color-ink)] -mt-1">Pratas</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="navegação principal">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[13px] font-semibold tracking-[0.18em] uppercase text-[var(--color-ink)] hover:text-[var(--color-gold-dark)]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right: search + cart */}
        <div className="flex items-center gap-3 md:gap-5">
          <button aria-label="Buscar" className="p-2 hover:text-[var(--color-gold-dark)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </button>
          <Link href="/carrinho" aria-label="Carrinho" className="p-2 hover:text-[var(--color-gold-dark)] relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </Link>

          {/* Mobile burger */}
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-[var(--color-muted)]/15 bg-[var(--color-cream-paper)]" aria-label="navegação móvel">
          <div className="container-main py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[14px] font-semibold tracking-[0.18em] uppercase text-[var(--color-ink)] border-b border-[var(--color-muted)]/10 last:border-0 hover:text-[var(--color-gold-dark)]"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
