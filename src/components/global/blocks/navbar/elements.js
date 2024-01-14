import { useGlobalContext } from "@/context/globalContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

export const SearchBox = () => {
  // const [value, setValue] = useState(undefined);
  const { filters, setFilters, handleSearch,handleFilterChange } = useGlobalContext();

  const route = useRouter();

  return (
    <div className="flex bg-slate-700 dark:bg-slate-100 items-center p-3 rounded-lg w-full">
      <input
        type="text"
        id="search"
        placeholder="Search..."
        className="text-xs sm:text-sm bg-transparent focus:outline-none w-full sm:w-68 dark:text-gray-700 text-gray-50"
        onChange={(e) => handleFilterChange("search",e.target.value)}
        value={filters.search}
      />
      <button
        disabled={!filters.search}
        className=" rounded-full disabled:text-gray-400 dark:text-gray-700 text-gray-50"
        onClick={handleSearch}
      >
        <MdSearch className="w-6 h-6" />
      </button>
    </div>
  );
};
