import React, { Component, PropTypes } from 'react';
import {
  Hello, GMap, Modal, Grid, TabBar, DataTable, CollapsablePanel,
  LoremText, H, SimpleList, FlatButton, Card, Separator, FlatButtonGroup, ImageButton,
  FlatButtonContainer, Footer, NavigationBar, NavigationItem } from 'mg-react-ui-toolkit';
import { browserHistory } from 'react-router';

import BugItem from './../components/BugItem';
import BugActions from './../actions/BugActions';

const datalist = [
  { id: 1, owner: 'Marco Gazzola', title: 'Bug 1', description: 'Bug 1 description', openDate: '2016-11-24T150:00:00Z' },
  { id: 2, owner: 'Marco Gazzola', title: 'Bug 2', description: 'Bug 2 description', openDate: '2016-11-22T150:00:00Z' },
  { id: 3, owner: 'Marco Gazzola', title: 'Bug 3', description: 'Bug 3 description', openDate: '2016-11-21T120:00:00Z' },
  { id: 4, owner: 'Marco Gazzola', title: 'Bug 4', description: 'Bug 4 description', openDate: '2016-11-24T160:00:00Z' },
];

class BugList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: datalist };
  }
  onItemClick(id) {
    console.log('click');
    let data = Object.assign([], this.state.data);
    const obj = this.state.data.filter(_obj => _obj.id === id)[0];
    obj.closed = true;
    const dataArray = [];
    dataArray.push(obj);
    data = Object.assign(dataArray, data);
    this.setState({ data });
  }
  render() {
    console.log('render');
    return (
      <div>
        <H s={4}>Lista bug</H>
        <SimpleList
          data={this.state.data}
          template={BugItem}
          actions={{ onItemClick: id => this.onItemClick(id) }}
        />
      </div>
    );
  }
}

BugList.propTypes = {

};

export default BugList;
