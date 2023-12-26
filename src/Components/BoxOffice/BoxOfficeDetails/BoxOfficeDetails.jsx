import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxOfficeDetailsAPIFUNC } from "../../../Redux/BoxOfficeDetailsSlice";
import { useParams } from "react-router-dom";
import Styling from "./BoxOfficeDetails.module.css";
import YouTube from "react-youtube";
import axios from "axios";
import { AddToFavouritesPostAPI } from "../../../Redux/AddToFavourites";


export default function BoxOfficeDetails() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";

  const { APIDATA, isLoading } = useSelector((selector) => selector.BODetails);

  const Dispatch = useDispatch();

  console.log(APIDATA.id);

  let Params = useParams();

    /////////////////////////ADD MOVIES TO FAVOURITES //////////////////////////
  

    async function AddMovietoFavourties(ID) {
      try {
        const response =  await Dispatch(AddToFavouritesPostAPI(ID))
        console.log(response);
        return response
        
      } catch (error) {
        console.error("Error adding movie to favourites:", error);
      }
    }
//////////////////////////////////////
  useEffect(() => {
    Dispatch(BoxOfficeDetailsAPIFUNC(Params.ID));
  }, []);

  const [videoId, setVideoId] = useState("");
  const [youtubePlayer, setYoutubePlayer] = useState(null); // State to store the YouTube player data
  const APIKEY = process.env.REACT_APP_API_KEY;

  function _onReady(event) {
    setYoutubePlayer(event.target); // Store the YouTube player data
  }

  function closeVideo() {
    if (youtubePlayer) {
      youtubePlayer.stopVideo(); // Stop the video
    }
  }

  async function MovieTrailer() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${Params.ID}/videos?${APIKEY}&language=en-US`
      );

      const trailers = response.data.results.filter(
        (video) => video.type === "Trailer"
      );

      if (trailers.length > 0) {
        setVideoId(trailers[0].key);
      }

      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  
  return (
    <div className={`${Styling.main} text-white`}>
      {isLoading ? (
        <div className="d-flex justify-content-center ">
          <div className="spinner-border text-danger " role="status">
            <span className="visually-hidden ">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="vh-100 ">
          <img
            className={` ${Styling.Background} `}
            src={ImagesBasicPath + APIDATA.backdrop_path}
            alt={APIDATA.title}
          />
          <div className="container-fluid vh-100 row justify-content-center align-items-center">
            <div className="col-3 text-center">
              <img
                src={ImagesBasicPath + APIDATA.poster_path}
                className="w-100  rounded-1 shadow-lg"
                alt={APIDATA.title}
              ></img>
              <h1 className="text-danger fw-bolder">{APIDATA.title}</h1>
              <p className="h4">{APIDATA.tagline}</p>
            </div>
            <div className="col-6 pt-5">
              <div className="h5 pb-5">
                Plot summary:<br></br>
                <div className="pt-3">{APIDATA.overview}</div>
              </div>
              <div className="h5">
                IMDB {APIDATA.vote_average.toFixed(1)} / 10
                <i className="fa-sharp fa-solid fa-star text-danger"></i>
              </div>
              <div className="h5">Duration: {APIDATA.runtime} M</div>
              <div className="h5">Release Date: {APIDATA.release_date}</div>
              <div className="h5">status: {APIDATA.status}</div>
              <div className="h5 d-flex ">
                Genre:
                {APIDATA.genres.map((TAGS) => (
                  <div key={TAGS.id} className="badge bg-dark mx-1 px-2 ">
                    {TAGS.name}
                  </div>
                ))}
              </div>
              <div className={`${Styling.Important}`}>
                <button
                  onClick={ ()=> AddMovietoFavourties(APIDATA.id)}
                  className="btn btn-danger me-5"
                >
                  add to Favourites
                </button>
                <button
                  onClick={MovieTrailer}
                  className="btn btn-danger me-5 "
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="modal fade bg-black"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content bg-black">
            <button
              type="button"
              className="btn btn-dark ms-auto text-danger fw-bolder"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ Color: "red", border: "none" }}
              onClick={closeVideo} // Call closeVideo when the close button is clicked
            >
              X
            </button>

            <div className="modal-body ">
              <div className="container vh-75">
                <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
