import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getFilmInfo } from "../services/filmService";

export const ListDetail = () => {
  const [result, setResult] = useState([]);

  const { state } = useLocation();
  useEffect(() => {
    // console.log("estos son los films", data);
    const filmsDetails = async () => {
      const data = await getFilmInfo(state.characters);
      setResult(data);
    };
    filmsDetails();
  }, [state.characters]);
  return (
    <div className="col-12 mt-3">
      <div class="card">
        <div className="card-header">
          <span className="card-title fw-bold">{state.title}</span>
        </div>
        <div class="card-body d-flex flex-column">
          <span className="card-title">Director: {state.director}</span>
          <span className="card-title">Productor(es): {state.producer}</span>
          <span className="card-title">
            Opening Crawl: {state.opening_crawl}
          </span>
          <span className="card-title">Personajes: </span>
        </div>
      </div>
      <table class="table table-responsive-sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Homeworld</th>
            <th>hair_color</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {/* {JSON.stringify(result)} */}
          {result.map((e) => {
            return (
              <tr>
                <td>{e.name}</td>
                <td>{e.homeworld}</td>
                <td>{e.hair_color}</td>
                <td>{e.height}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
