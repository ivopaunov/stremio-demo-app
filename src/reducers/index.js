import {combineReducers} from 'redux';
import series from './seriesReducer';
import movies from './moviesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  series,
  movies,
  ajaxCallsInProgress
});

export default rootReducer;
