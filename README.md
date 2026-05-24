# Calazans Pratas

E-commerce premium de prata 925 com moissanite certificada. Stack Next.js 15 + Tailwind 4.

## Stack
- Next.js 15 App Router · React 19 · TypeScript strict
- Tailwind CSS 4 com design tokens (Editorial Gold palette)
- Next/font (Playfair Display + Inter + JetBrains Mono)
- Next/image (AVIF + WebP automático)
- Zustand pra carrinho (a implementar)

## Setup local
```bash
npm install
npm run dev
```
Abre em http://localhost:3000

## Deploy
Vercel preview automático ao fazer push. Production no merge pra main.

## Estrutura
- `app/` — rotas (Home, Coleção, Produto, Certificado, Sobre, Garantia, FAQ, Contato)
- `components/` — Header, Footer, TrustBar, ProductCard
- `data/produtos.ts` — 20 produtos seed (substituir por CMS quando crescer)
- `lib/` — helpers (formatters)

## SEO
- Metadata por página
- JSON-LD: Organization, WebSite, Product, BreadcrumbList, FAQPage
- Sitemap dinâmico em `/sitemap.xml`
- robots.txt em `/robots.txt`

## Performance budget
- PageSpeed Mobile alvo: 95+
- Fontes via next/font (display: swap)
- Imagens lazy por default, hero com `priority`
