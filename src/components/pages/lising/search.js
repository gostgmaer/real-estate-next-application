import ListingItem from "@/components/blocks/Card";
import ProductFilter from "@/components/global/blocks/ProductFilter";
import { ElementsList, SortItem } from "./elements";

export default function Search({data}) {
  return (
    <div className="w-full flex flex-col md:flex-row px-5 py-10 gap-5">
      <div className="flex-[0.8] bg-gray-300 w-full p-5 px-2 rounded-xl h-full">
        <ProductFilter data={data} />
       
      </div>
      <div className=" flex-[3]">
        <SortItem />
        <ElementsList />
      </div>
    </div>
  );
}
