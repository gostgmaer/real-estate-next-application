import { imgArr } from "@/assets/img/data";
import PaginationBlock from "@/components/global/blocks/pagination/paginationBlock";
import PropertyBlock from "@/components/global/blocks/propertyBlock";
import { useState } from "react";

export const SortItem = () => {
  const [selectedSort, setSelectedSort] = useState("");
  const sortOption = [
    { value: "popularity", label: "Popularity" },
    { value: "lowToHigh", label: "Price: Low to High" },
    { value: "highToLow", label: "Price: High to Low" },
  ];

  return (
    <div className="flex items-center space-x-4 justify-between bg-gray-200 rounded-lg p-2 px-4 mb-5">
      <label className="text-sm">Sort By:</label>
      <select
        className="border p-2 rounded-lg"
        value={selectedSort}
        onChange={(e) => setSelectedSort(e.target.value)}
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

export const ElementsList = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        {imgArr.map((listing, index) => (
          <PropertyBlock key={index} data={listing} />
        ))}
      </div>
      <div className=" px-2 py-3">
        <PaginationBlock
          totalItems={1000}
          limit={10}
          currentPage={1}
          onPageChange={undefined}
          onItemsPerPageChange={undefined}
        />
      </div>
    </div>
  );
};
