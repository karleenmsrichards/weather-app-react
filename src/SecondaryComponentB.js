export const SecondaryComponentB = ({ chanceOfRain, humidity, uv }) => {
  return (
    <div className="secondary-b-content">
      <div className="secondary-b-chance-of-rain-wrapper">
        <p className="bold-text">ODDS OF RAIN</p>
        <p className="secondary-b-chance-of-rain">{chanceOfRain}%</p>
      </div>

      <div className="secondary-b-humidity-wrapper">
        <p className="bold-text">HUMIDITY</p>
        <p className="secondary-b-humidity">{humidity}%</p>
      </div>

      <div className="secondary-b-uv-wrapper">
        <p className="bold-text">UV INDEX</p>
        <p>{uv}</p>
      </div>
    </div>
  );
};
