import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FavouritesAPI } from "../../Redux/MoviesFavouritesSlice";
import { Link } from "react-router-dom";
import Style from "./Favourites.module.css";
export default function Favourites() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const [CurrentPage, SetCurrentPage] = useState(1);
  const Dispatch = useDispatch();
  const { APIDATA } = useSelector((store) => store.Favourits);
  console.log(APIDATA);

  useEffect(() => {
    Dispatch(FavouritesAPI(CurrentPage));
  }, [CurrentPage]);
  ////////////////////////////Paggination Functions////////////////////////
  function Next() {
    if (CurrentPage < APIDATA.total_pages) {
      SetCurrentPage(CurrentPage + 1);
    }
  }
  function Previous() {
    if (CurrentPage > 1) {
      SetCurrentPage(CurrentPage - 1);
    }
  }

  function PageOne() {
    SetCurrentPage(1);
  }
  function PageTwo() {
    SetCurrentPage(2);
  }
  function PageThree() {
    SetCurrentPage(3);
  }
  function LastPage() {
    SetCurrentPage(APIDATA.total_pages);
  }
  return (
    <div>
      <h1 className="text-danger text-center p-5 ">Favourites</h1>
      <div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-danger">
            <h3 className="text-light text-center">Switch to Series</h3>
          </button>
        </div>
        <div className="d-flex justify-content-around align-items-center pt-5 ">
          <nav aria-label="Page navigation example ">
            <ul className="pagination ">
              <li className="page-item ">
                <button
                  onClick={Previous}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">«</span>
                </button>
              </li>
              <li className="page-item">
                <button
                  onClick={PageOne}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                >
                  1
                </button>
              </li>
              <li className="page-item">
                <button
                  onClick={PageTwo}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                >
                  2
                </button>
              </li>
              <li className="page-item">
                <button
                  onClick={PageThree}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                >
                  3
                </button>
              </li>
              {APIDATA.page > 3 && (
                <button className="page-link bg-black text-danger fw-bolder border-dark focus-ring focus-ring-danger">
                  {APIDATA.page}
                </button>
              )}
              <li className="page-item">
                <button
                  onClick={LastPage}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                >
                  {APIDATA.total_pages}
                </button>
              </li>
              <li className="page-item">
                <button
                  onClick={Next}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                  aria-label="Next"
                >
                  <span aria-hidden="true">»</span>
                </button>
              </li>
            </ul>
          </nav>
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
        <div className="d-flex justify-content-around align-items-center pt-5 ">
          <nav aria-label="Page navigation example ">
            <ul className="pagination ">
              <li className="page-item ">
                <button
                  onClick={Previous}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">«</span>
                </button>
              </li>
              <li className="page-item">
                <button
                  onClick={PageOne}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                >
                  1
                </button>
              </li>
              <li className="page-item">
                <button
                  onClick={PageTwo}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                >
                  2
                </button>
              </li>
              <li className="page-item">
                <button
                  onClick={PageThree}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                >
                  3
                </button>
              </li>
              {APIDATA.page > 3 && (
                <button className="page-link bg-black text-danger fw-bolder border-dark focus-ring focus-ring-danger">
                  {APIDATA.page}
                </button>
              )}
              <li className="page-item">
                <button
                  onClick={LastPage}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                >
                  {APIDATA.total_pages}
                </button>
              </li>
              <li className="page-item">
                <button
                  onClick={Next}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                  aria-label="Next"
                >
                  <span aria-hidden="true">»</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <h3 className="text-light text-center">Switch to Series</h3>
      <div></div>
    </div>
  );
}
