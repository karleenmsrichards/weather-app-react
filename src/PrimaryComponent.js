import WeatherConditions from "./WeatherCondition.json";

export const PrimaryComponent = ({
  temp,
  weatherDescription,
  weatherCode,
  TimeArr,
}) => {
  let newArr = WeatherConditions.filter((item) => item.code === weatherCode);
  //   console.log(newArr[0]?.imageDay);
  return (
    <div className="primary-weather-content-wrapper">
      <h1 className="primary-temp">{temp}°</h1>
      <p className="primary-weather-description">{weatherDescription}</p>
      <div className="primary-weather-icon-wrapper">
        <img
          className="primary-weather-icon"
          alt="weather icon"
          src={TimeArr > 18 ? newArr[0]?.imageNight : newArr[0]?.imageDay}
        />
      </div>
    </div>
  );
};
