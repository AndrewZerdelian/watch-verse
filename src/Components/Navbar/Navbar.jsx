import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fw-bold text-danger text-decoration-underline "
                      : "nav-link text-danger fw-bold"
                  }
                  to="Login"
                >
                  sign in
                </NavLink>
              </li>
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
                    <NavLink
                      to="Registration"
                      className="dropdown-item text-danger fw-bold bg-dark"
                    >
                      Creating new account
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-danger fw-bold bg-dark"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider " />
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-danger fw-bold bg-dark"
                      href="#"
                    >
                      Something else here
                    </a>
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
