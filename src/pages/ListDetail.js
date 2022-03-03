import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "../components/Loading";
import { getFilmInfo } from "../services/filmService";
import { saveVisit } from "../services/localStorageService";

export const ListDetail = () => {
  const [result, setResult] = useState([]);
  const [visits, setVisits] = useState();

  const { state } = useLocation();
  useEffect(() => {
    // console.log("estos son los films", data);
    const filmsDetails = async () => {
      const data = await getFilmInfo(state.characters);
      setResult(data);
    };
    filmsDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.characters]);

  useEffect(() => {
    // save visits on localStorage
    const data = saveVisit(state.title);
    setVisits(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container mb-5">
      <div className="col-12 mt-4">
        <div className="card">
          <div className="card-header">
            <span className="card-title fw-bold">{state.title}</span>
          </div>
          <div className="card-body d-flex flex-column">
            <span className="card-title">Director: {state.director}</span>
            <span className="card-title">Productor(es): {state.producer}</span>
            <span className="card-title">
              Opening Crawl: {state.opening_crawl}
            </span>
          </div>
        </div>
        <span className="card-title mt-5 fw-bold">Personajes </span>

        <table className="table table-responsive table-striped mt-5">
          <thead className="bg-dark text-white">
            <tr>
              <th>Nombre</th>
              <th>Homeworld</th>
              <th>hair_color</th>
              <th>Height</th>
            </tr>
          </thead>
          {result.length === 0 ? (
            <Loading />
          ) : (
            <tbody>
              {/* {JSON.stringify(result)} */}
              {result.map((film, index) => {
                return (
                  <tr key={index}>
                    <td>{film.name}</td>
                    <td>{film.homeworld}</td>
                    <td>{film.hair_color}</td>
                    <td>{film.height}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
        <h3 className="text-center text-primary">Numero de visitas {visits}</h3>
      </div>
    </div>
  );
};
