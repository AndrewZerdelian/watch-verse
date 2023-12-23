import React, { useContext } from "react";
import { AccountCont } from "../../Context/AccountContext/AccountContext";
import { TokenCont } from "../../Context/LoginContext/TokenContext";
import { useFormik } from "formik";

export default function Login() {
  const { POSTAccountDetails } = useContext(AccountCont);
  const { GetToken } = useContext(TokenCont);
  const Form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: POSTAccountDetails,
  });
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark">
          <h4 className="text-danger text-center mt-3">Login Form</h4>
          <form className="px-5 py-3" onSubmit={Form.handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              >
                username
              </label>
              <input
                value={Form.values.username}
                onBlur={Form.handleBlur}
                onChange={Form.handleChange}
                name="username"
                type="username"
                id="name"
                className="form-control bg-dark text-white"
                aria-describedby="text"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-white"
              >
                password
              </label>
              <input
                value={Form.values.password}
                onBlur={Form.handleBlur}
                onChange={Form.handleChange}
                name="password"
                type="password"
                id="password"
                className="form-control bg-dark text-white"
              />
            </div>
            <div className="d-flex justify-content-between">
              <button
                onClick={GetToken}
                type="submit"
                className="btn btn-danger"
              >
                Submit
              </button>
              <a
                href="https://www.themoviedb.org/signup"
                className="btn btn-dark text-primary border-primary"
              >
                Create Acount
              </a>

              <button
                type="button"
                className="btn btn-secondary "
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
            <div className="text-white">
              <p>
                Note: Due to TMDB policies and API, account creation via this
                website is not possible. Please create an account using the
                provided hyperlink or use the guest credentials for testing.
              </p>
              <p>Username: Guest123</p>
              <p>password: Guest123</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

/**
 * import Slider from "react-slick";
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

 */
