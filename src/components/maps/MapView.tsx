"use client";
import { useEffect, useRef, useState } from "react";
import maplibre from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null);

  const [startLocation, setStartLocation] = useState<[number, number] | null>(
    null
  );
  const [endLocation, setEndLocation] = useState<[number, number] | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const routeLayerId = "route-line";
  const [distanceInformation, setDistanceInformation] = useState<string>("");

  // Handle selection from autocomplete
  // function onStartPlaceSelect(value: any) {
  //   if (value && value.geometry && value.geometry.coordinates) {
  //     setStartLocation(value.geometry.coordinates);
  //   }
  // }

function onStartPlaceSelect(value: any) {
  if (value?.geometry?.coordinates) {
    const [lng, lat] = value.geometry.coordinates;
    // Kenya roughly: Lat -5 to 5, Lng 33 to 42
    if (lat >= -5 && lat <= 5 && lng >= 33 && lng <= 42) {
      setStartLocation([lng, lat]);
    } else {
      alert("Start location is outside Kenya.");
    }
  }
}

  // function onEndPlaceSelect(value: any) {
  //   if (value && value.geometry && value.geometry.coordinates) {
  //     setEndLocation(value.geometry.coordinates);
  //   }
  // }
function onEndPlaceSelect(value: any) {
  if (value?.geometry?.coordinates) {
    const [lng, lat] = value.geometry.coordinates;
    // Kenya roughly: Lat -5 to 5, Lng 33 to 42
    if (lat >= -5 && lat <= 5 && lng >= 33 && lng <= 42) {
      setEndLocation([lng, lat]);
    } else {
      alert("End location is outside Kenya.");
    }
  }
}

  function onSuggestionChange(value: unknown) {
    console.log("onSuggestionChange function", value);
  }

  const geoApiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;

  useEffect(() => {
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

    mapRef.current = map;
   

    return () => map.remove();
  }, [geoApiKey]);

  useEffect(() => {
    const drawRoute = async () => {
      if (
        !geoApiKey ||
        !startLocation ||
        !endLocation ||
        !mapContainer.current
      ) {
        return;
      }

      const [startLng, startLat] = startLocation;
      const [endLng, endLat] = endLocation;

      const url = `https://api.geoapify.com/v1/routing?waypoints=${startLng},${startLat}|${endLng},${endLat}&mode=drive&apiKey=${geoApiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      const routeGeoJson = data?.features?.[0]?.geometry;

      if (!routeGeoJson) {
        return;
      }

      const map = mapRef.current;
      if (map?.getLayer(routeLayerId)) {
        map.removeLayer(routeLayerId);
      }
      if (map?.getSource(routeLayerId)) {
        map.removeSource(routeLayerId);
      }
      map?.addSource(routeLayerId, {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: routeGeoJson,
          properties:{}
        },
      });

      map?.addLayer({
        id: routeLayerId,
        type: "line",
        source: routeLayerId,
        paint: {
          "line-color": "#007cbf",
          "line-width": 4,
        },
      });
      if(map){

        new maplibre.Marker({ color: "green" }).setLngLat(startLocation).addTo(map);
  
        new maplibre.Marker({ color: "red" }).setLngLat(endLocation).addTo(map);
      }

      const bounds = new maplibre.LngLatBounds();

      if (routeGeoJson.type === "LineString") {
        routeGeoJson.coordinates.forEach((coord: number[]) =>
          bounds.extend([coord[0], coord[1]])
        );
      } else if (routeGeoJson.type === "MultiLineString") {
        routeGeoJson.coordinates.forEach((line: number[][]) => {
          line.forEach((coord: number[]) =>
            bounds.extend([coord[0], coord[1]])
          );
        });
      }

      map?.fitBounds(bounds, { padding: 40 });

      // routeGeoJson.coordinates.forEach((coord: number[]) =>
      //   bounds.extend([coord[0], coord[1]])
      // );
      // map?.fitBounds(bounds, { padding: 40 });

      const distance = data?.features?.[0]?.properties?.distance;
      // const time=data?.features?.[0]?.properties.time
      const km = (distance / 1000).toFixed(2);
      setDistanceInformation(km);
    };
    drawRoute();
  }, [geoApiKey, startLocation, endLocation]);

  return (
    <>
      <section className="h-full">
        {/* <p className="text-center py-2">Map view here</p> */}
        <div
          className="p-2 rounded-md border min-h-[50dvh]"
          ref={mapContainer}
        ></div>

        <GeoapifyContext apiKey={geoApiKey}>
          <div className="space-y-3">
            <div className="px-4 py-2 w-full rounded-md">
              <GeoapifyGeocoderAutocomplete
                placeholder="Start Location..."
                // debounceDelay={200}
                type="city"
                lang="en"
                biasByCountryCode={["ke"]}
                filterByCountryCode={["ke"]}
                // value={""}
                placeSelect={onStartPlaceSelect}
                suggestionsChange={onSuggestionChange}
              />
            </div>
            <div className="px-4 py-2 w-full rounded-md">
              <GeoapifyGeocoderAutocomplete
                placeholder="End Location..."
                // debounceDelay={200}
                type="city"
                lang="en"
                biasByCountryCode={["ke"]}
                filterByCountryCode={["ke"]}
                // value={""}
                placeSelect={onEndPlaceSelect}
                suggestionsChange={onSuggestionChange}
              />
            </div>
            {distanceInformation && (
              <p className="bg-amber-100 rounded-lg text-amber-600">
                {distanceInformation}
              </p>
            )}
          </div>
        </GeoapifyContext>
      </section>
    </>
  );
}
