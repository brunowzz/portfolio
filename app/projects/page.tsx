import { client } from "@/sanity/lib/client";

import Link from "next/link";
import Image from "next/image";

import Subtitle from "@/components/subtitle";
import CardProjects from "@/components/card-projects";

async function getData() {
  const query = `*[_type == "blogPost"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProjectsPage() {
  const data = await getData();

  return (
    <>
      <section className="container flex flex-wrap items-center justify-between gap-2 border-b border-custom-terciary py-6">
        <div className="flex flex-col gap-2">
          <Subtitle>Projetos</Subtitle>
          <h1 className="font-heebo text-base font-medium text-custom-primary">
            Aqui estão todos os projetos que desenvolvi ou participei
          </h1>

          <Link href="/#contact">
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
        {data.map((item: any) => (
          <CardProjects
            key={item._id}
            srcImage={item.projectImage.asset._ref}
            name={item.projectName}
            description={item.shortDescription}
            redirect={item._id}
          />
        ))}
      </section>
    </>
  );
}
