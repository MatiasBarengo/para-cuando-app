interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CategoryButton({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="relative w-[auto] h-[45px] box-border flex flex-row items-center justify-center px-[13px] py-[19px] rounded-3xl border border-gray  gap-[10px] font-sm text-gray bg-white font-medium leading-4"
    >
      {children}
    </button>
  );
}
