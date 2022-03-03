import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getFilmInfo } from "../services/filmService";

export const List = () => {
  const { name, created, films } = useSelector((state) => state.auth);
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("estos son los films", data);
    const filmsDetails = async () => {
      const data = await getFilmInfo(films);
      setResult(data);
    };
    filmsDetails();
  }, [films]);
  console.log(result);
  const handleClick = (film) => {
    navigate("/list-detail");
    console.log("enviando", film);
  };
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
      <div className="list-group align-items">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Nombre: {name}</div>
          Creado: {created}
        </div>
        {/* acco item */}

        <div className="col-11 mt-4 mx-auto">
          <div className="list-group">
            <Link
              to="/list-detail"
              className="list-group-item list-group-item-action bg-dark disabled fw-bold text-white"
              aria-current="true"
            >
              Lista de peliculas
            </Link>
            {result.map((el, index) => {
              return (
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                  onClick={() => handleClick(el)}
                  key={index}
                >
                  <span>
                    <b>Título</b>: {el.title}
                  </span>
                  <br />
                  <span>
                    <b>Director</b>: {el.director}
                  </span>
                  <div className="col-12 text-truncate">
                    <b>Opening crawl</b>: {el.opening_crawl}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
