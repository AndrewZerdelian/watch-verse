import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <navbar>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            WATCH VERSE
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="BoxOffice">
                  Box Office
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="CommingSoon">
                  Comming Soon
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="CommingSoon">
                Favorites
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="CommingSoon">
                  sign in 
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </NavLink>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item " href="#">
                      Creating new account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider " />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </navbar>
  );
}

/*
 *       <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
 */
