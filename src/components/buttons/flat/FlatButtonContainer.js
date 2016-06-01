import React, { Component, PropTypes } from 'react';
import './flat-button.less';

export default class FlatButtonContainer extends Component {
  render() {
    return (
      <div className="actions button-container">
        {this.props.children}
      </div>
    );
  }
}

// PropTypes validation
FlatButtonContainer.propTypes = {
  children: React.PropTypes.array,
};
