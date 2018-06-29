import movieApi from '../api/movieApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadMoviesSuccess(movies) {
  return { type: 'LOAD_MOVIES_SUCCESS', movies };
}

export function createMovieSuccess(movie) {
  return { type: 'CREATE_MOVIE_SUCCESS', movie};
}

export function updateMovieSuccess(movie) {
  return { type: 'UPDATE_MOVIE_SUCCESS', movie};
}

export function loadMovies() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return movieApi.getAllMovies().then(movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveMovie(movie) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return movieApi.saveMovie(movie).then(savedMovie => {
      movie.id ? dispatch(updateMovieSuccess(savedMovie)) :
      dispatch(createMovieSuccess(savedMovie));
    }).catch(error => {
      throw(error);
    });
  };
}
