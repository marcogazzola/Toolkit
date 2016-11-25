import React, { Component } from 'react';
import { Hello, GMap, Modal, Grid, TabBar, DataTable, CollapsablePanel,
  LoremText, H, SimpleList, FlatButton, Card, Separator, FlatButtonGroup,
  FlatButtonContainer, Footer } from 'mg-react-ui-toolkit';

export default class TvMaps extends Component {
  constructor(props) {
    super(props);
    this.showCoords = this.showCoords.bind(this);
    this.setNewCoords = this.setNewCoords.bind(this);

    this.state = {
      coords: { lat: 43, lng: 12 },
      zoom: 8,
    };
  }

  setNewCoords() {
    this.setState({ coords: { lat: 45.36767661215194, lng: 9.138876855373383 }, zoom: 16 });
  }

  showCoords() {
    alert(`${this.refs.map.getCoords().lat()}, ${this.refs.map.getCoords().lng()}`); // eslint-disable-line
  }

  render() {
    return (
      <Card>
        <FlatButton onClick={this.showCoords}>Show coords</FlatButton>
        <FlatButton onClick={this.setNewCoords}>Set coords</FlatButton>
        <GMap ref="map" draggable coords={this.state.coords} zoom={this.state.zoom}/>
      </Card>);
  }
}
