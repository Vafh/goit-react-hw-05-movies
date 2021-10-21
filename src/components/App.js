import { useEffect, useState } from "react";
// import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchTranding } from "../service/Request";
import FilmsDetailsPage from "../pages/filmsDetailsPage/FilmsDetailsPage";
import HomePage from "../pages/homePage/HomePage";
import MoviesPage from "../pages/moviesPage/MoviesPage";
import Navigation from "./navigation/Navigation";

export default function App() {
  const [filmTrend, setFilmTrend] = useState([]);
  useEffect(() => {
    fetchTranding().then((res) =>
      setFilmTrend((prev) => [...prev, ...res.results])
    );
  }, []);
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage filmTrend={filmTrend} />
        </Route>
        <Route exact path="/films">
          <MoviesPage />
        </Route>
        <Route path="/films/:filmsId">
          <FilmsDetailsPage />
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}
