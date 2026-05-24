import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garantia & Trocas",
  description: "Garantia de 1 ano contra defeitos de fabricação. Troca em 30 dias sem perguntas. Como funciona, prazos e como solicitar.",
  alternates: { canonical: "https://calazanspratas.com.br/garantia" },
};

export default function GarantiaPage() {
  return (
    <section className="bg-[var(--color-cream-paper)] py-20 md:py-28">
      <div className="container-main max-w-3xl">
        <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-5">◆ Compromisso</p>
        <h1 className="display-mega text-[48px] md:text-[72px] text-[var(--color-ink)]">
          Garantia & <span className="display-italic text-[var(--color-gold-dark)]">trocas.</span>
        </h1>
        <div className="mt-10 space-y-10 text-[16px] leading-relaxed text-[var(--color-ink)]/85">
          <div>
            <h2 className="font-display italic font-bold text-[28px] text-[var(--color-ink)] mb-3">30 dias pra trocar.</h2>
            <p>Recebeu e não amou? Devolve em até 30 dias. Sem perguntas, sem ginástica. Reembolso integral pelo mesmo meio de pagamento ou troca por outra peça.</p>
          </div>
          <div>
            <h2 className="font-display italic font-bold text-[28px] text-[var(--color-ink)] mb-3">1 ano de garantia.</h2>
            <p>Toda peça acompanha selo de garantia contra defeitos de fabricação. Se a pedra escurecer, descravar, ou se a prata oxidar antes do tempo esperado — troca por peça nova. É a confiança de quem certifica.</p>
          </div>
          <div>
            <h2 className="font-display italic font-bold text-[28px] text-[var(--color-ink)] mb-3">Frete grátis na devolução.</h2>
            <p>A logística reversa é por nossa conta. Você não paga pra devolver. Etiqueta de postagem enviada por email em até 24h da solicitação.</p>
          </div>
          <div>
            <h2 className="font-display italic font-bold text-[28px] text-[var(--color-ink)] mb-3">Como solicitar.</h2>
            <p>Envie email pra <a href="mailto:atendimento@calazanspratas.com.br" className="border-b border-[var(--color-gold)] hover:text-[var(--color-gold-dark)]">atendimento@calazanspratas.com.br</a> com o número do pedido e o motivo. Respondemos em até 24h úteis com a etiqueta de retorno e instruções.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
