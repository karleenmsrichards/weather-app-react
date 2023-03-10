export const SecondaryComponentA = ({ placeName, date }) => {
  return (
    <div className="secondary-a-content">
      <p className="secondary-a-place-name">{placeName}</p>
      <hr className="secondary-a-hline"></hr>
      <p className="secondary-a-date">{date}</p>
    </div>
  );
};
