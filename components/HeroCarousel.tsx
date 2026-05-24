"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  eyebrow: string;
  titulo1: string;
  titulo2: string;
  tituloItalic?: string;
  subtitulo: string;
  cta: { label: string; href: string };
  cta2?: { label: string; href: string };
  imagem: string;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "◆ Prata 925 + Moissanite Certificada",
    titulo1: "A elegância",
    titulo2: "sem o preço",
    tituloItalic: "do diamante.",
    subtitulo: "Brilho superior ao diamante a 1/10 do preço. Cada peça com certificado de autenticidade.",
    cta: { label: "Ver coleção", href: "/colecao" },
    cta2: { label: "Sobre o certificado", href: "/certificado" },
    imagem: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    eyebrow: "◆ Bridal Collection",
    titulo1: "O sim",
    titulo2: "mais brilhante",
    tituloItalic: "da sua vida.",
    subtitulo: "Anéis de noivado e alianças em moissanite D VVS1. Certificado GRA + 30 dias de troca.",
    cta: { label: "Ver Bridal", href: "/colecao?cat=aneis&tag=bridal" },
    imagem: "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    eyebrow: "◆ Edição Tennis",
    titulo1: "O brilho",
    titulo2: "que não para",
    tituloItalic: "no pescoço.",
    subtitulo: "Tennis necklaces e pulseiras com moissanites em sequência contínua. Statement piece atemporal.",
    cta: { label: "Ver Tennis", href: "/colecao?tag=tennis" },
    imagem: "https://images.pexels.com/photos/11148872/pexels-photo-11148872.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

export default function HeroCarousel() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-[var(--color-bg-deep)] text-[var(--color-cream)] overflow-hidden grain h-[640px] md:h-[720px] lg:h-[760px]">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          aria-hidden={idx !== i}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Image
            src={s.imagem}
            alt=""
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-deep)]/90 via-[var(--color-bg-deep)]/55 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-main">
              <div className="max-w-2xl">
                <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold)] mb-6">
                  {s.eyebrow}
                </p>
                <h1 className="display-mega text-[52px] md:text-[80px] lg:text-[104px]">
                  {s.titulo1}<br />
                  {s.titulo2}{" "}
                  {s.tituloItalic && (
                    <span className="display-italic text-[var(--color-gold-light)]">{s.tituloItalic}</span>
                  )}
                </h1>
                <p className="mt-7 text-[16px] md:text-[19px] leading-relaxed text-[var(--color-cream)]/80 max-w-lg">
                  {s.subtitulo}
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href={s.cta.href}
                    className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-bg-deep)] px-7 py-3.5 text-[12px] font-extrabold tracking-[0.32em] uppercase"
                  >
                    {s.cta.label}
                  </Link>
                  {s.cta2 && (
                    <Link
                      href={s.cta2.href}
                      className="border border-[var(--color-cream)]/40 hover:border-[var(--color-gold)] text-[var(--color-cream)] px-7 py-3.5 text-[12px] font-extrabold tracking-[0.32em] uppercase"
                    >
                      {s.cta2.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-3 z-10">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-[3px] transition-all ${idx === i ? "w-12 bg-[var(--color-gold)]" : "w-6 bg-[var(--color-cream)]/35 hover:bg-[var(--color-cream)]/60"}`}
          />
        ))}
      </div>
    </section>
  );
}
