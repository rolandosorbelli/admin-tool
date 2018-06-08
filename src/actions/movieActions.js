import movieApi from '../api/movieApi';

export function loadMoviesSuccess(movies) {
  return { type: 'LOAD_MOVIES_SUCCESS', movies };
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
