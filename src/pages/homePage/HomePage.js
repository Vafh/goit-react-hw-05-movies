import React from "react";
import { useLocation } from "react-router-dom";
import CardMovie from "../cardMovie/CardMovie";
const HomePage = ({ filmTrend }) => {
  const location = useLocation();
  return (
    <>
      <h3>Tranding</h3>
      <ul>
        <CardMovie filmTrend={filmTrend} location={location} />
      </ul>
      <hr />
    </>
  );
};

export default HomePage;
