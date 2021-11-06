import React, { useEffect, useState } from "react";
import { fetchMovieDetailsAuthors } from "../../service/Request";
import { MovieAuthorsPageStyles } from "./MovieAuthorsPageStyles";

const MovieAuthorsPage = ({ filmsId, img, IMG_PLUG }) => {
  const [authors, setAuthors] = useState(null);
  useEffect(() => {
    fetchMovieDetailsAuthors(filmsId)
      .then(setAuthors)
      .catch((err) => console.log(err.message));
  }, [filmsId]);
  return (
    authors &&
    authors.cast?.map((author) => (
      <MovieAuthorsPageStyles key={author.cast_id}>
        {author.name}
        <p className="additional-information-list__text">
          Character: {author.character}
        </p>
        {author.profile_path ? (
          <img
            className="ImageGalleryItem-image"
            src={`${img}/${author.profile_path}`}
            alt=""
          />
        ) : (
          <img className="ImageGalleryItem-image" src={`${IMG_PLUG}`} alt="" />
        )}
      </MovieAuthorsPageStyles>
    ))
  );
};

export default MovieAuthorsPage;
