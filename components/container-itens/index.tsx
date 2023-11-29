export default function ContainerItens({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="shadowContainer container mt-8 min-h-full w-full rounded-3xl bg-b-terciary p-6 sm:p-8 ">
      {children}
    </section>
  );
}
