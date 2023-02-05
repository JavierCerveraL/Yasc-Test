import React, { useState, useEffect } from 'react';

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
            zoom: 8,
            center: { lat: 37.7749, lng: -122.4194 },
          }
        );

        setMap(googleMap);
      });
    }
  }, [map]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div id="map" style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default Map;
