import React, { Component, PropTypes } from 'react';
import {
  Hello, GMap, Modal, Grid, TabBar, DataTable, CollapsablePanel,
  LoremText, H, SimpleList, FlatButton, Card, Separator, FlatButtonGroup, ImageButton,
  FlatButtonContainer, Footer, NavigationBar, NavigationItem } from 'mg-react-ui-toolkit';
import { browserHistory } from 'react-router';

class NoMatch extends Component {
  render() {
    return (
      <div style={{ marginTop: 30 }}>
        <div className="col-xs-12 col-sm-6 col-sm-push-3">
          <div />
          <Card title="404 Page not found!">
            <H s={3}>La pagina cercata non esiste!</H>
            <div style={{ paddingTop: 20 }}>
              <ImageButton onClick={() => { browserHistory.push('/'); }} icon="fa-arrow-circle-left" label="Back to HomePage" />
            </div>
          </Card>
          <div />
        </div>
      </div>
    );
  }
}

NoMatch.propTypes = {

};

export default NoMatch;
