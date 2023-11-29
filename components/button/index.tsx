export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-b-quaternary flex h-11 w-32 items-center justify-center gap-2 rounded-xl font-heebo text-base font-medium text-custom-primary lg:w-40">
      {children}
    </button>
  );
}
