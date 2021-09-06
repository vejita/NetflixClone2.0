import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Row.css";
import axios from "../axios";
// import RowBanner from "./RowBanner";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData(params) {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchUrl]);

  // /*  const sendData = (el, movie) => {
  //    console.log(movie);
  //  };  */

  return (
    <>
      <div className="row">
        <h2 className="row__movieName">{props.title}</h2>
        <div className="row__posters">
          {movies.map((movie) => {
            if (
              (props.isLargeRow && movie.poster_path) ||
              (!props.isLargeRow && movie.backdrop_path)
            ) {
              const Style = {
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${
                  props.isLargeRow ? movie.poster_path : movie.backdrop_path
                })`,
                backgroundPosition: "center center",
              };

              return (
                <Link
                  to={
                    props.isLargeRow
                      ? `/trailerScreen/${movie.id}`
                      : `/trailerMovie/${movie.id}`
                  }
                  key={movie.id}
                >
                  <div
                    className={`row__poster ${
                      props.isLargeRow && "row__posterLarge"
                    }`}
                    // onClick={(el, movie) => sendData(el, movie)}
                    style={Style}
                  >
                    <div className="row__content">
                      <div
                        className={
                          props.isLargeRow
                            ? "row_content-box-large"
                            : "row_content-box"
                        }
                      >
                        <h1 className="content__title">
                          {movie?.title || movie?.name}
                        </h1>
                        <p className="content__description">
                          {movie.overview?.length > 90
                            ? movie.overview.substr(0, 90 - 1) + "..."
                            : movie.overview}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            } else {
              return "";
            }
          })}
        </div>
      </div>
      {/* <RowBanner /> */}
      {/* <TrailerWindow /> */}
    </>
  );
}

export default Row;
