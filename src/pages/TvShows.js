import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./css/TvShows.css";
import axios from "../axios";
import { requests } from "../util/Requests";
import Githlogo from "../components/Githlogo";
function TvShows() {
  const baseurl = "https://image.tmdb.org/t/p/original";
  const [latest, setLatest] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    async function data() {
      const latest = await await axios.get(requests.fetchLatestTv);
      setLatest(latest.data.results.slice(0, 10));

      const topRated = await axios.get(requests.fetchTrendingTV);

      setTopRated(topRated.data.results.slice(0, 20));

      const popular = await axios.get(requests.fetchPopularTV);
      setPopular(popular.data.results.slice(0, 20));
    }
    data();
  }, []);

  return (
    <div className="tvShows">
      <Nav tvShow={true} />
      <Githlogo />
      <div className="tvShows__content">
        <h1>TV Shows</h1>
        <div className="tvShows__section">
          <h1>Latest</h1>
          <div className="tvShows__poster">
            {latest.map((el) => {
              const Style2 = {
                backgroundImage: `url(${baseurl + el.poster_path})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              };
              return (
                <Link to={`/trailerScreen/${el.id}`}>
                  <div className="tvShows__img" style={Style2} key={el.id}>
                    <div className="tvShows__content__img">
                      <h1 className="tvShow__img__title">
                        {el.name || el.original_name}
                      </h1>
                      <p className="tvShow__img__p">
                        {el.overview?.length > 90
                          ? el.overview.substr(0, 200 - 1) + "..."
                          : el.overview}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="tvShows__section">
          <h1>Top Rated</h1>
          <div className="tvShows__poster">
            {topRated.map((el) => {
              const Style2 = {
                backgroundImage: `url(${baseurl + el.poster_path})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              };
              return (
                <Link to={`/trailerScreen/${el.id}`}>
                  <div className="tvShows__img" style={Style2}>
                    <div className="tvShows__content__img">
                      <h1 className="tvShow__img__title">
                        {el.name || el.original_name}
                      </h1>
                      <p className="tvShow__img__p">
                        {el.overview?.length > 90
                          ? el.overview.substr(0, 200 - 1) + "..."
                          : el.overview}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="tvShows__section">
          <h1>Popular</h1>
          <div className="tvShows__poster">
            {popular.map((el) => {
              const Style3 = {
                backgroundImage: `url(${baseurl + el.poster_path})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              };
              return (
                <Link to={`/trailerScreen/${el.id}`}>
                  <div className="tvShows__img" style={Style3}>
                    <div className="tvShows__content__img">
                      <h1 className="tvShow__img__title">
                        {el.name || el.original_name}
                      </h1>
                      <p className="tvShow__img__p">
                        {el.overview?.length > 90
                          ? el.overview.substr(0, 200 - 1) + "..."
                          : el.overview}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TvShows;
