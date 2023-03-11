import locationIcon from "./location-icon.png";

export const SecondaryComponentA = ({ placeName, date, country, region }) => {
  return (
    <div className="secondary-a-content">
      <p className="secondary-a-place-name">
        <img
          className="secondary-a-location-icon"
          src={locationIcon}
          alt="location icon"
        />{" "}
        {placeName}
      </p>
      <p className="secondary-a-region">{region}</p>
      <p className="secondary-a-region">{country}</p>
      <hr className="secondary-a-hline"></hr>
      <p className="secondary-a-date">{date}</p>
    </div>
  );
};
