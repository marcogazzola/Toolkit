import React, { Component } from 'react';
import { Hello, GMap, Modal, Grid, TabBar, DataTable, CollapsablePanel,
  LoremText, H, SimpleList, FlatButton, Card, Separator, FlatButtonGroup,
  FlatButtonContainer, Footer } from 'mg-react-ui-toolkit';
import ListSimpleTemplate from './../ui/ListSimpleTemplate';
import ListComplexTemplate from './../ui/ListComplexTemplate';
import ListImageTemplate from './../ui/ListImageTemplate';
import CustomModal from './../ui/CustomModal';
import CustomModalWelcome from './../ui/CustomModalWelcome';

export default class TvForm extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      isOpened: false,
      modal: <CustomModal onConfirm={this.closeModal} onClose={this.closeModal} />,
    };
  }
  onItemClick() {
    alert('onItemClick'); // eslint-disable-line
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
            <input id="box1" type="checkbox" className="chk circle" defaultChecked />
            <label htmlFor="box1">Checkbox 1 </label>
            <input id="box3" type="checkbox" className="chk circle" />
            <label htmlFor="box3">Checkbox 3 </label>
            <input id="box2" type="checkbox" className="chk square" />
            <label htmlFor="box2">Checkbox 2</label>
          </Card>

          <Card title="<SimpleList />" description="List with custom template">
            <SimpleList data={[1, 2, 3]} template={ListSimpleTemplate} />
          </Card>

          <Card title="<ListComplexTemplate />" description="Another example of list">
            <SimpleList
              data={[{ label: 'A' }, { label: 'B' }]}
              template={ListComplexTemplate}
              actions={{ onItemClick: this.onItemClick }}
              />
          </Card>
        </Grid>
        <Grid>
          <Card title="<ListImageTemplate />" description="Another example of list">
            <SimpleList
              data={[{ text: 'Pippo', src:'//az594751.vo.msecnd.net/cdn/LinkedIn.svg' }, { text: 'pluto', src:'//az594751.vo.msecnd.net/cdn/Adobe.svg' }]}
              template={<ListImageTemplate />}
              />
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
          <Card
            title="<Separator />"
            description="Separator Line with padding, color and other configuration options"
            >
            <H s={4}>padding={10} color="#222"</H>
            <Separator padding={10} color="#222" />
            <H s={4}>padding={10} color="orange"</H>
            <Separator padding={10} color="orange" />
            <H s={4}>padding={40} color="red"</H>
            <Separator padding={40} color="red" />
            <H s={4}>padding={10} color="green"</H>
            <Separator padding={10} color="green" />
            <H s={4}>padding={10} color="brown"</H>
            <Separator padding={10} color="brown" />

          </Card>
        </Grid>
      </div>
    );
  }
}
