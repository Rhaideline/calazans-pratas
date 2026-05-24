import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Inspiração — Guias, dicas e estilo",
  description: "Conteúdo editorial sobre moissanite, prata 925, cuidados e como escolher sua peça. Guias práticos pra brilhar com consciência.",
  alternates: { canonical: "https://calazanspratas.com.br/inspiracao" },
};

const POSTS = [
  {
    slug: "moissanite-vs-diamante",
    cat: "Guia",
    titulo: "Moissanite vs diamante: o que joalheiros não contam.",
    resumo: "Comparativo técnico — refração, dureza, dispersão. Por que moissanite brilha mais e custa 1/10.",
    img: "https://images.pexels.com/photos/9428782/pexels-photo-9428782.jpeg?auto=compress&cs=tinysrgb&w=1400",
    leitura: "8 min",
  },
  {
    slug: "cuidados-prata-925",
    cat: "Cuidados",
    titulo: "Como cuidar da sua peça em prata 925.",
    resumo: "3 hábitos pra manter o brilho original por anos. Banho de ródio, oxidação e o que evitar.",
    img: "https://images.pexels.com/photos/12978135/pexels-photo-12978135.jpeg?auto=compress&cs=tinysrgb&w=1400",
    leitura: "5 min",
  },
  {
    slug: "anel-noivado-moissanite",
    cat: "Bridal",
    titulo: "Anel de noivado moissanite: vale a pena?",
    resumo: "A verdade sobre custo-benefício e por que cada vez mais noivas escolhem moissanite ao invés de diamante.",
    img: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1400",
    leitura: "7 min",
  },
  {
    slug: "como-medir-tamanho-anel",
    cat: "Guia prático",
    titulo: "Como medir seu tamanho de anel em casa.",
    resumo: "Sem ir na joalheria. Com barbante, régua e a tabela de equivalência.",
    img: "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1400",
    leitura: "4 min",
  },
  {
    slug: "tennis-necklace-historia",
    cat: "Edição",
    titulo: "A história do colar tennis (e por que ele voltou em 2025).",
    resumo: "De Chris Evert na quadra em 1978 ao Instagram em 2025. A peça que nunca sai de moda.",
    img: "https://images.pexels.com/photos/11148872/pexels-photo-11148872.jpeg?auto=compress&cs=tinysrgb&w=1400",
    leitura: "6 min",
  },
  {
    slug: "stack-aneis-como-combinar",
    cat: "Styling",
    titulo: "Stack de anéis: como combinar 2, 3 ou 5 sem cair no exagero.",
    resumo: "Regra do número ímpar, mix de larguras e como NÃO ficar com cara de bijuteria.",
    img: "https://images.pexels.com/photos/12978135/pexels-photo-12978135.jpeg?auto=compress&cs=tinysrgb&w=1400",
    leitura: "5 min",
  },
];

export default function InspiracaoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-bg-deep)] text-[var(--color-cream)] py-20 md:py-28 relative grain">
        <div className="container-main relative z-10">
          <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold)] mb-5">◆ Inspiração</p>
          <h1 className="display-mega text-[52px] md:text-[88px] max-w-3xl">
            Leituras para <span className="display-italic text-[var(--color-gold-light)]">brilhar.</span>
          </h1>
          <p className="mt-7 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-cream)]/75 max-w-2xl">
            Guias práticos, comparativos técnicos e styling tips. Pra você comprar sem dúvida e usar sem medo.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-[var(--color-cream-paper)]">
        <div className="container-main py-20 md:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-10">
            {POSTS.map((p) => (
              <Link key={p.slug} href={`/inspiracao/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-card)] mb-5">
                  <Image
                    src={p.img}
                    alt={p.titulo}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-3 left-3 bg-[var(--color-cream)] text-[var(--color-ink)] text-[10px] font-extrabold tracking-[0.28em] uppercase px-2.5 py-1">
                    {p.cat}
                  </div>
                </div>
                <h2 className="font-display italic text-[24px] md:text-[26px] text-[var(--color-ink)] leading-tight group-hover:text-[var(--color-gold-dark)]">
                  {p.titulo}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink)]/75">{p.resumo}</p>
                <p className="mt-4 text-[11px] tracking-[0.32em] uppercase font-bold text-[var(--color-gold-dark)] group-hover:translate-x-1 transition-transform inline-block">
                  Ler · {p.leitura} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
