export default function movieReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_MOVIE':
      return [...state,
      Object.assign({}, action.movie)
      ];

      default:
        return state;
  }
}
