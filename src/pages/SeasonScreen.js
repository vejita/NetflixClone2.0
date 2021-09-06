import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import "./css/SeasonScreen.css";
import { requests } from "../util/Requests";
import axios from "../axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import Demo from "../components/Demo";
import EpisodeCard from "../components/EpisodeCard";
import Loader from "../components/Loader";
import Githlogo from "../components/Githlogo";
function SeasonScreen(props) {
  const [season, setSeason] = useState({});
  const [cast, setCast] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const params = useParams();

  //   console.log(params.link.split(",")[0]);
  //   console.log(params.link.split(",")[0] !== "null");
  // fetchMoviesNetflixCast

  useEffect(() => {
    if (!props.movie) {
      const link = requests.fetchEpisode
        .replace("ID", params.id)
        .replace("SNO", params.numberS.split("-")[0]);
      const episodesTemp = [];

      async function process() {
        for (let i = 1; i <= params.numberS.split("-")[1] * 1; i++) {
          await axios
            .get(link.replace("ENO", i))
            .then((el) => {
              episodesTemp.push(el.data);
            })
            .catch((error) => {
              console.log(error);
              // alert(error);
            });
        }
        await setEpisodes(episodesTemp);
      }
      process();
      axios
        .get(
          requests.fetchNetflixTrailer
            .replace("SEASON_NUM", params.seasonNum)
            .replace("SEASONID", params.id)
        )
        .then((el) => {
          // console.log(el.data.results[0]);
          setSeason(el.data.results[0]);
        })
        .catch((error) => {
          alert(error);
        });
      axios
        .get(requests.fetchMoviesNetflixCast.replace("ID", params.id))
        .then((el) => {
          setCast(
            el.data.cast
              .filter((el) => el.known_for_department === "Acting")
              .slice(0, 30)
          );
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }

    if (props.movie) {
      axios
        .get(requests.fetchMoviesCast.replace("ID", params.id))
        .then((el) => {
          // console.log(
          //   el.data.cast
          //     .filter((el) => el.known_for_department === "Acting")
          //     .slice(0, 30)
          // );
          setCast(
            el.data.cast
              .filter((el) => el.known_for_department === "Acting")
              .slice(0, 30)
          );
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    }
  }, [params.seasonNum, params.id, props.movie, params.numberS]);
  // episodes.map((el) => console.log(el.still_path));
  return (
    <div>
      <Nav />
      <Githlogo />
      {season?.key || params.link.split(",")[0] !== "null" ? (
        <>
          <div className="SeasonScreen__bannerVideo">
            <ReactPlayer
              width="100%"
              height="100%"
              playing={true}
              url={`https://www.youtube.com/watch?v=${
                season?.key ? season.key : params.link.split(",")[0]
              }`}
            />
          </div>
          <h1 className="SeasonScreen__had">Cast</h1>

          <div className="SeasonScreen__RowGeners">
            {cast.map((el) => {
              if (el.profile_path) {
                const style = {
                  backgroundImage: `url(${`https://image.tmdb.org/t/p/original${el.profile_path}`})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                };

                return (
                  <div
                    className="SeasonScreen__RowImg"
                    key={el.id}
                    style={style}
                  >
                    <div className="SeasonScreen__container">
                      <h3 className="SeasonScreen__CastName">
                        {el.character?.replace(" / ", "-")}
                      </h3>
                      <h3 className="SeasonScreen__CastOriginalName">
                        {el.name || el.original_name}
                      </h3>
                    </div>
                  </div>
                );
              }
              return "";
            })}
          </div>
          <div className="SeasonScreen__episodes">
            {!props.movie ? (
              episodes.length === 0 ? (
                <Loader />
              ) : (
                episodes?.map((el) => {
                  return <EpisodeCard el={el} key={el.id} />;
                })
              )
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <Demo />
      )}
      <Footer />
    </div>
  );
}

export default SeasonScreen;
