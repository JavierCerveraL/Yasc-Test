import React, { useEffect, useState } from 'react';

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
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
  }, [map]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div id="map" style={{ width: '100%', height: '100%' }}>
        <div className=" z-50"></div>
      </div>
    </div>
  );
};

export default Map;
