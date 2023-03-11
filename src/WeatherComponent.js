import { useEffect, useState } from "react";
import { PrimaryComponent } from "./PrimaryComponent";
import { SecondaryComponentA } from "./SecondaryComponentA";
import { SecondaryComponentB } from "./SecondaryComponentB";
import { WeatherDays } from "./WeatherDays";
import { AstroSun } from "./AstroSun.js";
import { AstroMoon } from "./AstroMoon.js";

export const WeatherComponent = () => {
  const [APIResults, setAPIResults] = useState(null);
  // const tempFar = data?.current?.temp_f;
  // setTempFar(tempFar);

  // const realfeelF = data?.current?.feelslike_f;
  // setRealFeelF(realfeelF);

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
        };

        const formattedDate = new Intl.DateTimeFormat("en-us", options).format(
          new Date(timestamp)
        );

        console.log(formattedDate);
        // console.log(options);

        fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=%204c0e921f27e842289ef203706230803&q=${lat},${long}&days=6&aqi=no&alerts=no`
        )
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((data) => {
            setAPIResults(data);
          })
          .catch((err) => err);
      });
    }
  }, []);
  return (
    <div
      className={
        APIResults?.current?.is_day === 0
          ? "body-night-background"
          : "body-day-background"
      }
    >
      <div
        className={
          APIResults?.current?.is_dayy === 0
            ? "night-background"
            : "day-background"
        }
      >
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
            date={APIResults?.location?.localtime}
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
        <WeatherDays
          day1Date={APIResults?.forecast?.forecastday[1]?.date}
          day2Date={APIResults?.forecast?.forecastday[2]?.date}
          day3Date={APIResults?.forecast?.forecastday[3]?.date}
          day4Date={APIResults?.forecast?.forecastday[4]?.date}
          day5Date={APIResults?.forecast?.forecastday[5]?.date}
          avgTempCDay1={APIResults?.forecast?.forecastday[1]?.day.avgtemp_c}
          avgTempCDay2={APIResults?.forecast?.forecastday[2]?.day.avgtemp_c}
          avgTempCDay3={APIResults?.forecast?.forecastday[3]?.day.avgtemp_c}
          avgTempCDay4={APIResults?.forecast?.forecastday[4]?.day.avgtemp_c}
          avgTempCDay5={APIResults?.forecast?.forecastday[5]?.day.avgtemp_c}
          day1Icon={APIResults?.forecast?.forecastday[1]?.day.condition.code}
          day2Icon={APIResults?.forecast?.forecastday[2]?.day.condition.code}
          day3Icon={APIResults?.forecast?.forecastday[3]?.day.condition.code}
          day4Icon={APIResults?.forecast?.forecastday[4]?.day.condition.code}
          day5Icon={APIResults?.forecast?.forecastday[5]?.day.condition.code}
        />
      </div>
    </div>
  );
};
