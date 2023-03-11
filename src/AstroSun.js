export const AstroSun = ({ sunrise, sunset }) => {
  return (
    <div className="astro-sun-wrapper">
      <img
        className="astro-image"
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg"
        alt="sun"
      />
      <div className="astro-sun-details">
        <div className="astro-sunrise">
          <p className="astro-text">Sunrise</p>
          <p className="astro-sunrise-time">{sunrise}</p>
        </div>
        <div className="astro-sunset">
          <p className="astro-text">Sunset</p>
          <p className="astro-sunset-time">{sunset}</p>
        </div>
      </div>
    </div>
  );
};
