import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../routes';

import AppBar from '../AppBar';

const HomePage = lazy(() =>
  import('../../views/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('../../views/MoviesPage' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../../views/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);

const App = () => (
  <>
    <AppBar />

    <Suspense fallback={<h1 className="home-title">Loading...</h1>}>
      <Switch>
        <Redirect from="/goit-react-hw-04-movies/" to={routes.home} />
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
