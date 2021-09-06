import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./css/Movies.css";
import axios from "../axios";
import { requests } from "../util/Requests";
import Githlogo from "../components/Githlogo";
function Movies() {
  const baseurl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [marvel, setMarvel] = useState([]);
  //   const [popular, setPopular] = useState([]);

  useEffect(() => {
    async function data() {
      const latest = await await axios.get(requests.fetchPopularMovies);
      setMovies(latest.data.results.slice(0, 10));

      const marvel = await axios.get(requests.fetchScienceFictionMovies);

      setMarvel(marvel.data.results.slice(0, 20));

      //   const popular = await axios.get(requests.fetchPopularTV);
      //   setPopular(popular.data.results.slice(0, 20));
    }
    data();
  }, []);

  return (
    <div className="Movies">
      <Nav movies={true} />
      <Githlogo />
      <div className="Movies__content">
        <h1>Movies</h1>
        <div className="Movies__section">
          <h1>Latest</h1>
          <div className="Movies__poster">
            {movies.map((el) => {
              const Style2 = {
                backgroundImage: `url(${baseurl + el.poster_path})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              };
              return (
                <Link to={`/TrailerMovie/${el.id}`} key={el.id}>
                  <div className="Movies__img" style={Style2}>
                    <div className="Movies__content__img">
                      <h1 className="Movies__img__title">
                        {el.title || el.name || el.original_title}
                      </h1>
                      <p className="Movies__img__p">
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

        <div className="Movies__section">
          <h1>Marvel Movies</h1>
          <div className="Movies__poster">
            {marvel.map((el) => {
              const Style2 = {
                backgroundImage: `url(${baseurl + el.poster_path})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              };
              return (
                <Link to={`/TrailerMovie/${el.id}`} key={el.id}>
                  <div className="Movies__img" style={Style2}>
                    <div className="Movies__content__img">
                      <h1 className="tvShow__img__title">
                        {el.title || el.name || el.original_title}
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

        {/* <div className="Movies__section">
          <h1>Popular</h1>
          <div className="Movies__poster">
            {popular.map((el) => {
              const Style3 = {
                backgroundImage: `url(${baseurl + el.poster_path})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              };
              return (
                <Link to={`/trailerScreen/${el.id}`}>
                  <div className="Movies__img" style={Style3}>
                    <div className="Movies__content__img">
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
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
