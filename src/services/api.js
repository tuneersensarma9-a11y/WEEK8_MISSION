const API_KEY ="1af03a90b32eb69b3b9739ba60f6f3dc";

const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

export const fetchPopularMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  return res.json();
};

export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return res.json();
};