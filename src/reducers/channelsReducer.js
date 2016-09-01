import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function channelsReducer(state = initialState.channels, action) { 
  
  switch (action.type) {
    case types.LOAD_CHANNELS_SUCCESS:
      return action.channels;

    case types.UPDATE_CHANNELS_SUCCESS:
      return state.map((channel, index) => {
        if (channel.yt_id === action.channel.yt_id) {
          return  Object.assign({}, action.channel);
        }
        return channel;
      });

    default:
      return state;
  }
}
