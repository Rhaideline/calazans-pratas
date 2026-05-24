import Link from "next/link";
import Image from "next/image";
import { produtos, getBestSellers, getNovidades } from "@/data/produtos";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const bestSellers = getBestSellers().slice(0, 4);
  const novidades = getNovidades().slice(0, 4);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-[var(--color-bg-deep)] text-[var(--color-cream)] overflow-hidden grain">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-deep)]/90 via-[var(--color-bg-deep)]/55 to-transparent" />
        </div>
        <div className="container-main relative z-10 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold)] mb-6">
              ◆ Prata 925 + Moissanite Certificada
            </p>
            <h1 className="display-mega text-[64px] md:text-[88px] lg:text-[112px]">
              <span className="display-italic text-[var(--color-gold-light)]">A elegância</span>
              <br />do diamante.
              <br />Sem o <span className="display-italic">preço</span>
              <br />do diamante.
            </h1>
            <p className="mt-8 text-[17px] md:text-[20px] leading-relaxed text-[var(--color-cream)]/80 max-w-lg">
              Joias em prata 925 com moissanite. Brilho superior ao diamante, a um décimo do preço. Cada peça com certificado de autenticidade.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/colecao"
                className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-bg-deep)] px-8 py-4 text-[12px] font-extrabold tracking-[0.32em] uppercase"
              >
                Ver coleção
              </Link>
              <Link
                href="/certificado"
                className="border border-[var(--color-cream)]/40 hover:border-[var(--color-gold)] text-[var(--color-cream)] px-8 py-4 text-[12px] font-extrabold tracking-[0.32em] uppercase"
              >
                Sobre o certificado
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CATEGORIAS ============ */}
      <section className="bg-[var(--color-cream-paper)]">
        <div className="container-main py-20 md:py-28">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-3">
              ◆ Coleção 2026
            </p>
            <h2 className="display-mega text-[42px] md:text-[64px] text-[var(--color-ink)]">
              Cada peça,
              <span className="display-italic text-[var(--color-gold-dark)]"> uma escolha.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { slug: "aneis", nome: "Anéis", img: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=900" },
              { slug: "colares", nome: "Colares", img: "https://images.pexels.com/photos/10918250/pexels-photo-10918250.jpeg?auto=compress&cs=tinysrgb&w=900" },
              { slug: "brincos", nome: "Brincos", img: "https://images.pexels.com/photos/8891940/pexels-photo-8891940.jpeg?auto=compress&cs=tinysrgb&w=900" },
              { slug: "pulseiras", nome: "Pulseiras", img: "https://images.pexels.com/photos/12713829/pexels-photo-12713829.jpeg?auto=compress&cs=tinysrgb&w=900" },
            ].map((c) => (
              <Link
                key={c.slug}
                href={`/colecao?cat=${c.slug}`}
                className="group relative aspect-[4/5] overflow-hidden bg-[var(--color-bg-card)]"
              >
                <Image
                  src={c.img}
                  alt={c.nome}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)]/90 via-[var(--color-bg-deep)]/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <h3 className="font-display text-[28px] md:text-[36px] font-bold italic text-[var(--color-cream)]">
                    {c.nome}
                  </h3>
                  <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold-light)] mt-1.5 group-hover:translate-x-1 transition-transform">
                    Ver →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MAIS VENDIDOS ============ */}
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
              href="/colecao"
              className="text-[12px] font-extrabold tracking-[0.32em] uppercase text-[var(--color-ink)] hover:text-[var(--color-gold-dark)] border-b-2 border-[var(--color-gold)] pb-1 self-start md:self-end"
            >
              Ver tudo →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
            {bestSellers.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ POR QUE MOISSANITE? ============ */}
      <section className="bg-[var(--color-bg-deep)] text-[var(--color-cream)] grain relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
             style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 65%)" }} />
        <div className="container-main py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold)] mb-4">
              ◆ Por Que Moissanite?
            </p>
            <h2 className="display-mega text-[44px] md:text-[72px]">
              A pedra que joalheiros <span className="display-italic text-[var(--color-gold-light)]">não querem</span> que você conheça.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            {[
              {
                stat: "2.65",
                statLabel: "Índice de refração",
                titulo: "Brilha mais que diamante.",
                texto: "Moissanite tem refração 2.65 vs 2.42 do diamante. Tecnicamente — e visualmente — brilha mais.",
              },
              {
                stat: "9.25",
                statLabel: "Mohs (dureza)",
                titulo: "Praticamente indestrutível.",
                texto: "Segundo em dureza, atrás só do diamante (10). Não risca, não lasca, atravessa gerações.",
              },
              {
                stat: "1/10",
                statLabel: "Do preço",
                titulo: "O luxo sem o luxo.",
                texto: "Lab-grown, sem mineração, sem conflito. O mesmo brilho a um décimo do preço de um diamante equivalente.",
              },
            ].map((b, i) => (
              <div key={i} className="border-t border-[var(--color-gold-dark)]/40 pt-6">
                <p className="font-display text-[64px] md:text-[88px] font-bold text-[var(--color-gold)] leading-none">
                  {b.stat}
                </p>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--color-cream)]/55 mt-1 font-bold">
                  {b.statLabel}
                </p>
                <h3 className="font-display italic text-[26px] md:text-[30px] mt-6 leading-tight">
                  {b.titulo}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-cream)]/75">
                  {b.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CERTIFICADO ============ */}
      <section className="bg-[var(--color-cream-paper)]">
        <div className="container-main py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-[4/5] bg-[var(--color-bg-card)] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/9428757/pexels-photo-9428757.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Certificado de autenticidade"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-5 left-5 bg-[var(--color-cream)] text-[var(--color-ink)] text-[10px] font-extrabold tracking-[0.32em] uppercase px-3 py-1.5">
                ◆ Hash único
              </div>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-4">
                ◆ Cada Peça, um Certificado
              </p>
              <h2 className="display-mega text-[42px] md:text-[60px] text-[var(--color-ink)]">
                Não é joalheria de feira.
                <br />
                <span className="display-italic text-[var(--color-gold-dark)]">É joalheria com prova.</span>
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-ink)]/80 max-w-lg">
                Toda peça da Calazans Pratas vai com certificado de autenticidade impresso, com hash único e dados técnicos da pedra (corte, dimensões, refração, dureza, origem lab-grown). Cliente confere a procedência, vendedor não precisa explicar.
              </p>
              <ul className="mt-7 space-y-2.5 text-[15px]">
                <li className="flex items-center gap-2.5"><span className="text-[var(--color-gold-dark)]">✦</span> Hash único impresso e digital</li>
                <li className="flex items-center gap-2.5"><span className="text-[var(--color-gold-dark)]">✦</span> Dados técnicos completos da pedra</li>
                <li className="flex items-center gap-2.5"><span className="text-[var(--color-gold-dark)]">✦</span> Selo de garantia 1 ano contra defeitos</li>
                <li className="flex items-center gap-2.5"><span className="text-[var(--color-gold-dark)]">✦</span> Verificável online via QR Code</li>
              </ul>
              <Link
                href="/certificado"
                className="inline-block mt-9 border-b-2 border-[var(--color-gold)] text-[12px] font-extrabold tracking-[0.32em] uppercase text-[var(--color-ink)] hover:text-[var(--color-gold-dark)] pb-1.5"
              >
                Ver certificado exemplo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NOVIDADES ============ */}
      <section className="bg-[var(--color-cream)]">
        <div className="container-main py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 gap-6">
            <div>
              <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-3">
                ◆ Novidades
              </p>
              <h2 className="display-mega text-[42px] md:text-[60px] text-[var(--color-ink)]">
                Acabou de <span className="display-italic text-[var(--color-gold-dark)]">chegar</span>.
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
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
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

      {/* ============ CTA FINAL ============ */}
      <section className="bg-[var(--color-cream-paper)]">
        <div className="container-main py-20 md:py-28 text-center">
          <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-5">
            ◆ Comece pela peça certa
          </p>
          <h2 className="display-mega text-[44px] md:text-[72px] text-[var(--color-ink)] max-w-3xl mx-auto">
            Brilhe sem pedir <span className="display-italic text-[var(--color-gold-dark)]">permissão.</span>
          </h2>
          <Link
            href="/colecao"
            className="inline-block mt-10 bg-[var(--color-bg-deep)] text-[var(--color-cream)] hover:bg-[var(--color-ink)] px-10 py-5 text-[12px] font-extrabold tracking-[0.4em] uppercase"
          >
            Explorar coleção
          </Link>
        </div>
      </section>
    </>
  );
}
