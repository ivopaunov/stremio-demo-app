import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function seriesReducer(state = initialState.series, action) { 
  switch (action.type) {
    case types.LOAD_SERIES_SUCCESS:
      return action.series;
 
    case types.UPDATE_SERIES_SUCCESS:
      return state.map((serie, index) => {
        if (serie.imdb_id === action.serie.imdb_id) {
          return  Object.assign({}, action.serie);
        }
        return serie;
      });

    default:
      return state;
  }
}
