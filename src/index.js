/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadSeries} from './actions/seriesActions';
import {loadMovies} from './actions/moviesActions';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'; 
import '../node_modules/toastr/build/toastr.min.css';


const store = configureStore();
store.dispatch(loadSeries());
store.dispatch(loadMovies());

//console.log(store.getState());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
