"use client";

import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Loc = {
  id: string;
  label: string;
  desc: string;
  lat: number;
  lng: number;
};

function MapInner({
  locations,
  active,
  onMarkerHover,
  onMarkerClick,
  onMapReady,
}: any) {
  const map = useMap();

  useEffect(() => {
    if (onMapReady) onMapReady(map);
  }, [map, onMapReady]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((loc: Loc, idx: number) => (
        <CircleMarker
          key={loc.id}
          center={[loc.lat, loc.lng]}
          radius={active === idx ? 10 : 6}
          pathOptions={{
            color: "#5D3A1A",
            fillColor: "#F4EFE6",
            fillOpacity: 1,
            weight: 2,
          }}
          eventHandlers={{
            mouseover: () => onMarkerHover(idx),
            mouseout: () => onMarkerHover(null),
            click: () => onMarkerClick(idx),
          }}
        >
          <Tooltip
            direction="top"
            offset={[0, -8]}
            opacity={1}
            permanent={active === idx}
          >
            {loc.label}
          </Tooltip>
        </CircleMarker>
      ))}
    </>
  );
}

export default function MapPlaceholder({
  locations,
  active,
  onMarkerHover,
  onMarkerClick,
  onMapReady,
}: any) {
  const center =
    locations && locations.length
      ? [locations[0].lat, locations[0].lng]
      : [48.8566, 2.3522];

  return (
    <MapContainer
      center={center}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <MapInner
        locations={locations}
        active={active}
        onMarkerHover={onMarkerHover}
        onMarkerClick={onMarkerClick}
        onMapReady={onMapReady}
      />
    </MapContainer>
  );
}
