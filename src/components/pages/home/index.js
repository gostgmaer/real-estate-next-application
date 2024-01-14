import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import Link from "next/link";
import ListingItem from "@/components/blocks/Card";
import { faqs, imgArr, imgData } from "@/assets/img/data";
import PropertyBlock from "@/components/global/blocks/propertyBlock";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { PropertyList } from "@/components/global/blocks/ListBlock";

export default function Index({ data }) {

  SwiperCore.use([Navigation,Pagination]);

  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleRadioChange = (id) => {
    setSelectedItemId(id);
  };

  return (
    <div className="w-full">
      <div className="max-w-full slider-elements">
        <Swiper navigation loop autoplay={{ delay: 5000 }}>
          {data.currSliderMedia &&
            data.currSliderMedia.length > 0 &&
            data.currSliderMedia.map((listing, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col items-center justify-center gap-6 min-h-screen mx-auto bg-gray-900">
                  {listing.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute inset-0 object-cover w-full h-full opacity-50 pointer-events-none"
                    >
                      <source src={listing.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={listing.img}
                      alt=""
                      className="absolute inset-0 object-cover w-full h-full opacity-50 pointer-events-none"
                    />
                  )}
                  <div className="relative z-10 flex flex-col gap-5 p-5 text-white">
                    <h1 className="text-3xl lg:text-6xl font-bold">
                      Find your next{" "}
                      <span className="text-slate-300">perfect</span>
                      <br />
                      place with ease
                    </h1>
                    <div className="text-gray-200 text-xs sm:text-sm">
                      Sahand Estate is the best place to find your next perfect
                      place to live.
                      <br />
                      We have a wide range of properties for you to choose from.
                    </div>
                    <Link
                      href={"/search"}
                      className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
                    >
                      Let s get started...
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className=" max-w-full feature-button p-5">
        <div className="flex flex-col items-center justify-center gap-5 py-10 max-w-7xl m-auto  flex-wrap  ">
          <p className=" text-3xl text-center font-medium">
            <span>Hi, What do You Want your</span> <br />{" "}
            <span className=" text-slate-700 dark:text-slate-300">Dream House</span>
          </p>
          <p>Select Property Type to begins</p>
        </div>
        <div className="max-w-7xl m-auto  gap-5 flex flex-col xs:flex-row  flex-wrap justify-center ">
          {imgData.map((item) => (
            <div
              key={item.id}
              className=" xs:w-[45%] md:w-[22.5%] w-full p-4 pb-0 shadow-md rounded-2xl cursor-pointer dark:shadow-slate-600"
              onClick={() => handleRadioChange(item.id)}
            >
              <img
                src={item.attributes.image.medium}
                alt=""
                className=" rounded-2xl"
              />
              <p className=" flex items-center justify-center py-2 pb-3 gap-2">
                {item.attributes.title.substring(0, 20)}{" "}
                <input
                  type="radio"
                  id={`radio-${item.id}`}
                  name="radioGroup"
                  className=" flex items-center w-4 h-4"
                  value={item.id}
                  checked={selectedItemId === item.id}
                  // onChange={(e) => setSelectedItemId(e.target.value)}
                />
              </p>
            </div>
          ))}
        </div>
        <div className="max-w-7xl m-auto flex  flex-wrap justify-center py-10">
          <button className="px-[10%] text-center w-1/2 sm:w-[35%] py-4 bg-[#186aa5] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-[#186aad]">
            Continue
          </button>
        </div>
      </div>
      {/* listing results for offer, sale and rent */}

      <div className=" max-w-full feature-properties p-5">
        <div className="flex flex-col items-center justify-center gap-5 py-10 max-w-7xl m-auto  flex-wrap  ">
          <p className=" text-3xl text-center font-medium">
            <span>Featured properties</span> <br />{" "}
          </p>
          <p>
            Most Frequenly Searched Appoitments of the application Listed below
          </p>
        </div>
        <div className="max-w-7xl m-auto  gap-5 flex  flex-wrap justify-center ">
          {/* {imgData.map((item) => (
      
           <PropertyBlock key={item.id} data={item}/>
          ))} */}

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
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 8,
              },
            }}
            loop
            autoplay={{ delay: 3000 }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.currSliderMedia &&
              data.currSliderMedia.length > 0 &&
              imgArr.map((listing, index) => (
                <SwiperSlide key={index}>
                  <PropertyBlock data={listing} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="max-w-7xl m-auto flex  flex-wrap justify-center mt-10 py-10">
          <button className=" text-center px-10 py-2 bg-[#186aa5] text-white font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring focus:border-[#186aad]">
            View All
          </button>
        </div>
      </div>
      <div className="max-w-full feature-properties p-5">
        <PropertyList data={{title:"New Items"}} />
      </div>
      <div className="max-w-full feature-properties p-5">
        <PropertyList data={{title:"On Sale Listings"}} />
      </div>
      <div className=" max-w-full feature-properties p-5 mb-10">
        <div className="flex flex-col items-center justify-center gap-5 py-5 max-w-7xl m-auto  flex-wrap  ">
          <p className=" text-3xl text-center font-medium">
            <span>Frequenly Asked Questions</span> <br />{" "}
          </p>
          <p>Most Frequenly Asked Questions by our Customers</p>
        </div>
        <HomeAccordians />
      </div>

      <div></div>
    </div>
  );
}



export const HomeAccordians = () => {
  return (
    <div className="w-full pt-5">
      <div className="mx-auto w-full max-w-4xl rounded-2xl p-2 flex flex-col gap-2">
       
     {faqs.faqs.map(faq=>(
         <Disclosure as="div" className=" p-2 border rounded-lg border-blue-500" key={faq.id}>
         {({ open }) => (
           <>
             <Disclosure.Button className="flex w-full justify-between rounded-lg   px-4 py-2 text-left text-lg font-medium   focus:outline-none focus-visible:ring ">
               <span>{faq.question}</span>
               <ChevronUpIcon
                 className={`${
                   open ? "rotate-180 transform" : ""
                 } h-8 w-8 text-gray-500`}
               />
             </Disclosure.Button>
             <Disclosure.Panel className="px-4 pb-2 pt-4 text-md text-gray-500 dark:text-gray-50">
              {faq.answer}
             </Disclosure.Panel>
           </>
         )}
       </Disclosure>
     ))}
      </div>
    </div>
  );
};

