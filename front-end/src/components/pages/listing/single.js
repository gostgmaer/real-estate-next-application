import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaBuilding,
  FaChair,
  FaDotCircle,
  FaFilePowerpoint,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";
import { useParams, usePathname } from "next/navigation";
import { Propertieslist, PropertyListSlider } from "@/components/global/blocks/ListBlock";
import GoogleMapComponent from "@/components/global/blocks/GoogleMap";
import {
  MdAreaChart,
  MdBedroomParent,
  MdBuild,
  MdCalendarMonth,
  MdFlood,
  MdLocalActivity,
  MdLocationPin,
  MdMeetingRoom,
  MdPin,
  MdRoom,
} from "react-icons/md";
import MortgageCalculator from "@/components/global/blocks/MorgegCalculator";
import { Slider } from "@/components/global/blocks/SliderComp";
import Link from "next/link";
const locations = { lat: 22.491955, lng: 88.375296 }; // Example location, add more as needed

export const SingleContainer = ({ data }) => {

  const pathname = usePathname()

  return (
    <div className=" p-5 md:p-2 bg">
      <section className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[calc(100vh-80px-130px)] max-w-7xl m-auto py-5 pt-10">
        <div className="col-span-full lg:col-span-1 flex items-center h-full p-5">
          {/* <SingleImageSlider /> */}
          <Slider/>
        </div>
        <div className="col-span-full lg:col-span-1 flex items-center">
          <Details data={data} />
        </div>
      </section>
      <Elements data={data} />
      <MapContainer data={data} />
     {pathname?.includes('dashboard')?"": <SimilarProperty data={data} />}
    </div>
  );
};

const ImageSlider = ({ data }) => {
  return <div></div>;
};

const Details = ({ data }) => {
  return (
    <div className=" px-2 pr-5">
      <h1 className="text-2xl font-semibold uppercase ">
        This is a Single Property List
      </h1>
      <p>
        <span>5</span> Rooms Appoitments <span>100 m3</span>{" "}
      </p>
      <p className=" flex items-center">
        <div className=" flex items-center gap-2">
          {" "}
          <FaDotCircle /> Metro
        </div>{" "}
        <div className=" flex items-center">
          {" "}
          <span>30</span> minutes with a walk
        </div>
      </p>
      <p className=" flex items-center gap-2">
        <MdLocationPin />{" "}
        <div>
          Shikharpur P.O, Bagu, Newtown, Sikharpur, West Bengal 700135, India
        </div>
      </p>
      <p className="flex gap-2 text-2xl font-semibold">
        <span>255,31.00</span> <span>$</span>
      </p>
      <div>
        <MortgageCalculator />
      </div>
      <div className=" mt-5">
      <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
           
          >
            call <Link href={"tel:+91000000000"}>+910000000000</Link>
          </button>
      </div>
    </div>
  );
};

const Elements = ({ data }) => {
  return (
    <div className="max-w-7xl m-auto py-5 pt-10">
      <div className=" flex justify-between px-5 py-5 text-md  flex-wrap">
        <div className=" flex gap-2 items-center">
          <MdAreaChart className="h-12 w-12" />
          <p className=" flex flex-col justify-center items-center">
            <span>100</span> <span>SQ.M</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <MdBedroomParent className="h-12 w-12" />
          <p className=" flex flex-col justify-center items-center">
            <span>100</span> <span>SQ.M</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <MdMeetingRoom className="h-12 w-12" />
          <p className=" flex flex-col justify-center items-center">
            <span>100</span> <span>SQ.M</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <FaBuilding className="h-12 w-12" />
          <p className=" flex flex-col justify-center items-center">
            <span>Casselee</span> <span>Building</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <MdCalendarMonth className="h-12 w-12" />
          <p className=" flex flex-col justify-center items-center">
            <span>2021</span> <span>Listing</span>
          </p>
        </div>
      </div>
      <div>
        <p>
          Check Browser Console for Errors: Open the browser console (usually by
          right-clicking on the page, selecting Inspect and going to the Console
          tab) to see if there are any error messages related to the Google Maps
          API or your component. Fixing any errors mentioned in the console may
          resolve the issue. Ensure Google Maps API Key is Correct: Make sure
          that the Google Maps API key you are using in the LoadScript component
          is correct and has the necessary permissions. Double-check that the
          API key is associated with the correct project and has the Maps
          JavaScript API enabled. Verify the Marker Coordinates: Double-check
          the coordinates of the marker (locationMarker) in your page component.
          Ensure that the latitude and longitude values are correct. You can use
          a known location initially to ensure that the marker is placed on the
          map.
        </p>
      </div>
    </div>
  );
};
const MapContainer = ({ data }) => {
  return (
    <div>
      <GoogleMapComponent locations={locations} />
    </div>
  );
};

const SimilarProperty = ({ data }) => {
  return (
    <div className="mt-10">
      {/* <PropertyListSlider data={{ title: "Similar Property" }} /> */}
      <Propertieslist data={{ title: "Similar Property" }} />
    </div>
  );
};

const SingleImageSlider = (second) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(undefined);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
  
        modules={[ Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <SliderImg />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImg />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImg />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImg />
        </SwiperSlide>
      </Swiper>
      {/* <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        onSwiper={()=>setThumbsSwiper(thumbsSwiper+1)}
        // modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
};

const SliderImg = (second) => {
  return (
    <div className=" h-[50%] w-full  p-5">
      {" "}
      <img
        src="https://swiperjs.com/demos/images/nature-1.jpg"
        className=" h-[500px]"
      />
    </div>
  );
};
