export type Variacao = {
  tipo: "tamanho" | "cor" | "pedra";
  valor: string;
  label: string;
};

export type Produto = {
  slug: string;
  nome: string;
  categoria: "aneis" | "colares" | "brincos" | "conjuntos" | "pulseiras";
  preco: number;          // BRL
  precoOriginal?: number;
  estoque: number;
  sku: string;
  destaque: boolean;
  bestSeller?: boolean;
  novidade?: boolean;
  descricaoCurta: string;
  descricaoLonga: string;
  especificacoes: { label: string; valor: string }[];
  variacoes?: Variacao[];
  fotos: string[];          // Pexels URLs
  ocasiao?: string[];
  tags?: string[];
};

// ===================== SEED DATA =====================
// Fotos: Pexels (royalty-free comercial). Trocar pelas reais quando chegarem.

export const produtos: Produto[] = [
  {
    slug: "anel-solitario-moissanite-1ct",
    nome: "Anel Solitário Moissanite 1ct",
    categoria: "aneis",
    preco: 289,
    precoOriginal: 459,
    estoque: 24,
    sku: "ANL-SOL-1CT-925",
    destaque: true,
    bestSeller: true,
    descricaoCurta: "Anel solitário em prata 925 com moissanite redondo brilhante de 1 quilate equivalente. A peça que substituiu o solitário de diamante.",
    descricaoLonga: "O solitário é a peça mais atemporal de uma coleção. Aqui, em prata 925 com banho de ródio antialérgico, sustenta um moissanite redondo brilhante de 6.5mm — equivalente a 1 quilate de diamante. A pedra tem índice de refração 2.65 (maior que o diamante) e dureza 9.25 na escala Mohs, o que significa que ela brilha mais e resiste tanto quanto. Cada anel acompanha certificado de autenticidade com hash único.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 com banho de ródio" },
      { label: "Pedra", valor: "Moissanite redondo brilhante" },
      { label: "Quilate equivalente", valor: "1.0 ct (6.5mm)" },
      { label: "Dureza", valor: "9.25 Mohs" },
      { label: "Cor da pedra", valor: "D-E-F (incolor)" },
      { label: "Pureza", valor: "VVS1" },
      { label: "Certificado", valor: "Incluso (hash único)" },
    ],
    variacoes: [
      { tipo: "tamanho", valor: "14", label: "14" },
      { tipo: "tamanho", valor: "15", label: "15" },
      { tipo: "tamanho", valor: "16", label: "16" },
      { tipo: "tamanho", valor: "17", label: "17" },
      { tipo: "tamanho", valor: "18", label: "18" },
      { tipo: "tamanho", valor: "19", label: "19" },
    ],
    fotos: [
      "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/969949/pexels-photo-969949.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/9428846/pexels-photo-9428846.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["noivado", "presente", "dia-a-dia"],
    tags: ["solitário", "redondo", "clássico"],
  },
  {
    slug: "colar-ponto-de-luz-moissanite",
    nome: "Colar Ponto de Luz Moissanite",
    categoria: "colares",
    preco: 219,
    precoOriginal: 349,
    estoque: 31,
    sku: "COL-PDL-925",
    destaque: true,
    bestSeller: true,
    descricaoCurta: "Colar com pingente ponto de luz em moissanite brilhante. Discreto, elegante, perfeito pra usar todo dia.",
    descricaoLonga: "Um clássico do gracioso. Corrente veneziana 45cm em prata 925 sustentando um pingente ponto de luz com moissanite de 5mm. O brilho é tanto que vai parecer que você está sempre sob holofote. Banho de ródio antialérgico, não escurece com o tempo.",
    especificacoes: [
      { label: "Material corrente", valor: "Prata 925 banho ródio" },
      { label: "Tipo corrente", valor: "Veneziana 45cm + extensor 5cm" },
      { label: "Pedra", valor: "Moissanite 5mm" },
      { label: "Quilate equivalente", valor: "0.5 ct" },
      { label: "Certificado", valor: "Incluso" },
    ],
    fotos: [
      "https://images.pexels.com/photos/10918250/pexels-photo-10918250.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/11148872/pexels-photo-11148872.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["dia-a-dia", "presente"],
    tags: ["ponto-de-luz", "delicado", "clássico"],
  },
  {
    slug: "brinco-tarraxa-moissanite-par",
    nome: "Brinco Tarraxa Moissanite (par)",
    categoria: "brincos",
    preco: 189,
    precoOriginal: 299,
    estoque: 42,
    sku: "BRI-TAR-925",
    destaque: true,
    bestSeller: true,
    descricaoCurta: "Par de brincos tarraxa em prata 925 com moissanite de 5mm. Discrição com brilho de diamante.",
    descricaoLonga: "Os brincos que toda joalheria deveria começar a vender. Par em prata 925 com moissanite redondo brilhante 5mm. Tarraxa de pressão antialérgica. Acompanha cartão de autenticidade com hash único do par.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedra", valor: "Moissanite redondo 5mm (par)" },
      { label: "Quilate equiv. total", valor: "1.0 ct (0.5 cada)" },
      { label: "Tarraxa", valor: "Pressão antialérgica" },
      { label: "Certificado", valor: "Incluso" },
    ],
    fotos: [
      "https://images.pexels.com/photos/8891940/pexels-photo-8891940.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/12713829/pexels-photo-12713829.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    tags: ["tarraxa", "clássico", "presente"],
  },
  {
    slug: "anel-meia-alianca-moissanite",
    nome: "Anel Meia Aliança Moissanite",
    categoria: "aneis",
    preco: 339,
    precoOriginal: 529,
    estoque: 18,
    sku: "ANL-MAL-925",
    destaque: true,
    descricaoCurta: "Aliança cravejada de moissanites nos 180° superiores. O substituto perfeito da meia aliança de diamantes.",
    descricaoLonga: "Cinco moissanites de 3mm cada cravados nos 180° superiores do aro de prata 925. Total de 0.5 ct equivalente. Acabamento profissional, sem arranhar nada, sem escurecer com o uso.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedras", valor: "5x moissanite 3mm" },
      { label: "Quilate equivalente", valor: "0.5 ct total" },
      { label: "Certificado", valor: "Incluso" },
    ],
    variacoes: [
      { tipo: "tamanho", valor: "14", label: "14" },
      { tipo: "tamanho", valor: "15", label: "15" },
      { tipo: "tamanho", valor: "16", label: "16" },
      { tipo: "tamanho", valor: "17", label: "17" },
      { tipo: "tamanho", valor: "18", label: "18" },
    ],
    fotos: [
      "https://images.pexels.com/photos/12978135/pexels-photo-12978135.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["noivado", "casamento"],
  },
  {
    slug: "conjunto-solitario-trio",
    nome: "Conjunto Solitário (3 peças)",
    categoria: "conjuntos",
    preco: 599,
    precoOriginal: 949,
    estoque: 12,
    sku: "CJT-SOL-925",
    destaque: true,
    novidade: true,
    descricaoCurta: "Conjunto solitário: anel + colar + brincos em moissanite. Look completo, brilho coordenado.",
    descricaoLonga: "Três peças que dialogam entre si. Anel solitário 0.7ct + colar ponto de luz 0.5ct + brincos tarraxa par 0.5ct cada. Todas em prata 925 com banho de ródio. Certificados individuais.",
    especificacoes: [
      { label: "Peças", valor: "Anel + Colar + Brincos" },
      { label: "Quilate equiv. total", valor: "2.2 ct" },
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Certificados", valor: "3 inclusos" },
    ],
    fotos: [
      "https://images.pexels.com/photos/9428757/pexels-photo-9428757.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/11592645/pexels-photo-11592645.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["noivado", "presente-especial"],
  },
  {
    slug: "anel-marquise-moissanite",
    nome: "Anel Marquise Moissanite",
    categoria: "aneis",
    preco: 379,
    precoOriginal: 589,
    estoque: 9,
    sku: "ANL-MAR-925",
    destaque: false,
    novidade: true,
    descricaoCurta: "Anel marquise com moissanite alongado em prata 925. O corte que afina os dedos.",
    descricaoLonga: "O corte marquise alonga visualmente os dedos e é uma escolha sofisticada. Moissanite marquise 10x5mm em prata 925 com aro fino e detalhe pavê nas laterais.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedra principal", valor: "Moissanite marquise 10x5mm" },
      { label: "Pedras laterais", valor: "12 zircônias pavê" },
      { label: "Certificado", valor: "Incluso" },
    ],
    variacoes: [
      { tipo: "tamanho", valor: "15", label: "15" },
      { tipo: "tamanho", valor: "16", label: "16" },
      { tipo: "tamanho", valor: "17", label: "17" },
      { tipo: "tamanho", valor: "18", label: "18" },
    ],
    fotos: [
      "https://images.pexels.com/photos/9428782/pexels-photo-9428782.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    tags: ["marquise", "alongado", "sofisticado"],
  },
  {
    slug: "colar-gargantilha-pedras",
    nome: "Gargantilha Tennis Moissanite",
    categoria: "colares",
    preco: 489,
    precoOriginal: 779,
    estoque: 7,
    sku: "COL-GAR-TEN-925",
    destaque: false,
    descricaoCurta: "Gargantilha estilo tennis com moissanites em sequência. A peça-statement que tinha que existir em prata 925.",
    descricaoLonga: "32 moissanites de 3mm cada formando uma sequência contínua de brilho no pescoço. Em prata 925 com banho de ródio. Comprimento ajustável 38-42cm. Para usar com vestido decotado ou camiseta branca — a beleza tá nesse contraste.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedras", valor: "32x moissanite 3mm" },
      { label: "Comprimento", valor: "38-42cm ajustável" },
      { label: "Certificado", valor: "Incluso" },
    ],
    fotos: [
      "https://images.pexels.com/photos/11148872/pexels-photo-11148872.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["festa", "casamento"],
  },
  {
    slug: "brinco-argola-moissanite",
    nome: "Brinco Argola Moissanite",
    categoria: "brincos",
    preco: 269,
    precoOriginal: 419,
    estoque: 22,
    sku: "BRI-ARG-925",
    destaque: false,
    descricaoCurta: "Argolas em prata 925 com cravação contínua de moissanites. Equilíbrio entre clássico e moderno.",
    descricaoLonga: "Argolas 25mm em prata 925 banho ródio com 14 moissanites cravados na face externa. Fechamento click-em. Antialérgico.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedras", valor: "14x moissanite 2mm (par)" },
      { label: "Diâmetro", valor: "25mm" },
    ],
    fotos: [
      "https://images.pexels.com/photos/8891953/pexels-photo-8891953.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    slug: "anel-infinito-moissanite",
    nome: "Anel Infinito Moissanite",
    categoria: "aneis",
    preco: 249,
    precoOriginal: 389,
    estoque: 33,
    sku: "ANL-INF-925",
    descricaoCurta: "Símbolo do infinito cravejado em moissanites. Romântico, delicado, atemporal.",
    descricaoLonga: "Aro em prata 925 com símbolo do infinito centralizado, cravejado com 14 moissanites pequenos. Significado e brilho — combinação rara em joalheria popular.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedras", valor: "14x moissanite 1.5mm" },
    ],
    variacoes: [
      { tipo: "tamanho", valor: "14", label: "14" },
      { tipo: "tamanho", valor: "15", label: "15" },
      { tipo: "tamanho", valor: "16", label: "16" },
      { tipo: "tamanho", valor: "17", label: "17" },
    ],
    fotos: [
      "https://images.pexels.com/photos/9428782/pexels-photo-9428782.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    slug: "colar-coracao-moissanite",
    nome: "Colar Pingente Coração Moissanite",
    categoria: "colares",
    preco: 289,
    precoOriginal: 449,
    estoque: 19,
    sku: "COL-COR-925",
    descricaoCurta: "Pingente coração cravejado em prata 925. Presente certo pra quem você ama.",
    descricaoLonga: "Coração em prata 925 cravejado com 18 moissanites pequenos. Corrente cabo 45cm + extensor. Vem em caixa de presente premium com laço.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedras", valor: "18x moissanite 1.5mm" },
      { label: "Corrente", valor: "Cabo 45cm + extensor 5cm" },
    ],
    fotos: [
      "https://images.pexels.com/photos/10918250/pexels-photo-10918250.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["presente", "namoro"],
  },
  {
    slug: "anel-trilogia-moissanite",
    nome: "Anel Trilogia Moissanite",
    categoria: "aneis",
    preco: 429,
    precoOriginal: 689,
    estoque: 11,
    sku: "ANL-TRI-925",
    descricaoCurta: "Três moissanites em sequência: passado, presente, futuro. O design clássico da trilogia.",
    descricaoLonga: "Três moissanites de 5mm em sequência, sendo o central de 6mm. Total 1.4 ct equivalente. Em prata 925 com aro fino antialérgico. Significado tradicional: passado, presente e futuro.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedras", valor: "1x 6mm + 2x 5mm" },
      { label: "Quilate equivalente", valor: "1.4 ct total" },
    ],
    variacoes: [
      { tipo: "tamanho", valor: "15", label: "15" },
      { tipo: "tamanho", valor: "16", label: "16" },
      { tipo: "tamanho", valor: "17", label: "17" },
      { tipo: "tamanho", valor: "18", label: "18" },
    ],
    fotos: [
      "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["noivado", "aniversário-casamento"],
  },
  {
    slug: "brinco-gota-moissanite",
    nome: "Brinco Gota Moissanite",
    categoria: "brincos",
    preco: 319,
    precoOriginal: 499,
    estoque: 14,
    sku: "BRI-GOT-925",
    descricaoCurta: "Brincos com moissanite gota pendente. Para festas, casamentos, ocasiões que merecem brilho.",
    descricaoLonga: "Par de brincos com tarraxa cravejada (3 zircônias cada) sustentando moissanite gota 8x6mm pendente. Movimento delicado que captura a luz a cada movimento.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedra principal", valor: "Moissanite gota 8x6mm" },
      { label: "Pedras tarraxa", valor: "6 zircônias laterais" },
    ],
    fotos: [
      "https://images.pexels.com/photos/12713829/pexels-photo-12713829.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["festa", "casamento", "formatura"],
  },
  {
    slug: "pulseira-tennis-moissanite",
    nome: "Pulseira Tennis Moissanite",
    categoria: "pulseiras",
    preco: 549,
    precoOriginal: 869,
    estoque: 8,
    sku: "PUL-TEN-925",
    descricaoCurta: "Pulseira tennis: sequência contínua de moissanites em prata 925. A peça-investimento.",
    descricaoLonga: "32 moissanites de 3mm cada formando uma pulseira tennis em prata 925 banho ródio. 18cm com fecho de segurança duplo. A pulseira que substitui várias.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedras", valor: "32x moissanite 3mm" },
      { label: "Comprimento", valor: "18cm + 2cm ajuste" },
    ],
    fotos: [
      "https://images.pexels.com/photos/8891940/pexels-photo-8891940.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    novidade: true,
    ocasiao: ["festa", "presente-especial"],
  },
  {
    slug: "anel-oval-moissanite",
    nome: "Anel Solitário Oval Moissanite",
    categoria: "aneis",
    preco: 319,
    precoOriginal: 499,
    estoque: 21,
    sku: "ANL-OVL-925",
    descricaoCurta: "Solitário oval — corte que parece maior que o redondo de mesmo quilate. Mais brilho aparente.",
    descricaoLonga: "Corte oval moissanite 7x5mm em prata 925. O oval tem propriedade ótica de parecer maior que o redondo de mesmo quilate — você ganha presença sem pagar mais. Aro fino antialérgico.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedra", valor: "Moissanite oval 7x5mm" },
      { label: "Quilate equivalente", valor: "0.8 ct" },
    ],
    variacoes: [
      { tipo: "tamanho", valor: "14", label: "14" },
      { tipo: "tamanho", valor: "15", label: "15" },
      { tipo: "tamanho", valor: "16", label: "16" },
      { tipo: "tamanho", valor: "17", label: "17" },
      { tipo: "tamanho", valor: "18", label: "18" },
    ],
    fotos: [
      "https://images.pexels.com/photos/9428782/pexels-photo-9428782.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    slug: "colar-cruz-moissanite",
    nome: "Colar Cruz Moissanite",
    categoria: "colares",
    preco: 249,
    precoOriginal: 389,
    estoque: 26,
    sku: "COL-CRZ-925",
    descricaoCurta: "Cruz cravejada com moissanites. Religiosa ou estilística — funciona dos dois jeitos.",
    descricaoLonga: "Cruz em prata 925 com 11 moissanites cravados nos braços. Corrente veneziana 50cm. Acabamento polido por ambas as faces.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedras", valor: "11x moissanite 2mm" },
      { label: "Corrente", valor: "Veneziana 50cm" },
    ],
    fotos: [
      "https://images.pexels.com/photos/10918250/pexels-photo-10918250.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    slug: "brinco-ear-cuff-moissanite",
    nome: "Ear Cuff Moissanite",
    categoria: "brincos",
    preco: 229,
    precoOriginal: 359,
    estoque: 17,
    sku: "BRI-EAR-925",
    descricaoCurta: "Ear cuff (par) em prata 925 com moissanites em escalada. Para quem fura só uma orelha mas quer brilho dos dois lados.",
    descricaoLonga: "Par de ear cuffs em prata 925 com 5 moissanites em escalada decrescente. Encaixe sem furo (pressão). Antialérgico.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedras", valor: "5x moissanite por peça (par)" },
      { label: "Fixação", valor: "Pressão (sem furo)" },
    ],
    fotos: [
      "https://images.pexels.com/photos/12713829/pexels-photo-12713829.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    novidade: true,
  },
  {
    slug: "anel-pera-moissanite",
    nome: "Anel Solitário Pera Moissanite",
    categoria: "aneis",
    preco: 359,
    precoOriginal: 569,
    estoque: 6,
    sku: "ANL-PER-925",
    descricaoCurta: "Corte pera (gota) — sofisticado, alongado, queridinho da realeza.",
    descricaoLonga: "Moissanite pera 8x6mm em prata 925 com aro fino. O corte pera é o mais clássico da realeza europeia — alongado, sofisticado, com presença sem ostentação.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedra", valor: "Moissanite pera 8x6mm" },
      { label: "Quilate equivalente", valor: "1.0 ct" },
    ],
    variacoes: [
      { tipo: "tamanho", valor: "14", label: "14" },
      { tipo: "tamanho", valor: "15", label: "15" },
      { tipo: "tamanho", valor: "16", label: "16" },
      { tipo: "tamanho", valor: "17", label: "17" },
    ],
    fotos: [
      "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    slug: "conjunto-meia-alianca-duo",
    nome: "Conjunto Meia Aliança Duo",
    categoria: "conjuntos",
    preco: 459,
    precoOriginal: 719,
    estoque: 10,
    sku: "CJT-MAL-925",
    descricaoCurta: "Anel meia aliança + colar ponto de luz. Combinação clássica pra pedir em casamento.",
    descricaoLonga: "Anel meia aliança com 5 moissanites de 3mm + colar ponto de luz 5mm. Caixa de pedido inclusa.",
    especificacoes: [
      { label: "Peças", valor: "Anel + Colar" },
      { label: "Material", valor: "Prata 925 banho ródio" },
    ],
    fotos: [
      "https://images.pexels.com/photos/9428757/pexels-photo-9428757.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["noivado"],
  },
  {
    slug: "anel-aro-cravejado-moissanite",
    nome: "Anel Aro Inteiro Cravejado",
    categoria: "aneis",
    preco: 419,
    precoOriginal: 659,
    estoque: 13,
    sku: "ANL-ARI-925",
    descricaoCurta: "Aliança eternity com cravação 360°. Brilho contínuo por todo o aro.",
    descricaoLonga: "Aliança eternity em prata 925 com cravação contínua de moissanites por 360° do aro (24 pedras de 2.5mm). Para usar no anelar como aliança ou no dedo médio como statement.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedras", valor: "24x moissanite 2.5mm (360°)" },
    ],
    variacoes: [
      { tipo: "tamanho", valor: "14", label: "14" },
      { tipo: "tamanho", valor: "15", label: "15" },
      { tipo: "tamanho", valor: "16", label: "16" },
      { tipo: "tamanho", valor: "17", label: "17" },
      { tipo: "tamanho", valor: "18", label: "18" },
    ],
    fotos: [
      "https://images.pexels.com/photos/12978135/pexels-photo-12978135.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["casamento", "aniversário"],
  },
  {
    slug: "pulseira-riviera-moissanite",
    nome: "Pulseira Riviera Moissanite",
    categoria: "pulseiras",
    preco: 469,
    precoOriginal: 749,
    estoque: 9,
    sku: "PUL-RIV-925",
    descricaoCurta: "Pulseira riviera: 28 moissanites em sequência, cravação griffe. A peça que faz qualquer punho ficar elegante.",
    descricaoLonga: "Pulseira riviera com 28 moissanites de 4mm em cravação griffe (4 garras por pedra). Em prata 925 banho ródio. Fecho de segurança duplo. 17cm.",
    especificacoes: [
      { label: "Material", valor: "Prata 925 banho ródio" },
      { label: "Pedras", valor: "28x moissanite 4mm" },
      { label: "Cravação", valor: "Griffe (4 garras)" },
      { label: "Comprimento", valor: "17cm" },
    ],
    fotos: [
      "https://images.pexels.com/photos/8891940/pexels-photo-8891940.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    ocasiao: ["festa", "presente-especial"],
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
