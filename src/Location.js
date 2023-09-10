import { useState } from "react";
import { LocationInfo } from "./LocationInfo";
import { LocationFinder } from "./LocationFinder";
import { useContext } from "react";
import { apiContext } from "./App.js";

export const Location = () => {
  const { apiKey } = useContext(apiContext);
  const [locations, setLocations] = useState([
    "port-of-spain",
    "tokyo",
    "washington",
  ]);

  const addLocation = (location) => {
    setLocations([...locations, location]);
  };

  function handleRemoveLocation(location) {
    setLocations(locations.filter((item) => location !== item));
  }

  return (
    <div className="location-finder-wrapper">
      <LocationFinder addLocation={addLocation} />
      {locations.map((location) => (
        <div>
          <LocationInfo
            handleRemoveLocation={handleRemoveLocation}
            location={location}
            key={location}
            url={`https://api.weatherapi.com/v1/forecast.json?key=%20
            ${apiKey}&q=${location}&days=6&aqi=no&alerts=no`}
          />
        </div>
      ))}
    </div>
  );
};
