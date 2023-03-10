import { useEffect, useState } from "react";
import { PrimaryComponent } from "./PrimaryComponent";
import { SecondaryComponentA } from "./SecondaryComponentA";
import { SecondaryComponentB } from "./SecondaryComponentB";

export const WeatherComponent = () => {
  const [temp, setTemp] = useState(70);
  const [weatherDescription, setWeatherDescription] = useState("");
  const [weatherCode, setWeatherCode] = useState(0);
  const [placeName, setPlaceName] = useState("");
  const [date, setDate] = useState(null);
  const [chanceOfRain, setChanceOfRain] = useState("");
  const [humidity, setHumidity] = useState("");
  const [uv, setUv] = useState("");
  const [TimeArr, setTimeArr] = useState([]);

  //   const [timestamp, setTimestamp] = null;
  //   const [day1, setDay1] = useState("");
  //   const [day1Icon, setDay1Icon] = useState(null);
  //   const [temp1, setTemp1] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        const timestamp = position?.timestamp;
        // console.log(moment(localTime * 10));
        // let localTime = new Date(timestamp).toLocaleTimeString("default", {
        //   weekday: "long",
        //   month: "long",
        //   year: "numeric",
        // });
        let localTime = new Date(timestamp).toLocaleTimeString();
        setTimeArr(localTime.split(":"));

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
            const temp = data?.current?.temp_c;
            setTemp(temp);

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
          })
          .catch((err) => err);
      });
    }
  }, []);

  return (
    <div className={TimeArr[0] > 18 ? "night-background" : "day-background"}>
      <PrimaryComponent
        weatherDescription={weatherDescription}
        temp={temp}
        weatherCode={weatherCode}
        TimeArr={TimeArr}
      />

      <div className="secondary-weather-content-wrapper">
        <SecondaryComponentA placeName={placeName} date={date} />
        <SecondaryComponentB
          uv={uv}
          chanceOfRain={chanceOfRain}
          humidity={humidity}
        />
      </div>
    </div>
  );
};
