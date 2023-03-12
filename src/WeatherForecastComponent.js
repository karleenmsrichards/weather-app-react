import React from "react";
import { WeatherForecast } from "./WeatherForecast";

export const WeatherForecastComponent = () => {
  return (
    <div className="weather-days-content">
      <h2>5-Day Weather Forecast</h2>
      <WeatherForecast day="1" />
      <WeatherForecast day="2" />
      <WeatherForecast day="3" />
      <WeatherForecast day="4" />
      <WeatherForecast day="5" />
    </div>
  );
};
