import './../app.css';
import './custom-tabbar.css';

// import 'mg-react-ui-toolkit/styles/forms';
import React, { Component } from 'react';

import ListSimpleTemplate from './ui/ListSimpleTemplate';
import ListComplexTemplate from './ui/ListComplexTemplate';
import CustomModal from './ui/CustomModal';
import CustomModalWelcome from './ui/CustomModalWelcome';

import { Hello, GMap, Modal, Grid, TabBar, DataTable, CollapsablePanel,
        LoremText, H, SimpleList, FlatButton, Card, Separator, FlatButtonGroup,
        FlatButtonContainer, Footer } from 'mg-react-ui-toolkit';
import TvTypography from './tabViews/TvTypography';
import TvForm from './tabViews/TvForm';
import TvNavigation from './tabViews/TvNavigation';
import TvPanelGrid from './tabViews/TvPanelGrid';
import TvMaps from './tabViews/TvMaps';
import TvDataGrid from './tabViews/TvDataGrid';

const datalist = {
  TEMPERATURE: '40°',
  SENSOR: '123Khz',
  HUMIDITY: '45',
  CO2: '18.23857923750327',
};

export default class PlayGround extends Component {
  constructor(props) {
    super(props);
    this.onTabSelect = this.onTabSelect.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showCoords = this.showCoords.bind(this);
    this.setNewCoords = this.setNewCoords.bind(this);

    this.state = {
      index: 0,
      isOpened: true,
      modal: <CustomModalWelcome onClose={this.closeModal} />,
      coords: { lat: 43, lng: 12 },
      tabTpl: <TvTypography />,
    };
  }
  onItemClick() {
    alert ('onItemClick'); // eslint-disable-line
  }

  onTabSelect(index) {
    let tabTpl;
    switch (index) {
      case 5:
        tabTpl = <Card title="DataGrid"><TvDataGrid /></Card>;
        break;

      case 4:
        tabTpl = <Card title="Maps"><TvMaps /></Card>;
        break;

      case 3:
        tabTpl = <Card title="Panels & Grids"><TvPanelGrid /></Card>;
        break;

      case 2:
        tabTpl = <Card title="Navigation"><TvNavigation /></Card>;
        break;

      case 1:
        tabTpl = (<Card title="Form & Lists" description="Form & lists styles and utilities">
          <TvForm />
        </Card>);
        break;

      case 0:
        tabTpl = <Card title="Typography" description="Typography styles"><TvTypography /></Card>;
        break;

      default:
        tabTpl = (<Card
          title="default tab"
          description="Empty"
          style={{ backgroundColor: '#CCFFCC', border: '1px solid #ccc' }}
        />);
        break;
    }
    this.setState({ index, tabTpl });
  }

  setNewCoords() {
    this.setState({ coords: { lat: 44, lng: 11 } });
  }

  showCoords() {
    alert(`${this.refs.map.getCoords().lat()}, ${this.refs.map.getCoords().lng()}`); // eslint-disable-line
  }

  openModal() {
    this.setState({
      isOpened: true,
      modal: <CustomModal onConfirm={this.closeModal} onClose={this.closeModal} />,
    });
  }

  closeModal() {
    this.setState({ isOpened: false, modal: null });
  }

  render() {
    return (
      <div>
        <Modal open={this.state.isOpened} onBackDropClick={this.closeModal}>
          {this.state.modal}
        </Modal>

        <Grid prefix="xs">
          <div>
            <H s={1} deco="light">Playground UI Toolkit v2.0</H>
            <H s={3} deco="italic">ReactJs components</H>
          </div>
          <div align="right">
            <br />
            <H s={6} deco="italic">Created by</H>
            <H s={4} deco="bolder">Marco Gazzola</H>
          </div>
        </Grid>
        <Separator padding={10} color="#ccc" />
        <TabBar onTabSelect={this.onTabSelect} selectedIndex={this.state.index}>
          <div>Typography</div>
          <div>Form & Lists</div>
          <div>Navigation</div>
          <div>Panels & Grids</div>
          <div>Maps</div>
          <div>Data Grid</div>
          <div>Empty</div>
        </TabBar>
        <Separator padding={5} />
        {this.state.tabTpl}
        <Separator />

        <Grid>
          <Card title="DataTable" description="Generate a table from an object">
            <DataTable data={datalist} />
          </Card>
        </Grid>

        <Hello />
        <Footer
          appOwner="Created By Marco Gazzola"
          showCopyright
          className="hello title"
        />
      </div>
    );
  }
}
