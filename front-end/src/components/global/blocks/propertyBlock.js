import Link from "next/link";
import React from "react";
import {
  MdAdd,
  MdAreaChart,
  MdBathroom,
  MdBathtub,
  MdBed,
  MdFavorite,
  MdLandscape,
  MdLocationPin,
  MdZoomIn,
} from "react-icons/md";

const PropertyBlock = ({ data }) => {

  return (
    <Link href={`/properties/search/${data._id}`} className=" w-full p-4 pb-0 shadow-md rounded-2xl cursor-pointer flex flex-col gap-2 dark:shadow-gray-500">
      <div className=" relative bg-gray-700 rounded-2xl flex items-center justify-center">
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
          src={data?.images[0]?.url}
          alt=""
          className=" rounded-2xl h-80 w-full hover:opacity-70 "
        />
        <div className=" absolute top-0 bottom-0 flex items-center "><MdZoomIn onClick={()=>{{
          console.log("data");
        }}} className=" h-10 w-10 text-gray-200 z-50"/></div>
        <div className="flex items-center justify-end absolute bottom-[-30px] right-0 bg-gray-50 dark:bg-gray-600  rounded-full ">
          <img
            src={data?.images[0]?.url}
            alt="User Image"
            className="w-16 h-16 rounded-full object-cover opacity-50 "
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
        <p className=" font-bold text-xl">{data.name}</p>
        <p className=" text-gray-500 dark:text-gray-400">
        {data.description}
        </p>
      </div>
      <div className="flex justify-between my-4">
        <div className=" flex gap-3 sm:gap-5">
          <p className="flex flex-col">
            <span className=" flex  items-center gap-2">
              {" "}
             {data.bedrooms} <MdBed />
            </span>{" "}
            <small className=" text-xs xs:text-sm">BedRoom</small>
          </p>
          <p className="flex flex-col">
            <span className=" flex  items-center gap-2">
              {" "}
             {data.bathrooms} <MdBathroom />{" "}
            </span>
            <small className=" text-xs xs:text-sm">Bathrooms</small>{" "}
          </p>
          <p className="flex flex-col">
            <span className=" flex  items-center gap-2">
              {" "}
              {data.size.area} <MdLandscape />{" "}
            </span>
            <small className=" text-xs xs:text-sm">{data.size.unit}</small>{" "}
          </p>
        </div>
        <div className="&[svg]:w-5 &[svg]:h-5">
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
