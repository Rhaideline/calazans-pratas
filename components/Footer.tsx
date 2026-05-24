import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-deep)] text-[var(--color-cream)] mt-24">
      {/* ============ NEWSLETTER LINHA ESCURA ============ */}
      <div className="border-b border-[var(--color-gold-dark)]/30">
        <div className="container-main py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[11px] tracking-[0.5em] font-bold uppercase text-[var(--color-gold)] mb-3">◆ Newsletter</p>
            <h3 className="font-display text-[28px] md:text-[34px] italic font-bold">
              Lançamentos primeiro, 10% off agora.
            </h3>
          </div>
          <form action="/api/newsletter" method="post" className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              name="email"
              required
              aria-label="Email"
              placeholder="Seu email"
              className="flex-1 bg-transparent border border-[var(--color-gold-dark)]/50 px-5 py-3.5 text-[14px] outline-none focus:border-[var(--color-gold)] placeholder:text-[var(--color-cream)]/40"
            />
            <button
              type="submit"
              className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-bg-deep)] px-7 py-3.5 text-[11px] font-extrabold tracking-[0.32em] uppercase"
            >
              Quero 10%
            </button>
          </form>
        </div>
      </div>

      {/* ============ COLUNAS ============ */}
      <div className="container-main py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-3">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-[11px] tracking-[0.5em] font-bold text-[var(--color-gold)] uppercase">Calazans</span>
              <span className="font-display text-[34px] font-bold italic -mt-1">Pratas</span>
            </div>
            <p className="text-[14px] leading-relaxed text-[var(--color-cream)]/75 max-w-xs">
              Joias em prata 925 com moissanite certificada. O brilho do diamante, sem o preço do diamante.
            </p>
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)] mt-6 font-bold">
              ◆ Certificado em cada peça
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { l: "Instagram", h: "https://instagram.com/calazanspratas", svg: <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5-2.5a1 1 0 100 2 1 1 0 000-2z" /> },
                { l: "TikTok", h: "https://tiktok.com/@calazanspratas", svg: <path d="M19.5 6.5c-1.93 0-3.5-1.57-3.5-3.5h-3v13a2.5 2.5 0 11-2.5-2.5V10A5.5 5.5 0 1015 16V9.55a6.49 6.49 0 004.5 1.45V8c-.27.01-.5 0-.5 0v-1.5z" /> },
                { l: "Pinterest", h: "https://pinterest.com/calazanspratas", svg: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.314-.087-.793-.166-2.01.034-2.876.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.485c0-1.39.806-2.428 1.81-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.331-.236.995.5 1.808 1.485 1.808 1.78 0 3.149-1.878 3.149-4.59 0-2.4-1.725-4.077-4.188-4.077-2.851 0-4.524 2.137-4.524 4.348 0 .861.331 1.785.745 2.287a.301.301 0 01.069.288c-.075.313-.241.984-.273 1.122-.043.18-.142.218-.328.131-1.225-.57-1.991-2.359-1.991-3.797 0-3.092 2.246-5.93 6.476-5.93 3.399 0 6.04 2.421 6.04 5.66 0 3.376-2.129 6.094-5.084 6.094-.992 0-1.926-.516-2.245-1.124 0 0-.491 1.871-.61 2.328-.221.85-.818 1.917-1.218 2.566.916.282 1.886.432 2.892.432 5.523 0 10-4.477 10-10S17.523 2 12 2z" /> },
                { l: "WhatsApp", h: "https://wa.me/5531986589584", svg: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 0C5.514 0 .197 5.314.197 11.86c0 2.094.547 4.144 1.585 5.946L0 24l6.305-2.066a11.84 11.84 0 005.75 1.467h.005c6.541 0 11.858-5.318 11.858-11.86 0-3.17-1.234-6.15-3.476-8.396A11.81 11.81 0 0012.057 0z" /> },
              ].map((s) => (
                <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" aria-label={s.l} className="w-10 h-10 border border-[var(--color-gold-dark)]/40 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-bg-deep)] hover:border-[var(--color-gold)]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{s.svg}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Colunas */}
          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)] font-bold mb-4">Loja</p>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link href="/colecao" className="hover:text-[var(--color-gold-light)]">Coleção</Link></li>
              <li><Link href="/colecao?cat=aneis" className="hover:text-[var(--color-gold-light)]">Anéis</Link></li>
              <li><Link href="/colecao?cat=colares" className="hover:text-[var(--color-gold-light)]">Colares</Link></li>
              <li><Link href="/colecao?cat=brincos" className="hover:text-[var(--color-gold-light)]">Brincos</Link></li>
              <li><Link href="/colecao?cat=pulseiras" className="hover:text-[var(--color-gold-light)]">Pulseiras</Link></li>
              <li><Link href="/colecao?cat=conjuntos" className="hover:text-[var(--color-gold-light)]">Conjuntos & Bridal</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)] font-bold mb-4">Atendimento</p>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link href="/contato" className="hover:text-[var(--color-gold-light)]">Fale com a gente</Link></li>
              <li><a href="https://wa.me/5531986589584" target="_blank" rel="noopener" className="hover:text-[var(--color-gold-light)]">WhatsApp</a></li>
              <li><Link href="/faq" className="hover:text-[var(--color-gold-light)]">Dúvidas frequentes</Link></li>
              <li><Link href="/garantia" className="hover:text-[var(--color-gold-light)]">Garantia & Trocas</Link></li>
              <li><Link href="/frete" className="hover:text-[var(--color-gold-light)]">Prazos de envio</Link></li>
              <li><Link href="/rastreio" className="hover:text-[var(--color-gold-light)]">Rastrear pedido</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)] font-bold mb-4">Institucional</p>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link href="/sobre" className="hover:text-[var(--color-gold-light)]">Sobre a marca</Link></li>
              <li><Link href="/certificado" className="hover:text-[var(--color-gold-light)]">Certificado</Link></li>
              <li><Link href="/inspiracao" className="hover:text-[var(--color-gold-light)]">Inspiração</Link></li>
              <li><Link href="/sustentabilidade" className="hover:text-[var(--color-gold-light)]">Sustentabilidade</Link></li>
              <li><Link href="/imprensa" className="hover:text-[var(--color-gold-light)]">Imprensa</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)] font-bold mb-4">Pagamento</p>
            <div className="flex flex-wrap gap-2.5">
              {["VISA", "MASTER", "ELO", "AMEX", "PIX", "BOLETO"].map((m) => (
                <span key={m} className="bg-[var(--color-cream)]/8 border border-[var(--color-gold-dark)]/30 text-[10px] tracking-[0.18em] uppercase font-bold px-2.5 py-1.5 text-[var(--color-cream)]/85">{m}</span>
              ))}
            </div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)] font-bold mt-7 mb-3">Segurança</p>
            <div className="flex flex-wrap gap-2.5">
              {["SSL 256-bit", "LGPD", "GRA Cert."].map((m) => (
                <span key={m} className="bg-[var(--color-cream)]/8 border border-[var(--color-gold-dark)]/30 text-[10px] tracking-[0.18em] uppercase font-bold px-2.5 py-1.5 text-[var(--color-cream)]/85">◆ {m}</span>
              ))}
            </div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)] font-bold mt-7 mb-3">Atendimento</p>
            <p className="text-[14px] text-[var(--color-cream)]/85"><strong className="text-[var(--color-cream)]">Seg–Sex 9h–18h</strong> (Brasília)</p>
            <a href="tel:+5531986589584" className="text-[14px] hover:text-[var(--color-gold-light)] block mt-1">(31) 98658-9584</a>
            <a href="mailto:atendimento@calazanspratas.com.br" className="text-[14px] hover:text-[var(--color-gold-light)] block mt-1 break-all">atendimento@calazanspratas.com.br</a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[var(--color-gold-dark)]/30" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-[var(--color-cream)]/55">
          <p>© {new Date().getFullYear()} Calazans Pratas. CNPJ em breve · Brasil + EUA.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacidade" className="hover:text-[var(--color-gold-light)]">Privacidade</Link>
            <Link href="/termos" className="hover:text-[var(--color-gold-light)]">Termos</Link>
            <Link href="/trocas" className="hover:text-[var(--color-gold-light)]">Trocas</Link>
            <Link href="/cookies" className="hover:text-[var(--color-gold-light)]">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
