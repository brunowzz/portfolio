"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "@/components/button";

const createSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(3, "Deve ter no mínimo 3 caracteres")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(" ");
    }),
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
  area: z
    .string()
    .nonempty("O campo de mensagem é obrigatório")
    .min(6, "Deve ter no mínimo 6 caracteres")
    .toLowerCase(),
});

type CreateFormData = z.infer<typeof createSchema>;

export default function Form() {
  const [output, setOutput] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: zodResolver(createSchema),
  });

  function createForm(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(createForm)}
        className="mt-4 flex flex-col gap-2 sm:w-64 md:w-96 xl:w-[33rem] xl:gap-6"
      >
        <div>
          <input
            type="text"
            placeholder="Nome"
            className={`h-14 w-full rounded-lg border-none bg-b-secondary p-3 font-heebo font-light text-custom-primary outline-none focus:border focus:border-solid ${
              errors.name ? "border-red-500" : "focus:border-custom-terciary"
            } md:h-16`}
            {...register("name")}
          />
          {errors.name && (
            <span className="font-heebo text-sm font-normal text-red-500 sm:text-base">
              {" "}
              {errors.name.message}{" "}
            </span>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="E-mail"
            className={`h-14 w-full rounded-lg border-none bg-b-secondary p-3 font-heebo font-light text-custom-primary outline-none focus:border focus:border-solid ${
              errors.email ? "border-red-500" : "focus:border-custom-terciary"
            } md:h-16`}
            {...register("email")}
          />
          {errors.email && (
            <span className="font-heebo text-sm font-normal text-red-500 sm:text-base">
              {" "}
              {errors.email.message}{" "}
            </span>
          )}
        </div>

        <div>
          <textarea
            placeholder="Sua Mensagem"
            className={`h-32 w-full resize-none rounded-lg border-none bg-b-secondary p-3 font-heebo font-light text-custom-primary outline-none focus:border focus:border-solid ${
              errors.area ? "border-red-500" : "focus:border-custom-terciary"
            } md:h-40 lg:h-48`}
            {...register("area")}
          ></textarea>
          {errors.area && (
            <span className="font-heebo text-sm font-normal text-red-500 sm:text-sm">
              {" "}
              {errors.area.message}{" "}
            </span>
          )}
        </div>

        <Button typeButton="submit">Enviar</Button>
      </form>
    </>
  );
}
