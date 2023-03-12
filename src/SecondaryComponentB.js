import React from "react";
import { useContext } from "react";
import { apiContext } from "./WeatherComponent";

export const SecondaryComponentB = () => {
  const { APIResults } = useContext(apiContext);
  return (
    <div className="secondary-b-content">
      <div className="secondary-b-chance-of-rain-wrapper">
        <p className="bold-text">ODDS OF RAIN</p>
        <p className="secondary-b-chance-of-rain">
          {APIResults?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%
        </p>
      </div>

      <div className="secondary-b-humidity-wrapper">
        <p className="bold-text">HUMIDITY</p>
        <p className="secondary-b-humidity">{APIResults?.current?.humidity}%</p>
      </div>

      <div className="secondary-b-uv-wrapper">
        <p className="bold-text">UV INDEX</p>
        <p>{APIResults?.current?.uv.toFixed(2)}</p>
      </div>
    </div>
  );
};
