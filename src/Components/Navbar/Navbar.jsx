import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import axios from "axios";
import { AccountCont } from "../../Context/AccountContext/AccountContext";
import { TokenCont } from "../../Context/LoginContext/TokenContext";

export default function Navbar() {
  const { Session_id } = useContext(AccountCont);
  const { GetToken } = useContext(TokenCont);
  const NavigatetoHome = useNavigate();
  async function Logout() {
    try {
      if (!localStorage.getItem("session_id")) {
        console.error("Session ID not found in localStorage");
        return;
      }
      await axios.delete(
        `https://api.themoviedb.org/3/authentication/session?api_key=2d7b24dfe90cb92bab2f42026ddf8da7&`,
        {
          data: {
            session_id: Session_id,
          },
        }
      );
      localStorage.clear();
      console.log("Successfully logged out");
      NavigatetoHome("/");
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * {!localStorage.getItem("account_id") && (
                <li className="nav-item">
                  <button
                    className={"nav-link text-danger fw-bold"}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={GetToken}
                  >
                    Login
                  </button>
                  <Login />
                </li>
              )}
        
   */

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <NavLink className="navbar-brand text-danger fw-bold" to="/">
            WATCH VERSE
          </NavLink>
          <button
            className="navbar-toggler text-danger bg-danger"
            type="button "
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold text-danger text-decoration-underline "
                      : "nav-link text-danger fw-bold"
                  }
                  to="BoxOffice"
                >
                  Box Office
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold text-danger text-decoration-underline "
                      : "nav-link text-danger fw-bold"
                  }
                  to="TopSeries"
                >
                  Top Series
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold text-danger text-decoration-underline "
                      : "nav-link text-danger fw-bold"
                  }
                  to="CommingSoon"
                >
                  Comming Soon
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold text-danger text-decoration-underline "
                      : "nav-link text-danger fw-bold"
                  }
                  to="Favourites"
                >
                  Favourites
                </NavLink>
              </li>
              {localStorage.getItem("account_id") ? (
                <li className="nav-item">
                  <button
                    className={"nav-link text-danger fw-bold"}
                    onClick={Logout}
                  >
                    Logout
                  </button>
                  <Login />
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    className={"nav-link text-danger fw-bold"}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={GetToken}
                  >
                    Login
                  </button>
                  <Login />
                </li>
              )}
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link text-danger fw-bold dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </NavLink>
                <ul className="dropdown-menu dropdown-menu-end text-danger bg-dark">
                  <li>
                    <a
                      className="dropdown-item text-danger fw-bold bg-dark"
                      href="https://www.themoviedb.org/signup"
                    >
                      Creating new account
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider " />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
/**
 *               <li className="nav-item ">
                <NavLink className="nav-link text-danger fw-bold active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
 */
/*
 *       <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
 */
