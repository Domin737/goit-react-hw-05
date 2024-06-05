const API_KEY = '1efe92e76ecf8940ef24fa2a53d5512a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async query => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const fetchMovieCredits = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};
