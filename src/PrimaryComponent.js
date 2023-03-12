import WeatherConditions from "./WeatherCondition.json";

export const PrimaryComponent = ({
  tempCelcius,
  weatherDescription,
  weatherCode,
  isDay,
  realFeelC,
}) => {
  let newArr = WeatherConditions.filter((item) => item.code === weatherCode);

  // console.log(newArr[0].imageNight);
  return (
    <div className="primary-weather-content-wrapper">
      <h1 className="primary-tempCelcius">{tempCelcius}°</h1>
      <p className="real-feel">FEELS LIKE {realFeelC}°</p>
      <h2 className="primary-weather-description">{weatherDescription}</h2>
      <div className="primary-weather-icon-wrapper">
        <img
          className="primary-weather-icon"
          alt="weather icon"
          src={isDay === 0 ? newArr[0]?.imageNight : newArr[0]?.imageDay}
        />
      </div>
    </div>
  );
};
