interface ICategoryButton {
  title: string;
}
export default function CategoryButton({ title }: ICategoryButton) {
  return (
    <button className="relative w-[240px] h-[45px] box-border flex flex-row items-center justify-center px-[15px] py-[19px] rounded-3xl border border-gray  gap-[10px] font-sm text-gray bg-white font-medium leading-4 hover:scale-105 ease-in duration-150">
      {title}
    </button>
  );
}
