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
    // return <Tpl key={'item' + item} item={item}/>;
    // return React.createElement(Tpl, { item, key: `c${item}` }, item);
    return React.createElement(this.props.template,
      {
        item,
        key: `c${index}${new Date().valueOf()}`,
        actions: this.props.actions,
      }, null);
  }

  render() {
    return (
      <div>
        {this.props.data.map(this.renderDevice)}
      </div>
    );
  }
}


// PropTypes validation
SimpleList.propTypes = {
  template: PropTypes.any.isRequired,
  data: PropTypes.array,
  actions: PropTypes.object,
};

// default props
SimpleList.defaultProps = {
  data: {},
  actions: {},
};
