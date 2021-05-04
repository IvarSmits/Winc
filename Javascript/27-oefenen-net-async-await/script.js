const LION_KING_IMDBID = "tt6105098";

const renderMovieGenres = async () => {
  const movieGenresList = document.getElementsByClassName(
    "js-movie-genre-list"
  );
  const data = await getMovieGenres();
  data.genres.forEach((movieGenre) => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `genre naam: ${movieGenre.name}, id: ${movieGenre.id}`
    );
    li.appendChild(liContent);
    movieGenresList[0].append(li);
  });
};

const renderSingleMovie = async (id) => {
  const data = await getMovieById(id);
  const movie = data.movie_results[0];
  const topMovieParagraph = document.getElementsByClassName(
    "js-top-movie-of-all-time"
  )[0];
  topMovieParagraph.appendChild(document.createTextNode(movie.title));
};

const renderTopRatedMovies = async () => {
  const topRatedList = document.getElementsByClassName(
    "js-top-rated-movies"
  )[0];
  const data = await getTopRatedMovies();
  const topTen = data.results.splice(0, 10);
  topTen.forEach((movie) => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `${movie.title}, rating: ${movie.vote_average}`
    );
    li.appendChild(liContent);
    topRatedList.append(li);
  });
};

const RenderTopRatedMoviesInActionGenre = async () => {
  const topRatedList = document.getElementsByClassName(
    "js-top-rates-movies-in-action-genre"
  )[0];
  const data = await getTopRatedMoviesInGenreId(28);
  const results = data.results;
  results.forEach((movie) => {
    const li = document.createElement("li");
    const liContent = document.createTextNode(
      `${movie.title}, rating: ${movie.vote_average}, vote count: ${movie.vote_count}`
    );
    li.appendChild(liContent);
    topRatedList.append(li);
  });
};

renderSingleMovie("tt1136608");
renderMovieGenres();
renderTopRatedMovies();
RenderTopRatedMoviesInActionGenre();
