import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import "./css/TrailerScreen.css";
import SeasonCard from "../components/SeasonCard";
import axios from "../axios";
import { requests } from "../util/Requests";
import Githlogo from "../components/Githlogo";
function TrailerScreen() {
  const { id, category } = useParams();
  const [movie, setMovie] = useState({});
  const history = useHistory();

  useEffect(() => {
    axios
      .get(requests.fetchNetflixOriginalsById.replace("ID", id))
      .then((el) => {
        // console.log(el.data);
        setMovie(el.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [id, category]);

  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
    backgroundPosition: "center center",
  };

  return (
    <div className="trailerScreen">
      <nav className="trailerScreen__nav">
        <div
          className="trailerScreen__nav__logo"
          onClick={() => {
            history.goBack();
          }}
          style={{ cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            className="bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
        <div className="trailerScreen__nav__search">
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

      <div className="trailerScreen__banner" style={bannerStyle}>
        <div className="trailerScreen__banner__fadeBottom" />
      </div>
      <div className="trailerScreen__content">
        <div className="trailerScreen__titleBox">
          <div className="trailerScreen__titleBox__left">
            <h1> {movie?.title || movie?.name || movie?.original_name}</h1>
            <h2>{movie?.tagline ? movie.tagline : ""}</h2>
            <h3>
              <span className="year">
                {movie.first_air_date?.split("-")[0]}
              </span>
              <span className="something">TV-14</span>
              <span className="season">
                Total Seasons {movie.number_of_seasons}
              </span>
            </h3>
            {movie.genres?.map((el) => {
              return (
                <span className="trailerScreen__tags" key={el.id}>
                  {el.name}
                </span>
              );
            })}
          </div>
          <div className="trailerScreen__titleBox__right">
            <button>+ MY LISt</button>
          </div>
        </div>
        <div className="trailerScreen__summary">
          <p>{movie.overview}</p>
        </div>
        <div className="trailerScreen__seasons">
          <h2>seasons</h2>
          {movie.seasons?.map((el) => (
            <SeasonCard
              movie={el}
              id={id}
              DefaultTrailer={movie.videos?.results?.map(
                (el) => el.key && el.key
              )}
              key={el.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrailerScreen;
