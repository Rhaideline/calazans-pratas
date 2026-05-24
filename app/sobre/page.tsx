import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre a Calazans Pratas",
  description: "A história por trás da Calazans Pratas. Por que moissanite, por que prata 925, por que certificar.",
  alternates: { canonical: "https://calazanspratas.com.br/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <section className="bg-[var(--color-cream-paper)] py-20 md:py-32">
        <div className="container-main grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold-dark)] mb-5">◆ A casa</p>
            <h1 className="display-mega text-[48px] md:text-[80px] text-[var(--color-ink)]">
              Joia não é <span className="display-italic text-[var(--color-gold-dark)]">privilégio.</span>
            </h1>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-[var(--color-ink)]/85 max-w-xl font-medium">
              <p>
                A Calazans Pratas nasceu de uma frustração simples: por que joalheria de qualidade tem que custar uma fortuna? A pedra mais brilhante do mundo (moissanite) custa 10% do diamante. A prata 925 é eterna. A combinação devia ser acessível.
              </p>
              <p>
                Decidimos importar moissanites lab-grown direto da origem, montar em prata 925 com banho de ródio antialérgico, e certificar peça por peça. Sem intermediário, sem mark-up de luxo artificial — só a peça boa, com prova de origem, a um preço honesto.
              </p>
              <p>
                Cada certificado tem hash único. Cada cliente entende exatamente o que tá comprando. Não é joalheria de feira. É joalheria com prova.
              </p>
            </div>
            <Link
              href="/colecao"
              className="inline-block mt-10 bg-[var(--color-bg-deep)] text-[var(--color-cream)] hover:bg-[var(--color-ink)] px-8 py-4 text-[12px] font-extrabold tracking-[0.32em] uppercase"
            >
              Ver a coleção
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-bg-card)]">
              <Image
                src="https://images.pexels.com/photos/12978135/pexels-photo-12978135.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Calazans Pratas — atelier"
                fill
                sizes="(max-width:768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
