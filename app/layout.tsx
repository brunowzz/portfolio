import "./globals.css";
import type { Metadata } from "next";
import { Kalam, Heebo } from "next/font/google";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
});
const heebo = Heebo({ subsets: ["latin"], variable: "--font-heebo" });

export const metadata: Metadata = {
  title: "Bruno Barreiras - Desenvolvedor Front-End",
  description:
    "Sou um Desenvolvedor Front-End com experiência no desenvolvimento de aplicações web de alto nível com as melhores tecnologias disponíveis no mercado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${kalam.variable} ${heebo.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
