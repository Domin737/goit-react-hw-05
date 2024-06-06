import axios from 'axios';

const API_KEY = '1efe92e76ecf8940ef24fa2a53d5512a';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await api.get('/trending/movie/day');
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await api.get('/search/movie', {
    params: {
      query,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
