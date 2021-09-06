import React from "react";
import "../pages/css/SeasonScreen.css";
function EpisodeCard(props) {
  return (
    <div className="SeasonScreen__episode">
      <div className="SeasonScreen__episodeImageCover">
        <img
          className="SeasonScreen__episodeImage"
          src={
            props.el.still_path
              ? `https://image.tmdb.org/t/p/original${props.el.still_path}`
              : "/images/unavailable-image.jpg"
          }
          alt=""
        />
      </div>
      <div className="SeasonScreen__episodeContent">
        <h1 className="SeasonScreen__episodeContentHeading">{props.el.name}</h1>
        <p className="SeasonScreen__episodeContentDescription">
          {props.el.overview}
        </p>
      </div>
    </div>
  );
}

export default EpisodeCard;
