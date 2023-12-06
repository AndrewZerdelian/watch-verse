import { useQuery } from "@tanstack/react-query";
import React from "react";
import CoomingSoonQueryApi from "../../ReactQuery/CoomingSoonQueryApi";
import { Link } from "react-router-dom";

export default function CommingSoon() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const { isLoading, isFetching, isError, isSuccess, data } = useQuery({
    queryKey: ["GETCoomingSoonQuery"],
    queryFn: CoomingSoonQueryApi,
  });

  console.log(isLoading, isFetching, isError, isSuccess, data);

  return (
    <main>
      <h1 className="text-danger p-5 text-center">CommingSoon</h1>

      <div className="text-white text-center">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : isError ? (
          <p className="text-danger">
            Error loading data. Please try again later.
          </p>
        ) : (
          <div className="container-fluid">
            <h3>
              {data?.data.dates.minimum} - {data?.data.dates.maximum}
            </h3>
            <div className="row">
              {data?.data.results.map((Series) => (
                <div className={`col-3 text-center py-5`} key={Series.id}>
                  <img
                    src={ImagesBasicPath + Series.poster_path}
                    alt="Series"
                    className="w-75"
                  />
                  <h3 className="text-white">{Series.title}</h3>
                  <div className="d-flex justify-content-around align-items-center my-3">
                    <div className="text-white gut-5">
                      {Series.vote_average.toFixed(1)}
                      <i className="fa-sharp fa-solid fa-star text-danger"></i>
                    </div>
                    <div className="text-white">{Series.release_date}</div>
                  </div>
                  <Link className={``} to={`/BoxOfficeDetails/${Series.id}`}>
                    <button className="btn btn-danger">More Info</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="d-flex justify-content-around align-items-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
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
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
