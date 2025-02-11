import React from "react";
import "leaflet/dist/leaflet.css";

import { IPGeoLocation } from "@/lib/types/geo-location";
import dynamic from "next/dynamic";
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false, loading: () => <div className="h-[40em] loader"></div> }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

import { Icon } from "leaflet";

const MapSection = ({ data }: { data: IPGeoLocation }) => {


  const customIcon = new Icon({
    iconUrl: "/marker.png",
    iconSize: [38, 38],})


  return (
    <MapContainer
       key={`${data.lat}-${data.lon}`}
      center={[data.lat, data.lon]}
      className="h-[40em] max-w-4xl p-4 w-full mx-auto"
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker icon={customIcon} position={[data.lat, data.lon]}>
        <Popup>{data.city}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapSection;
