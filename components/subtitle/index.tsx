export default function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-kalam text-3xl font-bold text-custom-terciary lg:text-4xl xl:text-5xl">
      {children}
    </h2>
  );
}
