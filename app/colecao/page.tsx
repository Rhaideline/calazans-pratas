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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 cv-auto">
              {lista.map((p, i) => (
                <ProductCard key={p.slug} p={p} priority={i < 4} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SEO content: intro + FAQ inferior (otimiza pra AI Overviews e Google) */}
      <CategorySeoContent cat={cat} />
    </>
  );
}

// ============ SEO CONTENT BLOCKS (FAQ + intro) ============
// Conteúdo otimizado pra AI Overviews/GEO + ranking de coleção
function CategorySeoContent({ cat }: { cat: string }) {
  const CONTENT: Record<string, { intro: string; perguntas: { q: string; a: string }[] }> = {
    all: {
      intro:
        "Joias em prata 925 com moissanite certificada — anéis, colares, brincos, pulseiras e conjuntos bridal. Cada peça vem com certificado de autenticidade GRA e da Calazans Pratas, hash único e dados técnicos completos da pedra (corte, dimensões, refração, dureza, origem lab-grown). O moissanite tem índice de refração 2.65 (maior que diamante 2.42) e dureza 9.25 na escala Mohs — atrás só do diamante (10). Vendemos por 1/10 do preço de joias equivalentes em ouro com diamante natural, sem perder brilho, durabilidade ou apresentação. Todas as peças saem em embalagem premium pronta pra presente, com frete grátis acima de R$ 199 no Brasil e troca em 30 dias.",
      perguntas: [
        { q: "Moissanite é uma pedra real ou falsa?", a: "Moissanite é uma pedra preciosa real (carbeto de silício, descoberta em 1893 em um meteorito). Hoje é produzida em laboratório com perfeição molecular. Não é zircônia, não é vidro, não é cristal." },
        { q: "Por que comprar prata 925 com moissanite ao invés de ouro com diamante?", a: "Custo: ~1/10 do preço. Brilho: refração maior (2.65 vs 2.42). Sustentabilidade: lab-grown, sem mineração, sem conflito. Durabilidade: dureza 9.25 Mohs, resiste a uso diário." },
        { q: "A prata 925 escurece?", a: "Sim — prata oxida naturalmente. POR ISSO todas as peças têm banho de ródio antialérgico, que protege e elimina oxidação no uso normal. Com cuidados básicos (não dormir com, não tomar banho com), mantém brilho por anos." },
        { q: "Qual a diferença entre os tipos de tennis (necklace, pulseira, etc.)?", a: "Tennis é o estilo de cravação onde as pedras ficam em sequência contínua. Tennis necklace (colar), tennis bracelet (pulseira) e tennis earrings (brincos) todos seguem esse padrão de pedras emendadas em linha." },
      ],
    },
    aneis: {
      intro:
        "Anéis em prata 925 com moissanite certificada — solitários, eternity, meia aliança, trilogia e bridal sets. Cada peça com certificado GRA e hash único. O moissanite VVS1 cor D (a top classificação) reproduz exatamente a aparência de um diamante de alta qualidade, com a vantagem de brilhar ainda mais (refração 2.65 vs 2.42). Todos os modelos com banho de ródio antialérgico, fechamento profissional e tamanhos 13 a 19 em estoque. Anéis de noivado, alianças de casamento, anéis para presentear ou pra usar todo dia — escolha pelo estilo, ocasião e tamanho da pedra.",
      perguntas: [
        { q: "Qual o tamanho ideal de moissanite pra um anel de noivado?", a: "O padrão mais procurado é 1 quilate (6.5mm em corte redondo). Mais sutil: 0.5ct (5mm). Mais statement: 1.5-2ct (7-8mm). Em moissanite o quilate equivalente é visual — você paga por pedra maior pelo mesmo preço de um diamante menor." },
        { q: "Como saber meu tamanho de anel sem ir na joalheria?", a: "Pegue um anel que já serve no dedo certo, meça o diâmetro interno em milímetros e consulte nossa tabela. Ou peça tamanho 16 (médio brasileiro) e troque grátis em 30 dias se não couber." },
        { q: "Qual a diferença entre solitário e eternity?", a: "Solitário tem uma pedra principal centralizada. Eternity tem cravação 360° por todo o aro. Solitário é o anel de noivado clássico; eternity é mais usado como aliança ou stack (empilhado)." },
      ],
    },
    colares: {
      intro:
        "Colares em prata 925 com moissanite — ponto de luz, tennis necklace, gargantilha, pingentes e cruz. Todos com banho de ródio antialérgico, fecho de segurança duplo e certificado de autenticidade. O ponto de luz é o essencial pra usar todo dia; o tennis necklace é o statement pra ocasiões especiais. Comprimentos de 38cm a 50cm com extensores ajustáveis. Cada moissanite cravado com inspeção individual e classificação VVS1 cor D (top de linha).",
      perguntas: [
        { q: "Qual comprimento de colar combina com cada decote?", a: "Decote V: colar 42-45cm que cai um pouco acima do V. Decote redondo: 45-50cm com pingente. Gola alta: tennis necklace 38-42cm bem rente ao pescoço. Camiseta: qualquer um, depende do estilo." },
        { q: "A corrente veneziana é resistente?", a: "Sim — é uma das tramas mais resistentes em prata 925. Suporta uso diário, não enrosca no cabelo e tem boa flexibilidade. Diferente da corrente cabo que pode emaranhar mais." },
      ],
    },
    brincos: {
      intro:
        "Brincos em prata 925 com moissanite — tarraxa pressão, argola cravada, gota pendente e ear cuff. Todos com tarraxa antialérgica (sem níquel) e certificado de autenticidade. O par de brincos tarraxa com moissanite é o presente mais procurado da loja: discreto, brilhante, presenteia bem.",
      perguntas: [
        { q: "Os brincos não vão cair?", a: "Não — a tarraxa de pressão dos nossos brincos é dimensionada pra segurar o dia inteiro mesmo com movimento. Antialérgica. Se cair, troca." },
        { q: "Quem fura só uma orelha tem opção?", a: "Sim — temos ear cuffs em par que se prendem por pressão (sem precisar furar). Visual completo com 5 pedras em escalada por orelha." },
      ],
    },
    pulseiras: {
      intro:
        "Pulseiras em prata 925 com moissanite — tennis bracelet em diferentes tamanhos de pedra (2mm, 3mm, 4mm, 5mm e 8mm), riviera com cravação griffe, e modelos delicados pra empilhar (stack). Fecho de segurança duplo em todas, tamanho ajustável 17cm-18cm, banho de ródio antialérgico. A pulseira tennis é a peça-investimento da loja — substitui várias bijuterias.",
      perguntas: [
        { q: "Tennis bracelet escapa do pulso?", a: "Não. Todas as nossas pulseiras tennis têm fecho de segurança duplo (trava principal + trava secundária). Você não perde nem em movimento brusco." },
        { q: "Posso usar tennis 2mm + 3mm juntas (stack)?", a: "Sim, é até recomendado. O stack de pulseiras é tendência forte — combine tamanhos de pedra diferentes pra ter um look mais editorial e menos uniforme." },
      ],
    },
    conjuntos: {
      intro:
        "Conjuntos coordenados em prata 925 com moissanite — sets bridal (anel de noivado + aliança), duos colar+pulseira, e trios anel+colar+brincos. Cada peça com certificado individual e hash único. Embalagem premium dupla pronta pra presente. Os conjuntos têm desconto agregado em relação a comprar as peças separadas.",
      perguntas: [
        { q: "Vale a pena comprar conjunto ou peças separadas?", a: "Conjunto sai 25-35% mais barato que comprar separado. E garante combinação visual perfeita (mesmo brilho, mesmo banho, mesmas pedras certificadas)." },
        { q: "O bridal set serve pra noivado e casamento?", a: "Sim — é o set tradicional. 1 anel solitário (noivado) + 1 aliança eternity (casamento). Usa o solitário sozinho enquanto noiva e empilha com a aliança depois do casamento." },
      ],
    },
  };

  const c = CONTENT[cat] || CONTENT.all;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.perguntas.map((p) => ({
      "@type": "Question",
      name: p.q,
      acceptedAnswer: { "@type": "Answer", text: p.a },
    })),
  };

  return (
    <section className="bg-[var(--color-cream-paper)] border-t border-[var(--color-muted)]/10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container-main py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16">
          <div className="md:col-span-5">
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-4">◆ Sobre esta coleção</p>
            <h2 className="display-mega text-[36px] md:text-[48px] text-[var(--color-ink)] mb-6">
              O que você precisa <span className="display-italic text-[var(--color-gold-dark)]">saber.</span>
            </h2>
            <p className="text-[16px] leading-relaxed text-[var(--color-ink)]/85">
              {c.intro}
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-4">◆ Perguntas frequentes</p>
            <div className="divide-y divide-[var(--color-muted)]/20">
              {c.perguntas.map((p, i) => (
                <details key={i} className="group py-4">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <h3 className="font-display italic text-[20px] md:text-[22px] text-[var(--color-ink)] leading-tight pr-4">{p.q}</h3>
                    <span className="text-[var(--color-gold-dark)] text-[24px] leading-none group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]/80">{p.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
