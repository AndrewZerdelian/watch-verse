import React, { useContext } from "react";
import { AccountCont } from "../../Context/AccountContext/AccountContext";

import { useFormik } from "formik";


export default function Login() {
  const { POSTAccountDetails } = useContext(AccountCont);

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
              <button type="submit" className="btn btn-danger">
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
