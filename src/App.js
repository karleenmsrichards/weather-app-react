import "./App.css";
import { useEffect, useState, React, createContext } from "react";
import { CurrentTemperature } from "./CurrentTemperature";
import { CurrentLocation } from "./CurrentLocation";
import { CurrentStats } from "./CurrentStats";
import { LoadingPage } from "./LoadingPage";
import { Location } from "./Location";
import { WeatherForecast } from "./WeatherForecast";
import { Astro } from "./Astro";
import { Footer } from "./Footer";

export let apiContext = createContext(null);

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
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
          `https://api.weatherapi.com/v1/forecast.json?key=%20${apiKey}&q=${lat},${long}&days=6&aqi=no&alerts=no`
        )
          .then((response) => {
            if (!response.ok) {
              throw Error("Error");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setAPIResults(data);
            setLoading(false);
          })
          .catch((err) => err);
      });
    }
  }, [apiKey]);

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
        <apiContext.Provider value={{ APIResults, apiKey }}>
          <CurrentTemperature />
          <div className="current-weather-content-wrapper">
            <CurrentLocation date={formattedDate} />
            <CurrentStats />
          </div>
          <Astro />
          <WeatherForecast />
          <Location />
          <Footer />
        </apiContext.Provider>
      </div>
    </div>
  );
}

export default App;
