import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { Fragment } from "react";
import Normalize from "react-normalize";

const Navigation = lazy(() => import("./navigation/Navigation"));
const MoviesPage = lazy(() => import("../pages/moviesPage/MoviesPage"));
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const FilmsDetailsPage = lazy(() =>
  import("../pages/filmsDetailsPage/FilmsDetailsPage")
);

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader type="TailSpin" />}>
        <Fragment>
          <Normalize />
          <Navigation />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/films">
              <MoviesPage />
            </Route>
            <Route path="/films/:filmsId">
              <FilmsDetailsPage />
            </Route>
          </Switch>
          <ToastContainer />
        </Fragment>
      </Suspense>
    </>
  );
}
