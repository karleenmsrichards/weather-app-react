import { useEffect, useState } from "react";
import { PrimaryComponent } from "./PrimaryComponent";
import { SecondaryComponentA } from "./SecondaryComponentA";
import { SecondaryComponentB } from "./SecondaryComponentB";
import { WeatherDays } from "./WeatherDays";
import { AstroSun } from "./AstroSun.js";
import { AstroMoon } from "./AstroMoon.js";

export const WeatherComponent = () => {
  const [tempCelcius, setTempCelcius] = useState(70);
  const [isDay, setIsDay] = useState(null);
  //   const [tempFar, setTempFar] = useState(120);
  const [weatherDescription, setWeatherDescription] = useState("");
  const [weatherCode, setWeatherCode] = useState(0);
  const [placeName, setPlaceName] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [date, setDate] = useState(null);
  const [chanceOfRain, setChanceOfRain] = useState("");
  const [humidity, setHumidity] = useState("");
  const [uv, setUv] = useState("");
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [moonrise, SetMoonrise] = useState(null);
  const [moonset, SetMoonset] = useState(null);
  ///Current
  const [realFeelC, setRealFeelC] = useState(0);
  //   const [realFeelF, setRealFeelF] = useState(0);

  const [day1Date, setDay1Date] = useState("");
  const [day2Date, setDay2Date] = useState("");
  const [day3Date, setDay3Date] = useState("");

  const [avgTempCDay1, setAvgTempCDay1] = useState(null);
  const [avgTempCDay2, setAvgTempCDay2] = useState(null);
  const [avgTempCDay3, setAvgTempCDay3] = useState(null);

  const [day1Icon, setDay1Icon] = useState(null);
  const [day2Icon, setDay2Icon] = useState(null);
  const [day3Icon, setDay3Icon] = useState(null);

  //   const [timestamp, setTimestamp] = null;
  //   const [day1, setDay1] = useState("");
  //   const [day1Icon, setDay1Icon] = useState(null);
  //   const [temp1, setTemp1] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;

        fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=%204c0e921f27e842289ef203706230803&q=${lat},${long}&days=4&aqi=no&alerts=no`
        )
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((data) => {
            const tempCelcius = data?.current?.temp_c;
            setTempCelcius(tempCelcius);

            // const tempFar = data?.current?.temp_f;
            // setTempFar(tempFar);

            const weatherDescription = data?.current?.condition?.text;
            setWeatherDescription(weatherDescription);

            const weatherCode = data?.current?.condition?.code;
            setWeatherCode(weatherCode);

            const chanceOfRain =
              data?.forecast?.forecastday[0]?.day?.daily_chance_of_rain;

            setChanceOfRain(chanceOfRain);

            const humidity = data?.current?.humidity;
            setHumidity(humidity);

            const uv = data?.current?.uv;
            setUv(uv.toFixed(2));

            const date = data?.location?.localtime;
            setDate(date);

            const placeName = data?.location?.name;
            setPlaceName(placeName);

            const country = data?.location?.country;
            setCountry(country);

            const region = data?.location?.region;
            setRegion(region);

            const isDay = data?.current?.is_day;
            setIsDay(isDay);

            /////Current Feels like.....

            const realfeelC = data?.current?.feelslike_c;
            setRealFeelC(realfeelC);

            // const realfeelF = data?.current?.feelslike_f;
            // setRealFeelF(realfeelF);

            const day1Date = data?.forecast?.forecastday[1]?.date;
            setDay1Date(day1Date);
            console.log(day1Date);

            const day2Date = data?.forecast?.forecastday[2]?.date;
            setDay2Date(day2Date);

            const day3Date = data?.forecast?.forecastday[3]?.date;
            setDay3Date(day3Date);

            const avgTempCDay1 = data?.forecast?.forecastday[1]?.day.avgtemp_c;
            setAvgTempCDay1(avgTempCDay1);

            const avgTempCDay2 = data?.forecast?.forecastday[2]?.day.avgtemp_c;
            setAvgTempCDay2(avgTempCDay2);

            const avgTempCDay3 = data?.forecast?.forecastday[3]?.day.avgtemp_c;
            setAvgTempCDay3(avgTempCDay3);

            const day1Icon = data?.forecast?.forecastday[1]?.day.condition.code;
            setDay1Icon(day1Icon);

            const day2Icon = data?.forecast?.forecastday[2]?.day.condition.code;
            setDay2Icon(day2Icon);
            console.log(day2Icon);

            const day3Icon = data?.forecast?.forecastday[3]?.day.condition.code;
            setDay3Icon(day3Icon);

            const sunrise = data?.forecast?.forecastday[0]?.astro.sunrise;
            setSunrise(sunrise);

            const sunset = data?.forecast?.forecastday[0]?.astro.sunset;
            setSunset(sunset);

            const moonrise = data?.forecast?.forecastday[0]?.astro.moonrise;
            SetMoonrise(moonrise);

            const moonset = data?.forecast?.forecastday[0]?.astro.moonset;
            SetMoonset(moonset);
          })
          .catch((err) => err);
      });
    }
  }, []);

  return (
    <div
      className={isDay === 0 ? "body-night-background" : "body-day-background"}
    >
      <div className={isDay === 0 ? "night-background" : "day-background"}>
        <PrimaryComponent
          weatherDescription={weatherDescription}
          tempCelcius={tempCelcius}
          realFeelC={realFeelC}
          // tempFar={tempFar}
          weatherCode={weatherCode}
          isDay={isDay}
        />
        <div className="secondary-weather-content-wrapper">
          <SecondaryComponentA
            placeName={placeName}
            country={country}
            region={region}
            date={date}
          />
          <SecondaryComponentB
            uv={uv}
            chanceOfRain={chanceOfRain}
            humidity={humidity}
          />
        </div>
        <div className="astro-wrapper">
          <AstroSun sunrise={sunrise} sunset={sunset} />
          <AstroMoon moonrise={moonrise} moonset={moonset} />
        </div>
        <WeatherDays
          day1Date={day1Date}
          day2Date={day2Date}
          day3Date={day3Date}
          avgTempCDay1={avgTempCDay1}
          avgTempCDay2={avgTempCDay2}
          avgTempCDay3={avgTempCDay3}
          day1Icon={day1Icon}
          day2Icon={day2Icon}
          day3Icon={day3Icon}
        />
      </div>
    </div>
  );
};
