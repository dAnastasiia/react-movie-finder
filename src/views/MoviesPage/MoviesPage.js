import React, { Component } from 'react';
import api from '../../services/movies-api';

import MoviesList from '../../components/MoviesList';

class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  async componentDidMount() {
    const query = localStorage.getItem('query');

    if (query) {
      await api.fetchMovies(query).then(data => {
        this.setState({ movies: [...data] });
      });
    }
  }

  handleChange = e => {
    const value = e.currentTarget.value;
    this.setState({ query: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    api.fetchMovies(this.state.query).then(data => {
      this.setState({ movies: [...data] });
    });

    localStorage.setItem('query', this.state.query);

    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query, movies } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <input
            className="SearchForm-input"
            onChange={this.handleChange}
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit" className="SearchForm-button">
            Search
          </button>
        </form>

        {movies && <MoviesList movies={movies} />}
      </>
    );
  }
}

export default MoviesPage;
