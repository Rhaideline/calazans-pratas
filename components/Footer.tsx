import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-deep)] text-[var(--color-cream)] mt-24">
      <div className="container-main py-16 md:py-20">
        {/* Top: brand + cols */}
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-[11px] tracking-[0.5em] font-bold text-[var(--color-gold)] uppercase">Calazans</span>
              <span className="font-display text-[36px] font-bold italic -mt-1">Pratas</span>
            </div>
            <p className="text-[15px] leading-relaxed text-[var(--color-cream)]/75 max-w-sm">
              Joias em prata 925 com moissanite certificada. O brilho do diamante, sem o preço do diamante.
            </p>
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)] mt-6 font-bold">
              ◆ Certificado em cada peça
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)] font-bold mb-4">Loja</p>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link href="/colecao" className="hover:text-[var(--color-gold-light)]">Coleção</Link></li>
              <li><Link href="/colecao?cat=aneis" className="hover:text-[var(--color-gold-light)]">Anéis</Link></li>
              <li><Link href="/colecao?cat=colares" className="hover:text-[var(--color-gold-light)]">Colares</Link></li>
              <li><Link href="/colecao?cat=brincos" className="hover:text-[var(--color-gold-light)]">Brincos</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)] font-bold mb-4">Confiança</p>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link href="/certificado" className="hover:text-[var(--color-gold-light)]">Certificado</Link></li>
              <li><Link href="/garantia" className="hover:text-[var(--color-gold-light)]">Garantia</Link></li>
              <li><Link href="/faq" className="hover:text-[var(--color-gold-light)]">FAQ</Link></li>
              <li><Link href="/sobre" className="hover:text-[var(--color-gold-light)]">Sobre</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)] font-bold mb-4">Newsletter</p>
            <p className="text-[14px] text-[var(--color-cream)]/75 mb-3">
              Lançamentos exclusivos + 10% de desconto na 1ª compra.
            </p>
            <form className="flex gap-2" action="/api/newsletter" method="post">
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                required
                aria-label="Email"
                className="flex-1 bg-transparent border border-[var(--color-gold-dark)]/50 px-4 py-2.5 text-[14px] focus:border-[var(--color-gold)] outline-none placeholder:text-[var(--color-cream)]/40"
              />
              <button
                type="submit"
                className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-bg-deep)] px-5 py-2.5 text-[11px] font-extrabold tracking-[0.25em] uppercase"
              >
                Quero
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[var(--color-gold-dark)]/30" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-[var(--color-cream)]/55">
          <p>© {new Date().getFullYear()} Calazans Pratas. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="/privacidade" className="hover:text-[var(--color-gold-light)]">Privacidade</Link>
            <Link href="/termos" className="hover:text-[var(--color-gold-light)]">Termos</Link>
            <Link href="/trocas" className="hover:text-[var(--color-gold-light)]">Trocas</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
