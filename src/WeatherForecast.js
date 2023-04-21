import React from "react";
import { WeatherForecastDay } from "./WeatherForecastDay";

export const WeatherForecast = () => {
  return (
    <div className="weather-forecast-content">
      <p className="weather-forecast-title">5-Day Weather Forecast</p>
      <WeatherForecastDay day="1" />
      <WeatherForecastDay day="2" />
      <WeatherForecastDay day="3" />
      <WeatherForecastDay day="4" />
      <WeatherForecastDay day="5" />
    </div>
  );
};
