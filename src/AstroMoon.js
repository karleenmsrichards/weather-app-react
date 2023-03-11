export const AstroMoon = ({ moonrise, moonset }) => {
  return (
    <div className="astro-moon-wrapper">
      <img
        className="astro-image"
        src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-night.svg"
        alt="moon"
      />
      <div className="astro-moon-details">
        <div className="astro-moonrise">
          <p className="astro-text">Moonrise</p>
          <p className="astro-moonrise-time">{moonrise}</p>
        </div>
        <div className="astro-moonset">
          <p className="astro-text">Moonset</p>
          <p className="astro-moonset-time">{moonset}</p>
        </div>
      </div>
    </div>
  );
};
