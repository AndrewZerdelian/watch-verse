import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { QueryContext } from "../../ReactQuery/CoomingSoonQueryApi";
import { Link } from "react-router-dom";

export default function CommingSoon() {
  const { currentPage, setCurrentPage, comingSoonQueryApi } =
    useContext(QueryContext);
  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";

  const { isLoading, isError, data } = useQuery({
    queryKey: ["GETCoomingSoonQuery", currentPage],
    queryFn: () => comingSoonQueryApi(currentPage),
  });

  console.log(data);

  /////////////////////////////PAGINATION BUTTONS //////////////////////////
  function Next() {
    if (currentPage < data?.total_pages) {
      setCurrentPage(currentPage + 1);
    }
  }
  function Previous() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function PageOne() {
    setCurrentPage(1);
  }
  function PageTwo() {
    setCurrentPage(2);
  }
  function PageThree() {
    setCurrentPage(3);
  }
  function LastPage() {
    setCurrentPage(data?.total_pages);
  }
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
              {data?.dates.minimum} - {data?.dates.maximum}
            </h3>
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
                  {data.page > 3 && (
                    <button className="page-link bg-black text-danger fw-bolder border-dark focus-ring focus-ring-danger">
                      {data.page}
                    </button>
                  )}
                  <li className="page-item">
                    <button
                      onClick={LastPage}
                      className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                    >
                      {data?.total_pages}
                    </button>
                  </li>
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
            <div className="row">
              {data?.results.map((Series) => (
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
              {data.page > 3 && (
                <button className="page-link bg-black text-danger fw-bolder border-dark focus-ring focus-ring-danger">
                  {data.page}
                </button>
              )}
              <li className="page-item">
                <button
                  onClick={LastPage}
                  className="page-link bg-black text-danger border-dark focus-ring focus-ring-danger"
                >
                  {data?.total_pages}
                </button>
              </li>
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
    </main>
  );
}

/**
 *             

           
 */
