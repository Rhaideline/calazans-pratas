import type { MetadataRoute } from "next";
import { produtos } from "@/data/produtos";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://calazanspratas.com.br";
  const now = new Date();
  const staticPages = [
    "",
    "/colecao",
    "/colecao?cat=aneis",
    "/colecao?cat=colares",
    "/colecao?cat=brincos",
    "/colecao?cat=pulseiras",
    "/colecao?cat=conjuntos",
    "/certificado",
    "/sobre",
    "/garantia",
    "/faq",
    "/contato",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1.0 : 0.8,
  }));

  const productPages = produtos.map((p) => ({
    url: `${base}/produto/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
