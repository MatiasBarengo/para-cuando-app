import React from 'react';
interface IMainButton {
  children: React.ReactNode;
}
const MainButton = () => {
  return (
    <button className="disabled:bg-[#A7A6A7] flex flex-row items-center w-[307px] h-[47px] justify-center p-[18px] gap-10 bg-[#1B4DB1] rounded-[31px] absolute left-20 top-87 ">
      <p className="text-[#ffffff] text-base font-semibold text-center">
        Siguiente
      </p>
    </button>
  );
};

export default MainButton;
