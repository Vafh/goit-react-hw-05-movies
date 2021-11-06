import React from "react";
import { Link } from "react-router-dom";
import { CardMovieStyles } from "./CardMovieStyles";
const CardMovie = ({ filmTrend, location, BASE_IMG }) => {
  return (
    <>
      {filmTrend?.map((film) => {
        return (
          <CardMovieStyles key={film.id}>
            <Link
              key={film.id}
              to={{
                pathname: `/films/${film.id}`,
                state: { from: location },
              }}
            >
              {BASE_IMG && film.poster_path && (
                <img
                  src={`${BASE_IMG}/${film.poster_path}`}
                  alt=""
                  className="ImageGalleryItem-image"
                />
              )}
              <p>{film.original_title}</p>
            </Link>
          </CardMovieStyles>
        );
      })}
    </>
  );
};

export default CardMovie;
