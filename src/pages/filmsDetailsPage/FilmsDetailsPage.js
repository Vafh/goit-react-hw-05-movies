import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, useParams, useRouteMatch, useHistory } from "react-router";
import { Link, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../service/Request";
import { FilmsDetailsPageStyles } from "./FilmsDetailsPageStyles";
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
  const IMG_PLUG =
    "https://imgp.whaleshares.io/pimgp/a/einstei1/p/image-not-found-shitpostfriday/0x0/https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png";

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
    <FilmsDetailsPageStyles>
      <Btn handler={onClick} text="Go back" btnStyles="button" />
      {movieDetails && (
        <div className="filmsDetails__box">
          <div className="filmsDetails__flex">
            {movieDetails.poster_path && (
              <img
                className="ImageGalleryItem-image"
                src={`${BASE_IMG}/${movieDetails.poster_path}`}
                alt=""
              />
            )}
            <div className="filmsDetails__content">
              <h3 className="filmsDetails__title">
                {movieDetails.title}(
                {new Date().getFullYear(movieDetails.release_date)})
              </h3>

              <p className="filmsDetails__text">
                Vote average: {movieDetails.vote_average * 10}%
              </p>
              <h3 className="filmsDetails__title">Overview</h3>
              <p className="filmsDetails__text">{movieDetails.overview}</p>
              <h3 className="filmsDetails__title">Genres</h3>
              <ul className="genres">
                {movieDetails.genres?.map((genre) => (
                  <li className="genres__item" key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <h3 className="filmsDetails__title">Additional information</h3>
          <ul>
            <li className="genres__item">
              <Link to={`${matchUrl.url}/cast`}>Cast</Link>
            </li>
            <li className="genres__item">
              <Link to={`${matchUrl.url}/reviews`}>Reviews</Link>
            </li>
          </ul>
          <hr />
          <ul className="additional-information-list">
            <Route path={`${matchUrl.url}/cast`}>
              <Suspense fallback={<div>Loading...</div>}>
                <MovieAuthorsPage
                  filmsId={filmsId}
                  img={BASE_IMG}
                  IMG_PLUG={IMG_PLUG}
                />
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
        </div>
      )}
    </FilmsDetailsPageStyles>
  );
};

export default FilmsDetails;
