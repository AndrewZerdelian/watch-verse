import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TopSeriesDetailsAPIFunc } from "../../../Redux/TopSeriesDetailsSlice";
import Styling from "./TopSeriesDetails.module.css";

export default function TopSeriesDetails() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";

  const { APIDATA, isLoading } = useSelector((selector) => selector.TSDetails);

  const Dispatch = useDispatch();

  console.log(APIDATA);

  let Params = useParams();

  useEffect(() => {
    Dispatch(TopSeriesDetailsAPIFunc(Params.ID));
  }, []);
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**import React from 'react'

export default function TopSeriesDetails() {
  return (
    <div>TopSeriesDetails</div>
  )
}
*/

/**
 * <div className="h5">Episode Duration: {APIDATA.episode_run_time} M</div>
              <div className="h5">Episode Duration: {APIDATA.episode2_run_time} M</div>
              <div className="h5">Episode Duration: {APIDATA.episode3_run_time} M</div>
              <div className="h5">Release Date: {APIDATA.first_air_date}</div>
              <div className="h5">Last Episode: {APIDATA.last_episode_to_air}</div>
              <div className="h5">status: {APIDATA.status}</div>
 */
