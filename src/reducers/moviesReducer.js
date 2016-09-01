import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function moviesReducer(state = initialState.movies, action) { 
  
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return action.movies;

    case types.UPDATE_MOVIES_SUCCESS:
      return state.map((movie, index) => {
        if (movie.imdb_id === action.movie.imdb_id) {
          return  Object.assign({}, action.movie);
        }
        return movie;
      });

    default:
      return state;
  }
}
