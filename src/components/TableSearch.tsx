import Image from "next/image";
import React from "react";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300">
      <Image src="/search.png" height={14} width={14} alt="" />
      <input
        className="w-[200px] p-2 bg-transparent outline-none"
        type="text"
        placeholder="Search..."
      ></input>
    </div>
  );
};

export default TableSearch;
