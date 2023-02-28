/*export default function CategoryButton() {
  return (
    <button className="relative w-[240px] h-[45px] box-border flex flex-row items-center justify-center px-[15px] py-[19px] rounded-3xl border border-gray  gap-[10px] font-sm text-gray bg-white font-medium leading-4 hover:scale-105 ease-in duration-150">
      Marcas y tiendas
    </button>
  );
}*/

import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CategoryButton({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="relative w-[240px] h-[45px] box-border flex flex-row items-center justify-center px-[15px] py-[19px] rounded-3xl border border-gray  gap-[10px] font-sm text-gray bg-white font-medium leading-4 hover:scale-105 ease-in duration-150"
    >
      {children}
    </button>
  );
}
