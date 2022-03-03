import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FilmItem } from "../components/FfilmItem";
import { Loading } from "../components/Loading";
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
  const handleClick = (film) => {
    navigate("/list-detail", { state: film });
  };
  return (
    <>
      {/* lista */}
      <div className="container">
        <div className="ms-2 me-auto">
          <div className="fw-bold"> {name}</div>
          <div className="fw-bold">Usuario desde: {created}</div>
        </div>

        <div className="col-12 mt-4">
          <div className="list-group">
            <Link
              to="/list-detail"
              className="list-group-item list-group-item-action bg-dark disabled fw-bold text-white"
              aria-current="true"
            >
              Lista de peliculas
            </Link>
            {result.length === 0 && <Loading />}
            {result.map((film, index) => {
              return (
                <FilmItem film={film} index={index} handleClick={handleClick} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
