import React, { Component, PropTypes } from 'react';
import './heading.less';
import { cn } from '../../../utils/dom.js';

export default class H extends Component {
  constructor(props) {
    super(props);
  }
  renderSpan(headingCls) {
    const { children } = this.props;
    return <span {...this.props} className={headingCls}>{children}</span>;
  }

  renderDiv(headingCls) {
    const { children } = this.props;
    return <div {...this.props} className={headingCls}>{children}</div>;
  }

  render() {
    const { s, deco } = this.props;
    const headingCls = cn(
      'heading',
      `size${s}`,
      deco,
    );
    return this.props.inline ? this.renderSpan(headingCls) : this.renderDiv(headingCls);
  }
}

H.defaultProps = {
  s: 1,
};

H.propTypes = {
  s: PropTypes.oneOfType([
    PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
    PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  ]),
  deco: PropTypes.oneOf([
    'bold',
    'bolder',
    'light',
    'underline',
    'line-through',
    'italic',
  ]),
  inline: PropTypes.bool,
  children: PropTypes.any,
};
