import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxOfficeAPIFunction } from "../../Redux/BoxOfficeSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import Style from "../BoxOffice/BoxOffice.module.css";

export default function BoxOffice() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const Dispatch = useDispatch();

  const { allData, isLoading, isError } = useSelector(
    (store) => store.BOfficeAPI
  );

  console.log(allData);

  useEffect(() => {
    Dispatch(BoxOfficeAPIFunction());
  }, []);


  return (
    <div className="container-fluid">
    <h1 className="text-danger p-5 text-center ">Box Office</h1>
      <div className="row">
        {isLoading && (
          <div className="d-flex justify-content-center ">
            <div class="spinner-border text-danger " role="status">
              <span class="visually-hidden ">Loading...</span>
            </div>
          </div>
        )}
        {isError && <p>Error fetching data</p>}

        {allData.map((movie) => (
          <div key={movie.id} className={`col-3 text-center py-5 pos ${Style.Scalling}`}>
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

      <div className="d-flex justify-content-around align-items-center ">
        <nav aria-label="Page navigation example ">
          <ul className="pagination ">
            <li className="page-item ">
              <a className="page-link " href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
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
