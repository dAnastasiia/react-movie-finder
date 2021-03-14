import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import api from '../../services/movies-api';

import MoviesList from '../../components/MoviesList';

// apiKey = '42c4fa9c05708253e8c2f9a05f447e85';
// const baseUrl = 'https://api.themoviedb.org/3';
// popularMovies = '/trending/all/day';
// searchMovies = '/search/movie';
// movieDetail = '/movie/:movieId';
// credits = '/movie/{movie_id}/credits';
// review ='/movie/{movie_id}/review';
//genres = '/genre/movie/list';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await api.fetchTrending();
    // console.log(response);

    this.setState({ movies: [...response] });
  }

  render() {
    const { movies } = this.state;

    return <>{movies && <MoviesList movies={movies} />}</>;
  }
}

export default HomePage;
