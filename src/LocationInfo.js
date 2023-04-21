import { useState, useEffect } from "react";
import WeatherConditions from "./WeatherCondition.json";

export const LocationInfo = ({ url, location, handleRemoveLocation }) => {
  const [data, setData] = useState(null);

  function findIcon(code) {
    const icon = WeatherConditions.find((item) => item.code === code);
    return icon?.imageDay;
  }

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => error);
  }, [url]);

  return (
    <div
      className={`location-component-wrapper ${
        data?.current?.isDay === 0
          ? "location-component-day"
          : "location-component-night"
      }`}
    >
      <div className="location-time">
        <div>
          <h3>{data?.location?.region}</h3>
          <p>{data?.location?.country}</p>
          <p>{data?.location?.localtime}</p>
        </div>
      </div>
      <div className="location-current-icon">
        <img
          className="weather-days-icon"
          alt="weather-icon"
          src={findIcon(data?.forecast?.forecastday[0]?.day.condition.code)}
        ></img>
      </div>
      <div className="location-current-info">
        <div className="location-current-text">
          <p className="location-temp">{data?.current?.temp_c}°C</p>
          <p className="location-condition">{data?.current?.condition?.text}</p>
        </div>

        <p className="location-current-temp-high">
          <span className="location-span">High: </span>
          {data?.forecast?.forecastday[0]?.day?.maxtemp_c}°C
        </p>
        <p className="location-current-temp-low">
          <span className="location-span">Low: </span>
          {data?.forecast?.forecastday[0]?.day?.mintemp_c}°C
        </p>
      </div>
      <div className="location-finder-remove-btn-wrapper">
        <button
          className="location-finder-remove-btn"
          onClick={() => {
            console.log(location);
            handleRemoveLocation(location);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
