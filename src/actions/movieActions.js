import movieApi from '../api/movieApi';

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
    return movieApi.getAllMovies().then(movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveMovies(movie) {
  return function (dispatch, getState) {
    return movieApi.saveMovies(movie).then(savedMovie => {
      movie.id ? dispatch(updateMovieSuccess(savedMovie)) :
      dispatch(createMovieSuccess(savedMovie));
    }).catch(error => {
      throw(error);
    });
  };
}
