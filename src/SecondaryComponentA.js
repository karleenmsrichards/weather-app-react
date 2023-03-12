import locationIcon from "./location-icon.png";
import React from "react";
import { useContext } from "react";
import { apiContext } from "./WeatherComponent";

export const SecondaryComponentA = ({ date }) => {
  const { APIResults } = useContext(apiContext);
  return (
    <div className="secondary-a-content">
      <p className="secondary-a-place-name">
        <img
          className="secondary-a-location-icon"
          src={locationIcon}
          alt="location icon"
        />{" "}
        {APIResults?.location?.name}
      </p>
      <p className="secondary-a-region">{APIResults?.location?.region}</p>
      <p className="secondary-a-region">{APIResults?.location?.country}</p>
      <hr className="secondary-a-hline"></hr>
      <p className="secondary-a-date">{date}</p>
    </div>
  );
};
