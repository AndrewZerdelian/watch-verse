import React, { useContext, useEffect } from "react";
import { FavouritesContext } from "../../Context/FavouritesContext/FavouritesContext";

export default function Favourites() {
  const { GetFavouritesContext,  } = useContext(FavouritesContext);

  async function DiscplayingFavouritesFromContext() {
    const response = await GetFavouritesContext();
    console.log(response);
    return response;
  }

  useEffect(() => {
    DiscplayingFavouritesFromContext();
  }, []);
  return (
    <>
      <h1 className="text-center p-5 text-danger">Favourites List</h1>
    </>
  );
}
