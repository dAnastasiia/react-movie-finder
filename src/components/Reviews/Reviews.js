import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reviews extends Component {
  static propTypes = {
    reviews: PropTypes.array.isRequired,
  };

  render() {
    const { reviews } = this.props;
    const shouldRendeReviews = reviews.length;

    return (
      <>
        {shouldRendeReviews > 0 ? (
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

export default Reviews;
