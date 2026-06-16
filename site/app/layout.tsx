import type { Metadata } from "next";
import { Cormorant_Garamond, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portal da Liturgia — Laudate Dominum",
  description:
    "Um portal dedicado à beleza, dignidade e formação na Sagrada Liturgia da Igreja Católica.",
  openGraph: {
    title: "Portal da Liturgia — Laudate Dominum",
    description:
      "Um portal dedicado à beleza, dignidade e formação na Sagrada Liturgia da Igreja Católica.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal da Liturgia — Laudate Dominum",
    description:
      "Um portal dedicado à beleza, dignidade e formação na Sagrada Liturgia da Igreja Católica.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Portal da Liturgia",
  url: "https://portaldaliturgia.com.br",
  description:
    "Um portal dedicado à beleza, dignidade e formação na Sagrada Liturgia da Igreja Católica.",
  inLanguage: "pt-BR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <head>
        <meta name="theme-color" content="#8B1A2B" />
        <meta name="color-scheme" content="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--accent)] focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Pular para o conteúdo
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
