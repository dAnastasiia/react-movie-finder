import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Reviews extends Component {
  static propTypes = {
    reviews: PropTypes.array.isRequired,
  };

  render() {
    const { reviews } = this.props;
    const shouldRenderReviews = reviews.length;

    return (
      <>
        {shouldRenderReviews > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>No reviews yet</h3>
        )}
      </>
    );
  }
}
