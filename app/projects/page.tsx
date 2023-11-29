import Link from "next/link";
import Image from "next/image";

import Subtitle from "@/components/subtitle";
import CardProjects from "@/components/card-projects";

export default function ProjectsPage() {
  return (
    <>
      <section className="container flex flex-wrap items-center justify-between gap-2 border-b border-custom-terciary py-6">
        <div className="flex flex-col gap-2">
          <Subtitle>Projetos</Subtitle>
          <h1 className="font-heebo text-base font-medium text-custom-primary">
            Aqui estão todos os projetos que desenvolvi ou participei
          </h1>

          <Link href="/">
            <button className="h-12 w-44 rounded-lg bg-custom-terciary font-heebo text-xl font-medium text-black hover:opacity-80">
              Entre em Contato
            </button>
          </Link>
        </div>

        <figure className="hidden w-52 sm:flex">
          <Image
            src="/avatar.svg"
            className="h-full w-full"
            width={200}
            height={170}
            alt="Personagem - Bruno Barreiras"
          />
        </figure>
      </section>

      <section className="container grid grid-cols-1 justify-items-center gap-4 pt-5 sm:grid-cols-3">
        <CardProjects />
        <CardProjects />
        <CardProjects />
        <CardProjects />
        <CardProjects />
        <CardProjects />
      </section>
    </>
  );
}
