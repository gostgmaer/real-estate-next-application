import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

import { faqs, imgArr, imgData } from "@/assets/img/data";
import PropertyBlock from "@/components/global/blocks/propertyBlock";
import Link from "next/link";

export const PropertyListSlider = ({ data }) => {
  SwiperCore.use([Pagination, Navigation]);

  return (
    <div className=" max-w-7xl m-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold mb-2 md:mb-0">{data.title}</h2>
        <Link
          href={"/properties/search"}
          className="text-center px-5 py-2 bg-[#186aa5] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-[#186aad]"
        >
          View All
        </Link>
      </div>

      {/* Product Elements */}
      <div className="">
        {/* Web: 3 elements */}
        <div className="block">
          {/* Swiper for Web */}
          <Swiper
            slidesPerView={3}
            spaceBetween={8}
            style={{ padding: "10px 0" }}
            rewind={true}
            pagination={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 8,
              },
            }}
            loop
            autoplay={{ delay: 3000 }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {imgArr.map((listing, index) => (
              <SwiperSlide key={index}>
                <PropertyBlock data={listing} />
              </SwiperSlide>
            ))}
            {/* Add more slides as needed */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export const Propertieslist = ({ data }) => {
  SwiperCore.use([Pagination, Navigation]);

  return (
    <div className=" max-w-7xl m-auto">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold mb-2 md:mb-0">{data.title}</h2>
        <Link
          href={"/properties/search"}
          className="text-center px-5 py-2 bg-[#186aa5] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-[#186aad]"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {/* Swiper for Web */}
        {imgArr.map((listing, index) => (
          <div
            key={index}
            className=" col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 "
          >
            <PropertyBlock key={index} data={listing} />
          </div>
        ))}
      </div>
    </div>
  );
};
