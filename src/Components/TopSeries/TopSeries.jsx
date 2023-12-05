import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TopSeriesAPIFUNC } from "../../Redux/TopSeriesSlice";
import { Link } from "react-router-dom";
import Style from "../BoxOffice/BoxOffice.module.css";

export default function TopSeries() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const Dispatch = useDispatch();

  const { APIDATA, isLoading, Paggination } = useSelector(
    (store) => store.TopSeries
  );

  //console.log(APIDATA);
  //console.log(isLoading);

  useEffect(() => {
    Dispatch(TopSeriesAPIFUNC());
  }, []);

  return (
    <div className="text-white text-center">
      <h1 className="text-danger ">TopSeries</h1>
      {isLoading ? (
        <div className="d-flex justify-content-center ">
          <div className="spinner-border text-danger " role="status">
            <span className="visually-hidden ">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            {APIDATA.map((Series) => (
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
