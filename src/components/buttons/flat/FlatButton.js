import React, { Component, PropTypes } from 'react';
import './flat-button.less';
import { cn } from '../../../utils/dom.js';

export default class FlatButton extends Component {
  render() {
    const { children, type, pill } = this.props;
    const cls = cn('button', type, this.props.className, (pill) ? 'pill' : null);
    return (
      <a {...this.props} className={cls}>{children}</a>
    );
  }
}


// PropTypes validation
FlatButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'danger']),
  pill: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.any,
};

// default props
FlatButton.defaultProps = {};
