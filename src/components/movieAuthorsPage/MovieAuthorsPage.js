import React, { useEffect, useState } from "react";
import { fetchMovieDetailsAuthors } from "../../service/Request";
const MovieAuthorsPage = ({ filmsId, img }) => {
  const [authors, setAuthors] = useState(null);
  useEffect(() => {
    fetchMovieDetailsAuthors(filmsId)
      .then(setAuthors)
      .catch((err) => console.log(err.message));
  }, [filmsId]);
  return (
    authors &&
    authors.cast?.map((author) => (
      <li key={author.cast_id}>
        {author.name}
        <p>Character: {author.character}</p>
        {author.profile_path && (
          <img
            className="movieCard"
            src={`${img}/${author.profile_path}`}
            alt=""
          />
        )}
      </li>
    ))
  );
};

export default MovieAuthorsPage;
