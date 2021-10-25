import { useEffect, useState, lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchTranding } from "../service/Request";
const Navigation = lazy(() => import("./navigation/Navigation"))
const MoviesPage = lazy(() => import("../pages/moviesPage/MoviesPage"))
const HomePage = lazy(() => import("../pages/homePage/HomePage"))
const FilmsDetailsPage = lazy(() => import("../pages/filmsDetailsPage/FilmsDetailsPage"))

export default function App() {
  const [filmTrend, setFilmTrend] = useState([]);
  useEffect(() => {
    fetchTranding().then((res) =>
      setFilmTrend((prev) => [...prev, ...res.results])
    );
  }, []);
  return (
    <>
      <Suspense fallback={<Loader/>}>
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
        </Suspense>
    </>
  );
}
