import React, { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Map = () => {
  const [map, setMap] = useState(null);
  const { data, error } = useSWR('/api/staticdata', fetcher);
  console.log(data);
  useEffect(() => {
    if (!map && !error) {
      const googleMapScript = document.createElement('script');
      googleMapScript.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAxRAX4AgykGyHa7esDBUakrQXkgpvrS0Y';
      window.document.body.appendChild(googleMapScript);

      googleMapScript.addEventListener('load', () => {
        const googleMap = new window.google.maps.Map(
          document.getElementById('map'),
          {
            zoom: 15,
            center: { lat: 21.0193444, lng: -89.6173575 },
          }
        );

        setMap(googleMap);
      });
    }

    if (map && data && Array.isArray(data)) {
      data.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: {
            latitude: location.latitude,
            longitude: location.longitude,
          },
          map: map,
        });
      });
    }
  }, [map, data, error]);
  console.log(data);
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div id="map" style={{ width: '100%', height: '100%' }} />
      <div></div>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Map;
