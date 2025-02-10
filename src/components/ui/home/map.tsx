import React from "react";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { IPGeoLocation } from "@/app/page";

const MapSection = ({data} : {data :IPGeoLocation}) => {

 const customIcon = new Icon({
    iconUrl : "/marker.png",
    iconSize: [38, 38],
 })
  return (
    <MapContainer
      center={[data.location.lat, data.location.lng]}
      className="h-[40em]"
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker icon={customIcon} position={[data.location.lat, data.location.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapSection;
