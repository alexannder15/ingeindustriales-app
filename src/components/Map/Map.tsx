"use client";

import { useRef, useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyAdo5S3juLVcIQ-ZaTMQF4hOwvwEL09cCI',
      libraries: ['places'],
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const initialPosition = { lat: 4.574319820677723, lng: -74.243766016885 };

        const mapInstance = new google.maps.Map(mapRef.current, {
          center: initialPosition,
          zoom: 18,
        });

        const markerInstance = new google.maps.Marker({
          position: initialPosition,
          map: mapInstance,
          title: "Default Location",
        });
      }
    }).catch(e => {
      console.error("Error loading Google Maps API:", e);
    });
  }, []);

  return (
    <div>
      <div ref={mapRef} style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
}

export default Map;
