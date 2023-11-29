import Image from "next/image";

import Button from "@/components/button";

export default function CardProjects() {
  return (
    <div className="mb-3 flex h-full flex-col gap-2 rounded-lg bg-b-terciary p-4 sm:w-48 md:w-56 lg:w-72 xl:w-96">
      <Image
        src="/rick-and-morty.png"
        className="h-full w-full rounded-t-lg"
        width={264}
        height={122}
        alt="Rick and Morty"
      />

      <h3 className="font-heebo text-base font-semibold text-custom-primary">
        Lorem Ipsum
      </h3>
      <h4 className="font-heebo text-base font-medium text-custom-primary">
        It is a long established fact that a reader
      </h4>

      <Button>Ver mais</Button>
    </div>
  );
}
