import React, { useState } from "react";
import axios from "axios";
import Style from "./SearchBar.module.css";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";
  const [Loading, SetLoading] = useState([]);
  async function SearchQuery(query) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=2d7b24dfe90cb92bab2f42026ddf8da7&include_adult=false&language=en-US&page=1`
      );
      console.log(response.data.results);
      SetLoading(response?.data.results);
      return response?.data.results;
    } catch (error) {
      throw error;
    }
  }

  function handleChange(event) {
    SearchQuery(event.target.value);
    event.preventDefault();
  }

  return (
    <div className="p-5 container">
      <form onSubmit={handleChange} className="d-flex container" role="search">
        <input
          id="search"
          name="search"
          type="text"
          onChange={handleChange}
          className="form-control me-2"
          placeholder="Search for Movies / Shows and Actors..."
          aria-label="search"
        />
      </form>
      <div className="container-fluid">
        <div className="row">
          {Loading?.map(
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
        </div>
      </div>
    </div>
  );
}

/**
 *         <button className="btn btn-outline-danger" type="submit">
          Search
        </button>
 */

/**
 * 
  async function SearchQuery(query) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=2d7b24dfe90cb92bab2f42026ddf8da7&include_adult=false&language=en-US&page=1`
      );
      //console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  //,isLoading, isError, isSuccess,  dataUpdatedAt
  const { data } = useQuery({
    queryKey: ["SearchAPI"],
    queryFn: SearchQuery,
  });
  console.log(data?.data.results);

  const [Searching, SetSearching] = useState("");
  function handleChange(event) {
    SetSearching(event.target.value);
    SearchQuery(event.target.value);
    event.preventDefault();
  }

 */

/**
 *       <div>
        {isSuccess ? (
          <div></div>
        ) : (
          <></>
        )}
      </div>
 */
/**
 *   // Tomorow we will delete the SearchQuery from qoury folder and do it all here
  // or all in just a normal function here we 5allas,,,
  const [Searching, SetSearching] = useState("");
  const [Loading, SetLoading] = useState(false);

  function handleChange(event) {
    SetSearching(event.target.value);
    SearchQuery(event.target.value);
    SetLoading(true);
    event.preventDefault();
    console.log(Searching);
  }

  //////////////////////QUERY //////////////////////////////
  // isLoading, isFetching, isError, isSuccess,
  const { data } = useQuery({
    queryKey: ["query"],
    queryFn: SearchQuery,
  });
  //isLoading, isFetching, isError,
  console.log(data);
 */
/**
 * import { useFormik } from "formik";
import React, { useContext, useState } from "react";

export default function SearchBar() {
  //////////////////////SEARCH //////////////////////////////
  const [Searching, SetSearching] = useState("");
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
      SetSearching(values.target.values);
      console.log(Searching);
    },
  });

  return (
    <div className="p-5 ">
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex container"
        role="search"
      >
        <input
          id="search"
          name="search"
          type="search"
          onChange={formik.handleChange}
          value={formik.values.search}
          className="form-control me-2"
          placeholder="Search for Movies/tvshows"
          aria-label="search"
        />
        <button className="btn btn-outline-danger" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

 */
