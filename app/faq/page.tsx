import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description: "Dúvidas comuns sobre moissanite, prata 925, certificado, prazos de envio, troca e garantia.",
  alternates: { canonical: "https://calazanspratas.com.br/faq" },
};

const FAQ = [
  {
    q: "Moissanite é falso?",
    a: "Não. Moissanite é uma pedra preciosa real (carbeto de silício, descoberta em 1893 em um meteorito). Hoje é produzida em laboratório com perfeição molecular. Tem propriedades ópticas SUPERIORES ao diamante (refração 2.65 vs 2.42) e dureza 9.25 Mohs (diamante = 10). Não é zircônia, não é vidro, não é cristal.",
  },
  {
    q: "Qual a diferença pra um diamante?",
    a: "A olho nu, praticamente nenhuma — exceto que o moissanite brilha mais. As diferenças: (1) preço — moissanite é 1/10 do valor; (2) origem — lab-grown sustentável, sem mineração; (3) dispersão de luz — moissanite tem 2.4x mais 'fogo' (cores) que o diamante.",
  },
  {
    q: "A prata 925 escurece com o tempo?",
    a: "Sim, prata 925 oxida naturalmente. POR ISSO todas as nossas peças têm banho de ródio antialérgico — uma camada metálica que protege a prata e elimina a oxidação no uso normal. Com cuidados básicos (não dormir com, não tomar banho com, guardar seca), a peça mantém o brilho por anos.",
  },
  {
    q: "O certificado vale onde?",
    a: "O certificado prova que a peça foi inspecionada e certificada por nós, com dados técnicos verificáveis. Não é IGI/GIA (esses certificam diamantes naturais grandes). É um certificado de procedência da Calazans Pratas, com hash único e QR Code pra verificação online.",
  },
  {
    q: "Quanto demora pra chegar?",
    a: "Brasil: 5-9 dias úteis (Sedex / Jadlog). EUA: 10-15 dias úteis com rastreio. Frete grátis em compras acima de R$ 199 (Brasil) / US$ 100 (EUA).",
  },
  {
    q: "Posso trocar se não couber?",
    a: "Sim, 30 dias pra trocar — incluindo troca de tamanho de anel. Etiqueta de retorno gratuita.",
  },
  {
    q: "Vocês aceitam parcelamento?",
    a: "Sim. Até 12x sem juros no cartão de crédito (mínimo R$ 30 por parcela). Aceitamos Visa, Master, Elo, Amex. PIX com 5% off.",
  },
  {
    q: "Como saber meu tamanho de anel?",
    a: "Tem um aro? Mede o diâmetro interno em milímetros e consulta a tabela na página do produto. Não tem? Posta um pedido de tamanho 16 (médio brasileiro) e troca grátis se não couber.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="bg-[var(--color-cream-paper)] py-20 md:py-28">
        <div className="container-main max-w-3xl">
          <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-5">◆ FAQ</p>
          <h1 className="display-mega text-[48px] md:text-[72px] text-[var(--color-ink)]">
            Perguntas <span className="display-italic text-[var(--color-gold-dark)]">frequentes.</span>
          </h1>
          <div className="mt-12 divide-y divide-[var(--color-muted)]/25">
            {FAQ.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <h2 className="font-display italic text-[22px] md:text-[24px] text-[var(--color-ink)] leading-tight pr-4">{f.q}</h2>
                  <span className="text-[var(--color-gold-dark)] text-[28px] leading-none group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-ink)]/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
