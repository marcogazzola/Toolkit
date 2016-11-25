import React, { Component, PropTypes } from 'react';

// const Tpl = (props) => <div key={'item' + props.item}>
//   - {props.item}
// </div>;

export default class SimpleList extends Component {
  constructor(props) {
    super(props);
    this.renderDevice = this.renderDevice.bind(this);
  }
  renderDevice(item, index) {
    return React.createElement(this.props.template,
      {
        item,
        key: `c${index}${new Date().valueOf()}`,
        actions: this.props.actions, //(`c${index}${new Date().valueOf()}`),
      }, null);
  }

  render() {
    console.log('SimpleList',this.props.data);
    return (
      <div>
        {this.props.data.map((object, i) => this.renderDevice(object, i))}
      </div>
    );
  }
}

// PropTypes validation
SimpleList.propTypes = {
  template: PropTypes.any.isRequired,
  data: PropTypes.array,
  actions: PropTypes.funcion,
};

// default props
SimpleList.defaultProps = {
  data: [],
};
