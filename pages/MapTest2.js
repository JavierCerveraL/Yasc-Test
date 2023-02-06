import GoogleMap from '@/components/GoogleMap';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

import data from '/data.json';

// const fetcher = (url) => fetch(url).then((res) => res.json());
console.log(data);
function MapTest2() {
  const [locations, setLocations] = useState([]);
  //   const { data, error } = useSWR('/api/staticdata', fetcher);
  useEffect(() => {
    setLocations(data);
  }, []);
  // ...

  return (
    <div>
      {data &&
        data.map((data) => {
          return (
            <div id="map-container" key={data.id}>
              <GoogleMap>
                {locations.map((location) => (
                  <div
                    key={data.id}
                    position={{
                      lat: location.latitude,
                      lng: location.longitude,
                    }}
                  />
                ))}
              </GoogleMap>
            </div>
          );
        })}
    </div>
  );
}

export default MapTest2;
