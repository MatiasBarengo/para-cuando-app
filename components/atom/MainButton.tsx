import React, { FC } from 'react';

interface IMainButton extends React.ComponentPropsWithoutRef<'button'> {}
export const MainButton: FC<IMainButton> = ({ ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className="disabled:bg-disabled flex flex-row items-center w-[307px] h-[47px] justify-center p-[18px] gap-10 bg-primary rounded-[31px]"
    >
      <p className="text-white text-base font-semibold text-center">
        Siguiente
      </p>
    </button>
  );
};
