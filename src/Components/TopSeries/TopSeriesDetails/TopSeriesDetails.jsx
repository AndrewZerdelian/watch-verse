import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TopSeriesDetailsAPIFunc } from "../../../Redux/TopSeriesDetailsSlice";
import Styling from "./TopSeriesDetails.module.css";
import axios from "axios";
import YouTube from "react-youtube";

export default function TopSeriesDetails() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";

  const { APIDATA, isLoading } = useSelector((selector) => selector.TSDetails);

  const Dispatch = useDispatch();

  console.log(APIDATA);

  let Params = useParams();

  useEffect(() => {
    Dispatch(TopSeriesDetailsAPIFunc(Params.ID));
  }, []);

  ////////////////////////Series Trailers////////////////////
  const [TVSeriesTrailer, SetTVSeriesTrailer] = useState(false);
  const [videoId, setVideoId] = useState("");
  const APIKEY = process.env.REACT_APP_API_KEY;
  async function SeriesTrailer() {
    SetTVSeriesTrailer(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${Params.ID}/videos?${APIKEY}&language=en-US`
      );
      setVideoId(response.data.results[0].key);

      
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
              <h1 className="text-danger fw-bolder">{APIDATA.name}</h1>
              <p className="h4">{APIDATA.tagline}</p>
            </div>
            <div className="col-6 pt-5">
              <div className="h5 pb-5">
                Plot summary:<br></br>
                <div className="pt-3">{APIDATA.overview}</div>
              </div>
              <div className="h5">
                IMDB {APIDATA.vote_average.toFixed(1)}
                <i className="fa-sharp fa-solid fa-star text-danger"></i> / 10
              </div>
              <div className="h5">Seasons: {APIDATA.number_of_seasons}</div>
              <div className="h5">Episodes: {APIDATA.number_of_episodes}</div>
              <div className="h5">
                Episode Duration: {APIDATA.episode_run_time} M
              </div>
              <div className="h5">Release Date: {APIDATA.first_air_date}</div>
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
                <button className="btn btn-danger me-5">
                  add to Favourites
                </button>
                <button
                  onClick={SeriesTrailer}
                  className="btn btn-danger me-5 "
                >
                  Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {TVSeriesTrailer ? (
        <div className="container vh-75">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
