import React, { useContext, useEffect, useState } from "react";
import { SimilerMoviesCont } from "../../Context/Similer/SimilerMoviesContext";
import { Link, useParams } from "react-router-dom";
import Style from "./Similer.module.css";
//import { useDispatch, useSelector } from "react-redux";
//import { BoxOfficeDetailsAPIFUNC } from "../../Redux/BoxOfficeDetailsSlice";
export default function SimilerMovies() {
  const { GETSimilerMoviesAPI } = useContext(SimilerMoviesCont);
  const [MappingOverSimiler, SetMappingOverSimiler] = useState([]);
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const params = useParams(); // for the id from the https url
  const [CurrentPage, SetCurrentPage] = useState(1);
  async function LogSimilerMovies() {
    try {
      const response = await GETSimilerMoviesAPI(params.ID, CurrentPage);
      console.log(response?.data);
      SetMappingOverSimiler(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    LogSimilerMovies(CurrentPage);
  }, [CurrentPage]);

  ////////////////////////////Paggination Functions////////////////////////

  function Next() {
    if (CurrentPage < MappingOverSimiler.total_pages) {
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
    SetCurrentPage(MappingOverSimiler.total_pages);
  }

  return (
    <div className="container-fluid">
      <h1 className="text-danger text-center">Similer Movies</h1>
      <div className="row">
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
              {MappingOverSimiler.page > 3 && (
                <button className="page-link bg-black text-danger fw-bolder border-dark focus-ring focus-ring-danger">
                  {MappingOverSimiler.page}
                </button>
              )}
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
        {MappingOverSimiler?.results?.map((movie) => (
          <div
            key={movie.id}
            className={`col-3 text-center py-5 pos ${Style.Scalling}`}
          >
            <Link className={`${Style.Link}`} to={`/MovieDetails/${movie.id}`}>
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

      <div className="d-flex justify-content-around align-items-center pt-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
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
            {MappingOverSimiler.page > 3 && (
              <button className="page-link bg-black text-danger fw-bolder border-dark focus-ring focus-ring-danger">
                {MappingOverSimiler.page}
              </button>
            )}
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
  );
}
