import Button from "@/components/button";

export default function Form() {
  return (
    <form className="mt-4 flex flex-col gap-2 sm:w-64 md:w-96 xl:w-[33rem] xl:gap-6">
      <input
        type="text"
        placeholder="Nome"
        className="h-14 w-full rounded-lg border-none bg-b-secondary p-3 font-heebo font-light text-custom-primary outline-none focus:border focus:border-solid focus:border-custom-terciary md:h-16 "
      />
      <input
        type="email"
        placeholder="E-mail"
        className="h-14 w-full rounded-lg border-none bg-b-secondary p-3 font-heebo font-light text-custom-primary outline-none focus:border focus:border-solid focus:border-custom-terciary md:h-16"
      />
      <textarea
        placeholder="Sua Mensagem"
        className="h-32 w-full resize-none rounded-lg border-none bg-b-secondary p-3 font-heebo font-light text-custom-primary outline-none focus:border focus:border-solid focus:border-custom-terciary md:h-40 lg:h-48"
      ></textarea>
      <Button typeButton="submit">Enviar</Button>
    </form>
  );
}
