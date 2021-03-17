import React, { Component } from 'react';
import api from '../../services/movies-api';

import MoviesList from '../../components/MoviesList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await api.fetchTrending();

    this.setState({ movies: [...response] });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1 className="home-title">Trending today</h1>
        {movies && <MoviesList movies={movies} />}
      </>
    );
  }
}

export default HomePage;
