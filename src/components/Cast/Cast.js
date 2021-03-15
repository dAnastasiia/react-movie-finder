import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cast extends Component {
  static propTypes = {
    cast: PropTypes.array.isRequired,
  };

  render() {
    const { cast } = this.props;

    const shouldRenderCast = cast.length;

    return (
      <>
        {shouldRenderCast > 0 ? (
          <ul>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>No actors</h3>
        )}
      </>
    );
  }
}
