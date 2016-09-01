import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import stremio from '../stremio/addons';

/*eslint-disable no-console */

export function loadMoviesSuccess(movies) {
  return { type: types.LOAD_MOVIES_SUCCESS, movies };
}

export function updateMovieSuccess(movie) {
  return { type: types.UPDATE_MOVIES_SUCCESS, movie };
}

export function loadMovies() {
  return function (dispatch, getState) {
    // console.log('load movies');
    // console.log(getState().movies);
    //dispatch(beginAjaxCall());
    stremio.meta.find({ query: { type: "movie" }, limit: 20 }, function (err, res) {

   console.log('load movies');
   console.log(res);
      if (err) {
           console.log(err);
        throw (err);
      }

      // TODO: take a look at this mapping
      const mapped = res.map((movie, index) => {
        return Object.assign({}, movie, {
          checked: getState().movies
            .find((mov) => {        
              return ((mov.imdb_id == movie.imdb_id) && (mov.checked == true ? true : false));
            }) ? true : false
        });
      });

      dispatch(loadMoviesSuccess(mapped));
    });
  };
}

export function toggleMovieChecked(movie) {
  return function (dispatch, getState) {

    let copy = Object.assign({}, movie);
    copy.checked = (movie.checked === true ? false : true);
    dispatch(updateMovieSuccess(copy));
  };
}
