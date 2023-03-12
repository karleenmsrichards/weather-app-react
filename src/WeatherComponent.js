import { useEffect, useState, React, createContext } from "react";
import { PrimaryComponent } from "./PrimaryComponent";
import { SecondaryComponentA } from "./SecondaryComponentA";
import { SecondaryComponentB } from "./SecondaryComponentB";
import { AstroSun } from "./AstroSun.js";
import { AstroMoon } from "./AstroMoon.js";
import { LoadingPage } from "./LoadingPage";
import { WeatherForecastComponent } from "./WeatherForecastComponent";

export let apiContext = createContext(null);

export const WeatherComponent = () => {
  const [APIResults, setAPIResults] = useState(null);

  const [loading, setLoading] = useState(true);
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        let timestamp = new Date(position?.timestamp);

        let options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        };

        const formattedDate = new Intl.DateTimeFormat("en-us", options).format(
          new Date(timestamp)
        );
        setFormattedDate(formattedDate);

        fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=%204c0e921f27e842289ef203706230803&q=${lat},${long}&days=6&aqi=no&alerts=no`
        )
          .then((response) => {
            if (!response.ok) {
              throw Error("Error");
            }
            return response.json();
          })
          .then((data) => {
            setAPIResults(data);
            // console.log(data);
            setLoading(false);
          })
          .catch((err) => err);
      });
    }
  }, []);
  return loading === true ? (
    <LoadingPage />
  ) : (
    <div
      className={
        APIResults?.current?.is_day === 0
          ? "body-night-background"
          : "body-day-background"
      }
    >
      <div
        className={
          APIResults?.current?.is_day === 0
            ? "night-background"
            : "day-background"
        }
      >
        <apiContext.Provider value={{ APIResults }}>
          <PrimaryComponent
            weatherDescription={APIResults?.current?.condition?.text}
            tempCelcius={APIResults?.current?.temp_c}
            realFeelC={APIResults?.current?.feelslike_c}
            weatherCode={APIResults?.current?.condition?.code}
            isDay={APIResults?.current?.is_day}
          />
          <div className="secondary-weather-content-wrapper">
            <SecondaryComponentA
              placeName={APIResults?.location?.name}
              country={APIResults?.location?.country}
              region={APIResults?.location?.region}
              // date={APIResults?.location?.localtime}
              date={formattedDate}
            />
            <SecondaryComponentB
              uv={APIResults?.current?.uv.toFixed(2)}
              chanceOfRain={
                APIResults?.forecast?.forecastday[0]?.day?.daily_chance_of_rain
              }
              humidity={APIResults?.current?.humidity}
            />
          </div>
          <div className="astro-wrapper">
            <AstroSun
              sunrise={APIResults?.forecast?.forecastday[0]?.astro.sunrise}
              sunset={APIResults?.forecast?.forecastday[0]?.astro.sunset}
            />
            <AstroMoon
              moonrise={APIResults?.forecast?.forecastday[0]?.astro.moonrise}
              moonset={APIResults?.forecast?.forecastday[0]?.astro.moonset}
            />
          </div>
          <WeatherForecastComponent />
        </apiContext.Provider>
      </div>
    </div>
  );
};
