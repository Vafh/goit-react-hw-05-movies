import React from "react";
import { Link, useLocation } from "react-router-dom";
const HomePage = ({ filmTrend }) => {
  const location = useLocation();
  console.log(filmTrend);
  return (
    <>
      <h3>Tranding</h3>
      <ul>
        {filmTrend.map((film) => {
          return (
            <Link
              key={film.id}
              to={{
                pathname: `/films/${film.id}`,
                state: { from: location },
              }}
            >
              <li key={film.id}>{film.original_title}</li>
            </Link>
          );
        })}
      </ul>
      <hr />
    </>
  );
};

export default HomePage;
