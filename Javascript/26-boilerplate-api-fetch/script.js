const getMovies = async () => {
  let data = await getData();
  console.log(data);
};

getMovies();
