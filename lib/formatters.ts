export function formatBRL(v: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(v);
}

export function parcelas12(v: number) {
  const p = v / 12;
  return formatBRL(p);
}
