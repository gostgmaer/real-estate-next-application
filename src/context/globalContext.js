import { createContext, useContext, useState } from "react";

import { useSession } from "next-auth/react";
import {
  ReadonlyURLSearchParams,
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegments,
} from "next/navigation";
import { generateUrlFromNestedObject } from "@/lib/helper/functions";
import qs from "qs";

var Url = require("url-parse");
const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();

  const [openModal, setOpenModal] = useState(false);
  const [filters, setFilters] = useState({
    priceMin: "",
    priceMax: "",
    location: "",
    name: "",
    propertyType: "",
    priceRange: "",
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
    yearBuilt: "",
    amenities: [],
    parkingSpaces: false,
    floorNumber: "",
    furnished: false,
    search: "",
  });
  const [pages, setPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [selectedSort, setSelectedSort] = useState("");

  const { data: session, status } = useSession();

  const handleSearch = () => {
    console.log(filters);
    var sortItem = selectedSort.split('-');
    let mysort = `${sortItem[0]}:${sortItem[1]}`

    // const queryString = qs.stringify(filters, { encodeValuesOnly: true });
    // console.log(queryString);

    const paramsQuery = { filter: filters, page: pages, limit,sort:mysort };

    const checkQuerydata = generateUrlFromNestedObject({ ...paramsQuery });
    router.replace(`/properties/search${checkQuerydata}`);
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };


  
  return (
    <AppContext.Provider
      value={{
        filters,
        setFilters,
        handleSearch,
        handleFilterChange,
        pages,
        setPages,
        limit,
        setLimit,
        selectedSort,
        setSelectedSort,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
