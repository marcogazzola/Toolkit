import './app.css';
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

const datalist = {
  TEMPERATURE: '40°',
  SENSOR: '123Khz',
  HUMIDITY: '45',
  CO2: '18.23857923750327',
};

export default class App extends Component {
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
    };
  }
  onItemClick() {
    alert ('onItemClick'); // eslint-disable-line
  }

  onTabSelect(index) {
    this.setState({ index });
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
          {/* <CustomModal onConfirm={this.closeModal} onClose={this.closeModal}/> */}
          {this.state.modal}
        </Modal>

        <Grid prefix="xs">
          <div>
            <H s={1} deco="light">myUIToolkit</H>
            <H s={3} deco="italic">Training React Advanced</H>
          </div>
          <div align="right">
            <br />
            <H s={6} deco="italic">Created by</H>
            <H s={4} deco="bolder">Marco Gazzola</H>
          </div>
        </Grid>
        <Separator padding={10} color="#ccc" />

        <Grid>
          <Card title="Form" description="Form styles and utilities">
            <input type="text" className="underline" placeholder="Write some text..." />
            <Separator padding={10} color="white" />
            <input type="range" className="light" />
            <Separator padding={10} color="white" />
            <div className="select_style">
              <select>
                <option value="">Select</option>
                <option value="">1</option>
              </select>
            </div>
            <Separator padding={10} color="white" />
            <input id="box1" type="checkbox" className="chk circle" checked />
            <label htmlFor="box1">Checkbox 1 </label>
            <input id="box3" type="checkbox" className="chk circle" />
            <label htmlFor="box3">Checkbox 3 </label>
            <input id="box2" type="checkbox" className="chk square" />
            <label htmlFor="box2">Checkbox 2</label>
          </Card>

          <Card title="<SimpleList />" description="List with custom template">
            <SimpleList data={[1, 2, 3]} template={ListSimpleTemplate} />
          </Card>

          <Card title="<SimpleList />" description="Another example of list">
            <SimpleList
              data={[{ label: 'A' }, { label: 'B' }]}
              template={ListComplexTemplate}
              actions={{ onItemClick: this.onItemClick }}
            />
          </Card>
        </Grid>

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


        <Grid>
          <Card title="<LoremText words='5'/>" description="Helper to create fake content">
            <LoremText />
            <LoremText words="5" />
            <LoremText chars="15" />
          </Card>

          <Card
            title="<Separator />"
            description="Separator Line with padding, color and other configuration options"
          >
            <Separator padding={10} color="#222" />
            <Separator padding={10} color="orange" />
            <Separator padding={40} color="red" />
            <Separator padding={10} color="green" />
            <Separator padding={10} color="brown" />

          </Card>
        </Grid>

        <Grid>
          <Card title="<FlatButton />">
            <FlatButton type="primary">Normal</FlatButton>
            <FlatButton type="primary" pill>Pill</FlatButton>
          </Card>

          <Card title="<FlatButtonGroup />">
            <FlatButtonGroup>
              <FlatButton
                type="primary"
                pill
                onClick={this.openModal} data-uid="111"
              >Open Modal</FlatButton>
              <FlatButton type="danger" pill>Another</FlatButton>
              <FlatButton pill>Another</FlatButton>
            </FlatButtonGroup>

            <Separator padding={10} color="white" />

          </Card>
          <Card title="<FlatButtonContainer />">
            <FlatButtonContainer>
              <FlatButtonGroup>
                <FlatButton type="primary" pill>GROUP A</FlatButton>
                <FlatButton type="danger" pill>GROUP A</FlatButton>
              </FlatButtonGroup>

              <FlatButtonGroup>
                <FlatButton type="primary">LEFT</FlatButton>
                <FlatButton type="danger">RIGHT</FlatButton>
              </FlatButtonGroup>
            </FlatButtonContainer>
          </Card>

        </Grid>

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


        <Card title="<Grid prefix='sm' />">
          <Grid>
            <div align="center">Left Box</div>
            <div align="center">Right Box</div>
          </Grid>
        </Card>

        <Card title="<Grid  prefix='md' />">
          <Grid prefix="md">
            <div padding={10} align="center"><LoremText chars="50" /></div>
            <div padding={10} align="center"><LoremText chars="50" /></div>
            <div padding={10} align="center" bg="red"><LoremText chars="50" /></div>
          </Grid>
        </Card>

        <Card>
          <FlatButton onClick={this.showCoords}>Show coords</FlatButton>
          <FlatButton onClick={this.setNewCoords}>Set coords</FlatButton>
          <GMap ref="map" coords={this.state.coords} />
        </Card>

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
