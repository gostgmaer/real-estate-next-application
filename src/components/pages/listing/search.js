import ListingItem from "@/components/blocks/Card";
import ProductFilter from "@/components/global/blocks/ProductFilter";
import { ElementsList, SortItem } from "./elements";

export default function Search({data}) {
  return (
    <div className="w-full flex flex-col lg:flex-row px-5 py-10 gap-5">
      <div className="flex-[0.8] bg-gray-300 dark:bg-gray-500 w-full lg:p-5 p-2 px-2 rounded-xl h-full lg:max-h-[calc(100vh+200px)] lg:sticky lg:top-0">
        <ProductFilter data={data} />
       
      </div>
      <div className=" flex-[3]">
        <SortItem />
        <ElementsList props={data} />
      </div>
    </div>
  );
}
