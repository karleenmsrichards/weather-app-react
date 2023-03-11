import WeatherConditions from "./WeatherCondition.json";

export const WeatherDays = ({
  day1Date,
  day2Date,
  day3Date,
  day4Date,
  day5Date,
  avgTempCDay1,
  avgTempCDay2,
  avgTempCDay3,
  avgTempCDay4,
  avgTempCDay5,
  day1Icon,
  day2Icon,
  day3Icon,
  day4Icon,
  day5Icon,
}) => {
  let image1 = WeatherConditions.filter((item) => item.code === day1Icon);
  let image2 = WeatherConditions.filter((item) => item.code === day2Icon);
  let image3 = WeatherConditions.filter((item) => item.code === day3Icon);
  let image4 = WeatherConditions.filter((item) => item.code === day4Icon);
  let image5 = WeatherConditions.filter((item) => item.code === day5Icon);

  return (
    <div className="weather-days-content">
      <h2>7Day Weather Forecast</h2>
      <div className="weather-days-wrapper weather-days-border-bottom">
        <p className="weather-days-day1-date">{day1Date}</p>
        <img className="weather-days-icon" src={image1[0]?.imageDay} alt="" />
        <p className="weather-days-temp">{avgTempCDay1}°</p>
      </div>
      <div className="weather-days-wrapper weather-days-border-bottom">
        <p className="weather-days-day">{day2Date}</p>
        <img className="weather-days-icon" src={image2[0]?.imageDay} alt="" />
        <p className="weather-days-temp">{avgTempCDay2}°</p>
      </div>
      <div className="weather-days-wrapper weather-days-border-bottom">
        <p className="weather-days-day">{day3Date}</p>
        <img className="weather-days-icon" src={image3[0]?.imageDay} alt="" />
        <p className="weather-days-temp">{avgTempCDay3}°</p>
      </div>
      <div className="weather-days-wrapper weather-days-border-bottom">
        <p className="weather-days-day">{day4Date}</p>
        <img className="weather-days-icon" src={image4[0]?.imageDay} alt="" />
        <p className="weather-days-temp">{avgTempCDay4}°</p>
      </div>
      <div className="weather-days-wrapper">
        <p className="weather-days-day">{day5Date}</p>
        <img className="weather-days-icon" src={image5[0]?.imageDay} alt="" />
        <p className="weather-days-temp">{avgTempCDay5}°</p>
      </div>
    </div>
  );
};
