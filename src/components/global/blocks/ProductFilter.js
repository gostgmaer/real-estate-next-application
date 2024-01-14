// components/ProductFilter.js
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
// import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import qs from "qs";
import { Disclosure } from "@headlessui/react";
import ChevronUpIcon from "@heroicons/react/24/outline/ChevronUpIcon";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import { generateUrlFromNestedObject } from "@/lib/helper/functions";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import SelectField from "../fields/SelectField";
import TextField from "../fields/TextField";
const ProductFilter = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();

  console.log(data);
  const [isOpen, setIsOpen] = useState(true); // Initially open
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
    search: searchParams.getAll("search"),
  });

  useEffect(() => {
    if (Object.keys(data.filter).length > 0) {
      setFilters(data.filter);
    }
  }, []);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleToggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    const queryString = qs.stringify(filters, { encodeValuesOnly: true });
    console.log(queryString);
    const checkQuerydata = generateUrlFromNestedObject({ filter: filters });
    router.replace(`${pathname}${checkQuerydata}`);

    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const options = [
    { value: "1", label: "apartment" },
    { value: "2", label: "House" },
    { value: "3", label: "Villa" },

    { value: "4", label: "Land" },
  ];

  return (
    <div className={` text-gray-700 p-4 bg-white rounded-xl`}>
      <button
        onClick={handleToggleFilters}
        className="w-full text-left focus:outline-none"
      >
        {isOpen ? "Close Filters" : "Open Filters"}
      </button>

      <div className={`space-y-4 ${isOpen ? "block" : "hidden"} mt-4`}>
        <SelectField
          options={options}
          id={"value"}
          label={"Property Type"}
          additionalAttrs={{
            onchange: (selectedOption) =>
              handleFilterChange("propertyType", selectedOption),
          }}
          placeholder={"Select"}
          optionkeys={{ key: "value", value: "label" }}
        />
        <Disclosure as="div" className=" rounded-lg ">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-lg font-medium   focus:outline-none focus-visible:ring ">
                <span>Price Range:</span>
                <hr />
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pb-2 pt-2 text-md text-gray-500 dark:text-gray-50">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    handleFilterChange("priceRange", [
                      filters.priceRange[0],
                      parseInt(e.target.value),
                    ])
                  }
                  className="w-full"
                />
                <span className="ml-2">{filters.priceRange[1]}</span>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className=" rounded-lg ">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-lg font-medium   focus:outline-none focus-visible:ring ">
                <span>Location</span>
                <hr />
                <ChevronDownIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pb-2 pt-0 text-md text-gray-500 dark:text-gray-50">
                <TextField
                  label={undefined}
                  type={"text"}
                  placeholder={undefined}
                  additionalAttrs={undefined}
                  value={filters.location}
                  onChange={(e) =>
                    handleFilterChange("location", e.target.value)
                  }
                  classes={undefined}
                  icon={undefined}
                  id={"location"}
                />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Additional Filters */}
        <div className="flex gap-2">
          <TextField
            label={"Bedrooms"}
            type={"number"}
            placeholder={"Number of Bedrooms"}
            additionalAttrs={undefined}
            value={filters.bedrooms}
            onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
            classes={undefined}
            icon={undefined}
            id={"bedrooms"}
          />
          <TextField
            label={"Bathrooms"}
            type={"number"}
            placeholder={"Number of Bathrooms"}
            additionalAttrs={undefined}
            value={filters.bathrooms}
            onChange={(e) => handleFilterChange("bathrooms", e.target.value)}
            classes={undefined}
            icon={undefined}
            id={"bathrooms"}
          />
        </div>

        <TextField
          label={"Year Built"}
          type={"number"}
          placeholder={"Year Built"}
          additionalAttrs={undefined}
          value={filters.yearBuilt}
          onChange={(e) => handleFilterChange("yearBuilt", e.target.value)}
          classes={undefined}
          icon={undefined}
          id={"yearBuilt"}
        />

        <div className="flex items-center">
          <label className="mr-2">
            Parking Space:
            <input
              type="checkbox"
              name="parkingSpaces"
              checked={filters.parkingSpaces}
              onChange={(e) =>
                handleFilterChange("parkingSpaces", { value: e.target.checked })
              }
              className="ml-2"
            />
          </label>
        </div>

        <TextField
          label={"Floor Number"}
          type={"number"}
          placeholder={"Floor Number"}
          additionalAttrs={undefined}
          value={filters.floorNumber}
          onChange={(e) => handleFilterChange("floorNumber", e.target.value)}
          classes={undefined}
          icon={undefined}
          id={"floorNumber"}
        />

        <div className="flex items-center">
          <label className="mr-2">
            Furnished:
            <input
              type="checkbox"
              name="furnished"
              checked={filters.furnished}
              onChange={(e) =>
                handleFilterChange("furnished", { value: e.target.checked })
              }
              className="ml-2"
            />
          </label>
        </div>
        {/* End of Additional Filters */}

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 w-full"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
