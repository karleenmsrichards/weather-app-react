import React from "react";
import { useContext } from "react";
import { apiContext } from "./App.js";

export const AstroSun = () => {
  const { APIResults } = useContext(apiContext);

  return (
    <div className="astro-details-wrapper astro-details-wrapper-border">
      <img
        className="astro-image"
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg"
        alt="sun"
      />
      <div className="astro-details">
        <p className="astro-subtitle">Sunrise</p>
        <p className="astro-sunrise-time">
          {APIResults?.forecast?.forecastday[0]?.astro.sunrise}
        </p>
      </div>
      <div className="astro-details">
        <p className="astro-subtitle">Sunset</p>
        <p className="astro-sunset-time">
          {APIResults?.forecast?.forecastday[0]?.astro.sunset}
        </p>
      </div>
    </div>
  );
};
