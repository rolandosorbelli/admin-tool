export default function movieReducer(state = [], action) {
  switch(action.type) {
    case 'LOAD_MOVIES_SUCCESS':
    return action.movies;

    case 'CREATE_MOVIE_SUCCESS':
    return [
      ...state,
      Object.assign({}, action.movie)
    ];

    case 'UPDATE_MOVIE_SUCCESS':
    return [
      ...state.filter(movie => movie.id !== action.movie.id),
      Object.assign({}, action.movie)
    ];

    default:
    return state;
  }
}
