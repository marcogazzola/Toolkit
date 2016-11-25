import './app.css';
import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {
  Hello, GMap, Modal, Grid, TabBar, DataTable, CollapsablePanel,
  LoremText, H, SimpleList, FlatButton, Card, Separator, FlatButtonGroup,
  FlatButtonContainer, Footer,
} from 'mg-react-ui-toolkit';

import BugList from './pages/BugList';
import HomePage from './pages/HomePage';
import NoMatch from './pages/NoMatch';
import PlayGround from './pages/PlayGround';
import Container from './Container';

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container} >
          <IndexRoute component={HomePage} />
          <Route path="/playground" component={PlayGround} />
          <Route path="/a" component={PlayGround} />
          <Route path="/BugList" component={BugList} />
          <Route path="*" component={NoMatch} />
        </Route>
      </Router>
    );
  }
}
