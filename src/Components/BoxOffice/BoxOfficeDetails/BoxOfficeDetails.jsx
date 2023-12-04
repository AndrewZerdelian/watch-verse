import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxOfficeDetailsAPIFUNC } from "../../../Redux/BoxOfficeDetailsSlice";
import { useParams } from "react-router-dom";
import Styling from "./BoxOfficeDetails.module.css";

export default function BoxOfficeDetails() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";

  const { APIDATA, isLoading } = useSelector((selector) => selector.BODetails);

  const Dispatch = useDispatch();

  console.log(APIDATA);

  let Params = useParams();

  useEffect(() => {
    Dispatch(BoxOfficeDetailsAPIFUNC(Params.ID));
  }, []);
  return (
    <div className={`${Styling.main} text-white`}>
      {isLoading ? (
        <div className="d-flex justify-content-center ">
          <div class="spinner-border text-danger " role="status">
            <span class="visually-hidden ">Loading...</span>
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
                  <div className="badge bg-dark mx-1 px-2 ">{TAGS.name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * return (
    <div className={`${Styling.main} text-white`}>
      {isLoading ? (
        <div className="d-flex justify-content-center ">
          <div class="spinner-border text-danger " role="status">
            <span class="visually-hidden ">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="vh-100 ">
          <img
            className={`${Styling.Background}`}
            src={ImagesBasicPath + APIDATA.backdrop_path}
            alt={APIDATA.title}
          />
          <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="">
              <img
                src={ImagesBasicPath + APIDATA.poster_path}
                className="w-50"
                alt={APIDATA.title}
              ></img>
              <h1 className="text-danger">{APIDATA.title}</h1>
              <p>{APIDATA.tagline}</p>
            </div>

            <div>
              
              <div>Release Date:{APIDATA.release_date}</div>
              <div>status{APIDATA.status}</div>
              <div>IMDG{APIDATA.vote_average}</div>
              <div>Plot summary:{APIDATA.overview}</div>
              <div>
                Genre:
                {APIDATA.genres.map((TAGS) => (
                  <div className="">{TAGS.name}</div>
                ))}
              </div>
              <div>Duration:{APIDATA.runtime}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


 */
/**
 * SECOND OPTION 
 * 
 * import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxOfficeDetailsAPIFUNC } from "../../../Redux/BoxOfficeDetailsSlice";
import { useParams } from "react-router-dom";
import Styling from "./BoxOfficeDetails.module.css";

export default function BoxOfficeDetails() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";

  const { APIDATA, isLoading } = useSelector((selector) => selector.BODetails);

  const Dispatch = useDispatch();

  console.log(APIDATA);

  let Params = useParams();

  useEffect(() => {
    Dispatch(BoxOfficeDetailsAPIFUNC(Params.ID));
  }, []);

  return (
    <div className={`${Styling.main} vh-100 `}>
      {isLoading ? (
        <div className="d-flex justify-content-center ">
          <div class="spinner-border text-danger " role="status">
            <span class="visually-hidden ">Loading...</span>
          </div>
        </div>
      ) : (
        <div className=" container d-flex justify-content-center align-items-center">
          <div className="card bg-dark border-0">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={ImagesBasicPath + APIDATA.poster_path}
                  className="img-fluid rounded-start"
                  alt="POSTER"
                ></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title text-danger">{APIDATA.title}</h1>
                  <p className="card-text">{APIDATA.tagline}</p>
                  <p className="card-text">
                    Release Date: {APIDATA.release_date}
                  </p>
                  <p className="card-text">Status: {APIDATA.status}</p>
                  <p className="card-text">IMDb: {APIDATA.vote_average}</p>
                  <p className="card-text">Plot summary: {APIDATA.overview}</p>
                  <p className="card-text">
                    Genre:
                    {APIDATA.genres.map((TAGS) => (
                      <span className="badge bg-secondary mx-1">
                        {TAGS.name}
                      </span>
                    ))}
                  </p>
                  <p className="card-text">Duration: {APIDATA.runtime} minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 */
//{APIDATA.genres.name}

// {APIDATA.map((Details)=> <div></div>)}  container-fluid

//text-white vh-100 d-flex justify-content-center align-items-center container-fluid
