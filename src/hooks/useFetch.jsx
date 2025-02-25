import { useState, useEffect } from "react";

export const useFetch = (api, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${api}?language=en-US&page=1&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      };
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
