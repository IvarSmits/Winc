const API_KEY = "916b3a04a81da34104612c353dd96165";

const getData = async () => {
  try {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=916b3a04a81da34104612c353dd96165`;
    let res = await fetch(apiUrl);
    return await res.json();
  } catch (error) {
    console.log("error", error);
  }
};
