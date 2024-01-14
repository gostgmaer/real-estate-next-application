import Link from "next/link";
import React from "react";
import {
  MdAdd,
  MdAreaChart,
  MdBathtub,
  MdBed,
  MdFavorite,
  MdLocationPin,
  MdZoomIn,
} from "react-icons/md";

const PropertyBlock = ({ data }) => {
  return (
    <Link href={`/properties/search/${data._id}`} className=" w-full p-4 pb-0 shadow-md rounded-2xl cursor-pointer flex flex-col gap-2 dark:shadow-gray-500">
      <div className=" relative">
        <div className=" flex justify-between px-5 absolute w-full top-4">
          <p className="bg-[#00000080] text-gray-50  rounded-md py-1 px-2">
            {" "}
            20 km Away
          </p>
          <p className=" bg-green-600 text-gray-50 rounded-md py-1 px-2">
            For Rent
          </p>
        </div>
        <img
          src={data.img}
          alt=""
          className=" rounded-2xl h-full w-full"
        />
        <div className="flex items-center justify-end absolute bottom-[-30px] right-0 bg-white rounded-full ">
          <img
            src={data.img}
            alt="User Image"
            className="w-16 h-16 rounded-full object-cover opacity-5"
          />
        </div>
      </div>
      <div className="mt-2">
        <p className="flex gap-2 items-center">
          <MdLocationPin className=" text-orange-500 w-5 h-5" /> Location Name
        </p>
        <p className=" text-sky-800 text-xl font-semibold">
          {" "}
          <span>$</span> 3000
        </p>
        <p className=" font-bold text-xl">Studio Appoitment</p>
        <p className=" text-gray-500 dark:text-gray-500">
          If you need to use a one-off breakpoint that doesn t make sense to
          include in your theme
        </p>
      </div>
      <div className="flex justify-between my-4">
        <div className=" flex gap-3 sm:gap-5">
          <p className="flex flex-col">
            <span className=" flex  items-center gap-2">
              {" "}
              2 <MdBed />
            </span>{" "}
            <small className=" text-xs xs:text-sm">BedRoom</small>
          </p>
          <p className="flex flex-col">
            <span className=" flex  items-center gap-2">
              {" "}
              1 <MdBathtub />{" "}
            </span>
            <small className=" text-xs xs:text-sm">BedRoom</small>{" "}
          </p>
          <p className="flex flex-col">
            <span className=" flex  items-center gap-2">
              {" "}
              1702 <MdAreaChart />{" "}
            </span>
            <small className=" text-xs xs:text-sm">Squire Ft</small>{" "}
          </p>
        </div>
        <div>
          <button>
            <MdZoomIn className="h-4 w-4" />
          </button>
          <button>
            <MdFavorite />
          </button>
          <button>
            <MdAdd />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyBlock;
