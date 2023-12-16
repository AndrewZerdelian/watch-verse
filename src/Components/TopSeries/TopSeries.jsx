import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TopSeriesAPIFUNC } from "../../Redux/TopSeriesSlice";
import { Link } from "react-router-dom";
import Style from "../BoxOffice/BoxOffice.module.css";

export default function TopSeries() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const Dispatch = useDispatch();

  const { APIDATA, isLoading } = useSelector((store) => store.TopSeries);

  console.log(APIDATA);
  //console.log(isLoading);
  const [CurrentPage, SetCurrentPage] = useState(1);
  useEffect(() => {
    Dispatch(TopSeriesAPIFUNC(CurrentPage));
  }, [CurrentPage]);
  /////////////////////TopSeries Paggination //////////////////////
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
    <div className="text-white text-center">
      <h1 className="text-danger p-5 text-center">TopSeries</h1>
      {isLoading ? (
        <div className="d-flex justify-content-center ">
          <div className="spinner-border text-danger " role="status">
            <span className="visually-hidden ">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="d-flex justify-content-around align-items-center pt-5">
            <nav aria-label="Page navigation example">
              <ul className="pagination ">
                <li className="page-item ">
                  <button
                    onClick={Previous}
                    className="page-link"
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">«</span>
                  </button>
                </li>
                <li className="page-item">
                  <button onClick={PageOne} className="page-link">
                    1
                  </button>
                </li>
                <li className="page-item">
                  <button onClick={PageTwo} className="page-link">
                    2
                  </button>
                </li>
                <li className="page-item">
                  <button onClick={PageThree} className="page-link">
                    3
                  </button>
                </li>
                <li className="page-item">
                  <button onClick={LastPage} className="page-link">
                    {APIDATA.total_pages}
                  </button>
                </li>
                <li className="page-item">
                  <button
                    onClick={Next}
                    className="page-link"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">»</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row">
            {APIDATA?.results.map((Series) => (
              <div
                className={`col-3 text-center py-5 ${Style.Scalling}`}
                key={Series.id}
              >
                <Link
                  className={`${Style.Link}`}
                  to={`/TopSeriesDetails/${Series.id}`}
                >
                  <img
                    src={ImagesBasicPath + Series.poster_path}
                    alt="Series"
                    className="w-75"
                  />
                  <h3 className="text-white">
                    {Series.name.split(" ").slice(0, 4).join(" ")}
                  </h3>
                  <div className="d-flex justify-content-around align-items-center my-3">
                    <div className="text-white gut-5">
                      {Series.vote_average.toFixed(1)}
                      <i className="fa-sharp fa-solid fa-star text-danger"></i>
                    </div>
                    <div className="text-white">{Series.first_air_date}</div>
                  </div>
                  <button className="btn btn-danger">More Info</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="d-flex justify-content-around align-items-center pt-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination ">
            <li className="page-item ">
              <button
                onClick={Previous}
                className="page-link"
                aria-label="Previous"
              >
                <span aria-hidden="true">«</span>
              </button>
            </li>
            <li className="page-item">
              <button onClick={PageOne} className="page-link">
                1
              </button>
            </li>
            <li className="page-item">
              <button onClick={PageTwo} className="page-link">
                2
              </button>
            </li>
            <li className="page-item">
              <button onClick={PageThree} className="page-link">
                3
              </button>
            </li>
            <li className="page-item">
              <button onClick={LastPage} className="page-link">
                {APIDATA.total_pages}
              </button>
            </li>
            <li className="page-item">
              <button onClick={Next} className="page-link" aria-label="Next">
                <span aria-hidden="true">»</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
