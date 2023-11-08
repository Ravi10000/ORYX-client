import { GoogleMap as GoogleMapComponent, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const GoogleMap = () => {
    console.log(import.meta.env.VITE_GOOGLE_API_KEY);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMapComponent
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        />
      )}
    </div>
  );
};

export default GoogleMap;