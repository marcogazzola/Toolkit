import React, { Component } from 'react';
import { Hello, GMap, Modal, Grid, TabBar, DataTable, CollapsablePanel,
        LoremText, H, SimpleList, FlatButton, Card, Separator, FlatButtonGroup,
        FlatButtonContainer, Footer } from 'mg-react-ui-toolkit';

export default class TvNavigation extends Component {
  constructor(props) {
    super(props);
    this.onTabSelect = this.onTabSelect.bind(this);

    this.state = {
      index: 0,
    };
  }

  onTabSelect(index) {
    this.setState({ index });
  }

  render() {
    return (
      <Grid>
        <Card title="<TabBar onSelect='...' />">
          <TabBar onTabSelect={this.onTabSelect} selectedIndex={this.state.index}>
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
          </TabBar>

          <TabBar
            onTabSelect={this.onTabSelect}
            selectedIndex={this.state.index}
            tabClass="tabbarcustom"
          >
            <div>Tab 1</div>
            <div>Tab 2</div>
            <div>Tab 3</div>
          </TabBar>
        </Card>
    </Grid>
      );
  }
}
