import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

export const SearchBox = () => {
  const [value, setValue] = useState(undefined);

  const route = useRouter();

  return (
    <div className="flex bg-slate-100 items-center p-3 rounded-lg w-full">
      <input
        type="text"
        placeholder="Search..."
        className="text-xs sm:text-sm bg-transparent focus:outline-none w-full sm:w-68"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        disabled={!value}
        className=" rounded-full disabled:text-gray-400"
        onClick={() => route.push(`/properties/search?search=${value}`)}
      >
        <MdSearch className="w-6 h-6" />
      </button>
    </div>
  );
};
