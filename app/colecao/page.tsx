import type { Metadata } from "next";
import Link from "next/link";
import { produtos } from "@/data/produtos";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Coleção · Anéis, Colares, Brincos e mais",
  description:
    "Coleção completa de joias em prata 925 com moissanite certificada. Anéis, colares, brincos, pulseiras e conjuntos. Frete grátis acima R$ 199. Troca em 30 dias.",
  alternates: { canonical: "https://calazanspratas.com.br/colecao" },
};

const CATS = [
  { slug: "all", nome: "Todas" },
  { slug: "aneis", nome: "Anéis" },
  { slug: "colares", nome: "Colares" },
  { slug: "brincos", nome: "Brincos" },
  { slug: "pulseiras", nome: "Pulseiras" },
  { slug: "conjuntos", nome: "Conjuntos" },
];

type SP = { cat?: string; ordem?: string };

export default async function ColecaoPage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const cat = sp.cat ?? "all";
  const ordem = sp.ordem ?? "destaque";

  let lista = cat === "all" ? produtos : produtos.filter((p) => p.categoria === cat);

  switch (ordem) {
    case "menor-preco":
      lista = [...lista].sort((a, b) => a.preco - b.preco);
      break;
    case "maior-preco":
      lista = [...lista].sort((a, b) => b.preco - a.preco);
      break;
    case "novidades":
      lista = [...lista].sort((a, b) => Number(b.novidade ?? 0) - Number(a.novidade ?? 0));
      break;
    default:
      lista = [...lista].sort((a, b) => Number(b.destaque) - Number(a.destaque));
  }

  return (
    <>
      {/* Hero coleção */}
      <section className="bg-[var(--color-bg-deep)] text-[var(--color-cream)] py-20 md:py-28 relative grain">
        <div className="container-main relative z-10">
          <nav aria-label="breadcrumb" className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-cream)]/55 mb-6">
            <Link href="/" className="hover:text-[var(--color-gold-light)]">Início</Link>
            <span className="mx-3">/</span>
            <span className="text-[var(--color-gold-light)]">Coleção</span>
          </nav>
          <h1 className="display-mega text-[48px] md:text-[80px] max-w-3xl">
            A coleção <span className="display-italic text-[var(--color-gold-light)]">completa.</span>
          </h1>
          <p className="mt-5 text-[16px] md:text-[18px] leading-relaxed text-[var(--color-cream)]/75 max-w-2xl">
            {produtos.length} peças em prata 925 com moissanite certificada. Filtre por categoria abaixo.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="sticky top-16 md:top-20 z-30 bg-[var(--color-cream-paper)] border-b border-[var(--color-muted)]/15">
        <div className="container-main py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1.5 px-1.5">
            {CATS.map((c) => (
              <Link
                key={c.slug}
                href={c.slug === "all" ? "/colecao" : `/colecao?cat=${c.slug}`}
                className={`whitespace-nowrap text-[11px] font-bold tracking-[0.28em] uppercase px-4 py-2.5 border ${
                  cat === c.slug
                    ? "bg-[var(--color-bg-deep)] text-[var(--color-cream)] border-[var(--color-bg-deep)]"
                    : "border-[var(--color-muted)]/30 text-[var(--color-ink)] hover:border-[var(--color-gold)]"
                }`}
              >
                {c.nome}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 self-end md:self-auto text-[11px] font-bold tracking-[0.28em] uppercase">
            <span className="text-[var(--color-muted)]">Ordenar</span>
            {[
              { v: "destaque", l: "Destaques" },
              { v: "menor-preco", l: "Menor" },
              { v: "maior-preco", l: "Maior" },
              { v: "novidades", l: "Novidades" },
            ].map((o) => {
              const params = new URLSearchParams();
              if (cat !== "all") params.set("cat", cat);
              if (o.v !== "destaque") params.set("ordem", o.v);
              const qs = params.toString();
              return (
                <Link
                  key={o.v}
                  href={`/colecao${qs ? `?${qs}` : ""}`}
                  className={`px-2.5 py-1.5 border ${
                    ordem === o.v
                      ? "border-[var(--color-gold)] text-[var(--color-ink)]"
                      : "border-transparent text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {o.l}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[var(--color-cream)]">
        <div className="container-main py-12 md:py-16">
          {lista.length === 0 ? (
            <p className="text-center py-20 text-[var(--color-muted)]">Nenhum produto nesta categoria por enquanto.</p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
              {lista.map((p, i) => (
                <ProductCard key={p.slug} p={p} priority={i < 4} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
