import Image from "next/image";
import Link from "next/link";
import type { Produto } from "@/data/produtos";
import { formatBRL } from "@/lib/formatters";

export default function ProductCard({ p, priority = false }: { p: Produto; priority?: boolean }) {
  const off = p.precoOriginal ? Math.round((1 - p.preco / p.precoOriginal) * 100) : 0;
  return (
    <Link href={`/produto/${p.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-bg-card)] rounded-sm">
        <Image
          src={p.fotos[0]}
          alt={p.nome}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          priority={priority}
        />
        {p.fotos[1] && (
          <Image
            src={p.fotos[1]}
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            aria-hidden
          />
        )}
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {p.bestSeller && (
            <span className="bg-[var(--color-bg-deep)] text-[var(--color-gold)] text-[9px] font-bold tracking-[0.28em] uppercase px-2.5 py-1">
              ◆ Mais vendido
            </span>
          )}
          {p.novidade && (
            <span className="bg-[var(--color-gold)] text-[var(--color-bg-deep)] text-[9px] font-extrabold tracking-[0.28em] uppercase px-2.5 py-1">
              Novidade
            </span>
          )}
          {off > 0 && (
            <span className="bg-[var(--color-cream)] text-[var(--color-ink)] text-[9px] font-extrabold tracking-[0.28em] uppercase px-2.5 py-1">
              −{off}%
            </span>
          )}
        </div>
        {/* Certificate */}
        <div className="absolute bottom-3 right-3 bg-[var(--color-cream)]/95 text-[var(--color-ink)] text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-1">
          c/ certificado
        </div>
      </div>

      <div className="pt-4 pb-2">
        <h3 className="font-display italic text-[20px] md:text-[22px] leading-tight text-[var(--color-ink)] group-hover:text-[var(--color-gold-dark)]">
          {p.nome}
        </h3>
        <div className="mt-2 flex items-baseline gap-2.5">
          <span className="font-display font-bold text-[22px] text-[var(--color-ink)]">{formatBRL(p.preco)}</span>
          {p.precoOriginal && (
            <span className="text-[13px] text-[var(--color-muted)] line-through">{formatBRL(p.precoOriginal)}</span>
          )}
        </div>
        <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--color-muted)] mt-1.5">
          ou 12x de {formatBRL(p.preco / 12)}
        </p>
      </div>
    </Link>
  );
}
