import { useRef, useState } from "react";
import { LocationInfo } from "./LocationInfo";

export const LocationFinder = ({ addLocation, setVisible }) => {
  const searchInput = useRef(null);
  const [searchString, setSearchString] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchInput.current);
    setSearchString(searchInput.current.value);
  }

  return (
    <div>
      <h2 className="location-finder-title" htmlFor="">
        Weather
      </h2>
      <form className="location-finder-form" onSubmit={handleSubmit}>
        <div>
          <label className="search-place-label" htmlFor="search-place">
            Select a city
          </label>
          <input
            type="text"
            ref={searchInput}
            id="search-place"
            className="form-control-input"
            placeholder="  enter a place..."
          />
        </div>
        <div className="location-finder-btn-wrapper">
          <button className="location-finder-form-btn">Search</button>
        </div>
      </form>
      <div>
        {searchString && (
          <>
            <button
              className="location-finder-add-btn"
              onClick={() => {
                addLocation(searchString);
                setVisible(true);
              }}
            >
              Add to favourites
            </button>
            <LocationInfo
              url={`https://api.weatherapi.com/v1/forecast.json?key=%204c0e921f27e842289ef203706230803&q=${searchString}&days=6&aqi=no&alerts=no`}
            />
          </>
        )}
      </div>
    </div>
  );
};
