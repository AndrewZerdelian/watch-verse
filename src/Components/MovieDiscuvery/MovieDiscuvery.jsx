//import Slider from "react-slick";
import { useContext, useEffect } from "react";
import { MovieDiscuveryCont } from "../../Context/MovieDiscuveryContext/MovieDiscuveryContext";
//import Module from "./MovieDiscuvery.module.css";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
export default function MovieDiscuvery() {
  /**
 * React SLICK 
 *   var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    fade: true,
    pauseOnHover: false
  };
 */

  //////////////////////////////API FOR CAURSEL /////////////////////////
  const {
    MovieDiscuveryCarouselGetAPI,
    MappingDiscovery,
    setMappingDiscovery,
  } = useContext(MovieDiscuveryCont);

  const ImagesBasicPath = "https://image.tmdb.org/t/p/original/";

  async function GetDiscvuverMovies() {
    const response = await MovieDiscuveryCarouselGetAPI();
    setMappingDiscovery(response.results);
    //console.log(response.results);
  }

  useEffect(() => {
    GetDiscvuverMovies();
  }, []);

  return (
    <div>
      <div style={{ height: "80vh", width: "100%", overflow: "hidden" }}>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          style={{ height: "100%" }}
        >
          <div className="carousel-inner" style={{ height: "100%" }}>
            {MappingDiscovery.map((Item, index) => (
              <div
                key={Item.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ height: "100%" }}
              >
                <img
                  src={ImagesBasicPath + Item.backdrop_path}
                  className="d-block w-100"
                  alt="..."
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    filter: "brightness(60%)",
                  }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      textShadow: "4px ",
                    }}
                  >
                    {Item.title}
                  </h1>
                  <p>{Item.overview}</p>
                  <Link to={`/MovieDetails/${Item.id}`}>
                    <button className="btn btn-outline-danger">
                      More info
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

//<div className="container-fluid ">
//      <Slider {...settings}>
//        {MappingDiscovery.map((item) => (
//          <div key={item.id} className="position-relative">
{
  /** <Link to={`/BoxOfficeDetails/${item.id}`}> */
}
//            <img
//              src={ImagesBasicPath + item.backdrop_path}
//              alt="background"
//              className={`${Module.MainCarouselStyle} mx-auto rounded-5 opacity-50`}
//            />
{
  /**</Link> */
}
//            <div className={`text-white ${Module.Absolute} w-25 `}>
//              <span className={`${Module.PosterFont}`}>{item.title}</span>
//            </div>
//        </div>
//       ))}
//     </Slider>
// </div>
