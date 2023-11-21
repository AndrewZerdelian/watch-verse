import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const TVDiscuvery = createContext();
const TVDiscuveryAPI =
  "https://api.themoviedb.org/3/discover/tv?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";

export default function TVDiscuveryContextProvider({ children }) {
  const [TVMapping, setTVMapping] = useState([]);

  async function TVDiscuveryGETAPI() {
    try {
      const response = await axios.get(TVDiscuveryAPI);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TVDiscuvery.Provider
      value={{ TVDiscuveryGETAPI, TVMapping, setTVMapping, ImagesBasicPath }}
    >
      {children}
    </TVDiscuvery.Provider>
  );
}
