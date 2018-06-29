import {combineReducers} from 'redux';
import movies from './movieReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
  movies,
  ajaxStatusReducer
});

export default rootReducer;
