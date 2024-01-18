import { imgArr } from "@/assets/img/data";
import PaginationBlock from "@/components/global/blocks/pagination/paginationBlock";
import PropertyBlock from "@/components/global/blocks/propertyBlock";
import { useGlobalContext } from "@/context/globalContext";
import { useState } from "react";

export const SortItem = () => {
  const { selectedSort, setSelectedSort } = useGlobalContext();
  const sortOption = [
    { value: "popularity-desc", label: "Popularity", default: true },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
  ];

  return (
    <div className="flex items-center space-x-4 justify-between bg-gray-300 dark:bg-gray-500 rounded-lg p-2 px-4 mb-5 ">
      <label className="text-sm">Sort By:</label>
      <select
        className="border p-2 rounded-lg"
        value={selectedSort}
        onChange={(e) => setSelectedSort(e.target.value)}
        defaultValue={"popularity-desc"}
      >
        {sortOption.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const ElementsList = ({ props }) => {
  const { pages, setPages, limit, setLimit } = useGlobalContext();

  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        {props.data.result.map((listing, index) => (
          <PropertyBlock key={index} data={listing} />
        ))}
      </div>
      <div className=" px-2 py-3 bg-gray-300 dark:bg-gray-500 rounded-lg mt-10">
        <PaginationBlock
          totalItems={props.data.total_record}
          limit={limit}
          currentPage={pages}
          setPage={setPages}
          setLimit={setLimit}
          items={[10, 20, 50, 100]}
        />
      </div>
    </div>
  );
};
