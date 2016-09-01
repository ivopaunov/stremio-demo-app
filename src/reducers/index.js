import {combineReducers} from 'redux';
import series from './seriesReducer';
import movies from './moviesReducer';
import channels from './channelsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  series,
  movies,
  channels,
  ajaxCallsInProgress
});

export default rootReducer;
