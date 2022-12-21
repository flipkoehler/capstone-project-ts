import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error(error);
      }
    }
    startFetching();
  }, [url]);
  return movieData;
}
