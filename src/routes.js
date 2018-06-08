import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';
import ManageMovie from './components/movies/ManageMovie';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="movies" component={Movies} />
    <Route path="movie" component={ManageMovie} />
    <Route path="movie/:id" component={ManageMovie} />
  </Route>
);
