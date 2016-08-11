import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import $ from 'jquery';
import {TweenMax} from "gsap";

//components
import Menu from './components/Menu';
import Home from './components/Home';
import Work from './components/Work';
import routes from './routes';


import reducers from './reducers';

let store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}></Router>
  </Provider>
  , document.getElementById('app'));
