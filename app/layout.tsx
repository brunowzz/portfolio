import "./globals.css";
import type { Metadata } from "next";
import { Kalam, Heebo } from "next/font/google";

import Header from "@/components/header";
import GoToTop from "@/components/go-to-top";
import Footer from "@/components/footer";

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
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${kalam.variable} ${heebo.variable} bg-radial-gradient className="flex  min-h-screen flex-col items-center px-6`}
      >
        <Header />
        <main className="flex w-full flex-col items-center">{children}</main>
        <GoToTop />
        <Footer />
      </body>
    </html>
  );
}
