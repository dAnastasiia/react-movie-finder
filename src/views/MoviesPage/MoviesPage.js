import React, { Component } from 'react';

// import PropTypes from 'prop-types';
import api from '../../services/movies-api';

import MoviesList from '../../components/MoviesList';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  ///ПОЧИНИТЬ ОТРИСОВКУ - ПОСЛЕ САБМИТА
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      const response = await api.fetchMovies(this.state.query);

      this.setState({ movies: [...response] });
    }
  }

  handleChange = e => {
    const value = e.currentTarget.value;
    this.setState({ query: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query, movies } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit">Search</button>
        </form>

        {movies && <MoviesList movies={movies} />}
      </>
    );
  }
}

export default MoviesPage;
