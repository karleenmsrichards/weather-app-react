import { useState } from "react";
// import { LocationComponent } from "./LocationComponent";

export const LocationFinder = () => {
  // const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  function handleSearch(event) {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    // console.log(event.target.value);
    event.preventDefault();
  }

  return (
    <div className="location-finder-wrapper">
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
            onChange={handleSearch}
            id="search-place"
            className="form-control-input"
            placeholder="enter a place"
            value={inputValue}
          />
        </div>
        <div>
          <button className="location-finder-form-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </form>
      {/* <LocationComponent className={"location-component-California"} />
      <LocationComponent className={"location-component-Tokyo"} />
      <LocationComponent className={"location-component-Trinidad"} /> */}
    </div>
  );
};
