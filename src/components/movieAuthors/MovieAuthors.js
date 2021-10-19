import React from "react";
const MovieAuthors = ({ img, authors }) => {
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

export default MovieAuthors;
