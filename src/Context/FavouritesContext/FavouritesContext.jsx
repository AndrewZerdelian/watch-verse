import axios from "axios";
import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export default function FavouritesContextProvider({ children }) {
  ////////////////////will be using it in redux instead////////////////////
  async function FavouritesMovies() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/account/{account_id}/favorite/movies?account_id=20227834&session_id=f97969f60b8f206538c79af51ca0dfd414cda374&api_key=2d7b24dfe90cb92bab2f42026ddf8da7`
    );
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
        `https://api.themoviedb.org/3/account/20227834/favorite/movies?${APIKEY}language=en-US&page=1&sort_by=created_at.asc`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  } */

//{ GetFavouritesContext, Favourites, setFavourites }
