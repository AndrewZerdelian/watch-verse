import axios from "axios";
import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export default function FavouritesContextProvider({ children }) {
  ////////////////////will be using it in redux instead for learning purposes////////////////////
  async function FavouritesMovies() {
    const response = await axios.get();
    console.log(response);
    return response;
  }
  return (
    <FavouritesContext.Provider value={{ FavouritesMovies }}>
      {children}
    </FavouritesContext.Provider>
  );
}

/**  const [Favourites, setFavourites] = useState([]);
  const APIKEY = process.env.REACT_APP_API_KEY;
  async function GetFavouritesContext() {
    try {
      const response = await axios.get(
        
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  } */

//{ GetFavouritesContext, Favourites, setFavourites }
