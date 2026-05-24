import Link from "next/link";
import Image from "next/image";
import { getBestSellers, getNovidades, produtos } from "@/data/produtos";
import ProductCard from "@/components/ProductCard";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  const bestSellers = getBestSellers().slice(0, 8);
  const novidades = getNovidades().slice(0, 4);
  const destaqueBridal = produtos.find((p) => p.slug === "conjunto-aneis-noivado-bridal");
  const destaquePremium = produtos.find((p) => p.slug === "colar-tennis-moissanite-premium-8mm");

  return (
    <>
      {/* ============ HERO CAROUSEL ============ */}
      <HeroCarousel />

      {/* ============ MOSAIC CATEGORIAS ============ */}
      <section className="bg-[var(--color-cream-paper)]">
        <div className="container-main py-20 md:py-28">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-3">
              ◆ Categorias
            </p>
            <h2 className="display-mega text-[42px] md:text-[60px] text-[var(--color-ink)]">
              Cada peça, <span className="display-italic text-[var(--color-gold-dark)]">uma escolha.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
            {[
              { slug: "aneis", nome: "Anéis", img: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=900", span: "lg:col-span-2 aspect-[4/5]" },
              { slug: "colares", nome: "Colares", img: "https://images.pexels.com/photos/10918250/pexels-photo-10918250.jpeg?auto=compress&cs=tinysrgb&w=900", span: "lg:col-span-2 aspect-[4/5]" },
              { slug: "brincos", nome: "Brincos", img: "https://images.pexels.com/photos/8891940/pexels-photo-8891940.jpeg?auto=compress&cs=tinysrgb&w=900", span: "lg:col-span-2 aspect-[4/5]" },
              { slug: "pulseiras", nome: "Pulseiras", img: "https://images.pexels.com/photos/12713829/pexels-photo-12713829.jpeg?auto=compress&cs=tinysrgb&w=900", span: "lg:col-span-3 aspect-[16/9]" },
              { slug: "conjuntos", nome: "Conjuntos & Bridal", img: "https://images.pexels.com/photos/9428757/pexels-photo-9428757.jpeg?auto=compress&cs=tinysrgb&w=900", span: "lg:col-span-3 aspect-[16/9]" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/colecao?cat=${c.slug}`}
                className={`group relative overflow-hidden bg-[var(--color-bg-card)] ${c.span}`}
              >
                <Image
                  src={c.img}
                  alt={c.nome}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)]/90 via-[var(--color-bg-deep)]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="font-display text-[24px] md:text-[32px] font-bold italic text-[var(--color-cream)]">
                    {c.nome}
                  </h3>
                  <p className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-gold-light)] mt-1.5 group-hover:translate-x-1 transition-transform font-bold">
                    Ver coleção →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ COLEÇÃO BRIDAL — EDITORIAL ============ */}
      {destaqueBridal && (
        <section className="bg-[var(--color-bg-deep)] text-[var(--color-cream)] grain relative overflow-hidden">
          <div className="container-main py-0 grid lg:grid-cols-2 items-stretch">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[640px]">
              <Image
                src="https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Coleção Bridal Calazans Pratas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-deep)]/50 to-transparent" />
            </div>
            <div className="px-8 md:px-14 lg:px-20 py-16 md:py-24 flex flex-col justify-center">
              <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold)] mb-5">
                ◆ Bridal Collection
              </p>
              <h2 className="display-mega text-[48px] md:text-[72px]">
                O sim mais
                <br />
                <span className="display-italic text-[var(--color-gold-light)]">brilhante</span> da sua vida.
              </h2>
              <p className="mt-7 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-cream)]/80 max-w-md">
                Anéis de noivado, alianças e conjuntos bridal em moissanite D VVS1 com certificado GRA. Brilho de quem sabe que casar não exige fortuna.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/colecao?cat=aneis&tag=bridal"
                  className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-bg-deep)] px-7 py-3.5 text-[12px] font-extrabold tracking-[0.32em] uppercase"
                >
                  Ver Bridal
                </Link>
                <Link
                  href={`/produto/${destaqueBridal.slug}`}
                  className="border border-[var(--color-cream)]/40 hover:border-[var(--color-gold)] px-7 py-3.5 text-[12px] font-extrabold tracking-[0.32em] uppercase"
                >
                  Set destaque
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ MAIS VENDIDOS — Carousel horizontal ============ */}
      <section className="bg-[var(--color-cream)]">
        <div className="container-main py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
            <div>
              <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-3">
                ◆ Mais Vendidos
              </p>
              <h2 className="display-mega text-[42px] md:text-[60px] text-[var(--color-ink)]">
                As peças que <span className="display-italic text-[var(--color-gold-dark)]">não param</span> de sair.
              </h2>
            </div>
            <Link
              href="/colecao?destaque=bestsellers"
              className="text-[12px] font-extrabold tracking-[0.32em] uppercase text-[var(--color-ink)] hover:text-[var(--color-gold-dark)] border-b-2 border-[var(--color-gold)] pb-1 self-start md:self-end"
            >
              Ver todos →
            </Link>
          </div>
          <div className="flex gap-5 md:gap-7 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6 md:mx-0 md:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {bestSellers.map((p) => (
              <div key={p.slug} className="min-w-[240px] md:min-w-[280px] lg:min-w-0">
                <ProductCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POR QUE MOISSANITE? ============ */}
      <section className="bg-[var(--color-bg-deep)] text-[var(--color-cream)] grain relative overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none bg-gold-halo"
          aria-hidden
        />
        <div className="container-main py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold)] mb-4">
              ◆ Por que Moissanite?
            </p>
            <h2 className="display-mega text-[44px] md:text-[68px]">
              A pedra que joalheiros <span className="display-italic text-[var(--color-gold-light)]">não querem</span> que você conheça.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            {[
              { stat: "2.65", statLabel: "Índice de refração", titulo: "Brilha mais que diamante.", texto: "Moissanite tem refração 2.65 vs 2.42 do diamante. Tecnicamente — e visualmente — brilha mais." },
              { stat: "9.25", statLabel: "Mohs (dureza)", titulo: "Praticamente indestrutível.", texto: "Segundo em dureza, atrás só do diamante (10). Não risca, não lasca, atravessa gerações." },
              { stat: "1/10", statLabel: "Do preço", titulo: "O luxo sem o luxo.", texto: "Lab-grown, sem mineração, sem conflito. O mesmo brilho a um décimo do preço de um diamante equivalente." },
            ].map((b, i) => (
              <div key={i} className="border-t border-[var(--color-gold-dark)]/40 pt-6">
                <p className="font-display text-[64px] md:text-[88px] font-bold text-[var(--color-gold)] leading-none">{b.stat}</p>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-cream)]/55 mt-1 font-bold">{b.statLabel}</p>
                <h3 className="font-display italic text-[26px] md:text-[30px] mt-6 leading-tight">{b.titulo}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-cream)]/75">{b.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EDITORIAL PREMIUM (Edição Limitada) ============ */}
      {destaquePremium && (
        <section className="bg-[var(--color-cream-paper)]">
          <div className="container-main py-24 md:py-32">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-5">
                  ◆ Edição Limitada
                </p>
                <h2 className="display-mega text-[42px] md:text-[60px] text-[var(--color-ink)]">
                  Statement piece, <span className="display-italic text-[var(--color-gold-dark)]">edição limitada.</span>
                </h2>
                <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-ink)]/80 max-w-md">
                  Colar tennis com moissanites massivos de 8mm cada — ~2ct equivalente por pedra. Estoque de 3 unidades. A peça que faz parar conversa.
                </p>
                <div className="mt-8 flex items-baseline gap-3">
                  <span className="font-display font-bold text-[40px] text-[var(--color-ink)]">R$ 1.809,45</span>
                  <span className="text-[15px] text-[var(--color-muted)] line-through">R$ 2.899</span>
                </div>
                <Link
                  href={`/produto/${destaquePremium.slug}`}
                  className="inline-block mt-7 bg-[var(--color-bg-deep)] hover:bg-[var(--color-ink)] text-[var(--color-cream)] px-8 py-4 text-[12px] font-extrabold tracking-[0.32em] uppercase"
                >
                  Ver peça
                </Link>
              </div>
              <div className="lg:col-span-7">
                <div className="relative aspect-[5/4] overflow-hidden bg-[var(--color-bg-card)]">
                  <Image
                    src="https://images.pexels.com/photos/11148872/pexels-photo-11148872.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt={destaquePremium.nome}
                    fill
                    sizes="(max-width:1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute top-5 left-5 bg-[var(--color-gold)] text-[var(--color-bg-deep)] text-[10px] font-extrabold tracking-[0.32em] uppercase px-3 py-1.5">
                    ◆ Apenas 3 unidades
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ NOVIDADES ============ */}
      <section className="bg-[var(--color-cream)]">
        <div className="container-main py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
            <div>
              <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-3">
                ◆ Lançamentos
              </p>
              <h2 className="display-mega text-[42px] md:text-[60px] text-[var(--color-ink)]">
                Acabou de <span className="display-italic text-[var(--color-gold-dark)]">chegar.</span>
              </h2>
            </div>
            <Link
              href="/colecao?ordem=novidades"
              className="text-[12px] font-extrabold tracking-[0.32em] uppercase text-[var(--color-ink)] hover:text-[var(--color-gold-dark)] border-b-2 border-[var(--color-gold)] pb-1 self-start md:self-end"
            >
              Ver tudo →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
            {novidades.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ INSPIRAÇÃO / EDITORIAL ============ */}
      <section className="bg-[var(--color-cream-paper)]">
        <div className="container-main py-24 md:py-32">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-3">
              ◆ Inspiração
            </p>
            <h2 className="display-mega text-[42px] md:text-[60px] text-[var(--color-ink)]">
              Leituras para <span className="display-italic text-[var(--color-gold-dark)]">brilhar.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                cat: "Guia",
                titulo: "Moissanite vs diamante: o que joalheiros não contam.",
                resumo: "Comparativo técnico — refração, dureza, dispersão e por que moissanite brilha mais.",
                img: "https://images.pexels.com/photos/9428782/pexels-photo-9428782.jpeg?auto=compress&cs=tinysrgb&w=1200",
                href: "/inspiracao/moissanite-vs-diamante",
              },
              {
                cat: "Cuidados",
                titulo: "Como cuidar da sua peça em prata 925.",
                resumo: "3 hábitos pra manter o brilho original por anos. Banho de ródio e o que evitar.",
                img: "https://images.pexels.com/photos/12978135/pexels-photo-12978135.jpeg?auto=compress&cs=tinysrgb&w=1200",
                href: "/inspiracao/cuidados-prata-925",
              },
              {
                cat: "Bridal",
                titulo: "Anel de noivado moissanite: vale a pena?",
                resumo: "A verdade sobre o custo-benefício e por que cada vez mais noivas escolhem.",
                img: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1200",
                href: "/inspiracao/anel-noivado-moissanite",
              },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-card)] mb-5">
                  <Image
                    src={post.img}
                    alt={post.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[var(--color-gold-dark)] mb-2">{post.cat}</p>
                <h3 className="font-display italic text-[24px] md:text-[26px] text-[var(--color-ink)] leading-tight group-hover:text-[var(--color-gold-dark)]">
                  {post.titulo}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink)]/75">{post.resumo}</p>
                <p className="mt-3 text-[11px] tracking-[0.32em] uppercase font-bold text-[var(--color-gold-dark)] group-hover:translate-x-1 transition-transform">
                  Ler →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEPOIMENTOS ============ */}
      <section className="bg-[var(--color-bg-deep)] text-[var(--color-cream)] grain relative">
        <div className="container-main py-24 md:py-32">
          <div className="max-w-2xl mb-14">
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold)] mb-4">
              ◆ Quem usa, fala
            </p>
            <h2 className="display-mega text-[44px] md:text-[64px]">
              4.9 estrelas <span className="display-italic text-[var(--color-gold-light)]">não cai do céu.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { n: "Beatriz F.", c: "São Paulo · SP", t: "Comprei o solitário 1ct pra me presentear. Brilha mais que o anel da minha amiga que custou R$ 12 mil. Sério." },
              { n: "Mariana R.", c: "Boston · MA", t: "Pedi pra entregar na minha mãe no Brasil, chegou em 9 dias com certificado e tudo. Ela achou que era diamante. Eu não desmenti." },
              { n: "Carla T.", c: "Belo Horizonte · MG", t: "Já tinha comprado moissanite em outro lugar e a pedra escureceu em 6 meses. Aqui já fez 1 ano e tá igual ao dia 1. Vale cada centavo." },
            ].map((r, i) => (
              <figure key={i} className="bg-[var(--color-bg-card)] border border-[var(--color-gold-dark)]/30 p-7 md:p-8">
                <div className="flex gap-0.5 text-[var(--color-gold)] mb-4" aria-label="5 estrelas">
                  {Array.from({ length: 5 }).map((_, j) => (<span key={j}>★</span>))}
                </div>
                <blockquote className="font-display italic text-[20px] md:text-[22px] leading-snug text-[var(--color-cream)]">
                  “{r.t}”
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-[var(--color-gold-dark)]/30">
                  <p className="font-bold text-[14px] tracking-[0.18em] uppercase">{r.n}</p>
                  <p className="text-[12px] text-[var(--color-cream)]/55 mt-0.5">{r.c} · Cliente verificada</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="bg-[var(--color-cream-paper)]">
        <div className="container-main py-20 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-5">
              ◆ Newsletter
            </p>
            <h2 className="display-mega text-[36px] md:text-[52px] text-[var(--color-ink)]">
              Entre na lista, <span className="display-italic text-[var(--color-gold-dark)]">ganhe 10%.</span>
            </h2>
            <p className="mt-5 text-[16px] text-[var(--color-ink)]/75 max-w-md mx-auto">
              Lançamentos exclusivos e 10% de desconto na sua primeira compra.
            </p>
            <form action="/api/newsletter" method="post" className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                name="email"
                required
                aria-label="Email"
                placeholder="Seu melhor email"
                className="flex-1 bg-transparent border border-[var(--color-muted)]/40 px-5 py-4 text-[14px] outline-none focus:border-[var(--color-gold)] placeholder:text-[var(--color-muted)]"
              />
              <button
                type="submit"
                className="bg-[var(--color-bg-deep)] hover:bg-[var(--color-ink)] text-[var(--color-cream)] px-7 py-4 text-[11px] font-extrabold tracking-[0.32em] uppercase"
              >
                Quero meu 10%
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
