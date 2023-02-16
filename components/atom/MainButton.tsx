import React from 'react';
interface IMainButton {
  children: React.ReactNode;
}
const MainButton = () => {
  return (
    <button className="flex flex-row items-center w-[307px] h-[47px] justify-center p-18 gap-10 bg-[#A7A6A7] rounded-[31px] absolute left-20 top-87 ">
      <p className="text-[#ffffff] text-base font-semibold h-[20px]">
        Siguiente
      </p>
    </button>
  );
};

export default MainButton;
