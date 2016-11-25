import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BugApp from './reducers/index';

const rootElement = document.getElementById('app');
const store = createStore(BugApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
