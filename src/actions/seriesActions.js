import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import stremio from '../stremio/addons';

/*eslint-disable no-console */

export function loadSeriesSuccess(series) {
  return { type: types.LOAD_SERIES_SUCCESS, series };
}

export function updateSeriesSuccess(serie) {
  return { type: types.UPDATE_SERIES_SUCCESS, serie };
}

export function loadSeries() {
  return function (dispatch, getState) {
    // console.log('load series');
    // console.log(getState().series);
    //dispatch(beginAjaxCall());
    stremio.stremioImdb.meta.find({ query: { type: "series" }, limit: 20 }, function (err, res) {

      if (err) {
        console.log(err);
      }

      // TODO: take a look at this mapping
      const mapped = res.map((serie, index) => {
        return Object.assign({}, serie, {
          checked: getState().series
            .find((ser) => {        
              return ((ser.imdb_id == serie.imdb_id) && (ser.checked == true ? true : false));
            }) ? true : false
        });
      });

      dispatch(loadSeriesSuccess(mapped));
    });
  };
}

export function toggleSeriesChecked(serie) {
  return function (dispatch, getState) {

    let copy = Object.assign({}, serie);
    copy.checked = (serie.checked === true ? false : true);
    dispatch(updateSeriesSuccess(copy));
  };
}
