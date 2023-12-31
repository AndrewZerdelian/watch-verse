import React, { useContext } from "react";
import { AccountCont } from "../../Context/AccountContext/AccountContext";
import { useFormik } from "formik";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
//import Animation from "../../Assets/Animation - 1703943436684 .json";
import  { Toaster } from "react-hot-toast";
export default function Login() {
  const { POSTAccountDetails, LoadingAnimation, } =
    useContext(AccountCont);

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
          <Toaster position="top-center" reverseOrder={false} />
          {LoadingAnimation ? (
            <Player
              autoplay
              loop
              src="https://lottie.host/41a19a98-48b6-4bf8-96e0-75a97849cc50/qt0wOJU69r.json"
              style={{ height: "400px", width: "400px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          ) : localStorage.getItem("session_id") ? (
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
              style={{ height: "300px", width: "300px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          ) : (
            <>
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
                    type="text"
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
                  <button type="submit" className="btn btn-danger">
                    Submit
                  </button>
                  <a
                    href="https://www.themoviedb.org/signup"
                    className="btn btn-dark text-primary border-primary"
                  >
                    Create Account
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
                    Note: Due to TMDB policies and API, account creation via
                    this website is not possible. Please create an account using
                    the provided hyperlink or use the guest credentials for
                    testing.
                  </p>
                  <p>Username: Guest123</p>
                  <p>password: Guest123</p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
