import axios from 'axios';

const fetchTrending = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=42c4fa9c05708253e8c2f9a05f447e85`,
    )
    .then(res => res.data.results);
};

const fetchMovies = searchQuery => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=42c4fa9c05708253e8c2f9a05f447e85&query=${searchQuery}`,
    )
    .then(res => res.data.results);
};

const fetchMovieById = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=42c4fa9c05708253e8c2f9a05f447e85`,
    )
    .then(res => res.data);
};

const fetchMovieCast = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=42c4fa9c05708253e8c2f9a05f447e85`,
    )
    .then(res => res.data);
};

const fetchMovieReview = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=42c4fa9c05708253e8c2f9a05f447e85`,
    )
    .then(res => res.data.results);
};

const api = {
  fetchTrending,
  fetchMovies,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReview,
};

export default api;
