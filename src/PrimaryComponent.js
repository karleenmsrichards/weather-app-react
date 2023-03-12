import React from "react";
import { useContext } from "react";
import { apiContext } from "./WeatherComponent";
import WeatherConditions from "./WeatherCondition.json";

export const PrimaryComponent = () => {
  const { APIResults } = useContext(apiContext);

  let weatherCondtion = WeatherConditions.filter(
    (item) => item.code === APIResults?.current?.condition?.code
  );

  const [weatherIcon] = weatherCondtion;

  return (
    <div className="primary-weather-content-wrapper">
      <div className="primary-weather-wrapper">
        <h1 className="primary-tempCelcius">{APIResults?.current?.temp_c}°</h1>
        <p className="real-feel">
          FEELS LIKE {APIResults?.current?.feelslike_c}°
        </p>
        <h2 className="primary-weather-description">
          {APIResults?.current?.condition?.text}
        </h2>
      </div>
      <div className="primary-weather-icon-wrapper">
        <img
          className="primary-weather-icon"
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
