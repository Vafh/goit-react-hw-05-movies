import { useEffect, useState } from "react";
// import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchTranding } from "../service/Request";
import FilmsDetails from "./filmsDetails/FilmsDetails";
import HomePage from "./homePage/HomePage";
import Movies from "./movies/Movies";
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
          <Movies />
        </Route>
        <Route path="/films/:filmsId">
          <FilmsDetails />
        </Route>
      </Switch>
      <ToastContainer />
    </>
  );
}
