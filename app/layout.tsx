import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calazanspratas.com.br"),
  title: {
    default: "Calazans Pratas — Prata 925 com Moissanite Certificada",
    template: "%s | Calazans Pratas",
  },
  description:
    "Joias em prata 925 com moissanite certificada. O brilho do diamante a 1/10 do preço. Frete grátis acima de R$ 199. Troca em 30 dias. Certificado de autenticidade em cada peça.",
  openGraph: {
    title: "Calazans Pratas — Prata 925 com Moissanite Certificada",
    description: "O brilho do diamante a 1/10 do preço. Com certificado.",
    type: "website",
    locale: "pt_BR",
    url: "https://calazanspratas.com.br",
    siteName: "Calazans Pratas",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://calazanspratas.com.br" },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  name: "Calazans Pratas",
  legalName: "Calazans Pratas Joias",
  url: "https://calazanspratas.com.br",
  logo: "https://calazanspratas.com.br/logo.png",
  description: "E-commerce de joias em prata 925 com moissanite certificada — anéis, colares, brincos, pulseiras e conjuntos bridal. Brilho do diamante a 1/10 do preço.",
  slogan: "A elegância do diamante. Sem o preço do diamante.",
  email: "atendimento@calazanspratas.com.br",
  telephone: "+55-31-98658-9584",
  areaServed: ["BR", "US"],
  currenciesAccepted: "BRL",
  paymentAccepted: ["Credit Card", "PIX", "Bank Transfer"],
  sameAs: [
    "https://instagram.com/calazanspratas",
    "https://tiktok.com/@calazanspratas",
    "https://pinterest.com/calazanspratas",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-31-98658-9584",
    contactType: "customer service",
    areaServed: ["BR", "US"],
    availableLanguage: ["Portuguese", "English"],
    contactOption: "TollFree",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calazans Pratas",
  url: "https://calazanspratas.com.br",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://calazanspratas.com.br/colecao?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema]) }}
        />
        <TrustBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
