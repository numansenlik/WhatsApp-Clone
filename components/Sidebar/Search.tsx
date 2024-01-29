"use client";
import { FilterList } from "@mui/icons-material";
import { Search as SearchIcon } from "@mui/icons-material";
import React from "react";

const Search: React.FC = () => {
  return (
    <div className="flex sticky top-0 bg-white justify-around items-center p-2 pl-[12px]  h-[49px] w-full overflow-hidden gap-2">
      <div className="flex  bg-[#f0f2f5]  border-r-16 gap-4 rounded-lg h-[35px] w-[426px] items-center justify-center relative">
        <SearchIcon className="text-gray-600 size-[19px] absolute left-3 " />
        <input
          type="text"
          placeholder="Search or start new chat"
          className="border-none outline-0 bg-[#f0f2f5]  w-full pl-[65px] pr-[32px]  text-sm  text-black font-medium"
        />
      </div>
      <FilterList className="w-auto size-[19px] text-gray-500" />
    </div>
  );
};
export default React.memo(Search);
