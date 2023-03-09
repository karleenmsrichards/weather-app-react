import { useEffect, useState } from "react";
import weatherIcon from "./clear-day-icon.svg";

export const WeatherComponent = () => {
  const [temp, setTemp] = useState(70);
  const [weatherDescription, setWeatherDescription] = useState("");
  //   const [country, setCountry] = useState("");
  const [placeName, setPlaceName] = useState("");
  //   const [weatherIcon, setWeatherIcon] = useState(null);
  const [date, setDate] = useState("");
  const [chanceOfRain, setChanceOfRain] = useState("");
  const [humidity, setHumidity] = useState("");
  const [uv, setUv] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;

        fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=%204c0e921f27e842289ef203706230803&q=${lat},${long}&days=1&aqi=no&alerts=no`
        )
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            const temp = data.current.temp_c;
            setTemp(temp);

            const weatherDescription = data.current.condition.text;
            setWeatherDescription(weatherDescription);

            // const weatherIcon = data.current.condition.icon;
            // setWeatherIcon(weatherIcon);

            const chanceOfRain =
              data?.forecast?.forecastday[0]?.day?.daily_chance_of_rain;

            setChanceOfRain(chanceOfRain);

            const humidity = data?.current?.humidity;
            setHumidity(humidity);

            const uv = data?.forecast?.forecastday[0]?.day?.uv;
            setUv(uv);

            const date = data.location.localtime;
            setDate(date);

            const placeName = data.location.name;
            setPlaceName(placeName);
          })
          .catch((err) => err);
      });
    }
  }, []);

  return (
    <div className="weather-content-wrapper">
      <div className="primary-weather-content-wrapper">
        <h1 className="primary-temp">{temp}°</h1>
        <p className="primary-weather-description">{weatherDescription}</p>
        <div className="primary-weather-icon-wrapper">
          <img
            className="primary-weather-icon"
            alt="weather icon"
            src={weatherIcon}
          />
        </div>
      </div>
      <div className="secondary-weather-content-wrapper">
        <div className="secondary-content">
          <p className="secondary-place-name">{placeName}</p>
          <hr className="secondary-hline"></hr>
          <p className="secondary-date">{date}</p>
        </div>
        <div className="additional-content">
          <div className="additional-chance-of-rain-wrapper">
            <p>CHANCE OF RAIN</p>
            <p className="additional-chance-of-rain">{chanceOfRain}%</p>
          </div>
          <div>
            <p className="additional-humidity-wrapper">HUMIDITY</p>
            <p className="additional-humidity">{humidity}%</p>
          </div>
          <div className="additional-uv-wrapper">
            <p>UV</p>
            <p>{uv}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
