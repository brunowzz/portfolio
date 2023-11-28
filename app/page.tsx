import Image from "next/image";

import CustomIcon from "@/components/custom-icon";

export default function Home() {
  return (
    <>
      <section className="height container flex w-full flex-wrap-reverse items-center justify-center pt-5 lg:justify-between">
        <div>
          <h1 className="mb-3 w-64 font-kalam text-4xl font-normal text-custom-primary">
            Olá eu sou o{" "}
            <strong className="text-gradient-text font-bold">
              Bruno Barreiras
            </strong>
          </h1>

          <h2 className="mb-2 font-heebo text-2xl font-medium text-custom-primary">
            Desenvolvedor Front-End
          </h2>

          <p className="mb-8 w-72 font-heebo text-base font-normal text-custom-primary sm:w-96">
            Sou especialista na construção de aplicativos web inovadores usando
            tecnologias como React e Next.js.
          </p>

          <span className="flex gap-8">
            <button>Currículo</button>
            <button>Linkedin</button>
          </span>
        </div>

        <div className="hidden lg:flex lg:self-start">
          <CustomIcon icon="code" color="#9955E8" size="35" />
        </div>

        <figure>
          <Image src="/bro.svg" width={408} height={350} alt="typing code" />
        </figure>
      </section>
    </>
  );
}
