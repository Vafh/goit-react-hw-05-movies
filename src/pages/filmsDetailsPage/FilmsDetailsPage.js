import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, useParams, useRouteMatch, useHistory } from "react-router";
import { Link, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../service/Request";
const Btn = lazy(() => import("../../components/btn/btn"));
const MovieAuthorsPage = lazy(() =>
  import("../../components/movieAuthorsPage/MovieAuthorsPage")
);
const MovieReviewsPage = lazy(() =>
  import("../../components/movieReviewsPage/MovieReviewsPage")
);

const FilmsDetails = () => {
  const { filmsId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [from, setFrom] = useState(null);
  const location = useLocation();
  const BASE_IMG = "https://image.tmdb.org/t/p/w200";
  useEffect(() => {
    fetchMovieDetails(filmsId)
      .then(setMovieDetails)
      .catch((err) => console.log(err.message));
  }, [filmsId]);
  useEffect(() => {
    if (!location.state) return;
    location.state?.from && setFrom(location.state.from);
  }, [location.state]);
  const matchUrl = useRouteMatch();
  const goBack = from;
  const history = useHistory();
  const onClick = () => {
    history.push(goBack || "/");
  };
  return (
    <>
      <Btn handler={onClick} text="Go back" btnStyles="button" />
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
            <>
              <Link to={`${matchUrl.url}/cast`}>
                <li>Cast</li>
              </Link>
              <Link to={`${matchUrl.url}/reviews`}>
                <li>Reviews</li>
              </Link>
            </>
          </ul>
          <hr />
          <ul>
            <Route path={`${matchUrl.url}/cast`}>
              <Suspense fallback={<div>Loading...</div>}>
                <MovieAuthorsPage filmsId={filmsId} img={BASE_IMG} />
              </Suspense>
            </Route>
          </ul>
          <ul>
            <Route path={`${matchUrl.url}/reviews`}>
              <Suspense fallback={<div>Loading...</div>}>
                <MovieReviewsPage filmsId={filmsId} />
              </Suspense>
            </Route>
          </ul>
        </>
      )}
    </>
  );
};

export default FilmsDetails;
