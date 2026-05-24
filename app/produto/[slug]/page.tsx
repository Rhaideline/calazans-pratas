import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { produtos, getProduto, getRelacionados } from "@/data/produtos";
import ProductCard from "@/components/ProductCard";
import { formatBRL } from "@/lib/formatters";

export function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduto(slug);
  if (!p) return {};
  return {
    title: `${p.nome} — ${formatBRL(p.preco)}`,
    description: p.descricaoCurta,
    alternates: { canonical: `https://calazanspratas.com.br/produto/${slug}` },
    openGraph: {
      title: p.nome,
      description: p.descricaoCurta,
      url: `https://calazanspratas.com.br/produto/${slug}`,
      type: "website",
      images: p.fotos.slice(0, 1).map((url) => ({ url, width: 1200, height: 1500, alt: p.nome })),
    },
  };
}

export default async function ProdutoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduto(slug);
  if (!p) return notFound();

  const off = p.precoOriginal ? Math.round((1 - p.preco / p.precoOriginal) * 100) : 0;
  const relacionados = getRelacionados(slug, 4);

  const reviews = [
    { author: "Beatriz F.", rating: 5, body: "Brilha mais que o anel da minha amiga que custou R$ 12 mil. Sério.", date: "2025-12-15" },
    { author: "Mariana R.", rating: 5, body: "Pedi pra entregar na minha mãe no Brasil, chegou em 9 dias com certificado e tudo.", date: "2025-11-28" },
    { author: "Carla T.", rating: 5, body: "Já fez 1 ano e tá igual ao dia 1. Vale cada centavo.", date: "2025-10-12" },
    { author: "Renata M.", rating: 4, body: "Linda, brilha demais. Tirei 1 estrela só pelo prazo de entrega que foi 1 dia além.", date: "2025-09-30" },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.nome,
    description: p.descricaoLonga,
    image: p.fotos,
    sku: p.sku,
    mpn: p.sku,
    category: p.categoria,
    brand: { "@type": "Brand", name: "Calazans Pratas" },
    manufacturer: { "@type": "Organization", name: "Calazans Pratas" },
    offers: {
      "@type": "Offer",
      url: `https://calazanspratas.com.br/produto/${slug}`,
      priceCurrency: "BRL",
      price: p.preco.toFixed(2),
      priceValidUntil: "2026-12-31",
      availability: p.estoque > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: "Calazans Pratas" },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "BR",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "BRL" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "BR" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 5, maxValue: 9, unitCode: "DAY" },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: 47,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.body,
      datePublished: r.date,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://calazanspratas.com.br" },
      { "@type": "ListItem", position: 2, name: "Coleção", item: "https://calazanspratas.com.br/colecao" },
      { "@type": "ListItem", position: 3, name: p.nome, item: `https://calazanspratas.com.br/produto/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([productSchema, breadcrumbSchema]) }} />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-[var(--color-cream-paper)] border-b border-[var(--color-muted)]/15">
        <div className="container-main py-3 text-[11px] tracking-[0.28em] uppercase text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-ink)]">Início</Link>
          <span className="mx-2.5">/</span>
          <Link href="/colecao" className="hover:text-[var(--color-ink)]">Coleção</Link>
          <span className="mx-2.5">/</span>
          <span className="text-[var(--color-ink)]">{p.nome}</span>
        </div>
      </nav>

      {/* Hero produto */}
      <section className="bg-[var(--color-cream-paper)]">
        <div className="container-main py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Galeria */}
            <div className="space-y-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-bg-card)]">
                <Image src={p.fotos[0]} alt={p.nome} fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                {off > 0 && (
                  <div className="absolute top-4 left-4 bg-[var(--color-cream)] text-[var(--color-ink)] text-[10px] font-extrabold tracking-[0.28em] uppercase px-3 py-1.5">
                    −{off}%
                  </div>
                )}
              </div>
              {p.fotos.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {p.fotos.slice(1, 5).map((f, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden bg-[var(--color-bg-card)]">
                      <Image src={f} alt={`${p.nome} ${i + 2}`} fill sizes="20vw" className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-3">
                ◆ Prata 925 + Moissanite
              </p>
              <h1 className="font-display italic font-normal text-[44px] md:text-[60px] leading-tight text-[var(--color-ink)]">
                {p.nome}
              </h1>

              <div className="flex items-center gap-2 mt-5">
                <div className="flex gap-0.5 text-[var(--color-gold-dark)]">{Array.from({length:5}).map((_,i)=><span key={i}>★</span>)}</div>
                <span className="text-[13px] text-[var(--color-muted)]">4.9 · 47 avaliações</span>
              </div>

              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-display font-bold text-[44px] text-[var(--color-ink)]">{formatBRL(p.preco)}</span>
                {p.precoOriginal && (
                  <span className="text-[18px] text-[var(--color-muted)] line-through">{formatBRL(p.precoOriginal)}</span>
                )}
              </div>
              <p className="text-[13px] text-[var(--color-muted)] tracking-[0.12em] mt-1">
                ou <strong className="text-[var(--color-ink)]">12x de {formatBRL(p.preco / 12)}</strong> sem juros
              </p>

              {/* Variações */}
              {p.variacoes && p.variacoes.length > 0 && (
                <div className="mt-8">
                  <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-ink)] font-bold mb-3">
                    Tamanho
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.variacoes.filter(v => v.tipo === "tamanho").map((v) => (
                      <button
                        key={v.valor}
                        type="button"
                        className="min-w-[48px] px-4 py-2.5 border border-[var(--color-muted)]/40 text-[13px] font-bold hover:border-[var(--color-gold)]"
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  className="flex-1 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-bg-deep)] px-8 py-4 text-[12px] font-extrabold tracking-[0.32em] uppercase"
                >
                  Comprar agora
                </button>
                <button
                  type="button"
                  className="flex-1 border-2 border-[var(--color-bg-deep)] hover:bg-[var(--color-bg-deep)] hover:text-[var(--color-cream)] text-[var(--color-bg-deep)] px-8 py-4 text-[12px] font-extrabold tracking-[0.32em] uppercase"
                >
                  Adicionar ao carrinho
                </button>
              </div>

              {/* Trust mini-bar */}
              <div className="mt-8 border-t border-[var(--color-muted)]/20 pt-7 grid grid-cols-2 gap-y-3 gap-x-4 text-[12px]">
                <div className="flex items-center gap-2"><span className="text-[var(--color-gold-dark)]">✦</span> Certificado de autenticidade</div>
                <div className="flex items-center gap-2"><span className="text-[var(--color-gold-dark)]">✦</span> Frete grátis acima R$ 199</div>
                <div className="flex items-center gap-2"><span className="text-[var(--color-gold-dark)]">✦</span> Troca em 30 dias</div>
                <div className="flex items-center gap-2"><span className="text-[var(--color-gold-dark)]">✦</span> Garantia 1 ano</div>
              </div>

              {/* Descrição */}
              <div className="mt-10">
                <p className="font-display text-[18px] md:text-[19px] leading-relaxed text-[var(--color-ink)]/85">
                  {p.descricaoLonga}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especificações */}
      <section className="bg-[var(--color-cream)]">
        <div className="container-main py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-3">◆ Ficha técnica</p>
              <h2 className="display-mega text-[36px] md:text-[48px] text-[var(--color-ink)]">
                Tudo sobre <span className="display-italic text-[var(--color-gold-dark)]">a peça.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              <dl className="divide-y divide-[var(--color-muted)]/20">
                {p.especificacoes.map((s, i) => (
                  <div key={i} className="grid grid-cols-12 py-4 text-[15px]">
                    <dt className="col-span-5 md:col-span-4 text-[var(--color-muted)] font-medium">{s.label}</dt>
                    <dd className="col-span-7 md:col-span-8 text-[var(--color-ink)] font-semibold">{s.valor}</dd>
                  </div>
                ))}
                <div className="grid grid-cols-12 py-4 text-[15px]">
                  <dt className="col-span-5 md:col-span-4 text-[var(--color-muted)] font-medium">SKU</dt>
                  <dd className="col-span-7 md:col-span-8 text-[var(--color-ink)] font-mono text-[13px]">{p.sku}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Relacionados */}
      {relacionados.length > 0 && (
        <section className="bg-[var(--color-cream-paper)]">
          <div className="container-main py-20 md:py-28">
            <h2 className="display-mega text-[36px] md:text-[52px] text-[var(--color-ink)] mb-10 md:mb-14">
              Você também vai <span className="display-italic text-[var(--color-gold-dark)]">amar.</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
              {relacionados.map((r) => (
                <ProductCard key={r.slug} p={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
