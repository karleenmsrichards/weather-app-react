import React from "react";
import { useContext } from "react";
import { apiContext } from "./WeatherComponent";

export const AstroSun = () => {
  const { APIResults } = useContext(apiContext);

  return (
    <div className="astro-sun-wrapper">
      <img
        className="astro-image"
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg"
        alt="sun"
      />
      <div className="astro-sun-details">
        <div className="astro-sunrise">
          <p className="astro-text">Sunrise</p>
          <p className="astro-sunrise-time">
            {APIResults?.forecast?.forecastday[0]?.astro.sunrise}
          </p>
        </div>
        <div className="astro-sunset">
          <p className="astro-text">Sunset</p>
          <p className="astro-sunset-time">
            {APIResults?.forecast?.forecastday[0]?.astro.sunset}
          </p>
        </div>
      </div>
    </div>
  );
};
