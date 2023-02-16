import React from 'react';
interface ISearch {
  children: React.ReactNode;
}
const Search = () => {
  return (
    <div>
      <input
        type="text"
        className="rounded-3xl w-[373px] h-[46px] border-[1px] leading-4 absolute"
        placeholder="¿Que quieres ver en tu ciudad?"
      />
    </div>
  );
};

export default Search;
