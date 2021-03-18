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

    cast: [],
    reviews: [],
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
    this.setState({ cast: [...cast] });

    const reviews = await api.fetchMovieReview(movieId);
    this.setState({ reviews: [...reviews] });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { poster, title, overview, genres, vote, cast, reviews } = this.state;
    const { url } = this.props.match;

    const { from } = this.props.location.state;

    return (
      <>
        <button
          type="button"
          onClick={this.handleGoBack}
          className="go-back-button"
        >
          Go back
        </button>

        <div className="movie">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={title}
            className="poster"
          />

          <div className="movie-info">
            <h1 className="movie-info__title">{title}</h1>
            <p>User score: {vote}</p>

            <h3 className="movie-info__title">Overview</h3>
            <p>{overview}</p>

            <h3 className="movie-info__title">Genres</h3>
            <p>{genres.map(({ name }) => name).join(' ')}</p>
          </div>
        </div>

        <div className="movie-add-info">
          <h2 className="movie-info__title">Additional information</h2>
          <ul className="movie-info-list">
            <li>
              <NavLink
                to={{
                  pathname: `${url}/credits`,
                  state: {
                    from: from,
                  },
                }}
                className="movie-info-item"
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/rewiews`,
                  state: {
                    from: from,
                  },
                }}
                className="movie-info-item"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

        <Route
          path={`${url}/credits`}
          render={props => <Cast {...props} cast={cast} />}
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
