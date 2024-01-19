"use client";
import { FilterList } from "@mui/icons-material";
import { Search as SearchIcon } from "@mui/icons-material";
import React from "react";

const Search: React.FC = () => {
  return (
    <div className="flex sticky top-0 bg-white justify-between items-center px-4 h-20 w-full border-b overflow-hidden border-gray-400 gap-2">
      <div className="flex items-start bg-gray-200 px-4 py-2 border-r-16 gap-4 rounded-lg w-full">
        <SearchIcon className="text-gray-600" />
        <input
          type="text"
          placeholder="Search in chats"
          className="border-none outline-0 bg-gray-200 w-full"
        />
      </div>
      <FilterList />
    </div>
  );
};
export default React.memo(Search);
