import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/checkout", "/conta"],
      },
    ],
    sitemap: "https://calazanspratas.com.br/sitemap.xml",
    host: "https://calazanspratas.com.br",
  };
}
