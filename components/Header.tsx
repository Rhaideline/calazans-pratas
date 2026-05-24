"use client";

import Link from "next/link";
import { useState } from "react";

const MEGA = [
  {
    label: "Joias",
    cols: [
      { titulo: "Categoria", links: [
        { label: "Anéis", href: "/colecao?cat=aneis" },
        { label: "Colares", href: "/colecao?cat=colares" },
        { label: "Brincos", href: "/colecao?cat=brincos" },
        { label: "Pulseiras", href: "/colecao?cat=pulseiras" },
        { label: "Conjuntos", href: "/colecao?cat=conjuntos" },
      ]},
      { titulo: "Por ocasião", links: [
        { label: "Noivado & Casamento", href: "/colecao?ocasiao=noivado" },
        { label: "Presente", href: "/colecao?ocasiao=presente" },
        { label: "Dia-a-dia", href: "/colecao?ocasiao=dia-a-dia" },
        { label: "Festa & Gala", href: "/colecao?ocasiao=festa" },
      ]},
      { titulo: "Coleções", links: [
        { label: "Mais vendidos", href: "/colecao?destaque=bestsellers" },
        { label: "Lançamentos", href: "/colecao?ordem=novidades" },
        { label: "Edição limitada", href: "/colecao?tag=edicao-limitada" },
        { label: "Tudo", href: "/colecao" },
      ]},
    ],
  },
  {
    label: "Anéis",
    cols: [
      { titulo: "Estilo", links: [
        { label: "Solitário", href: "/colecao?cat=aneis&tag=solitario" },
        { label: "Eternity", href: "/colecao?cat=aneis&tag=eternity" },
        { label: "Meia aliança", href: "/colecao?cat=aneis&tag=meia-alianca" },
        { label: "Bridal Set", href: "/colecao?cat=aneis&tag=bridal" },
      ]},
    ],
  },
  {
    label: "Colares",
    cols: [
      { titulo: "Estilo", links: [
        { label: "Tennis", href: "/colecao?cat=colares&tag=tennis" },
        { label: "Ponto de luz", href: "/colecao?cat=colares&tag=ponto-de-luz" },
        { label: "Gargantilha", href: "/colecao?cat=colares&tag=gargantilha" },
      ]},
    ],
  },
  {
    label: "Brincos",
    cols: [
      { titulo: "Estilo", links: [
        { label: "Tarraxa", href: "/colecao?cat=brincos&tag=tarraxa" },
        { label: "Argola", href: "/colecao?cat=brincos&tag=argola" },
        { label: "Gota", href: "/colecao?cat=brincos&tag=gota" },
      ]},
    ],
  },
  {
    label: "Pulseiras",
    cols: [
      { titulo: "Estilo", links: [
        { label: "Tennis", href: "/colecao?cat=pulseiras&tag=tennis" },
        { label: "Delicada", href: "/colecao?cat=pulseiras&tag=delicada" },
        { label: "Riviera", href: "/colecao?cat=pulseiras&tag=riviera" },
      ]},
    ],
  },
  { label: "Coleções", href: "/colecao?destaque=bestsellers" },
  { label: "Inspiração", href: "/inspiracao" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-cream-paper)]/96 backdrop-blur border-b border-[var(--color-muted)]/15">
      {/* Top row: logo center, icons */}
      <div className="container-main flex items-center justify-between h-16 md:h-20">
        {/* Mobile burger left */}
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={mobileOpen ? "true" : "false"}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 -ml-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none mx-auto lg:mx-0">
          <span className="text-[10px] md:text-[11px] tracking-[0.5em] font-bold text-[var(--color-gold-dark)] uppercase">Calazans</span>
          <span className="font-display text-[24px] md:text-[34px] font-bold italic text-[var(--color-ink)] -mt-1">Pratas</span>
        </Link>

        {/* Right icons (Search · Account · Wishlist · Cart) */}
        <div className="flex items-center gap-1 md:gap-3">
          <button type="button" aria-label="Buscar" className="p-2 hover:text-[var(--color-gold-dark)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </button>
          <Link href="/conta" aria-label="Conta" className="hidden md:inline-flex p-2 hover:text-[var(--color-gold-dark)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4 0-7 2-7 6h14c0-4-3-6-7-6z" />
            </svg>
          </Link>
          <Link href="/favoritos" aria-label="Favoritos" className="hidden md:inline-flex p-2 hover:text-[var(--color-gold-dark)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </Link>
          <Link href="/carrinho" aria-label="Carrinho" className="p-2 hover:text-[var(--color-gold-dark)] relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Desktop mega menu row */}
      <nav className="hidden lg:block border-t border-[var(--color-muted)]/10" aria-label="Navegação principal">
        <div className="container-main flex items-stretch justify-center gap-8 h-12">
          {MEGA.map((item) => {
            const hasCols = !!item.cols;
            const isActive = active === item.label;
            return (
              <div
                key={item.label}
                className="relative flex items-center"
                onMouseEnter={() => hasCols && setActive(item.label)}
                onMouseLeave={() => setActive(null)}
              >
                {hasCols ? (
                  <button
                    type="button"
                    className={`text-[12px] font-bold tracking-[0.32em] uppercase ${isActive ? "text-[var(--color-gold-dark)]" : "text-[var(--color-ink)]"} hover:text-[var(--color-gold-dark)]`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-[12px] font-bold tracking-[0.32em] uppercase text-[var(--color-ink)] hover:text-[var(--color-gold-dark)]"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {hasCols && isActive && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full bg-[var(--color-cream-paper)] border border-[var(--color-muted)]/15 shadow-xl"
                    style={{ minWidth: 700 }}
                  >
                    <div className="p-8 grid grid-cols-3 gap-10">
                      {item.cols!.map((col) => (
                        <div key={col.titulo}>
                          <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-gold-dark)] font-bold mb-4">
                            {col.titulo}
                          </p>
                          <ul className="space-y-2.5">
                            {col.links.map((l) => (
                              <li key={l.href}>
                                <Link
                                  href={l.href}
                                  className="font-display italic text-[18px] text-[var(--color-ink)] hover:text-[var(--color-gold-dark)]"
                                  onClick={() => setActive(null)}
                                >
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-[var(--color-muted)]/15 bg-[var(--color-cream-paper)]" aria-label="Navegação móvel">
          <div className="container-main py-4 flex flex-col gap-1">
            {MEGA.map((item) => (
              <div key={item.label}>
                {item.cols ? (
                  <details className="group border-b border-[var(--color-muted)]/10">
                    <summary className="flex items-center justify-between py-3 list-none cursor-pointer text-[13px] font-bold tracking-[0.2em] uppercase">
                      {item.label}
                      <span className="text-[var(--color-gold-dark)] group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="pb-4 pl-3 space-y-2">
                      {item.cols.map((col) => (
                        <div key={col.titulo}>
                          <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-gold-dark)] font-bold mt-2 mb-1">{col.titulo}</p>
                          <ul className="space-y-1.5">
                            {col.links.map((l) => (
                              <li key={l.href}>
                                <Link href={l.href} onClick={() => setMobileOpen(false)} className="font-display italic text-[16px] text-[var(--color-ink)]">
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link href={item.href!} onClick={() => setMobileOpen(false)} className="block py-3 border-b border-[var(--color-muted)]/10 text-[13px] font-bold tracking-[0.2em] uppercase">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/conta" onClick={() => setMobileOpen(false)} className="py-3 text-[13px] font-semibold tracking-[0.18em] uppercase text-[var(--color-muted)]">
              Minha conta
            </Link>
            <Link href="/favoritos" onClick={() => setMobileOpen(false)} className="py-3 text-[13px] font-semibold tracking-[0.18em] uppercase text-[var(--color-muted)]">
              Favoritos
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
