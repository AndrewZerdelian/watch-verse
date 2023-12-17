import axios from "axios";
import React, { createContext, useState } from "react";

export const MovieDiscuveryCont = createContext();
export default function MovieDiscuveryContext({ children }) {
  const APIKEY = process.env.REACT_APP_API_KEY;
  const DiscoverMoviesAPI =
    `https://api.themoviedb.org/3/discover/movie?${APIKEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

  const [MappingDiscovery, setMappingDiscovery] = useState([]);

  async function MovieDiscuveryCarouselGetAPI() {
    try {
      const { data } = await axios.get(DiscoverMoviesAPI);

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MovieDiscuveryCont.Provider
      value={{
        MovieDiscuveryCarouselGetAPI,
        MappingDiscovery,
        setMappingDiscovery,
      }}
    >
      {children}
    </MovieDiscuveryCont.Provider>
  );
}
