import React from "react";
import { Link } from "react-router-dom";
const CardMovie = ({ filmTrend, location, BASE_IMG }) => {
  return (
    <>
      {filmTrend?.map((film) => {
        return (
          <Link
            key={film.id}
            to={{
              pathname: `/films/${film.id}`,
              state: { from: location },
            }}
          >
            <li key={film.id}>
              {BASE_IMG && film.poster_path && (
                <img
                  src={`${BASE_IMG}/${film.poster_path}`}
                  alt=""
                  className="ImageGalleryItem-image"
                />
              )}
              {film.original_title}
            </li>
          </Link>
        );
      })}
    </>
  );
};

export default CardMovie;
