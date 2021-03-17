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
          <ul className="rewiews">
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p className="review-author">Author: {author}</p>
                <p className="review-content">{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3 className="rewiews">No reviews yet</h3>
        )}
      </>
    );
  }
}
