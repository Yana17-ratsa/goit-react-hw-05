import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '71e93eac49ede8372c0672802ad05641';

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export const getMovieBySearch = async(query) => {
  const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US`);
  return response.data;
}

export const getMovieDetails = async(movieId) => {
  const response = await axios.get(`movie/movie_id=${movieId}?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`movie/movie_id=${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export const getMovieReviews = async(movieId) => {
  const response = await axios.get(`movie/movie_id=${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
}