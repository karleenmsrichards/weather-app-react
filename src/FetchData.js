import { useState, useEffect } from "react";

export const FetchData = ({ url }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => error);
  }, [url]);

  return data;
};
