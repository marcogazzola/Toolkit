import React, { Component, PropTypes } from 'react';
import { FlatButton, FlatButtonGroup, H, LoremText } from 'mg-react-ui-toolkit';

export default class CustomModalWelcome extends Component {

  render() {
    return (
      <div>
        <div className="content">
          <H s={3}>Welcome to the UI Toolkit</H>
          <H s={4} inline>A </H>
          <H s={4} inline deco="bold">smart</H>
          <H s={4} inline> and </H>
          <H s={4} inline deco="bold"> reusable </H>
          <H s={4} inline>library of React components</H>
        </div>
        <div className="uimodal_footer">
            <FlatButton type="danger" onClick={this.props.onClose}>CLOSE</FlatButton>
        </div>
      </div>

    );
  }
}

CustomModalWelcome.propTypes = {
  onClose: PropTypes.func,
};

CustomModalWelcome.defaultProps = {
  onClose: {},
};
