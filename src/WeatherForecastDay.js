import React from "react";
import { useContext } from "react";
import { apiContext } from "./App.js";
import WeatherConditions from "./WeatherCondition.json";

export const WeatherForecastDay = ({ day }) => {
  const { APIResults } = useContext(apiContext);

  function formatDate(dateToBeFormatted) {
    const date = new Date(dateToBeFormatted).toUTCString();
    let replaceCommas = date.replaceAll(",", " ");
    let slicedDate = replaceCommas.slice(0, 11);
    return slicedDate;
  }

  function findIcon(code) {
    const icon = WeatherConditions.find((item) => item.code === code);
    return icon?.imageDay;
  }

  return (
    <div className="weather-forecast-wrapper weather-days-border-bottom">
      <p className="weather-days-day1-date">
        {formatDate(APIResults?.forecast?.forecastday[day]?.date)}
      </p>
      <img
        className="weather-days-icon"
        src={findIcon(
          APIResults?.forecast?.forecastday[day]?.day.condition.code
        )}
        alt="weather icon"
      />
      <p className="weather-days-temp">
        {APIResults?.forecast?.forecastday[day]?.day.avgtemp_c}°
      </p>
    </div>
  );
};
