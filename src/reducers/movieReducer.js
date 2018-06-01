export default function movieReducer(state = [], action) {
  switch(action.type) {
    case 'LOAD_MOVIES_SUCCESS':
      return action.movies;

      default:
        return state;
  }
}
