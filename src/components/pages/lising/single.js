import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
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
import { useParams } from "next/navigation";
import { PropertyList } from "@/components/global/blocks/ListBlock";
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
const locations = { lat: 22.491955, lng: 88.375296 }; // Example location, add more as needed
// Add more locations as needed

// https://sabe.io/blog/javascript-format-numbers-commas#:~:text=The%20best%20way%20to%20format,format%20the%20number%20with%20commas.

export function ListingsINGLE() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
              Link copied!
            </p>
          )}
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
            <p className="text-2xl font-semibold">
              {listing.name} - ${" "}
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && " / month"}
            </p>
            <p className="flex items-center mt-6 gap-2 text-slate-600  text-sm">
              <FaMapMarkerAlt className="text-green-700" />
              {listing.address}
            </p>
            <div className="flex gap-4">
              <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </p>
              {listing.offer && (
                <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                  ${+listing.regularPrice - +listing.discountPrice} OFF
                </p>
              )}
            </div>
            <p className="text-slate-800">
              <span className="font-semibold text-black">Description - </span>
              {listing.description}
            </p>
            <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaBed className="text-lg" />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds `
                  : `${listing.bedrooms} bed `}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaBath className="text-lg" />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths `
                  : `${listing.bathrooms} bath `}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaParking className="text-lg" />
                {listing.parking ? "Parking spot" : "No Parking"}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaChair className="text-lg" />
                {listing.furnished ? "Furnished" : "Unfurnished"}
              </li>
            </ul>
            {/* {currentUser && listing.userRef !== currentUser._id && !contact && (
              <button
                onClick={() => setContact(true)}
                className='bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3'
              >
                Contact landlord
              </button>
            )} */}
            {/* {contact && <Contact listing={listing} />} */}
          </div>
        </div>
      )}
    </main>
  );
}

export const SingleContainer = ({ data }) => {
  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-80px-130px)] max-w-7xl m-auto py-5 pt-10">
        <div className="col-span-full lg:col-span-1"></div>
        <div className="col-span-full lg:col-span-1 flex items-center">
          <Details data={data} />
        </div>
      </section>
      <Elements data={data} />
      <MapContainer data={data} />
      <SimilarProperty data={data} />
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
      <p className=" flex items-center"><div className=" flex items-center gap-2"> <FaDotCircle /> Metro</div> <div className=" flex items-center"> <span>30</span> minutes with a walk</div></p>
     <p className=" flex items-center gap-2"><MdLocationPin/> <div>Shikharpur P.O, Bagu, Newtown, Sikharpur, West Bengal 700135, India</div></p>
     <p className="flex gap-2 text-2xl font-semibold"><span>255,31.00</span> <span>$</span></p>
     <div>
      <MortgageCalculator/>
     </div>
    </div>
  );
};

const Elements = ({ data }) => {
  return (
    <div className="max-w-7xl m-auto py-5 pt-10">
      <div className=" flex justify-between px-5 py-5 text-md">
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
          right-clicking on the page, selecting "Inspect," and going to the
          "Console" tab) to see if there are any error messages related to the
          Google Maps API or your component. Fixing any errors mentioned in the
          console may resolve the issue. Ensure Google Maps API Key is Correct:
          Make sure that the Google Maps API key you are using in the LoadScript
          component is correct and has the necessary permissions. Double-check
          that the API key is associated with the correct project and has the
          Maps JavaScript API enabled. Verify the Marker Coordinates:
          Double-check the coordinates of the marker (locationMarker) in your
          page component. Ensure that the latitude and longitude values are
          correct. You can use a known location initially to ensure that the
          marker is placed on the map.
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
      <PropertyList data={{ title: "Similar Property" }} />
    </div>
  );
};
