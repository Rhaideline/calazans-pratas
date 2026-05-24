export default function TrustBar() {
  const items = [
    "Certificado de autenticidade",
    "Frete grátis acima R$ 199",
    "Troca em 30 dias",
    "12x sem juros",
  ];
  return (
    <div className="bg-[var(--color-bg-deep)] text-[var(--color-cream)] py-2.5 overflow-hidden border-b border-[var(--color-gold-dark)]/30">
      <div className="container-main flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] md:text-xs font-medium tracking-[0.18em] uppercase">
        {items.map((it, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-[var(--color-gold)]">◆</span>
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
