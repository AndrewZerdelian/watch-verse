import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Style from "./Similer.module.css";
import { SimilerSeriesCont } from "../../Context/Similer/SimilerSeriesContext";

export default function SimilerSeries() {
  const { GETSimilerSeriesAPI } = useContext(SimilerSeriesCont);
  const [MappingOverSimiler, SetMappingOverSimiler] = useState([]);
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const params = useParams(); // for the id from the https url
  const [CurrentPage, SetCurrentPage] = useState(1);
  async function LogSimilerSeries() {
    try {
      const response = await GETSimilerSeriesAPI(params.ID, CurrentPage);
      console.log(response?.data);
      SetMappingOverSimiler(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    LogSimilerSeries(CurrentPage);
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
  return (
    <div className="container-fluid pt-5 !important">
      <h1 className="text-danger text-center">Similer TV Shows</h1>
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
        {MappingOverSimiler?.results?.map((Series) => (
          <div
            key={Series.id}
            className={`col-md-4 col-lg-3 text-center py-5 pos ${Style.Scalling}`}
          >
            <Link
              className={`${Style.Link}`}
              to={`/TopSeriesDetails/${Series.id}`}
            >
              <img
                src={ImagesBasicPath + Series.poster_path}
                alt="Movies"
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
