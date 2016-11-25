import React, { Component, PropTypes } from 'react';
import {
  Hello, GMap, Modal, Grid, TabBar, DataTable, CollapsablePanel,
  LoremText, H, SimpleList, FlatButton, Card, Separator, FlatButtonGroup, ImageButton,
  FlatButtonContainer, Footer, NavigationBar, NavigationItem } from 'mg-react-ui-toolkit';

import { browserHistory } from 'react-router';

class Container extends Component {
  render() {
    const contentData = [];
    contentData.push(<NavigationItem itemTitle="Playground UI Toolkit v2.0" itemUrl="/Playground" />);
    contentData.push(<NavigationItem itemTitle="Titolo 2" itemUrl="/b" />);
    contentData.push(<NavigationItem itemTitle="Titolo 3" />);
    return (
      <div>
        <NavigationBar AppName="MarcoGazzola.com" rightContent={contentData}>
          <NavigationItem itemTitle="Lista Bug" itemUrl="/BugList" active />
          <NavigationItem itemTitle="Left 2" itemUrl="/" />
        </NavigationBar>
        {this.props.children}
        <Footer appOwner="Created By Marco Gazzola" showCopyright textSize={5} />
      </div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
