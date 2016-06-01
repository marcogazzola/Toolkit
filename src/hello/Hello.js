import React, { Component, PropTypes } from 'react';
import './hello.less';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h3 className="hello title">Created by Marco Gazzola</h3>
      </div>
    );
  }
}


// PropTypes validation
Hello.propTypes = {};

// default props
Hello.defaultProps = {};
