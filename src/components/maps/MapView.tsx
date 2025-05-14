"use client";
import { useEffect, useRef } from "react";
import maplibre from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const geoApiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;

    if (!mapContainer.current) return; // Only proceed if the ref is set
    if (geoApiKey == undefined) {
      throw new Error("GeoAPify Api Key is missing");
    }

    const mapStyle =
      "https://maps.geoapify.com/v1/styles/osm-bright/style.json";
    // kenya longititude and latitude cordinates 
    // const initialState = { lng: 38.0, lat: 1.0, zoom: 9 };
    // nairobi longititude and latitude cordinates 
    const initialState = { lng: 36.817223, lat: -1.286389, zoom: 9 };
    const map = new maplibre.Map({
      container: mapContainer.current,
      style: `${mapStyle}?apiKey=${geoApiKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });
    map.addControl(new maplibregl.NavigationControl());
    return () => map.remove();
  }, []);

  return (
    <>
      <section className="h-full">
        {/* <p className="text-center py-2">Map view here</p> */}
        <div
          className="p-2 rounded-md border min-h-[50dvh]"
          ref={mapContainer}
        ></div>
      </section>
    </>
  );
}
