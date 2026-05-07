import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Teacher Raabe | Aulas de Inglês Online",
  description:
    "Aprenda inglês com confiança e naturalidade. Aulas personalizadas com método próprio — do seu nível atual até onde você quer chegar.",
  keywords: "aulas de inglês, professora de inglês online, inglês conversação, Teacher Raabe",
  openGraph: {
    title: "Teacher Raabe | Aulas de Inglês Online",
    description: "Aprenda inglês com confiança. Método personalizado, 100% online.",
    type: "website",
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
