import React, { useState, useEffect } from "react";
import "./css/Banner.css";
import axios from "../axios";
import { requests } from "../util/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.fetchNetflixOriginals.replace(
          "NO",
          Math.round(Math.random() * 20)
        )
      );

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  // console.log(movie);
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(${
      movie?.backdrop_path
        ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
        : "/images/default_banner2.jpg"
    })`,
    backgroundPosition: "center center",
  };
  return (
    <div className="bannerCover">
      <div className="banner" style={bannerStyle}>
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name || "Dark"}
          </h1>
          <h1 className="banner__description">
            {movie?.overview
              ? truncate(movie?.overview, 200)
              : `A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town.`}

            {/* {movie?.overview
                        ? truncate(movie?.overview, 200)
                        : setInterval(function () {
                            return `A missing child causes four families to help each other for answers. What they could not imagine is that this mystery would be connected to innumerable other secrets of the small town.`;
                          }, 1000)} */}
          </h1>
          <div className="banner__buttons">
            <button className="banner__btn banner__btn-p">Play</button>
            <button className="banner__btn">My List</button>
          </div>
        </div>
        <div className="banner__fadeBottom" />
      </div>
    </div>
  );
}

export default Banner;
