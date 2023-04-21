import React from "react";
import { useContext } from "react";
import { apiContext } from "./App.js";
import WeatherConditions from "./WeatherCondition.json";

export const CurrentTemperature = () => {
  const { APIResults } = useContext(apiContext);

  let weatherCondtion = WeatherConditions.filter(
    (item) => item.code === APIResults?.current?.condition?.code
  );
  console.log(APIResults?.current?.condition?.text);
  const [weatherIcon] = weatherCondtion;

  return (
    <div className="current-temperature-content-wrapper">
      <div className="current-temperature-wrapper">
        <h1 className="current-tempCelcius">{APIResults?.current?.temp_c}°</h1>
        <p className="current-feels-like">
          FEELS LIKE {APIResults?.current?.feelslike_c}°
        </p>
        <p className="current-weather-description">
          {APIResults?.current?.condition?.text}
        </p>
      </div>
      <div className="current-weather-icon-wrapper">
        <img
          className="current-weather-icon"
          alt="weather icon"
          src={
            APIResults?.current?.is_day === 0
              ? weatherIcon?.imageNight
              : weatherIcon?.imageDay
          }
        />
      </div>
    </div>
  );
};
