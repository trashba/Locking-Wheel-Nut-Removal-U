import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

// import PinIcon from "../../assets/pin.svg";

import styles from "@styles/components/map.module.scss";

const Red_MARKER = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
<svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
fill="#dc2626"
stroke="white"
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth="2"
className="feather feather-map-pin"
viewBox="0 0 24 24"
>
<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
<circle cx="12" cy="10" r="3" fill="#8c221c"></circle>
</svg>
`)}`;

const iconPerson = new L.Icon({
  iconUrl: Red_MARKER,
  iconRetinaUrl: Red_MARKER,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

const Map = () => {
  return (
    <MapContainer
      center={[51.562988800724035, 0.14818009315218267]}
      zoom={17}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      className={styles.map}
    >
      <TileLayer url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
      <Marker
        position={[51.562988800724035, 0.14818009315218267]}
        icon={iconPerson}
      />
    </MapContainer>
  );
};

export default Map;
