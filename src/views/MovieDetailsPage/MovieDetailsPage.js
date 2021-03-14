import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import api from '../../services/movies-api';
import routes from '../../routes';

import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';

class MovieDetailsPage extends Component {
  state = {
    poster: null,
    title: null,
    overview: null,
    genres: [],
    vote: null,

    cast: null,
    reviews: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const {
      poster_path,
      title,
      overview,
      genres,
      vote_average,
    } = await api.fetchMovieById(movieId);

    this.setState({
      poster: poster_path,
      title: title,
      overview: overview,
      genres: [...genres],
      vote: vote_average,
    });

    const { cast } = await api.fetchMovieCast(movieId);
    this.setState({ cast: cast });

    const reviews = await api.fetchMovieReview(movieId);
    this.setState({ reviews: reviews });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { poster, title, overview, genres, vote, cast, reviews } = this.state;
    const { url } = this.props.match;

    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>

        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />

        <h1>{title}</h1>
        <p>User score: {vote}</p>

        <h3>Overview</h3>
        <p>{overview}</p>

        <h3>Genres</h3>
        <p>{genres.map(({ name }) => name).join(' ')}</p>

        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to={`${url}/credits`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>

        <Route
          path={`${url}/credits`}
          render={props => {
            <Cast {...props} cast={cast} />;
          }}
        />

        <Route
          path={`${url}/reviews`}
          render={props => <Reviews {...props} reviews={reviews} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
