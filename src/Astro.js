import { AstroSun } from "./AstroSun";
import { AstroMoon } from "./AstroMoon";

export const Astro = () => {
  return (
    <div className="astro-content-wrapper">
      <p className="astro-title">Today's Astro Forecast</p>
      <AstroSun />
      <AstroMoon />
    </div>
  );
};
