import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FavouritesAPI } from "../../Redux/FavouritesSlice";
import { Link } from "react-router-dom";
import Style from "./Favourites.module.css";
export default function Favourites() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const Dispatch = useDispatch();
  const { APIDATA } = useSelector((store) => store.Favourits);
  console.log(APIDATA);

  useEffect(() => {
    Dispatch(FavouritesAPI());
  }, []);
  return (
    <div>
      <h1 className="text-danger text-center p-5 ">Favourites</h1>
      <div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-danger">
            <h3 className="text-danger text-center">Movies</h3>
          </button>
        </div>

        <div className="container-fluid">
          <div className="row">
            {APIDATA?.results?.map((movie) => (
              <div
                key={movie.id}
                className={`col-3 text-center  pos ${Style.Scalling}`}
              >
                <Link
                  className={`${Style.Link}`}
                  to={`/BoxOfficeDetails/${movie.id}`}
                >
                  <img
                    src={ImagesBasicPath + movie.poster_path}
                    alt="Movies"
                    className="w-75"
                  />
                  <h3 className="text-white">
                    {movie.title.split(" ").slice(0, 4).join(" ")}
                  </h3>
                  <div className="d-flex justify-content-around align-items-center my-3">
                    <div className="text-white gut-5">
                      {movie.vote_average.toFixed(1)}
                      <i className="fa-sharp fa-solid fa-star text-danger"></i>
                    </div>
                    <div className="text-white">{movie.release_date}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
