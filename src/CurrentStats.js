import React from "react";
import { useContext } from "react";
import { apiContext } from "./App.js";

export const CurrentStats = () => {
  const { APIResults } = useContext(apiContext);
  return (
    <div className="current-stats-content">
      <div className="current-stats-chance-of-rain-wrapper">
        <p className="current-stats-title">RAIN %</p>
        <p className="current-stats-chance-of-rain">
          {APIResults?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%
        </p>
      </div>

      <div className="current-stats-humidity-wrapper">
        <p className="current-stats-title">HUMIDITY</p>
        <p className="current-stats-humidity">
          {APIResults?.current?.humidity}%
        </p>
      </div>

      <div className="current-stats-uv-wrapper">
        <p className="current-stats-title">UV INDEX</p>
        <p>{APIResults?.current?.uv.toFixed(2)}</p>
      </div>
    </div>
  );
};
