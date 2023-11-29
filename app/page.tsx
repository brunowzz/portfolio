import Image from "next/image";

import Button from "@/components/button";
import CustomIcon from "@/components/custom-icon";
import ContainerItens from "@/components/container-itens";
import Technologies from "@/components/technologies";
import Subtitle from "@/components/subtitle";
import CardProjects from "@/components/card-projects";
import Form from "@/components/form";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <>
      <section className="container flex min-h-[calc(100vh-6rem)] w-full flex-wrap-reverse items-end justify-center sm:items-center sm:justify-between sm:pt-5 lg:relative">
        <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
          <h1 className="mb-3 font-kalam text-4xl font-normal text-custom-primary 2xl:text-6xl">
            Olá eu sou o{" "}
            <strong className="text-gradient-text block font-bold">
              Bruno Barreiras
            </strong>
          </h1>

          <h2 className="mb-2 font-heebo text-2xl font-medium text-custom-primary 2xl:text-3xl">
            Desenvolvedor Front-End
          </h2>

          <p className="mb-8 w-56 font-heebo text-base font-normal text-custom-primary lg:w-96 2xl:text-lg">
            Sou especialista na construção de aplicativos web inovadores usando
            tecnologias como React e Next.js.
          </p>

          <span className="flex gap-6">
            <a href="url" download="/BrunoBarreiras.pdf">
              <Button>
                <CustomIcon icon="curriculum" size="20" color="#fff" />
                Currículo
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/brunobarreiras/"
              target="_blank"
            >
              <Button>
                <CustomIcon icon="linkedin" size="20" color="#fff" />
                Linkedin
              </Button>
            </a>
          </span>
        </div>

        <div className="absolute bottom-3 right-[50%] hidden lg:flex lg:self-start">
          <CustomIcon icon="code" color="#9955E8" size="35" />
        </div>

        <figure className="sm:w-[280px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px]">
          <Image
            src="/bro.svg"
            className="h-full w-full"
            width={408}
            height={350}
            alt="typing code"
          />
        </figure>
      </section>

      <ContainerItens>
        <section className="flex flex-wrap items-center justify-between">
          <figure className="w-full md:w-[290px] lg:w-[330px] xl:w-[450px] 2xl:w-[550px] ">
            <Image
              src="/bruno.svg"
              alt="Bruno Barreiras - Avatar"
              className="h-full w-full"
              width={358}
              height={361}
            />
          </figure>

          <div className="flex flex-col gap-2 md:w-80 lg:w-96 xl:w-[525px] xl:gap-4 2xl:w-[650px]">
            <Technologies />

            <span>
              <Subtitle>Sobre mim</Subtitle>

              <h3 className="font-heebo text-base font-black text-custom-primary lg:text-lg xl:text-xl">
                Goiânia, Go
              </h3>
            </span>

            <p className="font-heebo text-base font-normal text-custom-primary lg:text-lg xl:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <a href="url" download="/BrunoBarreiras.pdf">
              <Button>
                <CustomIcon icon="curriculum" size="20" color="#fff" />
                Currículo
              </Button>
            </a>
          </div>
        </section>
      </ContainerItens>

      <section className="container mt-14 w-full">
        <div className="text-center">
          <Subtitle>Projetos</Subtitle>

          <h3 className="mt-2 font-heebo text-base font-medium text-custom-primary">
            Veja todos os meus Projetos
          </h3>
        </div>

        <article className="my-8 w-full sm:flex sm:justify-between">
          <CardProjects />
          <CardProjects />
          <CardProjects />
        </article>

        <div className="flex justify-center">
          <Button>Ver Todos</Button>
        </div>
      </section>

      <ContainerItens>
        <section className="sm:flex sm:justify-between">
          <div className="flex flex-col gap-1 sm:w-52 md:w-60 lg:w-96 lg:gap-3 xl:w-[538px]">
            <figure className="w-52">
              <Image
                src="/avatar.svg"
                className="h-full w-full"
                width={200}
                height={170}
                alt="Avatar de Bruno Barreiras"
              />
            </figure>
            <Subtitle>Contato</Subtitle>
            <h3 className="font-heebo text-sm font-extrabold text-custom-primary md:text-base lg:text-lg xl:text-xl">
              Gostou do meu trabalho?
            </h3>

            <p className="font-heebo text-sm font-medium text-custom-primary md:text-base lg:text-lg xl:text-xl">
              Envie-me um e-mail para{" "}
              <a
                href="mailto:brunovbarreiras@gmail.com"
                className="text-custom-terciary transition-all hover:opacity-80"
                target="_blank"
              >
                {" "}
                brunovbarreiras@gmail.com{" "}
              </a>{" "}
              ou entre em contato através das minhas redes sociais.
            </p>

            <span className="flex gap-2">
              <Socials
                urlSocial="https://github.com/brunowzz"
                nameSocial="GitHub"
                iconName="github"
              />
              <Socials
                urlSocial="https://www.linkedin.com/in/brunobarreiras/"
                nameSocial="LinkedIn"
                iconName="linkedin"
              />
              <Socials
                urlSocial="https://www.instagram.com/brunowzz/"
                nameSocial="Instagram"
                iconName="instagram"
              />
            </span>
          </div>
          <Form />
        </section>
      </ContainerItens>
    </>
  );
}
