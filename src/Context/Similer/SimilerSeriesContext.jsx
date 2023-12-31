import axios from "axios";
import React, { createContext } from "react";
export const SimilerSeriesCont = createContext();

export default function SimilerSeriesContext({ children }) {
  const APIKEY = process.env.REACT_APP_API_KEY;
  async function GETSimilerSeriesAPI(Series_ID, page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${Series_ID}/similar?${APIKEY}&page=${page}`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SimilerSeriesCont.Provider value={{ GETSimilerSeriesAPI }}>
      {children}
    </SimilerSeriesCont.Provider>
  );
}
