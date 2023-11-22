import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const TVDiscuveryCont = createContext();
const TVDiscuveryAPI =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";


export default function TVDiscuveryContextProvider({ children }) {
  const [TVMapping, setTVMapping] = useState([]);

  async function TVDiscuveryGETAPI() {
    try {
      const {data} = await axios.get(TVDiscuveryAPI);
      //console.log(data.results);
      return data.results;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TVDiscuveryCont.Provider
      value={{ TVDiscuveryGETAPI, TVMapping, setTVMapping, }}
    >
      {children}
    </TVDiscuveryCont.Provider>
  );
}
