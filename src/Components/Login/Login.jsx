import Slider from "react-slick";
import { useContext, useEffect } from "react";
import { MovieDiscuveryCont } from "../../Context/MovieDiscuveryContext/MovieDiscuveryContext";
import Module from "./Login.module.css";
export default function MovieDiscuvery() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    fade: true,
  };

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
    console.log(response.results);
  }

  useEffect(() => {
    GetDiscvuverMovies();
  }, []);

  return (
    <div className="container-fluid pb-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-6 ">
          <Slider {...settings}>
            {MappingDiscovery.map((item) => (
              <div key={item.id} className="position-relative">
                <img
                  src={ImagesBasicPath + item.backdrop_path}
                  alt="background"
                  className={`${Module.MainCarouselStyle}  mx-auto rounded-5 opacity-50 vh-100 `}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="col-6 text-white">
          <h1 className="text-danger text-center py-5">Login</h1>
          <form className="">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text text-white">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary me-5">
              Submit
            </button>
            <button type="submit" className="btn btn-primary">
              Create an Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
