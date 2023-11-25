import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-24 w-full items-center justify-center shadow-2xl">
      <section className="container flex items-center justify-between">
        <figure>
          <Image
            width={78}
            height={82}
            src="/logo.svg"
            alt="Logo - Bruno Barreiras"
          />
        </figure>

        <nav className="flex gap-5">
          <Link
            className="font-heebo text-base font-normal text-custom-primary"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-heebo text-base font-normal text-custom-primary"
            href="/"
          >
            Sobre
          </Link>
          <Link
            className="font-heebo text-base font-normal text-custom-primary"
            href="/"
          >
            Projetos
          </Link>
          <Link
            className="font-heebo text-base font-normal text-custom-primary"
            href="/"
          >
            Contato
          </Link>
        </nav>
      </section>
    </header>
  );
}
