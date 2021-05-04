const API_KEY = "916b3a04a81da34104612c353dd96165";
const BASE_URL = "https://api.themoviedb.org/3";

const getData = async () => {
  try {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=916b3a04a81da34104612c353dd96165`;
    let res = await fetch(apiUrl);
    return await res.json();
  } catch (error) {
    console.log("error", error);
  }
};

const getMovieGenres = async () => {
  const APIEndpoint = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(APIEndpoint);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getMovieById = async (movieId) => {
  const movieByidEndpoint = `${BASE_URL}/find/${movieId}?external_source=imdb_id&api_key=${API_KEY}`;
  try {
    const res = await fetch(movieByidEndpoint);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedMovies = async () => {
  const topRatedMoviesEndpoint = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
  try {
    const res = await fetch(topRatedMoviesEndpoint);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedMoviesInGenreId = async (genreId) => {
  const topRatedMoviesEndpoint = `${BASE_URL}/discover/movie?with_genres=${genreId}&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
  try {
    const res = await fetch(topRatedMoviesEndpoint);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
