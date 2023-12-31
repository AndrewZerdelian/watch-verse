import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxOfficeAPIFunction } from "../../Redux/BoxOfficeSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, } from "react-router-dom";
import Style from "../BoxOffice/BoxOffice.module.css";

export default function BoxOffice() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const Dispatch = useDispatch();
  const [CurrentPage, SetCurrentPage] = useState(1);
  const { allData, isLoading, isError } = useSelector(
    (store) => store.BOfficeAPI
  );

  console.log(allData);

  useEffect(() => {
    Dispatch(BoxOfficeAPIFunction(CurrentPage));
  }, [CurrentPage]);

  ////////////////////////////Paggination Functions////////////////////////
  function Next() {
    if (CurrentPage < allData.total_pages) {
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
    SetCurrentPage(allData.total_pages);
  }
  return (
    <div className="container-fluid">
      <h1 className="text-danger p-5 text-center ">Box Office</h1>
      <div className="row">
        {isLoading && (
          <div className="d-flex justify-content-center ">
            <div className="spinner-border text-danger " role="status">
              <span className="visually-hidden ">Loading...</span>
            </div>
          </div>
        )}
        {isError && <p>Error fetching data</p>}
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
              {allData.page > 3 && (
                <button className="page-link bg-black text-danger fw-bolder border-dark focus-ring focus-ring-danger">
                  {allData.page}
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
        {allData?.results?.map((movie) => (
          <div
            key={movie.id}
            className={`col-3 text-center py-5 pos ${Style.Scalling}`}
          >
            <Link
              className={`${Style.Link}`}
              to={`/MovieDetails/${movie.id}`}
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
            {allData.page > 3 && (
              <button className="page-link bg-black text-danger fw-bolder border-dark focus-ring focus-ring-danger">
                {allData.page}
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

/**
 * <button
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
 */
//<button className="btn btn-danger" onClick={MoreInfo}>More Info</button>
/**
 *  <div className="">
        <nav aria-label="Page navigation example ">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
 */
