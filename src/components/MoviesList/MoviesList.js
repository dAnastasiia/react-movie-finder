import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import routes from '../../routes';

const MoviesList = ({ movies, match, location }) => {
  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink
              to={{
                pathname: `${match.url}/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default withRouter(MoviesList);
