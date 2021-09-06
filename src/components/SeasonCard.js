import React from "react";
import { Link } from "react-router-dom";
import "./css/SeasonCard.css";

function SeasonCard(props) {
  return (
    <div className="seasoncard">
      <Link
        to={
          props.movie?.season_number >= 0 && props.id
            ? `/stemson/${props.movie?.season_number}/${props.id}/${
                props.movie.season_number + "-" + props.movie.episode_count
              }/${
                props.DefaultTrailer.length > 0 ? props.DefaultTrailer : "null"
              }`
            : "#"
        }
      >
        <div className="seasoncard__body">
          <div className="seasoncard__img">
            <img
              src={
                props.movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${props.movie.poster_path}`
                  : "/images/default-poster.png"
              }
              alt=""
            />
          </div>
          <div className="seasoncard__content">
            <h2 className="seasoncard__content__h2">{props.movie.name}</h2>
            <p className="seasoncard__content__p">
              {props.movie.overview
                ? props.movie.overview
                : "Lorem ipsum dolor sit amen consenter a nipissing elite. Sapele veldt, vera libero debits officio militia amen. Aspirator, voluptati bus larum eagle presenting a fugit. Minima."}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SeasonCard;
