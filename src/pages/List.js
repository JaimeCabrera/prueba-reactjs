import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFilmInfo } from "../services/filmService";

export const List = () => {
  const { name, created, films } = useSelector((state) => state.auth);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/list" className="navbar-brand">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* lista */}
      <li className="list-group-item align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{name}</div>
          {created}
        </div>
        {/* acco item */}

        <div className="col-12 mt-4">
          <div className="list-group">
            <p
              to="/list-detail"
              className="list-group-item list-group-item-action disabled"
              aria-current="true"
            >
              Films
            </p>
            {getFilmInfo(films)}
          </div>
        </div>
      </li>
    </>
  );
};
