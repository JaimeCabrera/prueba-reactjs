import React from "react";

export const FilmItem = ({ handleClick, index, film }) => {
  return (
    <>
      <button
        type="button"
        className="list-group-item list-group-item-action"
        onClick={() => handleClick(film)}
        key={index}
      >
        <span>
          <b>Título</b>: {film.title}
        </span>
        <br />
        <span>
          <b>Director</b>: {film.director}
        </span>
        <div className="col-12 text-truncate">
          <b>Opening crawl</b>: {film.opening_crawl}
        </div>
      </button>
    </>
  );
};
