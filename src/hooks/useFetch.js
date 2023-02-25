import { useEffect, useState,React} from "react";
const useFetch = (url) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          throw new error(`Received status code ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        setData(res.conversion_rates);
      })
      .catch((error) => {
        console.log("error is: ", error);
      });
  }, [url]);
  return [data];
};
export default useFetch;
