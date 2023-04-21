import React from "react";
import { useContext } from "react";
import { apiContext } from "./App.js";

export const AstroMoon = () => {
  const { APIResults } = useContext(apiContext);

  return (
    <div className="astro-details-wrapper">
      <img
        className="astro-image"
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-night.svg"
        alt="moon"
      />
      <div className="astro-details">
        <p className="astro-subtitle">Moonrise</p>
        <p className="astro-moonrise-time">
          {APIResults?.forecast?.forecastday[0]?.astro.moonrise}
        </p>
      </div>
      <div className="astro-details">
        <p className="astro-subtitle">Moonset</p>
        <p className="astro-moonset-time">
          {APIResults?.forecast?.forecastday[0]?.astro.moonset}
        </p>
      </div>
    </div>
  );
};
