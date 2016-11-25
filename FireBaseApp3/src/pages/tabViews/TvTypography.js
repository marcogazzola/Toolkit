import React, { Component } from 'react';
import { Grid, H, Card, Separator, LoremText } from 'mg-react-ui-toolkit';

export default class TvTypography extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Card title="<H />" description="Text styles and utilities">
            <H s={1} deco="light">My Text H1</H>
            <H s={2} deco="light">My Text H2</H>
            <H s={3} deco="light">My Text H3</H>
            <H s={4} deco="light">My Text H4</H>
            <H s={5} deco="light">My Text H5</H>
            <H s={6} deco="light">My Text H6</H>
            <H s={1} deco="bold">My Text H1 bold</H>
            <H s={3} deco="bold">My Text H3 bold</H>
          </Card>
          <Card title="<H s={1} deco='light' />" description="Support decorations">
            <H s={4} deco="light">light</H>
            <H s={4} deco="bold">bold</H>
            <H s={4} deco="bolder">bolder</H>
            <H s={4} deco="underline">underline</H>
            <H s={4} deco="line-through">line-through</H>
            <H s={4} deco="italic">italic</H>
            <H s={4} style={{ color: 'orange' }}>Customized</H>
            <H s={4} style={{ backgroundColor: 'yellow' }}>Customized</H>

            <Separator padding={10} color="#ccc" />

            <H s={2} deco="light">Inline</H>

            <H s={4} inline deco="light">light </H>
            <H s={4} inline deco="bold">bold </H>
            <H s={4} inline deco="bolder">bolder </H>
            <H s={4} inline deco="underline">underline </H>
            <H s={4} inline deco="line-through">line-through </H>
            <H s={4} inline deco="italic">italic </H>
            <H s={4} inline style={{ color: 'orange' }}>Customized </H>
            <H s={4} inline style={{ backgroundColor: 'yellow' }}>Customized </H>
          </Card>
        </Grid>
        <Grid>
          <Card title="LoremText">
            <Card title="<LoremText />" description="Helper to create fake content">
              <LoremText />
            </Card>
            <Card title="<LoremText words='15'/>" description="Helper to create fake content">
              <LoremText words="15" />
            </Card>
            <Card title="<LoremText chars='15'/>" description="Helper to create fake content">
              <LoremText chars="15" />
            </Card>
          </Card>
        </Grid>
      </div>
      );
  }
}
