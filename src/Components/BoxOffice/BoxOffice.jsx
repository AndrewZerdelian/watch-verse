import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoxOfficeAPIFunction } from "../../Redux/BoxOfficeSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
          <div key={movie.id} className="col-3 text-center py-5">
            <img
              src={ImagesBasicPath + movie.poster_path}
              alt="Movies"
              className="w-75"
            />
            <h3 className="text-white">
              {movie.title.split(" ").slice(0, 4).join(" ")}
            </h3>
            <div className="d-flex justify-content-around align-items-center">
              <div className="text-white ">{movie.vote_average.toFixed(1)}
              <i className="fa-sharp fa-solid fa-star text-danger"></i></div>
              <button className="btn btn-danger  ">More Info</button>
            </div>
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
    <li className="page-item "><a className="page-link" href="#">1</a></li>
    <li className="page-item "><a className="page-link" href="#">2</a></li>
    <li className="page-item "><a className="page-link" href="#">3</a></li>
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
