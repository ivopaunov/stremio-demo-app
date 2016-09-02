import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import stremio from '../stremio/addons';

/*eslint-disable no-console */

export function loadsChannelsSuccess(channels) {
  return { type: types.LOAD_CHANNELS_SUCCESS, channels };
}

export function updateChannelSuccess(channel) {
  return { type: types.UPDATE_CHANNELS_SUCCESS, channel };
}

export function loadChannels() {
  return function (dispatch, getState) {
    // console.log('load channel');
    // console.log(stremio);
    // dispatch(beginAjaxCall());

    stremio.stremioChannels.meta.find({ query: { type: "channel" }, limit: 20 }, function (err, res) {

     // console.log('res ');
      //console.log(res);

      if (err) {
       // console.log(err);
       // throw (err);
      }
      if (res && res.length > 0) {


        // TODO: take a look at this mapping
        const mapped = res.map((channel, index) => {
          return Object.assign({}, channel, {
            checked: getState().channels
            .find((cha) => {        
              return ((cha.yt_id == channel.yt_id) && (cha.checked == true ? true : false));
            }) ? true : false
          });
        });

       // console.log(mapped);

        dispatch(loadsChannelsSuccess(mapped));
      }
    });
  };
}

export function toggleChannelChecked(channel) {
  return function (dispatch, getState) {

    let copy = Object.assign({}, channel);
    copy.checked = (channel.checked === true ? false : true);
    dispatch(updateChannelSuccess(copy));
  };
}
