import React, { useEffect, useState } from "react";
import { Link, useLocation, useRouteMatch, useHistory } from "react-router-dom";
import queryString from "query-string";
// import { toast } from "react-toastify";
import { fetchSearchMovie } from "../../service/Request";
const Movies = () => {
  const [valueInput, setValueInput] = useState("");
  const [query, setQuery] = useState("");
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  useEffect(() => {
    const parsed = queryString.parse(location.search);
    parsed.query && fetchSearchMovie(parsed.query).then(setQuery);
    console.log(parsed.query);
  }, [location.search]);

  const BASE_IMG = "https://image.tmdb.org/t/p/w500";
  const onChangeName = (e) => {
    // if (valueInput.trim() === "") {
    //   toast.error("Not found!");
    // }
    setValueInput(e.currentTarget.value.toLowerCase());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    fetchSearchMovie(valueInput).then(setQuery);
    history.push(`${match.url}?query=${valueInput}`);
  };
  return (
    <>
      <h3>Movies</h3>
      <label>
        <input
          value={valueInput}
          onChange={onChangeName}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
        />
      </label>
      <button onClick={onSubmit} type="button" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>
      <ul className="ImageGallery">
        {query?.results?.map((film) => {
          return (
            <Link
              key={film.id}
              to={{
                pathname: `/films/${film.id}`,
                state: { from: location },
              }}
            >
              <li key={film.id} className="ImageGalleryItem">
                {film.poster_path && (
                  <img
                    src={`${BASE_IMG}/${film.poster_path}`}
                    alt=""
                    className="ImageGalleryItem-image"
                  />
                )}
                {film.original_title || film.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};
export default Movies;
