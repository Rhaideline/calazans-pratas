import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Calazans Pratas. Atendimento por WhatsApp e email.",
  alternates: { canonical: "https://calazanspratas.com.br/contato" },
};

export default function ContatoPage() {
  return (
    <section className="bg-[var(--color-cream-paper)] py-20 md:py-28">
      <div className="container-main max-w-2xl">
        <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-5">◆ Contato</p>
        <h1 className="display-mega text-[48px] md:text-[72px] text-[var(--color-ink)]">
          Fala com <span className="display-italic text-[var(--color-gold-dark)]">a gente.</span>
        </h1>
        <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-ink)]/80">
          Atendimento em até 24h úteis. WhatsApp pra urgências, email pra detalhes.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <a
            href="https://wa.me/5531986589584"
            className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-bg-deep)] px-6 py-5 text-center"
          >
            <p className="text-[11px] tracking-[0.32em] uppercase font-bold opacity-65">WhatsApp</p>
            <p className="font-display italic text-[24px] font-bold mt-1">(31) 98658-9584</p>
          </a>
          <a
            href="mailto:atendimento@calazanspratas.com.br"
            className="border-2 border-[var(--color-bg-deep)] hover:bg-[var(--color-bg-deep)] hover:text-[var(--color-cream)] text-[var(--color-bg-deep)] px-6 py-5 text-center"
          >
            <p className="text-[11px] tracking-[0.32em] uppercase font-bold opacity-65">Email</p>
            <p className="font-display italic text-[20px] font-bold mt-1 break-all">atendimento@calazanspratas.com.br</p>
          </a>
        </div>
        <p className="mt-12 text-[13px] text-[var(--color-muted)] tracking-[0.12em]">
          Horário de atendimento: segunda a sexta, 9h às 18h (Brasília).
        </p>
      </div>
    </section>
  );
}
