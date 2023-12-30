import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import axios from "axios";
import { TokenCont } from "../../Context/LoginContext/TokenContext";
import { AccountCont } from "../../Context/AccountContext/AccountContext";

export default function Navbar() {
  const { Session_id, SETSession_id } = useContext(AccountCont); //awil ma b3mel refresh el session betdee3
  const NavigatetoHome = useNavigate();
  console.log(Session_id);
  const { GetToken } = useContext(TokenCont);

  async function Logout() {
    try {
      if (!Session_id) {
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

      SETSession_id(null);
    } catch (error) {
      console.log(error);
    }
  }
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
            <ul className="navbar-nav  nav-underline ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold text-danger  "
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
                      ? "nav-link fw-bold text-danger "
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
                      ? "nav-link fw-bold text-danger "
                      : "nav-link text-danger fw-bold"
                  }
                  to="CommingSoon"
                >
                  Comming Soon
                </NavLink>
              </li>
              {Session_id && (
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link nav-link active fw-bold text-danger"
                        : "nav-link text-danger fw-bold"
                    }
                    to="Favourites"
                  >
                    Favourites
                  </NavLink>
                </li>
              )}

              {Session_id ? (
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
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link text-danger fw-bold dropdown-toggle"
                      : "nav-link text-danger fw-bold"
                  }
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
