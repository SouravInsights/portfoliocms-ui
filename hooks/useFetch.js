import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState({
    id: 1,
    title: "Dummy Title",
    stars: 34,
    category: "Web Application",
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, [url]);
  return data;
}

export default useFetch;
