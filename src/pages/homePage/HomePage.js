import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardMovie from "../../components/cardMovie/CardMovie";
import { fetchTranding } from "../../service/Request";
import { HomePageStyled } from "./HomePageStyles";
const HomePage = () => {
  const BASE_IMG = "https://image.tmdb.org/t/p/w200";
  const location = useLocation();
  const [filmTrend, setFilmTrend] = useState([]);
  useEffect(() => {
    fetchTranding()
      .then((res) => setFilmTrend((prev) => [...prev, ...res.results]))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <HomePageStyled>
      <h3 className="homePage-title">Tranding</h3>
      <ul className="homePage-list">
        <CardMovie
          BASE_IMG={BASE_IMG}
          filmTrend={filmTrend}
          location={location}
        />
      </ul>
      <hr />
    </HomePageStyled>
  );
};

export default HomePage;
