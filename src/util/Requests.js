// const { ApiKey } = require("../config/tmbdConfig.js");
const API_KEY = "5e6bf1da9afe9aae627b882d61d1eaa3";

exports.requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&page=2&language=en=US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&page=NO&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&page=2&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  // fetchNetflixOriginalsById: `/tv/ID?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginalsById: `/tv/ID?api_key=${API_KEY}&append_to_response=videos`,
  fetchMoviesById: `/movie/ID?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
  // fetchLatestTv: `/tv/latest?api_key=${API_KEY}&language=en-US&with_networks=213&include_adult=true`,
  fetchLatestTv: `/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=5`,
  fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}&language=en=US&with_networks=213&include_adult=true`,
  fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=en-US&page=2&with_networks=213&include_adult=true`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1&&with_networks=213`,
  fetchMarvelMovies: `/search/movie?api_key=${API_KEY}&language=en-US&query=marvels%20&page=1&include_adult=true`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchNetflixTrailer: `/tv/SEASONID/season/SEASON_NUM/videos?api_key=${API_KEY}&language=en-US`,
  fetchMoviesCast: `/movie/ID/casts?api_key=${API_KEY}`,
  fetchMoviesNetflixCast: `/tv/ID/credits?api_key=${API_KEY}&language=en-US`,
  fetchEpisode: `/tv/ID/season/SNO/episode/ENO?api_key=${API_KEY}&language=en-US`,
};

// export default requests;
// https://api.themoviedb.org/3/trending/all/week?api_key=5e6bf1da9afe9aae627b882d61d1eaa3&language=en=US
