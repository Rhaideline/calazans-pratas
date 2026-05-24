import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certificado de Autenticidade",
  description:
    "Toda joia da Calazans Pratas vai com certificado de autenticidade impresso, hash único e verificação online via QR Code. Transparência total na origem da pedra.",
  alternates: { canonical: "https://calazanspratas.com.br/certificado" },
};

export default function CertificadoPage() {
  return (
    <>
      <section className="bg-[var(--color-bg-deep)] text-[var(--color-cream)] py-24 md:py-32 grain relative">
        <div className="container-main relative z-10">
          <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold)] mb-5">◆ Por que importa</p>
          <h1 className="display-mega text-[52px] md:text-[88px] max-w-3xl">
            Sua peça com <span className="display-italic text-[var(--color-gold-light)]">prova</span> de origem.
          </h1>
          <p className="mt-7 text-[17px] md:text-[19px] leading-relaxed text-[var(--color-cream)]/80 max-w-2xl">
            Não dá pra confiar em joalheria que não documenta o que vende. Por isso, cada peça nossa sai com certificado físico e digital — verificável a qualquer momento.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream-paper)]">
        <div className="container-main py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="relative aspect-[3/4] bg-[var(--color-bg-card)] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4386349/pexels-photo-4386349.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Certificado de autenticidade Calazans Pratas"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="display-mega text-[36px] md:text-[48px] text-[var(--color-ink)]">
                O que vai no <span className="display-italic text-[var(--color-gold-dark)]">certificado</span>.
              </h2>
              <ul className="mt-8 space-y-5">
                {[
                  { t: "Hash único", d: "Cada peça tem um código único impresso e em QR. Verifica a procedência online em segundos." },
                  { t: "Dados técnicos completos", d: "Tipo de pedra, corte, dimensões, peso em quilates equivalentes, índice de refração, dureza Mohs, origem lab-grown." },
                  { t: "Material da peça", d: "Confirmação da liga (prata 925), banho de ródio antialérgico, peso da prata." },
                  { t: "Garantia 1 ano", d: "Selo de garantia contra defeitos de fabricação. Defeito = troca por peça nova." },
                ].map((it) => (
                  <li key={it.t} className="flex gap-4">
                    <span className="text-[var(--color-gold-dark)] font-display text-[28px] leading-none flex-shrink-0">✦</span>
                    <div>
                      <h3 className="font-bold text-[17px] text-[var(--color-ink)]">{it.t}</h3>
                      <p className="text-[15px] leading-relaxed text-[var(--color-ink)]/75 mt-1">{it.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/colecao"
                className="inline-block mt-10 bg-[var(--color-bg-deep)] text-[var(--color-cream)] hover:bg-[var(--color-ink)] px-8 py-4 text-[12px] font-extrabold tracking-[0.32em] uppercase"
              >
                Ver coleção
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
