import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="movies" component={Movies} />
  </Route>
);
