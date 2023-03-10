import WeatherConditions from "./WeatherCondition.json";

export const SecondaryComponentC = ({
  day1,
  day2,
  day3,

  icon2,
  icon3,
  temp1,
  temp2,
  temp3,
  day1Icon,
}) => {
  let newArr = WeatherConditions.filter((item) => item.code === day1Icon);
  return (
    <div className="secondary-c-content">
      <div className="secondary-c-day1">
        <p className="secondary-day">{day1}</p>
        <img className="secondary-icon" src={newArr[0]?.imageDay} alt="" />
        <p className="secondary-temp">{temp1}</p>
        <hr className="day-hr"></hr>
      </div>
      <div className="secondary-c-day2">
        <p className="secondary-day">{day2}</p>
        <img className="secondary-icon" src={icon2} alt="" />
        <p className="secondary-temp">{temp2}</p>
        <hr className="day-hr"></hr>
      </div>
      <div className="secondary-c-day3">
        <p className="secondary-day">{day3}</p>
        <img className="secondary-icon" src={icon3} alt="" />
        <p className="secondary-temp">{temp3}</p>
        <hr className="day-hr"></hr>
      </div>
    </div>
  );
};
