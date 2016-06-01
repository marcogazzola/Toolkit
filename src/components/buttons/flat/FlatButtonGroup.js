import React, { Component, PropTypes } from 'react';

import './flat-button.less';

export default class FlatButtonGroup extends Component {
  render() {
    return (
      <ul className="button-group minor-group">
        {this.props.children}
      </ul>
    );
  }
}


// PropTypes validation
FlatButtonGroup.propTypes = {
  children: PropTypes.array,
};
