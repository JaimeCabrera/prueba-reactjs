import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFilmInfo } from "../services/filmService";

export const List = () => {
  const { name, created, films } = useSelector((state) => state.auth);
  const [result, setResult] = useState([]);

  useEffect(() => {
    // console.log("estos son los films", data);
    const filmsDetails = async () => {
      const data = await getFilmInfo(films);
      setResult(data);
    };
    filmsDetails();
  }, [films]);
  console.log(result);
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
      <ul className="list-group-item align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Nombre: {name}</div>
          Creado: {created}
        </div>
        {/* acco item */}

        <div className="col-12 mt-4">
          <div className="list-group">
            <Link
              to="/list-detail"
              className="list-group-item list-group-item-action bg-dark disabled fw-bold text-white"
              aria-current="true"
            >
              Films
            </Link>
            {result.map((el, index) => {
              return (
                <Link
                  to="/list-detail"
                  class="list-group-item text-black-50"
                  key={index}
                >
                  <b>Titulo</b>: {el.title} <br />
                  <b>Director</b>: {el.director} <br />
                  <b>Opening crawl</b>:
                  <div class="col-12 text-truncate">{el.opening_crawl}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </ul>
    </>
  );
};
