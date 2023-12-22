import React, { useContext, useEffect } from "react";
import { FavouritesContext } from "../../Context/FavouritesContext/FavouritesContext";

export default function Favourites() {
  const { GetFavouritesContext } = useContext(FavouritesContext);

  async function DiscplayingFavouritesFromContext() {
    // const response = await GetFavouritesContext();
    // console.log(response);
    // return response;
  }

  useEffect(() => {
    DiscplayingFavouritesFromContext();
  }, []);
  return (
    <>
      <h1 className="text-center p-5 text-danger">Favourites List</h1>

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade bg-black"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content bg-dark">
            <div class="modal-header"></div>
            <div class="modal-body">...</div>
          </div>
        </div>
      </div>
    </>
  );
}
