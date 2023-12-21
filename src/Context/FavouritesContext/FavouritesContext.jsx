import axios from "axios";
import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export default function FavouritesContextProvider({ children }) {

function test(){
const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/account/20227834/favorite/movies',
    params: {language: 'en-US', page: '1', sort_by: 'created_at.asc'},
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDdiMjRkZmU5MGNiOTJiYWIyZjQyMDI2ZGRmOGRhNyIsInN1YiI6IjY0YzY0NTU1Y2FkYjZiMDBhYzY2MGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qQtJ_EechHLDtkmDGhavEXqInLrEpa57XMwUVmQLwok'
    }
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
  return (
    <FavouritesContext.Provider
      value={{test}}
    >
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