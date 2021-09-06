import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./css/TrailerMovie.css";
import Githlogo from "../components/Githlogo";
// import SeasonCard from "../components/SeasonCard";
import axios from "../axios";
import { requests } from "../util/Requests";

function TrailerMovie() {
  const history = useHistory();
  const { id, category } = useParams();
  const [movie, setMovie] = useState({});
  const [netflix, setNetflix] = useState([]);

  useEffect(() => {
    axios
      .get(requests.fetchMoviesById.replace("ID", id))
      .then((el) => {
        // console.log(el.data);
        setMovie(el.data);
        setNetflix(
          movie.videos?.results
            ?.map((el) => (el.name.match(/Netflix/gi) ? el.key : "#="))
            ?.filter((el) => el !== "#=")
        );

        // console.log(arr);
      })
      .catch((error) => {
        alert(error);
      });
  }, [id, category, movie.videos]);

  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
    backgroundPosition: "center center",
  };

  return (
    <div className="TrailerMovie">
      <nav className="TrailerMovie__nav">
        <div
          className="TrailerMovie__nav__logo"
          onClick={() => {
            history.goBack();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="TrailerMovie__bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
        <div className="TrailerMovie__nav__search">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg> */}
        </div>
      </nav>
      <Githlogo />
      <div className="TrailerMovie__banner" style={bannerStyle}>
        <div className="TrailerMovie__banner__fadeBottom" />
      </div>
      <div className="TrailerMovie__content">
        <div className="TrailerMovie__titleBox">
          <div className="TrailerMovie__titleBox__left">
            <h1> {movie?.title || movie?.name || movie?.original_name}</h1>
            <h2>{movie?.tagline ? movie.tagline : ""}</h2>
            <h3>
              <span className="year">{movie.release_date?.split("-")[0]}</span>
              <span className="something">{movie?.adult ? "18+" : ""}</span>
              <span className="season">
                Average Rating {movie.vote_average}
              </span>
            </h3>
            <div className="flex">
              {movie.genres?.map((el) => {
                return (
                  <span className="TrailerMovie__tags" key={el.id}>
                    {el.name}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="TrailerMovie__titleBox__right">
            <button>+ MY LISt</button>
          </div>
        </div>
        <div className="TrailerMovie__summary">
          <p>{movie.overview}</p>
        </div>
        <div className="TrailerMovie__seasons">
          <h2>Movie</h2>
          <Link
            to={`/trailerMovie/${id}/trailer/${movie.videos?.results?.map(
              (el) => el.key
            )},a`}
          >
            <div className="TrailerMovie__movieBox">
              <div className="TrailerMovie__body">
                <div className="TrailerMovie__img">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        : "/images/default-poster.png"
                    }
                    alt=""
                  />
                </div>
                <div className="TrailerMovie__content">
                  <h2>{movie?.title || movie?.name || movie?.original_name}</h2>

                  <p>
                    {movie.overview
                      ? movie.overview?.length > 200
                        ? movie.overview.substr(0, 200 - 1) + "..."
                        : movie.overview
                      : "Lorem ipsum dolor sit amen consenter a nipissing elite. Sapele veldt, vera libero debits officio militia amen. Aspirator, voluptati bus larum eagle presenting a fugit. Minima."}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrailerMovie;
