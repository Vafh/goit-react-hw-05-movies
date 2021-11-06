import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch, useHistory } from "react-router-dom";
import queryString from "query-string";
import { toast } from "react-toastify";
import { fetchSearchMovie } from "../../service/Request";
import CardMovie from "../../components/cardMovie/CardMovie";
import Btn from "../../components/btn/btn";
import { MoviePageStyles } from "./MoviePageStyles";
const Movies = () => {
  const [valueInput, setValueInput] = useState("");
  const [query, setQuery] = useState("");
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  useEffect(() => {
    const parsed = queryString.parse(location.search);
    parsed.query &&
      fetchSearchMovie(parsed.query)
        .then(setQuery)
        .catch((err) => console.log(err.message));
  }, [location.search]);
  useEffect(() => {
    window.addEventListener("keydown", handleEnter);
    return () => {
      window.removeEventListener("keydown", handleEnter);
    };
  }, [valueInput]);
  const handleEnter = (e) => {
    if (e.code === "Enter") {
      fetchSearchMovie(valueInput)
        .then(setQuery)
        .catch((err) => console.log(err.message));
      history.push(`${match.url}?query=${valueInput}`);
    }
  };
  const BASE_IMG = "https://image.tmdb.org/t/p/w500";
  const onChangeName = (e) => {
    setValueInput(e.currentTarget.value.toLowerCase());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    fetchSearchMovie(valueInput)
      .then(setQuery)
      .catch((err) => console.log(err.message));
    history.push(`${match.url}?query=${valueInput}`);
    if (query === "Error" || query.results?.length === 0) {
      setTimeout(() => {
        // console.log("object");
        // console.log(query);
        return toast.error("Not found!");
      }, 0);
    }
  };
  return (
    <MoviePageStyles>
      <h3 className="SearchForm__title">Movies</h3>
      <label className="SearchForm__label">
        <input
          value={valueInput}
          onChange={onChangeName}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
        />
        <Btn
          onKeyPress={onSubmit}
          handler={onSubmit}
          spanStyles="SearchForm-button-label"
          btnStyles="SearchForm-button"
        />
      </label>

      <ul className="ImageGallery">
        <CardMovie
          filmTrend={query.results}
          BASE_IMG={BASE_IMG}
          location={location}
        />
      </ul>
    </MoviePageStyles>
  );
};
export default Movies;
