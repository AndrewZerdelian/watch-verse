import axios from "axios";
import React, { createContext } from "react";
export const SimilerMoviesCont = createContext();

export default function SimilerMoviesContext({ children }) {
  const APIKEY = process.env.REACT_APP_API_KEY;
  //&page=${page}
  async function GETSimilerMoviesAPI(Movie_ID, page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${Movie_ID}/similar?${APIKEY}&page=${page}`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SimilerMoviesCont.Provider value={{ GETSimilerMoviesAPI }}>
      {children}
    </SimilerMoviesCont.Provider>
  );
}
