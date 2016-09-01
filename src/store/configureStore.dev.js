import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

const config = {
  key: "HucHUcDeiba" 
};

const enhancer = compose(
   applyMiddleware(thunk, reduxImmutableStateInvariant()),
   persistState()
);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhancer
    //applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
