import React, { useState, useEffect } from "react";
import axios from "axios";
import Style from "./SearchBar.module.css";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const [Loading, SetLoading] = useState([]);
  const [CurrentPage, SetCurrentPage] = useState(1);
  const [SearchQueryValue, SetSearchQuery] = useState("");
  const APIKEY = process.env.REACT_APP_API_KEY;
  async function SearchQuery(query) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${query}&${APIKEY}&include_adult=false&language=en-US&page=${CurrentPage}`
      );
      SetLoading(response?.data);
      //console.log(response?.data);
      return response?.data;
    } catch (error) {
      throw error;
    }
  }

  function handleChange(event) {
    event.preventDefault();
    const query = event.target.value;
    SetLoading([]);
    SetSearchQuery(query);
  }

  useEffect(() => {
    SearchQuery(SearchQueryValue);
  }, [SearchQueryValue, CurrentPage]);

  function Next() {
    if (CurrentPage < Loading?.total_pages) {
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
    if (Loading.total_pages) {
      SetCurrentPage(Loading.total_pages);
    }
  }

  return (
    <div className="p-5 container">
      <form className="d-flex container" role="search">
        <input
          id="search"
          name="search"
          type="text"
          onChange={handleChange}
          className="form-control me-2"
          placeholder="Search for Movies/Shows..."
          aria-label="search"
        />
      </form>
      {SearchQueryValue && (
        <div className="d-flex justify-content-around align-items-center pt-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
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
              {Loading.page > 3 && (
                <button className="page-link bg-black text-danger fw-bolder border-dark focus-ring focus-ring-danger">
                  {Loading.page}
                </button>
              )}
              {Loading.total_pages && (
                <li className="page-item">
                  <button
                    onClick={LastPage}
                    className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                  >
                    {Loading.total_pages}
                  </button>
                </li>
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
      )}
      <div className="container-fluid">
        <div className="row">
          {Loading?.results?.map(
            (search) =>
              search.poster_path && (
                <div
                  key={search.id}
                  className={`col-3 text-center py-5 pos ${Style.Scalling}`}
                >
                  {search.media_type === "movie" ? (
                    <Link
                      className={`${Style.Link}`}
                      to={`/BoxOfficeDetails/${search.id}`}
                    >
                      <img
                        src={ImagesBasicPath + search.poster_path}
                        alt="Movies"
                        className="w-75"
                      />
                      <h3 className="text-white">
                        {search.title}
                        {search.name}
                      </h3>
                      <div className="d-flex justify-content-around align-items-center my-3">
                        <div className="text-white gut-5">
                          {search.vote_average}
                          <i className="fa-sharp fa-solid fa-star text-danger"></i>
                        </div>
                        <div className="text-white">{search.release_date}</div>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      className={`${Style.Link}`}
                      to={`/TopSeriesDetails/${search.id}`}
                    >
                      <img
                        src={ImagesBasicPath + search.poster_path}
                        alt="Movies"
                        className="w-75"
                      />

                      <h3 className="text-white">
                        {search.title}
                        {search.name}
                      </h3>
                      <div className="d-flex justify-content-around align-items-center my-3">
                        <div className="text-white gut-5">
                          {search.vote_average}
                          <i className="fa-sharp fa-solid fa-star text-danger"></i>
                        </div>
                        <div className="text-white">
                          {search.first_air_date}
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              )
          )}
          {SearchQueryValue && (
            <div className="d-flex justify-content-around align-items-center pt-5">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
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
                  {Loading.page > 3 && (
                    <button className="page-link bg-black text-danger fw-bolder border-dark focus-ring focus-ring-danger">
                      {Loading.page}
                    </button>
                  )}
                  {Loading.total_pages && (
                    <li className="page-item">
                      <button
                        onClick={LastPage}
                        className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                      >
                        {Loading.total_pages}
                      </button>
                    </li>
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
          )}
        </div>
      </div>
    </div>
  );
}
