import React, { Component, PropTypes } from 'react';
import { FlatButton, FlatButtonGroup, H, LoremText } from 'mg-react-ui-toolkit';

export default class ModalCustomTpl extends Component {

  render() {
    return (
      <div>
        <div className="content">
          <H s={3}>Simple Modal</H>
          <LoremText words="300" />
        </div>
        <div className="uimodal_footer">
          <FlatButtonGroup>
            <FlatButton type="danger" onClick={this.props.onClose}>Cancel</FlatButton>
            <FlatButton type="primary" onClick={this.props.onConfirm}>Confirm</FlatButton>
          </FlatButtonGroup>
        </div>
      </div>

    );
  }
}

ModalCustomTpl.propTypes = {
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};

ModalCustomTpl.defaultProps = {
  onClose: {},
  onConfirm: {},
};
