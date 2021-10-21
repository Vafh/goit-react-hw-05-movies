import React, { useEffect, useState } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link, useLocation } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieDetailsAuthors,
  fetchMovieDetailsReviews,
} from "../../service/Request";
import BtnGoBack from "../../components/btn/btn";
import MovieAuthorsPage from "../movieAuthorsPage/MovieAuthorsPage";
import MovieReviewsPage from "../movieReviewsPage/MovieReviewsPage";
const FilmsDetails = () => {
  const { filmsId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [from, setFrom] = useState(null);
  const location = useLocation();
  const BASE_IMG = "https://image.tmdb.org/t/p/w200";
  useEffect(() => {
    fetchMovieDetails(filmsId).then(setMovieDetails);
    fetchMovieDetailsAuthors(filmsId).then(setAuthors);
    fetchMovieDetailsReviews(filmsId).then(setReviews);
  }, [filmsId]);
  useEffect(() => {
    if (!location.state) return;
    location.state?.from && setFrom(location.state.from);
  }, [location.state]);
  const matchUrl = useRouteMatch();
  const goBack = from;
  return (
    <>
      <BtnGoBack goBack={goBack} />
      {movieDetails && (
        <>
          {movieDetails.poster_path && (
            <img
              className="movieCard"
              src={`${BASE_IMG}/${movieDetails.poster_path}`}
              alt=""
            />
          )}

          <h3>
            {movieDetails.title}(
            {new Date().getFullYear(movieDetails.release_date)})
          </h3>
          <p>Vote average: {movieDetails.vote_average * 10}%</p>
          <h4>Overview</h4>
          <p>{movieDetails.overview}</p>
          <ul>
            Genres
            {movieDetails.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <hr />

          <ul>
            Additional information
            {authors && (
              <>
                <Link to={`${matchUrl.url}/cast`}>
                  <li>Cast</li>
                </Link>
                <Link to={`${matchUrl.url}/reviews`}>
                  <li>Reviews</li>
                </Link>
              </>
            )}
          </ul>
          <hr />
          <ul>
            <Route path={`${matchUrl.url}/cast`}>
              <MovieAuthorsPage img={BASE_IMG} authors={authors} />
            </Route>
          </ul>
          <ul>
            <Route path={`${matchUrl.url}/reviews`}>
              <MovieReviewsPage reviews={reviews} />
            </Route>
          </ul>
        </>
      )}
    </>
  );
};

export default FilmsDetails;
