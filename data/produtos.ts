export type Variacao = {
  tipo: "tamanho" | "cor" | "pedra";
  valor: string;
  label: string;
};

export type Produto = {
  slug: string;
  nome: string;
  categoria: "aneis" | "colares" | "brincos" | "conjuntos" | "pulseiras";
  preco: number;          // BRL — preço de venda final
  precoOriginal?: number; // BRL — preço de tabela (efeito desconto)
  estoque: number;
  sku: string;
  destaque?: boolean;
  bestSeller?: boolean;
  novidade?: boolean;
  descricaoCurta: string;
  descricaoLonga: string;
  especificacoes: { label: string; valor: string }[];
  variacoes?: Variacao[];
  fotos: string[];        // CDN URLs (trocar pelas fotos reais quando produtos chegarem)
  ocasiao?: string[];
  tags?: string[];
};

// =====================================================================
// CATÁLOGO KNOBSPIN (curado pra Calazans Pratas)
// Preços: tabela KNOBSPIN AliExpress (BRL).
// Substituir 'fotos' por fotos próprias com fundo cream #F5EDE0
// quando os produtos físicos chegarem da importação.
// =====================================================================

export const produtos: Produto[] = [
  {
    slug: "pulseira-tennis-moissanite-vvs1",
    nome: "Pulseira Tennis Moissanite VVS1 — Prata 925",
    categoria: "pulseiras",
    preco: 377.29,
    precoOriginal: 599,
    estoque: 24,
    sku: "PUL-TEN-VVS1-925",
    destaque: true,
    bestSeller: true,
    descricaoCurta: "Pulseira tennis com moissanites cor D VVS1 cravados em prata 925 banhada a ouro branco 18K. Acompanha certificado GRA.",
    descricaoLonga: "A pulseira tennis original com moissanites D VVS1 (a melhor classificação de cor e pureza disponível). Engaste em garra individual, prata 925 banhada a ouro branco 18K — não escurece. Cada pedra inspecionada e o conjunto vem com certificado GRA (Gem Research Authority), entidade reconhecida mundialmente. A peça que substitui a tennis de diamante por 1/10 do valor.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banhada ouro branco 18K" },
      { label: "Pedras", valor: "Moissanite redondo (sequência contínua)" },
      { label: "Cor", valor: "D (incolor — top)" },
      { label: "Pureza", valor: "VVS1" },
      { label: "Dureza", valor: "9.25 Mohs" },
      { label: "Certificado", valor: "GRA + Calazans Pratas" },
    ],
    fotos: [
      "https://images.pexels.com/photos/8891940/pexels-photo-8891940.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/12713829/pexels-photo-12713829.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["festa", "presente-especial", "casamento"],
    tags: ["tennis", "VVS1", "ouro-branco"],
  },
  {
    slug: "colar-tennis-3-garras-moissanite",
    nome: "Colar Tennis 3 Garras Moissanite — Prata 925",
    categoria: "colares",
    preco: 489.00,
    precoOriginal: 779,
    estoque: 11,
    sku: "COL-TEN-3G-925",
    destaque: true,
    bestSeller: true,
    descricaoCurta: "Colar tennis com engaste 3 garras e moissanites D VVS1. Brilho contínuo no pescoço inteiro.",
    descricaoLonga: "Colar tennis com engaste 3-garras que deixa mais pedra exposta — brilho amplificado. Moissanites D VVS1 em sequência contínua, prata 925 banhada a ouro branco 18K. 45cm com fecho de segurança duplo. Para usar com decote em V ou camiseta lisa — o brilho fala por si.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banhada ouro branco 18K" },
      { label: "Engaste", valor: "3 garras (mais brilho exposto)" },
      { label: "Pedras", valor: "Moissanite D VVS1 contínuo" },
      { label: "Comprimento", valor: "45cm + extensor 5cm" },
      { label: "Fecho", valor: "Segurança duplo" },
      { label: "Certificado", valor: "GRA + Calazans Pratas" },
    ],
    fotos: [
      "https://images.pexels.com/photos/11148872/pexels-photo-11148872.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/10918250/pexels-photo-10918250.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["festa", "casamento", "evento-elegante"],
    tags: ["tennis", "3-garras", "statement"],
  },
  {
    slug: "pingente-colar-moissanite",
    nome: "Pingente Colar Moissanite VVS1",
    categoria: "colares",
    preco: 113.53,
    precoOriginal: 179,
    estoque: 38,
    sku: "COL-PING-VVS1-925",
    bestSeller: true,
    descricaoCurta: "Pingente solitário moissanite D VVS1 em prata 925 banhada ouro branco. O ponto de luz que combina com tudo.",
    descricaoLonga: "Pingente clássico ponto de luz com moissanite D VVS1 (a top do mercado) em prata 925 com banho de ouro branco 18K antialérgico. Corrente veneziana 45cm + extensor 5cm. A peça que toda mulher precisa ter — usa pra trabalhar, pra balada, pra dormir.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banhada ouro branco 18K" },
      { label: "Pedra", valor: "Moissanite D VVS1" },
      { label: "Corrente", valor: "Veneziana 45cm + extensor 5cm" },
      { label: "Certificado", valor: "GRA + Calazans Pratas" },
    ],
    fotos: [
      "https://images.pexels.com/photos/10918250/pexels-photo-10918250.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["dia-a-dia", "presente"],
    tags: ["ponto-de-luz", "delicado", "essencial"],
  },
  {
    slug: "brincos-tarraxa-moissanite",
    nome: "Brincos Tarraxa Moissanite (par)",
    categoria: "brincos",
    preco: 112.56,
    precoOriginal: 179,
    estoque: 45,
    sku: "BRI-TAR-925",
    bestSeller: true,
    descricaoCurta: "Par de brincos tarraxa com moissanites D VVS1 em prata 925. Tarraxa antialérgica de pressão.",
    descricaoLonga: "Par de brincos tarraxa com moissanites D VVS1 (top de linha) em prata 925 banhada a ouro branco 18K. Tarraxa de pressão antialérgica — fica fixo o dia inteiro sem cair. Acompanha cartão de autenticidade com hash único do par. Variações de tamanho da pedra de 0.2 a 2 quilates equivalentes.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banhada ouro branco 18K" },
      { label: "Pedras", valor: "Moissanite D VVS1 (par)" },
      { label: "Tarraxa", valor: "Pressão antialérgica" },
      { label: "Certificado", valor: "GRA + Calazans Pratas" },
    ],
    variacoes: [
      { tipo: "tamanho", valor: "3mm", label: "3mm (0.2ct)" },
      { tipo: "tamanho", valor: "5mm", label: "5mm (0.5ct)" },
      { tipo: "tamanho", valor: "6.5mm", label: "6.5mm (1ct)" },
      { tipo: "tamanho", valor: "8mm", label: "8mm (2ct)" },
    ],
    fotos: [
      "https://images.pexels.com/photos/8891940/pexels-photo-8891940.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/12713829/pexels-photo-12713829.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    tags: ["tarraxa", "clássico", "essencial"],
  },
  {
    slug: "pulseira-tennis-s925",
    nome: "Pulseira Tennis Moissanite S925 Premium",
    categoria: "pulseiras",
    preco: 385.64,
    precoOriginal: 619,
    estoque: 14,
    sku: "PUL-TEN-S925-PREM",
    descricaoCurta: "Versão premium da pulseira tennis com acabamento aprimorado em prata S925 macia.",
    descricaoLonga: "Pulseira tennis em prata S925 (versão premium com mais pureza). Moissanites cravados em sequência, banhada ouro branco 18K. Acabamento polido em ambos os lados. Fecho de segurança duplo. 17.5cm.",
    especificacoes: [
      { label: "Material", valor: "Prata S925 banhada ouro branco" },
      { label: "Pedras", valor: "Moissanite D VVS1" },
      { label: "Comprimento", valor: "17.5cm" },
      { label: "Certificado", valor: "GRA + Calazans Pratas" },
    ],
    fotos: [
      "https://images.pexels.com/photos/8891940/pexels-photo-8891940.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["festa", "presente"],
  },
  {
    slug: "pulseira-tennis-2mm",
    nome: "Pulseira Tennis Moissanite 2mm — Delicada",
    categoria: "pulseiras",
    preco: 430.33,
    precoOriginal: 689,
    estoque: 9,
    sku: "PUL-TEN-2MM-925",
    novidade: true,
    descricaoCurta: "Versão fina (pedras de 2mm) — mais delicada, perfeita pra usar com outras pulseiras (stack).",
    descricaoLonga: "Versão delicada da tennis: pedras menores (2mm) em maior quantidade. Perfeita pra usar sozinha ou empilhada com outras pulseiras. Em prata 925 banhada ouro branco 18K. 17cm + 2cm ajuste.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banhada ouro branco 18K" },
      { label: "Pedras", valor: "Moissanite 2mm em sequência" },
      { label: "Comprimento", valor: "17cm + 2cm ajuste" },
      { label: "Estilo", valor: "Delicada (stack-friendly)" },
    ],
    fotos: [
      "https://images.pexels.com/photos/12713829/pexels-photo-12713829.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    tags: ["delicada", "stack", "essencial"],
  },
  {
    slug: "conjunto-colar-pulseira-5mm",
    nome: "Conjunto Colar + Pulseira Tennis 5mm",
    categoria: "conjuntos",
    preco: 665.45,
    precoOriginal: 1059,
    estoque: 7,
    sku: "CJT-COL-PUL-5MM",
    destaque: true,
    novidade: true,
    descricaoCurta: "Conjunto coordenado: colar tennis 5mm + pulseira tennis 5mm em moissanite D VVS1. Look completo de brilho.",
    descricaoLonga: "Conjunto coordenado de colar tennis (45cm) + pulseira tennis (17cm) com pedras de 5mm em prata 925 banhada ouro branco 18K. As duas peças no mesmo tamanho de pedra criam harmonia visual perfeita. Vem com certificado para cada peça.",
    especificacoes: [
      { label: "Peças", valor: "Colar 45cm + Pulseira 17cm" },
      { label: "Material", valor: "Prata 925 banhada ouro branco 18K" },
      { label: "Pedras", valor: "Moissanite 5mm" },
      { label: "Certificados", valor: "2 inclusos (GRA + Calazans)" },
    ],
    fotos: [
      "https://images.pexels.com/photos/9428757/pexels-photo-9428757.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["festa", "casamento", "presente-especial"],
  },
  {
    slug: "pulseira-tennis-3mm",
    nome: "Pulseira Tennis Moissanite 3mm",
    categoria: "pulseiras",
    preco: 310.91,
    precoOriginal: 499,
    estoque: 19,
    sku: "PUL-TEN-3MM-925",
    descricaoCurta: "Tennis 3mm — o equilíbrio perfeito entre delicada e visível. Versátil pra usar todo dia.",
    descricaoLonga: "Tamanho intermediário ideal: pedras de 3mm em prata 925 banhada ouro branco. Mais presente que a 2mm, mais discreta que a 5mm. Pra usar todo dia, dia e noite. 17cm + 2cm ajuste.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banhada ouro branco 18K" },
      { label: "Pedras", valor: "Moissanite 3mm" },
      { label: "Comprimento", valor: "17cm + 2cm ajuste" },
    ],
    fotos: [
      "https://images.pexels.com/photos/12713829/pexels-photo-12713829.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    tags: ["versátil", "dia-a-dia"],
  },
  {
    slug: "anel-eternity-moissanite-2mm",
    nome: "Anel Eternity Moissanite 2mm — Prata 925",
    categoria: "aneis",
    preco: 189.60,
    precoOriginal: 299,
    estoque: 28,
    sku: "ANL-ETE-2MM-925",
    destaque: true,
    bestSeller: true,
    descricaoCurta: "Aliança eternity com cravação 360° de moissanites de 2mm. Brilho contínuo por todo o aro.",
    descricaoLonga: "Aliança eternity em prata 925 banhada ouro branco 18K com cravação contínua de moissanites de 2mm por todo o aro (360°). Versão clássica e atemporal — usa no anelar como aliança ou empilhada (stack) no médio. Antialérgica.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banhada ouro branco 18K" },
      { label: "Pedras", valor: "Moissanite 2mm (cravação 360°)" },
      { label: "Acabamento", valor: "Polido brilhante" },
    ],
    variacoes: [
      { tipo: "tamanho", valor: "13", label: "13" },
      { tipo: "tamanho", valor: "14", label: "14" },
      { tipo: "tamanho", valor: "15", label: "15" },
      { tipo: "tamanho", valor: "16", label: "16" },
      { tipo: "tamanho", valor: "17", label: "17" },
      { tipo: "tamanho", valor: "18", label: "18" },
      { tipo: "tamanho", valor: "19", label: "19" },
    ],
    fotos: [
      "https://images.pexels.com/photos/12978135/pexels-photo-12978135.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["casamento", "aniversário", "dia-a-dia"],
    tags: ["eternity", "aliança", "stack"],
  },
  {
    slug: "conjunto-aneis-noivado-bridal",
    nome: "Conjunto Anéis Noivado Bridal Set",
    categoria: "conjuntos",
    preco: 228.48,
    precoOriginal: 369,
    estoque: 12,
    sku: "CJT-BRI-925",
    destaque: true,
    descricaoCurta: "Set bridal: anel de noivado solitário + aliança de casamento. Combinação harmônica em prata 925.",
    descricaoLonga: "Set bridal completo: 1 anel de noivado solitário moissanite + 1 aliança eternity coordenada. As duas em prata 925 banhada ouro branco 18K. Combinação visual perfeita — feita pra ser usada junto.",
    especificacoes: [
      { label: "Peças", valor: "Anel noivado + aliança" },
      { label: "Material", valor: "Prata 925 banhada ouro branco" },
      { label: "Pedra principal", valor: "Moissanite solitário 6.5mm" },
      { label: "Aliança", valor: "Eternity cravada" },
    ],
    variacoes: [
      { tipo: "tamanho", valor: "14", label: "14" },
      { tipo: "tamanho", valor: "15", label: "15" },
      { tipo: "tamanho", valor: "16", label: "16" },
      { tipo: "tamanho", valor: "17", label: "17" },
      { tipo: "tamanho", valor: "18", label: "18" },
    ],
    fotos: [
      "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/969949/pexels-photo-969949.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["noivado", "casamento"],
    tags: ["bridal", "solitário", "aliança"],
  },
  {
    slug: "pulseira-tennis-3-garras-3mm",
    nome: "Pulseira Tennis 3 Garras 3mm",
    categoria: "pulseiras",
    preco: 422.16,
    precoOriginal: 679,
    estoque: 8,
    sku: "PUL-TEN-3G-3MM",
    novidade: true,
    descricaoCurta: "Versão premium da tennis: engaste 3-garras (mais pedra exposta) com moissanites 3mm.",
    descricaoLonga: "Pulseira tennis com engaste exclusivo 3-garras que deixa mais pedra exposta — refração maximizada. Moissanites 3mm em prata 925 banhada ouro branco 18K. Acabamento de joalheria, fecho de segurança duplo.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banhada ouro branco 18K" },
      { label: "Engaste", valor: "3 garras (mais brilho)" },
      { label: "Pedras", valor: "Moissanite 3mm" },
      { label: "Comprimento", valor: "17cm" },
    ],
    fotos: [
      "https://images.pexels.com/photos/8891940/pexels-photo-8891940.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["festa", "presente-especial"],
    tags: ["3-garras", "premium"],
  },
  {
    slug: "colar-tennis-moissanite-premium-8mm",
    nome: "Colar Tennis Moissanite Premium 8mm",
    categoria: "colares",
    preco: 1809.45,
    precoOriginal: 2899,
    estoque: 3,
    sku: "COL-TEN-8MM-PREM",
    destaque: true,
    descricaoCurta: "Edição premium: colar tennis com pedras GIGANTES de 8mm. Statement piece pra ocasiões que pedem impacto.",
    descricaoLonga: "Edição limitada do colar tennis com pedras massivas de 8mm cada (~2ct equivalente cada pedra). Prata 925 banhada ouro branco 18K, fecho de segurança triplo pelo peso. Esta NÃO é uma peça discreta — é a peça que faz parar conversa quando você entra. Para casamento, eventos de gala, fotos importantes.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banhada ouro branco 18K" },
      { label: "Pedras", valor: "Moissanite 8mm (~2ct cada)" },
      { label: "Comprimento", valor: "45cm + extensor" },
      { label: "Fecho", valor: "Segurança triplo" },
      { label: "Edição", valor: "Limitada — estoque baixo" },
    ],
    fotos: [
      "https://images.pexels.com/photos/11148872/pexels-photo-11148872.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["casamento", "gala", "evento-importante"],
    tags: ["premium", "statement", "edição-limitada"],
  },
];

export function getProduto(slug: string) {
  return produtos.find((p) => p.slug === slug);
}
export function getProdutosPorCategoria(cat: string) {
  return produtos.filter((p) => p.categoria === cat);
}
export function getDestaques() {
  return produtos.filter((p) => p.destaque);
}
export function getBestSellers() {
  return produtos.filter((p) => p.bestSeller);
}
export function getNovidades() {
  return produtos.filter((p) => p.novidade);
}
export function getRelacionados(slug: string, n = 4) {
  const cur = getProduto(slug);
  if (!cur) return [];
  return produtos
    .filter((p) => p.slug !== slug && p.categoria === cur.categoria)
    .slice(0, n);
}
