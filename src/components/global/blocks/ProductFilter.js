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
import { useGlobalContext } from "@/context/globalContext";
import { FaDollarSign } from "react-icons/fa";
import { MdCalendarViewMonth, MdLocationPin } from "react-icons/md";
const ProductFilter = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(true); // Initially open
  const {
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
  } = useGlobalContext();



  useEffect(() => {
    if (Object.keys(data.query).length > 0) {
      if (data?.query?.filter) {
        setFilters(data?.query?.filter);
      }
    }
  }, []);
  useEffect(() => {
    handleSearch();
  }, [pages, limit, selectedSort]);

  const handleToggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const inSearch = async () => {
    await handleSearch();
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

  const furnishedoptions = [
    { value: "1", label: "Furnished" },
    { value: "2", label: "Semi-Furnished" },
    { value: "3", label: "Not Furnished" }
  ];
  return (
    <div className={`  p-4 rounded-xl`}>
      <button
        onClick={handleToggleFilters}
        className="w-full text-left focus:outline-none"
      >
        {isOpen ? "Close Filters" : "Open Filters"}
      </button>

      <div className={`space-y-4 ${isOpen ? "block" : "hidden"} mt-4`}>
        <Disclosure as="div" className=" rounded-lg border border-gray-400 dark:border-gray-100 px-2 ">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-md font-medium   focus:outline-none focus-visible:ring ">
                <span>Property Type:</span>
                <hr />
                <ChevronDownIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pb-2 pt-2 text-md ">
                <SelectField
                  options={options}
                  id={"propertyType"}
                  label={undefined}
                  additionalAttrs={{
                    onChange: (selectedOption) => {
                      handleFilterChange(
                        "propertyType",
                        selectedOption.target.value
                      );
                    },
                    value: filters.propertyType,
                  }}
                  placeholder={"All"}
                  optionkeys={{ key: "value", value: "label" }}
                />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className=" rounded-lg border border-gray-400 dark:border-gray-100 px-2 ">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-md font-medium   focus:outline-none focus-visible:ring ">
                <span>Bed & Bathroom:</span>
                <hr />
                <ChevronDownIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pb-2 pt-2 text-md ">
              <div className="flex gap-2">
          <TextField
            label={"Bedrooms"}
            type={"number"}
            placeholder={"2"}
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
            placeholder={"1"}
            additionalAttrs={undefined}
            value={filters.bathrooms}
            onChange={(e) => handleFilterChange("bathrooms", e.target.value)}
            classes={undefined}
            icon={undefined}
            id={"bathrooms"}
          />
        </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className=" rounded-lg border border-gray-400 dark:border-gray-100 px-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-md font-medium   focus:outline-none focus-visible:ring ">
                <span>Floor Number:</span>
                <hr />
                <ChevronDownIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pb-2 pt-0 text-md ">
              <TextField
          label={undefined}
          type={"number"}
          placeholder={"3"}
          additionalAttrs={undefined}
          value={filters.floorNumber}
          onChange={(e) => handleFilterChange("floorNumber", e.target.value)}
          classes={undefined}
          icon={undefined}
          id={"floorNumber"}
        />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className=" rounded-lg border border-gray-400 dark:border-gray-100 px-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-md font-medium   focus:outline-none focus-visible:ring ">
                <span>is Furnished ?</span>
                <hr />
                <ChevronDownIcon
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className=" pb-2 pt-0 text-md ">
              <SelectField
                  options={furnishedoptions}
                  id={"furnished"}
                  label={undefined}
                  additionalAttrs={{
                    onChange: (selectedOption) => {
                      handleFilterChange(
                        "furnished",
                        selectedOption.target.value
                      );
                    },
                    value: filters.furnished,
                  }}
                  placeholder={"All"}
                  optionkeys={{ key: "value", value: "label" }}
                />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <TextField
          label={"Year of Build"}
          type={"number"}
          placeholder={"2018"}
          additionalAttrs={undefined}
          value={filters.yearBuilt}
          onChange={(e) => handleFilterChange("yearBuilt", e.target.value)}
          classes={undefined}
          icon={<MdCalendarViewMonth/>}
          id={"yearBuilt"}
        />
        <TextField
          label={"Location"}
          type={"text"}
          placeholder={"Kolkata"}
          additionalAttrs={undefined}
          value={filters.location}
          onChange={(e) => handleFilterChange("location", e.target.value)}
          classes={undefined}
          icon={<MdLocationPin />}
          id={"location"}
        />
        <TextField
          label={"Price"}
          type={"number"}
          placeholder={"10"}
          additionalAttrs={undefined}
          value={filters.priceRange}
          onChange={(e) => handleFilterChange("priceRange", e.target.value)}
          classes={undefined}
          icon={<FaDollarSign />}
          id={"priceRange"}
        />
        <div className="flex items-center">
          <label className="mr-2 flex items-center">
            Parking Space:
            <input
              type="checkbox"
              name="parkingSpaces"
              checked={filters.parkingSpaces}
              onChange={(e) =>
                handleFilterChange("parkingSpaces", e.target.checked )
              }
              className="ml-2 w-5 h-5"
            />
          </label>
        </div>
    
        <button
          onClick={inSearch}
          className="bg-blue-500 text-white p-2 w-full"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;

export const AccordionData = ({ data }) => {
  return (
    <>
      <Disclosure as="div" className=" rounded-lg border px-2 ">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-lg font-medium   focus:outline-none focus-visible:ring ">
              <span>{data.label}</span>
              <hr />
              <ChevronDownIcon
                className={`${open ? "rotate-180 transform" : ""} h-5 w-5 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className=" pb-2 pt-2 text-md ">
              {data.field}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
