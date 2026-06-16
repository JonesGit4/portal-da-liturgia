import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal da Liturgia",
  description: "Músicas, orações, artigos e subsídios litúrgicos para a Santa Missa tradicional.",
  openGraph: {
    title: "Portal da Liturgia",
    description: "Músicas, orações, artigos e subsídios litúrgicos para a Santa Missa tradicional.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
