// useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

// Create a new function useFetch and pass the url prop
function useFetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, [url]); // In the array, pass the url
  return data;
}

export default useFetch;
