import locationIcon from "./location-icon.png";
import React from "react";
import { useContext } from "react";
import { apiContext } from "./App.js";

export const CurrentLocation = ({ date }) => {
  const { APIResults } = useContext(apiContext);
  return (
    <div className="current-location-content">
      <p className="current-location-placeName">
        <img
          className="current-location-icon"
          src={locationIcon}
          alt="location icon"
        />{" "}
        {APIResults?.location?.name}
      </p>
      <p className="current-location-country">
        {APIResults?.location?.country}
      </p>

      <p className="current-location-date">{date}</p>
    </div>
  );
};
