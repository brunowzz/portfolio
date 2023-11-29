export default function Button({
  children,
  typeButton,
}: {
  children: React.ReactNode;
  typeButton?: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button
      type={typeButton}
      className="flex h-8 w-28 items-center justify-center gap-2 rounded-xl bg-b-quaternary font-heebo text-sm font-medium text-custom-primary sm:h-11 sm:w-32 sm:text-base lg:w-40"
    >
      {children}
    </button>
  );
}
