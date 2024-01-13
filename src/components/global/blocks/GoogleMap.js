// components/GoogleMap.js
import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { googleMapsApiKey } from "@/setting";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 22.491955,
  lng: 88.375296,
};

const GoogleMapComponent = ({ locations }) => {
  return (
    <div className="max-w-7xl m-auto my-10">
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {locations && <Marker position={locations} />
          }
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
