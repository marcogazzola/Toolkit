import React, { Component } from 'react';
import { Hello, GMap, Modal, Grid, TabBar, DataTable, CollapsablePanel,
  LoremText, H, SimpleList, FlatButton, Card, Separator, FlatButtonGroup,
  FlatButtonContainer, Footer } from 'mg-react-ui-toolkit';

export default class TvPanelGrid extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Card
            title="<CollapsablePanel />"
            description="A collapsable panel. Click on header to show content"
            >

            <CollapsablePanel title="TitleBar"> this is the body </CollapsablePanel>

            <Separator
              padding={10} color="white"
              />

            <CollapsablePanel
              title="TitleBar"
              titleCls="collapsable_custom_titleBar" bodyCls="collapsable_custom_body"
              > this is the body </CollapsablePanel>

            <Separator
              padding={10} color="white"
              />

          </Card>
        </Grid>
        <Grid>
          <Card title="<Grid prefix='sm' />">
            <Grid>
              <div align="center">Left Box</div>
              <div align="center">Right Box</div>
            </Grid>
          </Card>
        </Grid>
        <Grid>
          <Card title="<Grid  prefix='lg' />">
            <Grid prefix="lg">
              <div padding={10} align="center"><LoremText chars="50" /></div>
              <div padding={10} align="center"><LoremText chars="50" /></div>
              <div padding={10} align="center" bg="red"><LoremText chars="50" /></div>
            </Grid>
          </Card>

        </Grid>
      </div>
    );
  }
}
